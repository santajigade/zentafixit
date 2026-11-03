---
title: "Internet Keeps Disconnecting? Fixes"
description: "Internet keeps dropping out? Find out if it's Wi-Fi or the whole connection, then check modem lights and logs, coax splitters, heat, channels and power saving."
pubDate: 2026-11-03
category: networking
subcategory: isp-guides
tags: [internet, disconnecting, modem, router, wi-fi, coax, isp]
image: { src: /images/featured/internet-keeps-disconnecting.webp, alt: "Illustration of a modem and router with a broken, on and off connection line to a laptop" }
difficulty: easy
time: 15 to 45 min
risk: low
tools: [Ethernet cable, A phone with mobile data, Small wrench (for coax connectors, optional)]
symptoms:
  - { label: "Every device drops at once", to: "2-watch-the-modem-lights-when-it-drops" }
  - { label: "Only Wi-Fi drops, wired is fine", to: "7-change-the-wi-fi-channel" }
  - { label: "Only one laptop keeps dropping", to: "8-turn-off-power-saving-on-the-network-adapter" }
  - { label: "Cable internet, many splitters", to: "4-remove-extra-coax-splitters-and-tighten-connectors" }
  - { label: "Router feels hot", to: "5-keep-the-router-and-modem-cool" }
  - { label: "Drops every day, nothing helps", to: "drops-on-every-device-every-day" }
faq:
  - q: "Why does my internet keep disconnecting every few minutes?"
    a: "If every device drops at the same moment, the modem is usually losing its connection to your provider, often because of a loose or split coax line, an overheating modem or a line fault. If only Wi-Fi devices drop, look at Wi-Fi interference, router placement and adapter power saving."
  - q: "Can a coax splitter cause internet drops?"
    a: "Yes. Every splitter weakens the signal reaching the modem, and old, cheap or loose splitters make it worse. Remove any splitters you don't need, and make sure the modem is on the most direct run from where the line enters the house."
  - q: "How do I know if my modem or router is the problem?"
    a: "Watch the modem's lights during a drop. If its online or internet light goes out or blinks, the modem is losing the provider's signal. If the modem stays online but Wi-Fi drops, the router or the Wi-Fi is the problem."
  - q: "Can an overheating router cause disconnects?"
    a: "Yes. Routers and modems that run hot, for example in a closed cabinet or stacked on each other, can freeze or restart. Give them open air on a hard surface and see whether the drops stop."
  - q: "Will my internet provider fix disconnects for free?"
    a: "Problems with the provider's line, the outside connection or a modem you rent are normally theirs to fix. Policies vary on wiring inside your home and on modems you own, so ask when you call."
---

Few things are more annoying than an internet connection that works, drops, comes back and drops again. Video calls freeze, games disconnect and streaming stops.

Most drops come down to **Wi-Fi problems** (interference, distance or a power-saving adapter) or **the whole connection going down** because of **loose or split coax cables**, **an overheating modem or router**, or **a problem on your provider's line**. The first step is telling those two apart.

<figure><img src="/images/posts/internet-keeps-disconnecting-flow.svg" alt="Flowchart: plug a computer into the router with Ethernet; if the wired connection drops too, the problem is the modem, the line or the provider; if only Wi-Fi drops, the problem is Wi-Fi interference, placement or the device" width="640" height="430" loading="lazy" /><figcaption>A wired test tells you which half to fix.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug a computer into the router with Ethernet and see if it drops too. If it does, check the modem lights and event log, remove extra coax splitters, tighten connectors, keep the equipment cool and call your provider. If only Wi-Fi drops, change the Wi-Fi channel, move the router and turn off adapter power saving.</p></div>

## How to tell what's dropping: quick test

1. **Note what drops.** Does every device lose internet at the same time, or just one laptop or phone?
2. **Plug a computer into the router with an Ethernet cable** and use it for a while. If the wired connection never drops, the problem is Wi-Fi (fixes 7 and 8).
3. **If the wired connection drops too**, the problem is the modem, the line or your provider (fixes 2 to 6).
4. **Write down when it happens.** Times, how long it lasts, and what the modem lights did. Your provider will ask.

## 1. Find out if it's Wi-Fi or the whole connection

"Disconnecting" can mean two very different things. Your device can lose its Wi-Fi link to the router, or stay on Wi-Fi while the internet behind it goes away.

**Fix:**

- **Wi-Fi icon disappears or shows no connection** during a drop: that's a Wi-Fi problem between the device and the router.
- **Wi-Fi stays connected but nothing loads:** the router has lost the internet. If that's what you see, our guide to [Wi-Fi connected but no internet](/networking/wifi-connected-no-internet/) covers the restart order and settings.
- **Wired and wireless drop together:** the modem or the line. Keep going with fix 2.
- **Drops only in certain rooms:** Wi-Fi coverage. A better router position or mesh Wi-Fi is the fix, not your provider.

## 2. Watch the modem lights when it drops

The modem's lights show whether it's keeping its link to your provider. Catching them during a drop is the fastest way to know whose problem it is.

**Fix:**

- When the internet drops, look at the modem (or your gateway). Note which lights change.
- An **online**, **internet** or **link** light that goes out, blinks for a long time or turns red usually means the modem lost the provider's signal. That points to the line, the cables or the provider.
- If the modem's lights stay steady but Wi-Fi drops, the router or Wi-Fi is the problem.
- If **every light goes out**, the modem is losing power or restarting. Check the power adapter and outlet, and see fix 5 on heat.

