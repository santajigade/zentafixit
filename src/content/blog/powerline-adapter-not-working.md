---
title: "Powerline Adapter Not Working? 8 Causes and Fixes"
description: "Powerline adapter not connecting or slow? Fix power strip problems, pairing, mixed standards, wiring, electrical noise, cables and firmware step by step."
pubDate: 2026-11-26
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-26
category: networking
subcategory: ethernet-and-powerline
tags: [powerline, ethernet, homeplug, g-hn, home-network, slow-internet]
image: { src: /images/featured/powerline-adapter-not-working.webp, alt: "Illustration of two powerline adapters in wall outlets with a signal wave running between them" }
difficulty: easy
time: 15 to 45 min
risk: low
tools: [Known-good Ethernet cable, Laptop with an Ethernet port, Adapter manual or manufacturer app]
symptoms:
  - { label: "Data light is off or red", to: "2-the-adapters-arent-paired" }
  - { label: "Worked, then stopped after I moved it", to: "1-plugged-into-a-power-strip-or-surge-protector" }
  - { label: "Bought a new adapter, won't connect", to: "3-mixed-standards-or-brands" }
  - { label: "Drops out when appliances run", to: "5-electrical-noise-from-other-devices" }
  - { label: "Much slower than the box says", to: "8-slower-than-the-speed-on-the-box" }
  - { label: "No lights at all", to: "no-lights-at-all" }
faq:
  - q: "Why is my powerline adapter not connecting?"
    a: "The usual reasons are a power strip or surge protector blocking the signal, adapters that were never paired with each other, or adapters built to different standards. Plug both directly into wall outlets, pair them again and check that they use the same standard."
  - q: "Can I plug a powerline adapter into a surge protector?"
    a: "It is best not to. Surge protectors and many power strips filter the high-frequency signal that powerline adapters use, which can weaken or block it. Plug the adapter into a wall outlet and, if it has a pass-through socket, plug your power strip into that."
  - q: "Do powerline adapters work on different circuits?"
    a: "Often, yes, because the signal can travel through the breaker panel. Going between circuits, especially ones on the other side of a US panel's split phase, can weaken it. If speeds are poor, try outlets that share a circuit or sit closer together."
  - q: "Can I mix powerline adapters from different brands?"
    a: "Only if they use the same standard. HomePlug and G.hn adapters do not talk to each other. Even within one standard, mixing brands or generations can give slower speeds or trouble pairing, so check each adapter's manual or box."
  - q: "Why is my powerline adapter so slow?"
    a: "The speed on the box is a theoretical maximum for ideal wiring, not what you will see in a home. Real speeds depend on wiring distance, circuits, noise and the adapter's Ethernet port. A power strip or a noisy charger nearby can cut speeds sharply."
---

A powerline adapter sends your network over the electrical wiring in your walls. One adapter plugs in near the router, a second plugs in near your PC, TV or console, and an Ethernet cable connects each one. When it works, you get a wired connection without running cable through the house.

When it stops working, the cause is usually **a power strip or surge protector in the way**, **adapters that aren't paired**, or **wiring and electrical noise weakening the signal**. Here's how to find which.

<figure><img src="/images/posts/powerline-adapter-not-working-flow.svg" alt="Flowchart: plug both adapters into wall outlets and wait for the lights to settle; if the data link light is off at either end the adapters cannot see each other, so check causes 1 to 5; if it is on but data is missing or slow, check causes 6 to 8" width="640" height="430" loading="lazy" /><figcaption>The data link light tells you which half of the problem you have.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug both adapters straight into wall outlets, not power strips, and pair them again with their pair buttons. If they still won't link, make sure both use the same standard (HomePlug AV or AV2, or G.hn). If they link but the internet is slow or missing, swap the Ethernet cables and move the adapters away from chargers and appliances.</p></div>

## How to tell what's causing it: quick test

1. **Plug both adapters directly into wall outlets**, ideally in the same room as a first test. Wait a minute or two for the lights to settle.
2. **Check the lights on both adapters.** Most have a power light, a powerline (data) light and an Ethernet light. Colors and blink patterns vary by brand, so check the manual for what yours mean.
3. **If the powerline light is off or shows a poor link**, the adapters can't see each other. Work through causes 1 to 5.
4. **If the powerline light is on but there's no internet**, check the Ethernet light at each end and work through causes 6 and 7.
5. **If it works but slowly**, plug a laptop into the far adapter, run a speed test, then compare with a test done right at the router. See cause 8.

## 1. Plugged into a power strip or surge protector

This is the most common problem. Surge protectors, power strips, UPS battery backups and some extension cords filter or absorb the high-frequency signal the adapters use. The adapter gets power, its lights come on, but the data signal is weak or gone.

**Fix:**

- Plug each adapter **directly into a wall outlet**.
- If your adapter has a **pass-through socket** on the front, plug your power strip or other gear into that. Many pass-through models include a filter so the devices behind them add less noise.
- If a bulky adapter blocks the other half of the outlet, use its pass-through socket rather than moving the adapter onto a strip.

## 2. The adapters aren't paired

Adapters form a private network with each other, usually secured with a network key set when you pair them. A new adapter, a reset, or adapters from a different kit may not be on the same network, so they light up but won't link.

**Fix:**

