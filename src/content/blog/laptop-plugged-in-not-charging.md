---
title: "Laptop Plugged In but Not Charging? 9 Fixes That Work"
description: "Laptop says 'plugged in, not charging'? Check battery limit settings, the charger, USB-C wattage and drivers with these step-by-step fixes for Windows and Mac."
pubDate: 2026-11-11
category: pc-laptops
subcategory: laptop-battery-and-charging
tags: [laptop, battery, charging, windows, mac, usb-c]
difficulty: easy
time: 5–20 min
risk: low
tools: [Your laptop's original charger]
symptoms:
  - { label: "Stops at 60% or 80%", to: "1-check-whether-a-charge-limit-is-turned-on" }
  - { label: "Says “slow charger”", to: "3-use-a-charger-with-enough-wattage" }
  - { label: "USB-C charger does nothing", to: "4-use-the-right-usb-c-port" }
  - { label: "Plugged in, not charging (Windows)", to: "6-reinstall-the-battery-driver-windows" }
  - { label: "Battery drains fast / old laptop", to: "9-check-battery-health" }
faq:
  - q: "Why does my laptop stop charging at 80%?"
    a: "Most likely a battery-saving setting is on. Lenovo, Dell, HP, ASUS and Apple all offer features that cap charging at around 60–80% to extend battery life. It's normal, and you can turn it off in the manufacturer's app or battery settings."
  - q: "Can I use a phone charger to charge a USB-C laptop?"
    a: "Sometimes, but slowly or not at all. Laptops usually need 45–100 W. A 20–30 W phone charger may only slow the drain or show 'slow charger' warnings. Use a charger that matches your laptop's rated wattage."
  - q: "How do I check my laptop battery health?"
    a: "On Windows, open Command Prompt and run 'powercfg /batteryreport', then open the HTML file it creates and compare 'Full charge capacity' to 'Design capacity'. On a Mac, go to System Settings > Battery and check Battery Health."
  - q: "Is it bad to keep my laptop plugged in all the time?"
    a: "Modern laptops manage this well, especially with a charge limit or optimized charging turned on. Keeping the battery cool matters more than unplugging."
---

"Plugged in, not charging" usually has a simple cause: a **battery-saving setting**, a **charger that isn't powerful enough**, a **loose connection**, or a **driver glitch**. Work through these fixes in order — the quick ones come first.

## 1. Check whether a charge limit is turned on

If your laptop stops at a fixed level like 60% or 80%, it's probably not broken. Many laptops include a feature that caps charging to slow battery wear.

| Brand | Where to look |
| --- | --- |
| Lenovo | Lenovo Vantage → Power → **Conservation Mode** / Battery Charge Threshold |
| Dell | Dell Optimizer or Dell Power Manager → **Battery Settings** (Primarily AC Use / Custom) |
| HP | BIOS → **Adaptive Battery Optimizer**, or HP's power utility on some models |
| ASUS | MyASUS → Customization → **Battery Health Charging** |
| Microsoft Surface | UEFI → Boot configuration → **Battery limit** mode |
| Mac | System Settings → Battery → **Optimized Battery Charging** (may pause at 80%) |

Turn the limit off (or pick "full charge") if you need 100% today. Many people leave it on for longer battery life.

## 2. Check the basics

- **Plug the charger directly into a wall outlet**, not a power strip, and try a different outlet.
- **Reseat both ends** of the cable — the brick connection on two-part chargers often works loose.
- **Look for a charger LED.** No light on a charger that has one usually means a dead adapter or cable.
- Inspect the cable for kinks, fraying or a bent connector.

## 3. Use a charger with enough wattage

Every laptop needs a minimum power level — typically **45 W to 100 W**, and more for gaming laptops. A lower-wattage charger may keep the laptop running without charging the battery, especially under load.

- Check your laptop's original charger or the label on the bottom for the required watts.
- Windows may show **"Slow charger"** or a warning in the manufacturer's app.
- With **USB-C**, both the charger and the cable must support enough power. Many cheap cables are limited to 60 W.

## 4. Use the right USB-C port

On many laptops, only **some** USB-C ports accept power. Look for a small charging or lightning-bolt icon next to the port, or check the manual. Try each USB-C port in turn.

## 5. Do a power reset

This clears temporary power-controller glitches.

1. Shut down the laptop and unplug the charger.
2. Disconnect all USB devices.
3. **Hold the power button for 15–30 seconds.**
4. Plug the charger back in, wait a minute, then turn the laptop on.

Some laptops have a tiny **battery reset pinhole** on the bottom — check your manual.

**Mac with an Intel chip:** reset the SMC (System Management Controller) using Apple's steps for your model. **Apple silicon Macs** (M1 and later): simply shut down, wait 30 seconds, and restart.

## 6. Reinstall the battery driver (Windows)

A corrupted battery driver is a classic cause of "plugged in, not charging."

1. Right-click **Start** → **Device Manager**.
2. Expand **Batteries**.
3. Right-click **Microsoft ACPI-Compliant Control Method Battery** → **Uninstall device**. (Don't remove the "AC Adapter" entry.)
4. Restart the laptop. Windows reinstalls the driver automatically.

## 7. Let it cool down

Laptop batteries stop charging when they're too hot, to protect themselves. If the laptop is warm — on a bed, in sunlight, or running a game — let it cool, give the vents space, and try again.

## 8. Update BIOS and power software

Laptop makers regularly fix charging bugs through BIOS/firmware updates. Run **Lenovo Vantage, Dell SupportAssist, HP Support Assistant, MyASUS**, or **Windows Update** (including optional updates). On a Mac, install the latest macOS from **System Settings → General → Software Update**.

## 9. Check battery health

Batteries wear out. Most laptop batteries are designed to keep a large share of their original capacity for several hundred charge cycles, then decline.

**Windows:**

1. Open **Command Prompt**.
2. Run `powercfg /batteryreport`.
3. Open the HTML file it creates and compare **Full Charge Capacity** with **Design Capacity**.

**Mac:** **System Settings → Battery** → click the info button next to Battery Health. "Service Recommended" means it's time for a replacement.

If capacity is well below design, or Windows shows **"Consider replacing your battery,"** a new battery is the fix.

## When to get it repaired

Stop using the laptop and get it checked by an authorized service center if:

- The battery is **swollen** — the case bulges, the trackpad lifts, or the lid won't close flat.
- The charging port is loose, burnt or damaged.
- It won't charge with a known-good charger after all the steps above.

A swollen lithium-ion battery is a fire risk. Don't press on it or try to puncture it.