Light colors and patterns vary by model, so check your provider's guide. Our [modem lights explainer](/networking/modem-lights-meaning/) covers the common patterns.

## 3. Check the modem's event log

Many modems keep a log of disconnects and signal problems. It's on the modem's own status page, reached through a browser.

**Fix:**

1. Connect a computer to the network.
2. Type the modem's status address into a browser. Many cable modems use `192.168.100.1`, but check the label or manual for yours.
3. Look for an **Event log**, **Logs** or **Status** page.
4. Repeated **timeout**, **no ranging response** or **lost sync** style entries around the times of your drops point to a signal problem on the line, not your Wi-Fi.
5. Take screenshots of the log and the **signal** or **status** page. Your provider can read the signal levels and tell you if they're out of range.

Gateways from providers sometimes hide these pages. The provider's app may show connection history instead.

## 4. Remove extra coax splitters and tighten connectors

This one applies to **cable internet** (a round coax cable screwed into the modem). Every splitter in the line weakens the signal, and a loose or corroded connector can drop the connection whenever the cable moves or the temperature changes.

<figure><img src="/images/posts/internet-keeps-disconnecting-coax.svg" alt="Coax line from where it enters the house, through a splitter, to the modem and router, with checks: fewest splitters possible, connectors snug, no kinks or damage, unused splitter ports capped" width="640" height="360" loading="lazy" /><figcaption>Fewer splits and snug connectors give the modem a cleaner signal.</figcaption></figure>

**Fix:**

- **Follow the coax** from the modem back toward where it enters the house. Count the splitters along the way.
- **Remove any splitter you don't need**, such as one that fed a TV box you no longer use. Join the two cables with a straight coax connector (barrel) instead, or plug the modem straight into the main line.
- **Tighten every connector** by hand until snug, then a light extra turn with a small wrench if needed. Don't crank down hard.
- **Look for damage:** kinks, crushed spots, cracked jackets, corrosion on connectors, or staples driven through the cable.
- **Cap unused splitter ports** or wall outlets if your provider recommends it.

Your provider can also install an amplifier or a better splitter if you need several outlets.

## 5. Keep the router and modem cool

Routers and modems make heat, and when they get too hot they can freeze, restart or drop connections. Closed cabinets, shelves behind TVs and stacking the two on top of each other are common causes.

**Fix:**

- Put them in **open air** on a hard surface, with a few inches of space on every side.
- Don't stack the modem and router on top of each other.
- Keep them out of direct sun and away from heaters.
- If one feels much hotter than usual or the drops get worse on warm days, test it in a cooler spot for a few days.
- A router that has run hot for years may be failing. Replacement is the long-term fix.

## 6. Check for an outage at your provider

Neighborhood outages and maintenance often look like random drops, especially at night when providers do their work.

**Fix:**

- Use your phone on **mobile data** to check your provider's app or website for outage alerts.
- Ask neighbors on the same provider whether they've noticed drops.
- If drops started after a storm or nearby construction, the outside line may be damaged. Report it.

## 7. Change the Wi-Fi channel

If only Wi-Fi drops, interference from neighbors' networks and other devices is a common cause. This is worst on the **2.4 GHz** band in apartments.

**Fix:**

- In the router's app or settings, try **auto channel** first, then restart the router.
- On 2.4 GHz in the US, stick to **channels 1, 6 or 11**. These don't overlap with each other.
- Connect devices to **5 GHz** when you can. It has more channels and less interference, though shorter range.
- Move the router **away from microwaves, cordless phone bases and baby monitors**, and up off the floor into an open, central spot.
- Update the router's firmware, which often fixes Wi-Fi stability bugs.

## 8. Turn off power saving on the network adapter

When only one laptop drops, Windows may be turning off its Wi-Fi or Ethernet adapter to save power, then waking it too slowly.

**Fix on Windows:**

1. Right-click the **Start** button and open **Device Manager**.
2. Expand **Network adapters**, right-click your Wi-Fi or Ethernet adapter and choose **Properties**.
3. On the **Power Management** tab (if your adapter has one), untick **Allow the computer to turn off this device to save power**.
4. Update the adapter driver from your laptop maker's support page.
5. Plug the laptop in and test. If drops stop only on AC power, power saving was the cause.

Phones can do something similar. Turn off battery saver or low power mode briefly to test.

## Drops on every device, every day?

- **Bypass the router.** Plug a computer straight into the modem for a day. If it still drops, the router is cleared and the problem is the modem or the line.
- **Check the modem's age.** Older cable modems may no longer be on your provider's approved list, or may not handle your plan well. Check the list on your provider's site, or ask them.
- **Swap a rented modem.** Providers can usually replace one for free.
- **Keep a log** of dates, times and lights. A pattern makes it much easier for the provider to find the fault.

## When to call your internet provider

Call your provider if:

- The modem's online light drops out while the wired connection drops, after you've checked splitters and connectors.
- The modem's event log shows repeated timeouts or signal errors.
- The outside line looks damaged, or drops started after storm, construction or work by another utility.
- You rent the modem or gateway and it restarts on its own.

Ask them to **check signal levels and run a line test**. If they need to visit, show them your log of drop times. If your provider says the line is fine but Wi-Fi still drops around the house, a network installer can help with router placement, wiring or mesh Wi-Fi.
