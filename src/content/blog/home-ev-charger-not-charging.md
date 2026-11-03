---
title: "Home EV Charger Not Charging? Level 2 Troubleshooting Guide"
description: "Level 2 home EV charger not charging? Check car schedules and limits, the connector latch, breaker, fault lights and cable damage before calling an electrician."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: ev-charging
subcategory: charger-troubleshooting
tags: [ev charger, level 2, ev charging, breaker, gfci, troubleshooting]
image: { src: /images/featured/home-ev-charger-not-charging.webp, alt: "Illustration of a wall-mounted Level 2 EV charger with its cable and handle and a warning light" }
difficulty: easy
time: 10 to 30 min
risk: caution
tools: [Your car's app or dashboard, Your charger's manual or app, Flashlight]
symptoms:
  - { label: "Plugged in, nothing happens", to: "1-check-the-cars-charging-schedule-and-limit" }
  - { label: "Charger has no lights", to: "3-check-the-breaker-and-the-chargers-ground-fault-protection" }
  - { label: "Red or flashing fault light", to: "4-read-the-chargers-status-light" }
  - { label: "Car says plug not connected", to: "2-make-sure-the-connector-is-fully-latched" }
  - { label: "Outlet or plug feels hot", to: "6-inspect-the-cable-handle-and-outlet" }
  - { label: "Charger completely dead", to: "charger-completely-dead" }
faq:
  - q: "Why is my EV plugged in but not charging?"
    a: "The most common reasons are a charging schedule in the car or charger app, the car already being at its charge limit, or a connector that isn't fully latched. If the charger shows a fault light or no lights at all, check the breaker and the charger's manual next."
  - q: "Does my home EV charger need Wi-Fi to work?"
    a: "Most home chargers charge normally without Wi-Fi. The connection is for the app, schedules, energy tracking and updates. Some models need the app once for setup, and some can be set to require approval in the app or a card tap before each session, so check your settings."
  - q: "Why does my EV charger keep tripping the breaker?"
    a: "A breaker that trips repeatedly points to a problem with the circuit, a loose connection, a charger set to draw more current than the circuit allows, or a failing charger. Don't keep resetting it. Have a licensed electrician check the circuit and the charger's current setting."
  - q: "Can a GFCI breaker cause EV charger problems?"
    a: "It can. Level 2 chargers have their own built-in ground-fault protection, and some combinations of a charger and a GFCI breaker or outlet cause nuisance trips. An electrician can check whether your setup is correct for your charger and your local code."
  - q: "How do I know if the problem is the charger or the car?"
    a: "Try the car on a different charger, such as a public Level 2 station or the portable cord that came with the car. If it charges elsewhere, your home charger or its circuit is the likely cause. If it won't charge anywhere, the problem is with the car."
---

When a home Level 2 EV charger won't charge, the hardware is often fine. The car may be waiting for a scheduled start time, already be at its charge limit, or not detect that the connector is fully plugged in.

The most common causes are **a charging schedule or limit in the car**, **a connector that isn't fully latched**, **a tripped breaker or ground-fault shutdown**, and **damage to the cable or plug**. Start with the settings, then work outward from the car to the charger and the circuit.

<figure><img src="/images/posts/ev-charger-not-charging-flow.svg" alt="Chart: no lights at all points to no power from the breaker, outlet or wiring; a red or flashing fault light points to the charger's protection features; a normal light but no charging points to the car settings or the connector latch" width="640" height="320" loading="lazy" /><figcaption>The charger's light tells you where to start.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Check the car's app for a charging schedule or a charge limit that's already reached, then unplug and firmly reconnect the handle until it clicks. If the charger has no lights or a fault light, check its breaker and its manual. A breaker that trips again needs an electrician.</p></div>

> **Safety first:** A Level 2 charger runs on 240 volts. Never open the charger, the outlet or the breaker panel cover. You can safely reset a breaker, check lights and inspect the outside of the cable and plug. Stop using the charger and call a licensed electrician if you see burn marks, melted plastic, smell burning or feel a hot plug or outlet.