1. Plug both adapters into wall outlets, near each other for now.
2. Press the **pair** (or security) button on the first adapter, then on the second within the time window your manual gives. How long to press matters: on many adapters a short press pairs and a long press resets, so **check the manual for how long to hold it**.
3. Wait for the powerline light to show a link, then move the second adapter to where you need it.
4. If you have three or more adapters, add each new one to the existing network the same way, one at a time.

Some brands also let you pair or set the network name in their app. Use that if the buttons don't work.

## 3. Mixed standards or brands

Powerline adapters are built to different standards. **HomePlug AV**, **HomePlug AV2** and **G.hn** are the main ones. G.hn and HomePlug adapters do not talk to each other. Even between HomePlug generations or brands, pairing can be unreliable and the link drops to the slowest adapter's speed.

**Fix:**

- Check the box, label or manual of each adapter for its standard.
- For the most reliable result, use adapters of the **same standard, ideally the same brand and series**.
- If you added an adapter later and only that one won't connect, a standard or brand mismatch is the likely cause.

## 4. Different circuits or a long wiring path

The signal has to travel through your home's wiring, and the path between two outlets can be long even when the rooms are close. Outlets on different circuits connect through the breaker panel. US homes have split-phase service (two 120 V legs), and a signal crossing from one leg to the other **can** be much weaker. AFCI and GFCI breakers, and long runs to garages or additions, **can** also weaken it.

<figure><img src="/images/posts/powerline-adapter-not-working-path.svg" alt="Signal path: router to adapter A by Ethernet, through the house wiring and breaker panel with two 120 V legs to adapter B, then by Ethernet to a PC, TV or console. Plug in directly to a wall outlet; avoid power strips, surge protectors, UPS units and extension cords; a different circuit or panel leg, AFCI or GFCI breakers and noisy chargers can weaken the signal" width="640" height="376" loading="lazy" /><figcaption>The signal goes through the panel, so the wiring path matters more than the distance you see.</figcaption></figure>

**Fix:**

- Try **other outlets** for one or both adapters. A different outlet in the same room can make a big difference.
- If you know which breakers feed each room, try outlets that share a circuit, or circuits on the same side of the panel.
- Don't change breakers or wiring to improve the signal. If the only good fix involves the panel, consider an Ethernet run or a mesh Wi-Fi system instead.

## 5. Electrical noise from other devices

Phone and laptop chargers, LED bulb drivers, dimmers, vacuum cleaners, fridges, washers, treadmills and other motors can put electrical noise on the wiring. Noise near either adapter can slow the link or make it drop when that device turns on.

**Fix:**

- Note whether drops happen when something specific runs, such as the fridge compressor, a hair dryer or a phone charging.
- Move chargers and power bricks **away from the adapter's outlet**, or plug them into the adapter's filtered pass-through socket if it has one.
- Try moving the adapter to a different outlet away from heavy appliances.

## 6. A bad Ethernet cable or port

The powerline link can be fine while the Ethernet side fails. A damaged cable, a loose plug or a dead router port stops data at either end. If the Ethernet light on an adapter stays off, look here first.

**Fix:**

- Swap each Ethernet cable for a **known-good cable**. Make sure the plugs click in.
- Try a **different port on the router**.
- Plug the far device straight into the router with the same cable. If it still fails, the problem is the device or cable, not the adapters. Our guide to [Ethernet not working](/networking/ethernet-not-working/) covers that side in detail.

## 7. Outdated firmware or a stuck adapter

Adapters can freeze or lose their settings, and older firmware can cause dropouts or pairing trouble.

**Fix:**

1. **Unplug both adapters** for a minute, then plug them back in.
2. If that doesn't help, **check the manufacturer's app or website** for a firmware update. Update only from the manufacturer's own tools.
3. As a last step, **reset both adapters to factory settings** (the manual shows how, often a pinhole button or a long press on the pair button), then pair them again as in cause 2.

Many adapters also go into a power-saving mode when nothing on the Ethernet side is active. If the link only drops when your PC sleeps, that may be normal.

## 8. Slower than the speed on the box

The number on the box is a theoretical maximum for the powerline link in ideal conditions. It's shared between devices and isn't what you'll see through real home wiring. Real speeds depend on the wiring path, circuits and noise, so a big gap is normal.

**Fix:**

- Check that each adapter's **Ethernet port speed** suits your plan. Some lower-cost adapters have 100 Mbps Ethernet ports, which cap your speed no matter what the box says. The spec sheet lists it.
- Make sure your PC or TV reports a gigabit link if both adapters have gigabit ports.
- Many brands' apps show the link rate between adapters. Use it to compare outlets and find the best spot.
- Work through causes 1, 4 and 5 again. Those are what usually cut speed.

## No lights at all?

- **Test the outlet** with a lamp or phone charger. It may be on a wall switch or a tripped GFCI.
- **Try the adapter in another outlet.** If it still shows no lights anywhere, it has likely failed. Adapters are usually replaced, not repaired.
- **Check for heat damage.** If the adapter feels very hot, smells burnt or is discolored, unplug it and stop using it.

## When to call a pro

Most powerline problems don't need one. Call a licensed electrician if:

- An outlet is dead, sparks, feels warm or shows scorch marks.
- Breakers trip or GFCIs cut out when you plug the adapter in.
- You want new wiring or an Ethernet run installed in the walls.

If adapters still won't give a usable connection after trying several outlets, the wiring path may just not suit powerline. A network installer can run Ethernet cable, or a mesh Wi-Fi system may serve that room better.
