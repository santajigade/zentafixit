---
title: "Router Not Working? 8 Causes and Fixes for a Dead Router"
description: "Router not working, with no lights, a red light or no Wi-Fi? Find out if it is the power, the modem, your ISP or the router itself, and how to fix it."
pubDate: 2026-11-18
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-18
category: networking
subcategory: routers-and-modems
tags: [router, wifi, modem, no lights, red light, power adapter, firmware, isp outage]
image: { src: /images/featured/router-not-working.webp, alt: "Illustration of a Wi-Fi router with dark status lights and an unplugged power adapter" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Ethernet cable, Phone with mobile data, Spare power adapter with matching specs]
symptoms:
  - { label: "No lights at all", to: "1-no-power-reaching-the-router" }
  - { label: "Red or orange light", to: "4-a-red-or-orange-warning-light" }
  - { label: "Lights on, but no internet", to: "3-the-modem-or-isp-is-down-not-the-router" }
  - { label: "My Wi-Fi name disappeared", to: "5-wi-fi-name-not-showing-up" }
  - { label: "Can't open the admin page", to: "6-cant-reach-the-admin-page" }
  - { label: "Router feels hot", to: "7-the-router-is-overheating" }
faq:
  - q: "How do I know if my router is broken or it's my internet?"
    a: "Plug a laptop straight into the modem with an Ethernet cable, bypassing the router. If the laptop gets online, the router is the problem. If it doesn't, the modem or your ISP is the problem. Restart the modem first if you swap devices, because some modems only talk to one device until rebooted."
  - q: "What does a red light on a router mean?"
    a: "It depends on the brand. On many routers a red or orange light points to no internet connection from the modem, but on others it means a hardware fault or a firmware problem. Check the label on the router or its manual for your model before you act on it."
  - q: "Can a bad power adapter stop a router from working?"
    a: "Yes. A failing adapter can give no power at all, or just enough to light the LEDs while the router keeps rebooting. Test with an adapter that matches the original exactly in voltage, amps, plug size and polarity, which are printed on the label."
  - q: "How long do routers usually last?"
    a: "There's no fixed lifespan. Many work for years, but heat, power surges and missing firmware updates shorten that. If yours no longer gets security updates from the maker, it's worth replacing even if it still works."
  - q: "Should I factory reset a router that isn't working?"
    a: "Only after you've ruled out power, the modem and your ISP. A factory reset erases your Wi-Fi name, password and settings, so it's a later step, not the first one. It can fix a corrupted configuration but won't fix dead hardware."
---

When your router stops working, nothing in the house can get online, and it's hard to tell whether the router itself has died or something upstream of it has failed. The fix depends on which one it is, so the first job is to narrow it down.

The most common causes are **a power problem (outlet, power strip or adapter)**, **the modem or your ISP being down**, and **a router that has overheated or crashed after a firmware glitch**. A truly dead router is less common than it feels. Here's how to work out which you have.

<figure><img src="/images/posts/router-not-working-diagnosis-flow.svg" alt="Flowchart: check if the router has any lights; if not, test the outlet and power adapter; if lights are on, plug a laptop into the modem; if that works the router is at fault, if not the modem or ISP is" width="640" height="460" loading="lazy" /><figcaption>Two questions split most router problems into power, router or upstream.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>If the router has no lights, check the outlet and power adapter first. If the lights are on but nothing works, plug a laptop straight into the modem: if it gets online, the router is the problem; if not, it's the modem or your ISP. Restart, cool down or update the router before you factory reset or replace it.</p></div>

## How to tell what's causing it: quick test

1. **Look at the lights.** No lights at all means a power problem (causes 1 and 2). Lights on means the router has power and the problem is elsewhere.
2. **Check for an outage.** Turn off Wi-Fi on your phone and use mobile data to open your ISP's app or website, or call them. If there's an outage in your area, wait it out (cause 3).
3. **Restart in order.** Unplug the modem and router for 30 seconds. Plug in the modem first, wait until its lights settle, then plug in the router and give it 2 to 3 minutes.
4. **Bypass the router.** Connect a laptop to the modem with an Ethernet cable. Internet works? The router is at fault (causes 4 to 8). No internet? The modem or ISP is (cause 3).

## 1. No power reaching the router

A router with no lights at all is usually not getting power. Outlets controlled by a wall switch, tripped power strips and surge protectors that have worn out are frequent culprits.

**Fix:**

- Plug a lamp or phone charger into the same outlet to prove it works.
- If the router is on a power strip or surge protector, plug it straight into the wall to test. Surge protectors can stop passing power after absorbing a big surge.
- Check that the router has a power button or rocker switch on the back, and that it's on.
- Push the barrel plug fully into the router. A loose plug can cut power when the router is bumped.

## 2. A failed or wrong power adapter

The power adapter (the "brick") is one of the parts most likely to fail. A dying adapter can give no power, or just enough to light the LEDs while the router keeps rebooting every few minutes.

**Fix:**