## How to narrow it down: quick test

1. **Look at the charger's status light** before you plug in. No lights, a normal ready light and a fault light each point to different causes (see the chart above).
2. **Check the car's screen or app.** It usually shows whether charging is scheduled, complete, or waiting, and whether it detects the plug.
3. **Unplug, wait a few seconds and plug back in firmly.** Many sessions start on the second try.
4. **Try another charger if you can.** If the car charges elsewhere, the problem is your home charger or its circuit. If it won't charge anywhere, it's the car (fix 7).

## 1. Check the car's charging schedule and limit

Most EVs let you set a **scheduled charging** time or departure time, often to use cheaper overnight electricity rates. When you plug in outside that window, the car waits and nothing seems to happen. Charging also stops, or never starts, when the battery is already at the **charge limit** you set, such as 80%.

**Fix:**

- Open the car's charging screen or app and look for a schedule, a departure time or an off-peak setting. Start charging manually or turn the schedule off to test.
- Check the charge limit. If the battery is at or above it, raise the limit if you need more range today.
- Check the **charger's app** too. Many chargers have their own schedule, and if both the car and the charger have schedules, they have to overlap.
- If you joined a utility or charger-maker program that manages charging times, it may delay or pause sessions. Check the program's app.

## 2. Make sure the connector is fully latched

The car won't start charging until it detects that the connector is fully seated. A handle that's almost in, or a latch that didn't click, is a very common cause.

**Fix:**

1. Unplug the handle and look into the connector and the car's charge port for dirt, ice, leaves or bent pins. Don't poke metal objects into either one.
2. Plug it in straight and firm until you hear or feel the latch click.
3. If the handle has a latch button, make sure it springs back up fully. A sticky or broken latch can stop charging.
4. If you use an **adapter** (for example, between a J1772 charger and a Tesla or NACS port), check that both the adapter and the handle are fully seated, and that the adapter is rated for your charger.

<figure><img src="/images/posts/ev-charger-setup-parts.svg" alt="Diagram of a home Level 2 charging setup: a 240 volt double-pole breaker in the panel, an outlet or hardwired circuit, the wall charger with its status light, the cable, the handle latch and the car's charge settings, numbered 1 to 6" width="640" height="390" loading="lazy" /><figcaption>Check each link in the chain, from the breaker to the car.</figcaption></figure>

## 3. Check the breaker and the charger's ground-fault protection

A Level 2 charger is usually on its own **240 V double-pole breaker** in your main panel or a subpanel. Level 2 chargers also have **built-in ground-fault protection** that shuts charging off if it detects current leaking, and many will retry on their own a few times before showing a fault.

**Fix:**

- Find the charger's breaker. If it's tripped (sitting in the middle or in the OFF position), push it fully **OFF**, then back **ON**.
- If the breaker trips again right away or during charging, **stop and call an electrician**. Don't keep resetting it.
- For a ground-fault light, unplug the handle from the car, wait a minute, then plug back in. Some chargers need a power cycle at the breaker to clear the fault.
- A ground fault that keeps coming back may be caused by moisture in the handle or outlet, a damaged cable or a problem in the car. Let a wet handle dry before you plug in.
- If your charger plugs into a 240 V outlet that's protected by a **GFCI breaker**, some charger and GFCI combinations trip for no clear reason. An electrician can check what's right for your charger.

If you charge with the 120 V Level 1 cord on a garage GFCI outlet that keeps tripping, see our guide to a [GFCI outlet that keeps tripping](/electrical/gfci-outlet-keeps-tripping/).

## 4. Read the charger's status light

Most chargers use a light or a short pattern of flashes to show their state. Colors and patterns aren't standard, but common examples are a steady light for **ready**, a different color or a moving pattern for **charging**, and red, amber or flashing for a **fault**.

**Fix:**

