---
title: "Best Way to Keep Wi-Fi On During a Power Outage"
description: "Keep your Wi-Fi running in a power outage: what needs backup power, UPS vs DC mini UPS vs power station, and how to size it for hours of runtime."
pubDate: 2026-11-15
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-15
category: solar-power
subcategory: ups
tags: [ups, wifi, router, modem, power outage, battery backup, power station]
image: { src: /images/featured/ups-for-wifi-router.webp, alt: "Illustration of a Wi-Fi router and modem plugged into a small battery backup unit" }
fixcheck: false
difficulty: easy
time: 15 to 30 min
risk: low
tools: [Plug-in power meter (optional), Flashlight for reading adapter labels, Phone with hotspot (fallback)]
symptoms:
  - { label: "What needs backup power?", to: "what-needs-power-to-keep-wi-fi-on" }
  - { label: "How much does my router use?", to: "1-find-out-how-much-power-your-network-gear-uses" }
  - { label: "Which backup should I buy?", to: "which-option-fits-you" }
  - { label: "How long will it last?", to: "6-work-out-your-runtime" }
  - { label: "Power is on but no internet", to: "internet-still-down-on-backup-power" }
faq:
  - q: "Will a UPS keep my Wi-Fi on during a power outage?"
    a: "Yes, if your modem (or fiber ONT), router and any mesh nodes are all plugged into the UPS battery outlets. Your internet only keeps working if your provider's equipment in the neighborhood also has power, which you can't control."
  - q: "How long will a UPS run a router and modem?"
    a: "It depends on the battery size and how many watts your gear draws. Divide the battery's usable watt-hours by the load in watts. Small UPS units often run a light network load for an hour or more, but check the maker's runtime chart for your exact load."
  - q: "Do I need a pure sine wave UPS for a router?"
    a: "Usually not. Routers and modems run from small power adapters that generally work fine on the stepped or simulated sine output many budget UPS units give on battery. Pure sine is nice to have, not a must for this load."
  - q: "What is a DC mini UPS for a router?"
    a: "It's a small battery pack that sits between your router's power adapter and the router, and outputs DC power directly, often 12 V through a barrel plug. It skips the AC conversion, so it's efficient. The output voltage, plug size, polarity and amp rating must match your device."
  - q: "Can I use my phone as a backup for Wi-Fi?"
    a: "Yes. A phone hotspot shares your cellular data with laptops and tablets. Cell towers often stay up in short outages, but heavy use drains your phone battery and data plan, so keep a charged power bank handy."
---

When the power goes out, your Wi-Fi dies because the boxes that make it need electricity. To keep it running, you need to power **every box on the path**: the **modem or fiber ONT**, the **router**, and any **mesh nodes or PoE switch**. Even then, your internet only works if your provider's equipment down the street still has power.

The best fit for most homes is a **small UPS** or a **DC mini UPS** for short outages, and a **portable power station** if outages run for hours. The trick is sizing it from your gear's real wattage, not guesses.

<figure><img src="/images/posts/ups-for-wifi-router-power-path.svg" alt="Diagram of the data path from the ISP network to the modem or ONT, then the router, then mesh nodes. A battery backup fed from the wall outlet powers the modem, router and mesh nodes. The ISP network is outside your control and may also lose power." width="640" height="420" loading="lazy" /><figcaption>Every box after the ISP needs battery power. The ISP side is out of your hands.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug your modem or ONT, router and mesh nodes into a battery backup. Add up their watts from the adapter labels or a plug-in meter, then estimate runtime as battery Wh times efficiency divided by load watts. A small UPS covers short outages, a power station covers longer ones.</p></div>

> **Safety first:** Use batteries and power stations as the maker intends and keep them dry and ventilated. Don't plug a UPS into a power strip or another UPS, and don't wire anything into your home's circuits yourself. Run gas generators outdoors only, well away from windows and doors.

## What needs power to keep Wi-Fi on

Walk through your setup and list each box. You need all of them on backup power:

1. **The modem, gateway or fiber ONT.** This is the box your provider's cable or fiber line plugs into. A gateway is a modem and router in one box.
2. **The router**, if it's separate from the modem.
3. **Mesh nodes or extenders** in other rooms. A node without power leaves that part of the house without Wi-Fi.
4. **A PoE switch or PoE injector**, if your access points get power over their Ethernet cable.
5. **A fiber ONT battery unit**, if you have one. On some fiber installs, the ONT has its own battery backup unit, often meant mainly to keep phone service working. Ask your provider what it covers before relying on it.

If you're not sure which box is which, the [guide to modem lights](/networking/modem-lights-meaning/) helps you identify the gear.

## 1. Find out how much power your network gear uses

Every power adapter has a label. Look for the **output** line, written like "12V 1.5A". Multiply volts by amps to get the **maximum** watts: 12 x 1.5 = 18 W. Don't use the input line (such as 100 to 240 V, 0.5 A), which isn't the actual draw.

**Fix:**

- Write down the output watts for each box and add them up. That's your worst-case load.
- Real draw is usually lower than the label maximum. Small routers are often in the range of about 10 to 20 W, but check your own.
- For a real number, plug the adapters into a **plug-in power meter** for a few minutes during normal use and note the watts.
- Gear powered over PoE counts too. Measure at the PoE switch or injector, which includes the devices it feeds.

## 2. Small UPS (standby or line-interactive)

A desktop UPS plugs into the wall and gives you a few battery outlets. When power drops, it switches to battery in a fraction of a second, fast enough that the router doesn't reboot.