- Feel the adapter. Very hot, swollen, buzzing or smelling of burning plastic means unplug it and replace it.
- Read the label on the adapter and the router. Note the **output voltage (V)**, **current (A)**, plug size and the polarity symbol.
- Test with a spare adapter only if every one of those matches exactly. The wrong voltage or polarity can permanently damage the router.
- Buy a replacement from the router maker or a listing that matches all the specs. Generic adapters are often fine if the numbers match.

## 3. The modem or ISP is down, not the router

If the router lights look normal but no device can get online, the router may be fine and the connection coming into the house is the problem. The router can only pass along what the modem gives it.

<figure><img src="/images/posts/router-not-working-modem-vs-router.svg" alt="Diagram of the chain from the ISP line to the modem, then the router, then your devices, showing a laptop plugged straight into the modem to test whether the router or the modem is at fault" width="640" height="360" loading="lazy" /><figcaption>Plugging a laptop straight into the modem shows which side of the chain has failed.</figcaption></figure>

**Fix:**

- Check your ISP's app, website or phone line for outages, using mobile data.
- Look at the modem's lights. See our guide to [what modem lights mean](/networking/modem-lights-meaning/) for what to look for.
- Check the coax, phone or fiber cable going into the modem is tight and undamaged.
- If you have one combined modem and router (a "gateway"), you can't bypass the router. Call your ISP, who usually owns that box and can test it remotely.

## 4. A red or orange warning light

Many routers use a red, orange or amber light to signal a problem, but the meaning varies by brand and model. On some it means "no internet from the modem," on others it points to a hardware or firmware fault. Check the label on the router or its manual for exactly what your light means.

**Fix:**

- Note which light is red (power, internet or Wi-Fi) and whether it's solid or blinking, then look it up in the manual.
- Check the Ethernet cable between the modem and the router's WAN or internet port (often a different color from the others). Try a different cable.
- Restart the modem and router in order, as in the quick test.
- If the light stays red with a working modem, see causes 7 and 8.

## 5. Wi-Fi name not showing up

Sometimes the router is working but its Wi-Fi isn't broadcasting. Wired devices still get online, but your Wi-Fi name (SSID) has vanished from phones and laptops.

**Fix:**

- Look for a Wi-Fi on/off button on the router. Some models have one and it's easy to press by accident.
- Check the app or admin page: the Wi-Fi radio may be turned off, set to a schedule, or set to hide the network name.
- If only the 5 GHz or 6 GHz network is missing, your device may not support that band. Look for the 2.4 GHz network instead.
- If devices see the network but say "no internet," the router is broadcasting and the problem is upstream (cause 3).

## 6. Can't reach the admin page

The admin page is where you change router settings. If it won't load, you can't check or fix much else.

**Fix:**

- Use the exact address printed on the router's label. It's often something like 192.168.0.1 or 192.168.1.1, but brands differ, and some use a web address or an app instead.
- Connect with an Ethernet cable if Wi-Fi is down, and turn off any VPN on that computer.
- Make sure the computer is connected to the router, not to another network or a mesh point set up separately.
- Try a different browser or a private window. Accept the security warning only if you typed the router's own address.
- If the login is refused and nobody knows the password, a factory reset is the only way back in.

## 7. The router is overheating

Routers run warm, but one that's too hot to hold can slow down, drop connections, reboot on its own or lock up completely. Heat is a common reason a router "dies" in summer or after being moved into a cabinet.

**Fix:**

- Unplug it and let it cool for 20 to 30 minutes.
- Move it into open air: not in a closed cabinet, on carpet, behind a TV or stacked on the modem.
- Stand it the way the maker intended (upright or flat) so the vents work, and blow dust out of the vents.
- If it overheats again in a cool, open spot, the hardware may be failing.

## 8. Firmware glitch or failed update

Firmware is the router's built-in software. A bug, a crash or an update interrupted by a power cut can leave the router stuck with lights on but doing nothing, or stuck in a boot loop.

**Fix:**

- Restart it once and wait a full 5 minutes. A router finishing an update can take longer than usual to boot.
- If it starts, update the firmware from the app or admin page, and don't unplug it while it updates.
- If it never finishes booting, do a factory reset. Our guide on [how to reset your router](/networking/how-to-reset-router/) shows how long to hold the button and what you'll lose.
- Some routers have a recovery mode for a failed update. Check the maker's support site for your exact model rather than guessing.

## Router still completely dead?

If you've tried a known-good outlet and a matching adapter, and there are still no lights, the router has most likely failed. Check whether it's under warranty or, if your ISP supplied it, ask them for a replacement. A router that's several years old and no longer getting firmware updates is worth replacing anyway, because missing security patches leave your network exposed.

When you set up a new one, use a strong Wi-Fi password and sign in to change the default admin password straight away.

## When to call your ISP or replace the router

Call your ISP if:

- A laptop plugged straight into the modem can't get online.
- The modem's lights look wrong, or there's a known outage.
- The router or gateway was supplied by them.

Replace the router if:

- It has no power with a known-good outlet and adapter.
- It keeps overheating in a cool, open spot.
- A factory reset doesn't stop it rebooting or freezing.

Unplug it right away and don't use it again if it smells of burning, shows scorch marks or the case has melted.
