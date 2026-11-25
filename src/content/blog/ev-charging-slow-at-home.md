---
title: "EV Charging Slow at Home? 8 Causes and How to Fix Them"
description: "EV charging slowly at home? Check the charge rate limits in your car and charger, the circuit size, 208 V power, cold weather, heat sensing and load sharing."
pubDate: 2026-11-25
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-25
category: ev-charging
subcategory: charger-troubleshooting
tags: [ev charging, slow charging, level 2, level 1, amps, onboard charger, cold weather]
image: { src: /images/featured/ev-charging-slow-at-home.webp, alt: "Illustration of an electric car plugged into a wall charger with a slow progress gauge" }
difficulty: easy
time: 10 to 30 min
risk: caution
tools: [Your car's app or dashboard, Your charger's app or manual, Your breaker panel (to read the breaker size)]
symptoms:
  - { label: "Slower than it used to be", to: "1-a-charge-rate-limit-in-the-car-or-app" }
  - { label: "Always slower than advertised", to: "3-your-cars-onboard-charger-sets-the-ceiling" }
  - { label: "Slow only in winter", to: "5-cold-weather" }
  - { label: "Slows near the end", to: "6-it-slows-near-a-full-battery" }
  - { label: "Plug or outlet feels warm", to: "7-the-charger-is-protecting-itself-from-heat" }
  - { label: "Using a regular outlet", to: "8-youre-on-level-1" }
faq:
  - q: "Why is my Level 2 charger charging so slowly?"
    a: "The most common reasons are a current limit set in the car or the charger app, a charger set to a lower amperage to match its circuit, an onboard charger in the car that can't accept more, or 208 V power in an apartment or condo. Cold batteries and load sharing with other chargers or appliances also slow it down."
  - q: "How fast should a Level 2 charger charge my EV?"
    a: "It depends on the charger's current, your voltage and the car's onboard charger. A charger on a 40 A circuit can deliver up to 32 A, which is about 7.7 kW at 240 V. Your car charges at whichever is lower, the charger's output or the car's maximum AC rate, found in its specs."
  - q: "Why does my EV charge slower in cold weather?"
    a: "A cold battery can't safely accept charge as fast, and the car may use some of the incoming power to warm the battery first. Charging right after driving, while the battery is still warm, or scheduling charging to finish near your departure time helps."
  - q: "Does charging to 100% take longer?"
    a: "Usually, yes. Many cars slow down for the last few percent to protect the battery. Most makers suggest a lower daily limit, often around 80 to 90 percent, unless you need the full range for a trip. Check your car's manual."
  - q: "Can I use an extension cord to charge my EV faster or farther away?"
    a: "No. Most EV and charger makers say not to use extension cords or adapters that aren't made for EV charging. An extension cord adds resistance and heat, can cause the car to charge slower, and can overheat. Have an electrician add a properly rated outlet or charger where you park."
---

When your EV charges slowly at home, you plug in at night and wake up with less range than you expected. Sometimes it's a setting, sometimes it's the limit of your car or your circuit, and sometimes the charger is slowing down on purpose to protect itself.

The usual causes are a **charge rate limit in the car or the charger app**, a **charger set to a lower current** to match its circuit, the **car's onboard charger**, **208 V power** in apartments and condos, **cold weather**, and **load sharing** with another charger or the house.

<figure><img src="/images/posts/ev-charging-slow-at-home-limits.svg" alt="Diagram of the chain from the breaker panel to the battery: the breaker and circuit, the charger's current setting, the car's current limit setting and the car's onboard charger. The slowest link in the chain sets the charging speed" width="640" height="400" loading="lazy" /><figcaption>The slowest link in the chain sets your charging speed.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Check the charging rate shown in your car or charger app. Then look for a current limit setting in the car and in the charger app, confirm the charger's maximum matches its circuit, and compare it with your car's maximum AC charging rate. Cold weather and the last few percent of charge are normal reasons for slower charging.</p></div>

> **Safety first:** If the plug, the outlet, the charger handle or the wall feels hot, looks discolored or smells like burning, stop charging and turn off the circuit at the breaker. Don't open the charger or the panel. Call a licensed electrician.

## How to tell what's causing it: quick test

1. **Read the actual charging rate** in your car or charger app while it's charging. Note the kW and, if shown, the amps and volts.
2. **Compare it with what you expect.** A rough guide: amps × volts ÷ 1,000 = kW. For example, 32 A × 240 V is about 7.7 kW.
    - **Amps lower than expected?** Look for a limit in the car, the charger app or the charger's circuit setting (causes 1, 2 and 4).
    - **Amps right, but kW lower?** Check the voltage. About 208 V instead of 240 V means less power (cause 4).
    - **Matches the car's maximum AC rate?** That's as fast as your car can charge on AC (cause 3).
3. **Check the battery level and temperature.** If it's near full or very cold, slower charging is normal (causes 5 and 6).