- **Standby** (offline) units are the simplest and cheapest. They pass wall power through and switch to battery when it fails.
- **Line-interactive** units also correct mild voltage sags and surges without using the battery, which helps if your lights often dim. This [comparison of UPS types](https://www.instrumentationblog.in/ups-topology-comparison/) explains the difference.
- **Pure sine output** is optional for network gear. Router and modem adapters generally run fine on the stepped output many budget units give.

**Fix:** Check that your gear goes into the outlets marked **battery** (some outlets are surge-only). A [UPS sizing calculator](https://zentacalculator.com/electrical/ups-sizing/) helps you check the VA and watt ratings, but for network gear the battery size matters more than the rating.

## 3. DC mini UPS for routers

A DC mini UPS is a small battery pack that sits between the power adapter and the router. It outputs DC directly, often **12 V through a barrel plug**, sometimes also 5 V USB or 9 V. There's no AC conversion, so little power is wasted.

**Fix:** Before you buy, check all four against your device's adapter label:

1. **Voltage**: the output must match exactly (12 V gear needs 12 V).
2. **Plug size**: barrel plugs come in different sizes, such as 5.5 x 2.1 mm and 5.5 x 2.5 mm.
3. **Polarity**: most are center positive, but confirm the symbol on your label.
4. **Amps**: the mini UPS output must be rated at or above what the device draws.

Capacity is often listed in mAh at the cell voltage. To get watt-hours, multiply by that voltage: 10,000 mAh at 3.7 V is 10 x 3.7 = 37 Wh.

## 4. Portable power station

A power station is a large battery with AC outlets, USB ports and often a 12 V DC port. It gives far more runtime than a desktop UPS and can charge phones too.

**Fix:**

- If you want it to take over automatically, check its spec for a **UPS or pass-through mode** and its **switchover time**. Not all models switch fast enough to keep a router from rebooting.
- The AC inverter uses some power just being on. Using the **12 V DC port** with a matching cable is more efficient where your gear allows it.
- For help picking a size, see [what size power station you need](/solar-power/what-size-power-station-do-i-need/).

## 5. Home battery backup

A whole-home or partial-home battery, often paired with solar, keeps chosen circuits running through long outages. Put the circuit with your network gear on the backed-up list.

**Fix:** This needs a licensed electrician or certified installer. Ask them to include the outlet your modem and router use.

<figure><img src="/images/posts/ups-for-wifi-router-options.svg" alt="Comparison chart of four backup options. Small UPS: short outages, plug and forget, modest runtime. DC mini UPS: one router or modem, very efficient, voltage, plug and amps must match. Power station: hours of runtime, check switchover time and inverter idle draw. Home battery: long outages, pro install, highest cost." width="640" height="390" loading="lazy" /><figcaption>Match the option to how long your outages usually last.</figcaption></figure>

## Which option fits you?

- **Outages are short (minutes to an hour or two):** a small UPS, or a DC mini UPS if you only need to power one or two boxes.
- **Outages often last hours:** a portable power station, or a UPS with a bigger battery.
- **Outages last a day or more, or you want the whole house covered:** a home battery, with a power station as a cheaper middle step.

## 6. Work out your runtime

Use this rule of thumb:

**Runtime (hours) = battery Wh x efficiency / load W**

Efficiency covers conversion losses and the part of the battery you can't use. The numbers below are assumptions for illustration, not specs. Use your own gear's watts and your battery's stated Wh.

**Worked example.** Assume you measured a modem at 12 W and a router at 13 W, a total load of 25 W.

- **Power station, 256 Wh, AC outlets, assume 85% efficiency:** 256 x 0.85 = 217.6 Wh usable, and 217.6 / 25 = about 8.7 hours.
- **Same station on its 12 V DC port, assume 90%:** 256 x 0.9 = 230.4 Wh, and 230.4 / 25 = about 9.2 hours.
- **Small UPS with a 12 V 9 Ah lead-acid battery:** 12 x 9 = 108 Wh. Assume only 60% is usable after losses: 108 x 0.6 = 64.8 Wh, and 64.8 / 25 = about 2.6 hours.
- **DC mini UPS, 37 Wh, router only (13 W), assume 85%:** 37 x 0.85 = 31.45 Wh, and 31.45 / 13 = about 2.4 hours.

For a UPS, the maker's runtime chart is more reliable than the formula, because lead-acid batteries deliver less at higher loads. You can also run your numbers through this [battery backup time calculator](https://zentacalculator.com/everyday-life/inverter-battery-backup/).

## 7. Set it up so it lasts longer

**Fix:**

- **Plug only network gear into the battery outlets.** A TV, printer or desk lamp on the same battery cuts runtime fast.
- Unplug or turn off mesh nodes in rooms you won't use during the outage.
- Test it once: unplug the UPS or power station from the wall and confirm the Wi-Fi stays up.
- Keep the backup charged and plugged in, and recheck it every few months.

## Internet still down on backup power?

If your router and modem have power but there's no internet, the outage is probably on your provider's side. Cable and fiber networks have equipment in the neighborhood that may or may not have backup power of its own.

- Check the modem lights. A connection light that won't go solid usually means no signal from the provider.
- Check your provider's outage page or app over cellular data.
- **Use your phone's hotspot** as a fallback for laptops and tablets. It runs on your cellular data plan and drains the phone battery, so keep a charged power bank nearby.

## When to call a pro

Call a licensed electrician if you want a home battery, a backed-up circuit for your network gear, or a generator connected to your house wiring. Call your internet provider if the internet stays down after power returns, or to ask what their ONT battery unit covers.