- Note the exact color and how many times it flashes, then look it up in your charger's manual or app. The app often shows a plain-English error.
- Common fault types include ground fault, overheating, incorrect supply voltage, a missing ground connection and a failed self-test.
- Power-cycle the charger at its breaker: turn it off, wait about a minute, then turn it back on. This clears many temporary faults.
- If the same fault keeps returning, contact the charger maker with the code. Some faults, like a missing ground or wrong voltage, point to the wiring and need an electrician.

## 5. Don't blame Wi-Fi (but check app approval)

Most home chargers will charge normally even if they lose Wi-Fi. The connection is for the app, schedules, energy tracking and firmware updates. A charger showing offline in the app is not usually why the car won't charge.

**Fix:**

- Check whether your charger is set to require **approval before each session** (in the app or with an RFID card). If so, approve the session or turn that setting off for home use.
- Some chargers need to be set up in the app once before they'll charge. If you just installed it, finish setup.
- If the charger is online, check for a firmware update in the app. Updates can fix charging bugs.

## 6. Inspect the cable, handle and outlet

The cable gets driven over, stepped on and dragged across the garage floor. Damage to the cable, handle or plug can stop charging and is a safety risk.

**Fix:**

- With the handle unplugged from the car, look along the cable for cuts, crushed spots, kinks or exposed inner layers.
- Check the handle for cracks, a broken latch or signs of water inside.
- On a **plug-in charger**, look at the plug and the outlet. Discoloration, melted plastic or a plug that feels hot after charging are warning signs. **Stop using it** and have an electrician check the outlet. Some plug-in chargers also have a temperature sensor in the plug and will slow down or stop when the connection gets too warm.
- Hang the cable on its holster so it stays off the floor.

Don't tape or repair a damaged EV charging cable. Contact the maker about a replacement.

## 7. Rule out a problem with the car

Sometimes the charger is fine and the car is refusing to charge.

**Fix:**

- Look for warning messages on the dashboard or in the car app.
- Check the **charge port door** and its sensor. On some cars, a port that isn't fully open or a port lock fault stops charging.
- A weak **12 V battery** can cause odd charging behavior on some EVs. If the car has other electrical glitches, have the 12 V battery tested.
- Install any pending **car software updates**, which sometimes fix charging issues.
- In very cold weather, the battery may charge slowly at first while it warms up. That's normal.

If the car won't charge on any charger, contact your dealer or the car's service center.

## 8. Try another charger to isolate the problem

Testing on a second charger is the fastest way to split the problem in half.

**Fix:**

- Use the **portable charging cord** that came with the car (if you have one) in a suitable outlet, or visit a **public Level 2 station**.
- **Car charges elsewhere:** the problem is your home charger, its outlet or its circuit. Contact the charger maker, or an electrician for the circuit.
- **Car won't charge anywhere:** the problem is the car. Contact the dealer.

If your car charges but more slowly than you expect, estimate the normal time for your battery and charger with this [EV charging time calculator](https://zentacalculator.com/ecology/ev-charging-time/). A low current setting in the charger, or a power-sharing setup, can also limit speed.

## Charger completely dead?

- **Check the breaker** for the charger, and the main breaker if other circuits are out too.
- **Check for a power outage** in your home or area.
- **On a plug-in charger,** make sure the plug is fully pushed into the outlet.
- If the breaker is ON, there's no outage, and the charger still shows no lights at all, don't open it. Contact the charger maker if it's under warranty, or have an electrician confirm whether power is reaching it.

## When to call an electrician

Call a licensed electrician if:

- The charger's breaker trips again after you reset it.
- An outlet, plug or breaker is hot, discolored, melted or smells of burning.
- The charger reports a wiring fault, such as a missing ground or wrong voltage.
- You want to move, add or upgrade the circuit, or change the charger's maximum current setting to match a new breaker.
- The charger has no power and you can't find a tripped breaker.

Any work inside the panel, on the circuit or at the outlet involves 240 volts and often needs a permit. Leave it to a licensed electrician.