To estimate how long a full charge should take at your rate, try this [EV charging time calculator](https://zentacalculator.com/ecology/ev-charging-time/).

## 1. A charge rate limit in the car or app

Many EVs let you lower the charging current, and many charger apps do too. A limit set once (for a weak outlet, a trip, or by a previous owner) stays in place until you change it. Some cars remember a separate limit for each charging location.

**Fix:**

- In your car's charging screen or app, look for a setting called something like charge current, amps or charging limit. Set it to the maximum your charger supports.
- In the charger's app, check the current or power setting and any **schedule** that pauses or slows charging.
- Check for **scheduled charging** or a **departure time** setting in the car. It may be waiting for cheaper off-peak hours, not charging slowly.
- If your utility offers a managed charging program, it may reduce your charging during busy times. Check the program's app or terms.

## 2. The charger is set to match a smaller circuit

Level 2 chargers can usually be set to a lower maximum current during installation to match the breaker. A charger that can deliver 48 A may be set to 32 A or less if it's on a smaller circuit. That's correct and safe. Charging counts as a continuous load, so the charger's current should be no more than 80% of the breaker rating.

<figure><img src="/images/posts/ev-charging-slow-at-home-breakers.svg" alt="Table of common Level 2 breaker sizes and the maximum continuous charging current each allows: 20 A breaker 16 A, 30 A breaker 24 A, 40 A breaker 32 A, 50 A breaker 40 A, 60 A breaker 48 A, with approximate power at 240 V" width="640" height="380" loading="lazy" /><figcaption>A charger can only draw up to 80% of its breaker rating.</figcaption></figure>

**Fix:**

- Look at the breaker for your charger in the panel and read its rating. Compare it with the table above.
- Check the charger's app or manual for its maximum current setting. If it's set lower than the circuit allows, an electrician or the installer can confirm whether it can be raised.
- Never raise the charger's setting above what the breaker and wiring allow. If you want faster charging, have a licensed electrician check whether a larger circuit is possible.

Our guide to [Level 2 charger installation](/ev-charging/level-2-charger-installation/) explains how circuit size is chosen.

## 3. Your car's onboard charger sets the ceiling

On Level 1 and Level 2, the car converts AC power to DC for the battery with its own **onboard charger**. That onboard charger has a maximum rate, commonly in the range of about 6.6 to 11.5 kW, and a few cars accept more. A bigger wall charger can't push past it.

**Fix:**

- Look up your car's **maximum AC charging rate** in the owner's manual or spec sheet. Some trims of the same model have different onboard chargers.
- If your charging rate already matches that number, nothing is wrong. That's as fast as your car charges at home.
- Don't buy a bigger wall charger expecting faster charging unless your car can accept more.

## 4. Lower voltage (208 V) or load sharing

Many apartment buildings, condos and commercial buildings supply **208 V** instead of 240 V. At the same current, 208 V gives you about 13% less power, so charging takes a bit longer. Your voltage can also sag somewhat when heavy appliances are running.

Some chargers also **share power**. Two chargers on one circuit may split the current when both cars are plugged in, and some homes have an energy management system that reduces charging when the dryer, oven or air conditioner is on.

**Fix:**

- Check the voltage shown in the car or charger app. Around 208 V is normal in many multifamily buildings.
- If you have two chargers or a load management device, check its app or settings. It may be working as designed.
- If the voltage at home reads well below 230 V on a 240 V service while charging, ask an electrician to check the circuit and connections.

## 5. Cold weather

A cold battery can't safely take charge as quickly, so the car slows charging until the battery warms up. The car may also use some of the incoming power to heat the battery or the cabin, which leaves less for charging. This is normal.

**Fix:**

- Plug in soon after you get home, while the battery is still warm from driving.
- Park in a garage if you can. Even an unheated garage is usually warmer than outside.
- Use scheduled charging or a departure time so charging finishes close to when you leave, with a warm battery and cabin.
- Expect slower charging and less range on very cold days. It recovers when temperatures rise.

## 6. It slows near a full battery

Many cars slow charging as the battery gets close to full to protect it. On Level 2 this is usually limited to the last few percent, but it can make a charge to 100% take noticeably longer than one to 80% or 90%.

**Fix:**

- For daily driving, set a lower charge limit if your car's maker recommends one. Many suggest around 80 to 90 percent.
- Charge to 100% only when you need the full range for a trip, and plan the extra time.
- Some cars, such as those with certain battery chemistries, recommend regular charges to 100%. Follow your manual.

## 7. The charger is protecting itself from heat

Many chargers, charging cords and some plugs have temperature sensors. If the plug, outlet or handle gets warm, the charger may reduce current or stop charging. A loose or worn outlet is a common cause on plug-in chargers.

**Fix:**

- Feel the plug and handle after an hour of charging. Warm is normal. Too hot to hold, discolored, or melted is not. Stop and call an electrician.
- On plug-in chargers, make sure the plug is pushed fully into the outlet. A loose fit in a worn outlet heats up.
- Keep the charger out of direct afternoon sun if you can, and don't cover it.
- Don't use extension cords or adapters that aren't made for EV charging.

If the charger often stops completely, see our guide to a [home EV charger not charging](/ev-charging/home-ev-charger-not-charging/).

## 8. You're on Level 1

A standard 120 V outlet (Level 1) usually charges at about 12 A, roughly 1.4 kW. That adds only a few miles of range per hour. It's fine for short daily drives, but it can't refill a large battery overnight.

**Fix:**

- Use a dedicated outlet, not one shared with a freezer, space heater or garage tools. Shared circuits can trip and stop charging.
- Check the charging cord's setting. Some cords let you choose a lower current, so make sure it's set to the normal level for the outlet.
- If Level 1 can't keep up with your driving, a Level 2 charger is the fix.

## Charging stops or barely starts?

- **No charging at all:** check the breaker, the car's schedule and the charger's status light.
- **Starts, then stops:** often a schedule, a full charge limit, or the charger cutting out from heat or a fault.
- **Fault light on the charger:** look up the light pattern in the manual or app, then restart the charger by turning its breaker off and on once.

## When to call an electrician

Call a licensed electrician if:

- The outlet, plug or breaker gets hot, buzzes or smells like burning.
- The breaker trips during charging.
- Voltage drops much lower than normal while charging.
- You want a faster charger and need to know if your panel and wiring can support a larger circuit.

Don't change breaker sizes or charger settings beyond what the wiring is rated for. A larger breaker on wiring that can't carry the current is a fire risk.
