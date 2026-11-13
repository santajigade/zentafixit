"""Build src/data/pins.json: the date each guide's Pinterest pin is released to the RSS feed.

Order: most popular (estimated US search demand) first, then round-robin across categories,
4 pins a day starting on START. Guides that are already scheduled keep their date; new guides
added later are NOT added here (they are pinned the day after they go live, see src/lib/pins.ts).

Usage: python3 tools/pins-schedule.py [START_YYYY-MM-DD]   (rewrites the file only if it does not exist yet,
or with --force to rebuild the whole schedule)
"""
import sys, os, re, json, glob, datetime

PER_DAY = 4
START = next((a for a in sys.argv[1:] if re.fullmatch(r'\d{4}-\d{2}-\d{2}', a)), None)
FORCE = '--force' in sys.argv
OUT = 'src/data/pins.json'

# Categories in order of their strongest topic, then each category's guides by estimated popularity.
POPULAR = {
    'hvac': ['ac-running-not-cooling', 'ac-not-turning-on', 'furnace-blowing-cold-air', 'ac-unit-freezing-up', 'furnace-not-turning-on',
             'heat-pump-blowing-cold-air', 'ac-leaking-water-inside', 'how-often-change-furnace-filter', 'heat-pump-not-heating',
             'thermostat-wire-colors', 'furnace-blinking-light-codes', 'ac-maintenance-checklist'],
    'appliances': ['dryer-not-heating', 'refrigerator-not-cooling-freezer-works', 'washer-wont-drain', 'ice-maker-not-working',
                   'dishwasher-not-draining', 'washer-not-spinning', 'no-hot-water', 'oven-not-heating', 'dishwasher-not-cleaning',
                   'refrigerator-leaking-water', 'water-heater-leaking', 'refrigerator-making-noise', 'washing-machine-shaking',
                   'microwave-not-heating', 'how-to-read-appliance-error-codes'],
    'phones-tablets': ['iphone-not-charging', 'iphone-wont-turn-on', 'iphone-storage-full', 'bluetooth-wont-connect',
                       'android-battery-draining-fast', 'iphone-overheating', 'android-phone-overheating'],
    'pc-laptops': ['laptop-plugged-in-not-charging', 'windows-11-black-screen', 'computer-running-slow-windows', 'blue-screen-of-death',
                   'windows-11-update-stuck', 'laptop-overheating', 'wifi-not-showing-windows-11', 'mac-running-slow',
                   'update-drivers-windows-11', 'laptop-ssd-upgrade'],
    'networking': ['wifi-connected-no-internet', 'how-to-reset-router', 'internet-keeps-disconnecting', 'modem-lights-meaning',
                   'wifi-slow-on-one-device', 'wifi-extender-vs-mesh', 'ethernet-not-working', 'mesh-wifi-placement', 'secure-home-wifi-router'],
    'electrical': ['gfci-outlet-keeps-tripping', 'breaker-keeps-tripping', 'outlet-not-working', 'how-to-reset-gfci-outlet',
                   'light-switch-not-working', 'ceiling-fan-not-working', 'breaker-wont-reset', 'how-to-replace-an-outlet',
                   'led-lights-flicker-on-dimmer', 'portable-generator-wont-start', 'gfci-afci-requirements', 'whole-house-surge-protector'],
    'plumbing': ['toilet-keeps-running', 'clogged-sink-drain', 'garbage-disposal-not-working', 'low-water-pressure', 'leaky-faucet',
                 'toilet-wont-flush', 'low-water-pressure-shower', 'sump-pump-not-turning-on', 'running-water-sound-in-walls',
                 'water-softener-not-working'],
    'tv-audio': ['tv-no-signal-hdmi', 'tv-wont-turn-on', 'smart-tv-wont-connect-wifi', 'soundbar-no-sound', 'roku-not-working',
                 'streaming-keeps-buffering', 'hdmi-arc-vs-earc'],
    'smart-home': ['alexa-not-responding', 'smart-thermostat-not-connecting-to-wifi', 'video-doorbell-offline', 'thermostat-blank-screen',
                   'smart-plug-wont-connect', 'smart-lock-not-working', 'smart-home-routines-not-working', 'matter-device-wont-pair'],
    'gadgets': ['printer-offline', 'printer-not-printing', 'monitor-no-signal', 'keyboard-not-working', 'external-drive-not-showing-up',
                'microphone-not-working-windows-11', 'controller-stick-drift'],
    'home-safety': ['smoke-detector-chirping', 'power-outage-checklist', 'outlet-warm-hot', 'how-to-use-fire-extinguisher'],
    'solar-power': ['electric-bill-suddenly-high', 'what-size-power-station-do-i-need', 'phantom-power-standby', 'ups-beeping',
                    'solar-panels-low-output', 'home-battery-backup-runtime'],
    'tools': ['how-to-test-an-outlet-with-a-multimeter', 'non-contact-voltage-tester', 'drill-battery-not-charging', 'homeowner-tool-kit'],
    'ev-charging': ['level-1-vs-level-2-charging', 'ev-home-charging-cost', 'home-ev-charger-not-charging', 'level-2-charger-installation',
                    'nema-14-50-vs-hardwired'],
}

def guides():
    out = {}
    for f in glob.glob('src/content/blog/*.md'):
        s = open(f, encoding='utf-8').read()
        if not re.search(r'^reviewedDate:', s, re.M) or re.search(r'^draft:\s*true', s, re.M):
            continue  # only published guides
        cat = re.search(r'^category:\s*(\S+)', s, re.M).group(1)
        out.setdefault(cat, []).append(os.path.basename(f)[:-3])
    return out

def main():
    if os.path.exists(OUT) and not FORCE:
        print(f'{OUT} exists; use --force to rebuild'); return
    start = datetime.date.fromisoformat(START) if START else datetime.date.today() + datetime.timedelta(days=1)
    have = guides()
    lists = []
    for cat in list(POPULAR) + sorted(set(have) - set(POPULAR)):
        slugs = have.get(cat, [])
        ordered = [s for s in POPULAR.get(cat, []) if s in slugs] + sorted(s for s in slugs if s not in POPULAR.get(cat, []))
        if ordered: lists.append([f'{cat}/{s}' for s in ordered])
    order = []
    while any(lists):
        for l in lists:
            if l: order.append(l.pop(0))
    sched = {pid: (start + datetime.timedelta(days=i // PER_DAY)).isoformat() for i, pid in enumerate(order)}
    with open(OUT, 'w') as f:
        f.write('{\n' + ',\n'.join(f'"{k}": "{v}"' for k, v in sched.items()) + '\n}\n')
    print(f'{len(sched)} pins scheduled, {PER_DAY} a day, {order[0]} first on {start}, last on {max(sched.values())}')

main()
