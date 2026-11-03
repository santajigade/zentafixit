---
title: "Video Doorbell Keeps Going Offline? 8 Fixes That Work"
description: "Video doorbell keeps going offline? Check the Wi-Fi signal at the door, the 2.4 GHz band, transformer power, the battery in cold weather and router changes."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: smart-home
subcategory: cameras-and-doorbells
tags: [video doorbell, doorbell camera, wi-fi, offline, transformer, battery, mesh wifi]
image: { src: /images/featured/video-doorbell-offline.webp, alt: "Illustration of a video doorbell beside a front door with a weak Wi-Fi signal reaching it from a router" }
difficulty: easy
time: 15 to 60 min
risk: caution
tools: [Your phone with the doorbell app, Router login details, Multimeter (for wired doorbells), Screwdriver]
symptoms:
  - { label: "Drops offline at random", to: "1-check-the-wi-fi-signal-at-the-door" }
  - { label: "Wired doorbell keeps rebooting", to: "2-check-the-power-to-a-wired-doorbell" }
  - { label: "Goes offline when it's cold", to: "3-charge-and-protect-the-battery" }
  - { label: "Stopped after a new router", to: "4-reconnect-after-router-changes" }
  - { label: "Can't see my Wi-Fi network", to: "5-use-the-24-ghz-band" }
  - { label: "No lights at all", to: "doorbell-wont-power-on-at-all" }
faq:
  - q: "Why does my video doorbell keep disconnecting from Wi-Fi?"
    a: "The most common reason is a weak signal at the front door, because the router is often far away and the signal has to pass through exterior walls, brick or a metal door. Low power from the doorbell transformer, a cold or low battery, and router changes are the next most likely causes."
  - q: "Does cold weather affect a video doorbell?"
    a: "Yes, for battery models. Lithium-ion batteries hold less charge in the cold and drain faster, and many will not charge when they are near or below freezing. Wired doorbells are much less affected, though very low temperatures can still be outside some models' rated range. Check your manual for the operating temperature."
  - q: "Do video doorbells need 2.4 GHz Wi-Fi?"
    a: "Many models connect only on 2.4 GHz, and some also support 5 GHz. At a front door, 2.4 GHz is often the better choice anyway because it travels farther through walls. Check your model's specifications."
  - q: "Can a weak doorbell transformer cause a video doorbell to go offline?"
    a: "Yes. A video doorbell needs more power than a simple push button. If the transformer's voltage or VA rating is too low, the doorbell may reboot when the chime rings, when it records video at night, or at random, and it shows as offline while it restarts."
  - q: "Will a Wi-Fi extender help my video doorbell?"
    a: "Often, yes. A mesh node or extender placed about halfway between the router and the door, where it still gets a good signal, can give the doorbell a much stronger connection. Some doorbell makers sell their own chime or extender for this purpose."
---

When a video doorbell keeps going offline, it usually isn't faulty. The front door is one of the hardest places in a home to reach with Wi-Fi, and doorbells have tight power budgets, so small problems show up as dropouts.

The most common causes are **a weak Wi-Fi signal at the door**, **not enough power from the doorbell transformer** (wired models), **a low or cold battery** (battery models), and **router changes** such as a new password or a new router. These fixes apply to most brands, including Ring, Google Nest and Arlo doorbells.

<figure><img src="/images/posts/video-doorbell-offline-signal.svg" alt="Diagram of a house: the Wi-Fi signal from a router at the back of the home weakens as it passes interior walls and an exterior wall to reach the doorbell by the front door, and a mesh node placed halfway gives the doorbell a strong signal" width="640" height="360" loading="lazy" /><figcaption>Every wall between the router and the door weakens the signal. A mesh node halfway helps.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Check the doorbell's signal strength in its app. If it's weak, move the router or add a mesh node or extender between the router and the door, and make sure the doorbell is on the 2.4 GHz band. If the signal is fine, the problem is usually power: a transformer that's too weak for a wired doorbell, or a battery that's low or too cold to charge.</p></div>

> **Safety first:** The doorbell itself runs on low voltage, but its transformer is connected to your home's 120 V wiring. Turn off the breaker for the doorbell circuit before removing the doorbell or touching the transformer, and leave transformer replacement to an electrician if you're not comfortable working with household wiring.

## How to tell what's causing it: quick test

1. **Check other devices.** If your phone and laptop also lose internet, fix the router or internet service first.
2. **Look at the signal reading** in the doorbell app's device health or device info screen. A weak or "poor" reading points to fix 1, 5 or 6.
3. **Note when it drops.** Offline right after the chime rings, at night, or at random reboots on a wired doorbell suggests power (fix 2). Offline on cold mornings suggests the battery (fix 3).
4. **Think about recent changes.** A new router, new password or new internet provider points straight to fix 4.

## 1. Check the Wi-Fi signal at the door

Your router is often at the back or the middle of the house, while the doorbell sits outside the front wall. The signal passes through interior walls, an exterior wall, and sometimes brick, stucco with metal mesh, or a metal door frame. Each one weakens it, and video needs a steady connection.

**Fix:**

- Open the doorbell app and check the signal strength reading. Many apps show it as a word (good, fair, poor) or as a number in dBm, where numbers closer to zero are stronger. (For what dBm means, see this [decibel and dBm explainer](https://www.instrumentationblog.in/decibel-in-electronics-db-dbm/).)
- Stand at the door with your phone and run a speed test on Wi-Fi. A very slow result there means the doorbell is struggling too.
- Move the router to a more central, higher spot, away from metal objects and appliances.
- If the doorbell is on a metal frame, ask the maker whether a wedge or corner mount that moves it slightly away from the frame is available for your model.

## 2. Check the power to a wired doorbell

A wired video doorbell runs on low-voltage AC from your existing doorbell transformer, the same small transformer that powered your old button. Video doorbells need more power than a plain button, and many specify a minimum voltage (often somewhere in the 16 to 24 V AC range) and a minimum VA rating. An undersized or old transformer can make the doorbell reboot, especially when the chime rings, and it shows as offline while it restarts.

<figure><img src="/images/posts/video-doorbell-offline-power.svg" alt="Wiring diagram: 120 volt house wiring feeds a doorbell transformer, which sends low voltage AC through the indoor chime to the video doorbell at the front door; a note says to check the transformer label for voltage and VA" width="640" height="360" loading="lazy" /><figcaption>The transformer label tells you whether it can power a video doorbell.</figcaption></figure>

**Fix:**

1. Find your doorbell's power requirements in its manual or on the maker's website.
2. Find the transformer. It's often near the electrical panel, in the basement, attic, garage or a closet, or mounted on a junction box. Its label shows the output voltage and VA.
3. If you're comfortable using a multimeter, measure AC volts across the two doorbell wires (doorbell removed, wires not touching anything). Compare with the label and the doorbell's requirement.
4. If the transformer is too small, replace it with one that meets the doorbell's specification. This job connects to 120 V wiring, so call an electrician unless you're experienced.
5. Check whether your doorbell needs a power kit or chime adapter for your type of indoor chime (mechanical or digital). Missing it can cause power trouble or a chime that doesn't ring.
6. Tighten loose wire connections at the doorbell terminals (breaker off).

## 3. Charge and protect the battery

Battery doorbells go offline when the battery runs low, and cold weather makes this much worse. Lithium-ion batteries hold less charge in the cold, and many won't charge at all when they're near or below freezing (32°F).

**Fix:**

- Check the battery level in the app. Charge it fully indoors at room temperature.
- In winter, charge the battery indoors and let it warm up before charging if it's been outside.
- If your model supports it, connecting it to the existing doorbell wires can trickle charge the battery. Check the manual for what that does on your model.
- Cut battery drain: reduce motion sensitivity, shorten recording length, and turn off features you don't use, such as live view checks from the app.
- A spare battery (if your model uses a removable one) lets you swap instead of waiting.

## 4. Reconnect after router changes

A doorbell remembers your Wi-Fi name and password. A new router, a reset, a password change, or a new internet provider's equipment all look like a different network, even if the name is the same.

**Fix:**

- In the doorbell app, look for an option to change or reconnect Wi-Fi for the device. On many models you'll need to press a setup button on the doorbell itself.
- Enter the new password carefully. Passwords are case-sensitive.
- If you can't remember the old settings, you can usually remove the doorbell from the app and set it up again.

## 5. Use the 2.4 GHz band

Many video doorbells connect only on **2.4 GHz**, and 2.4 GHz travels farther through walls than 5 GHz, which matters at the front door. If your router uses one network name for both bands (band steering or smart connect), the doorbell may struggle to join or keep its connection.

**Fix:**

- If your router shows separate names, pick the one that isn't marked 5G or 5 GHz.
- If setup keeps failing with a combined network, temporarily give the 2.4 GHz band its own name in the router settings, connect the doorbell, and then decide whether to keep it that way.
- If your model supports 5 GHz and the router is close, either band can work. Choose the one with the stronger reading at the door.

## 6. Add a mesh node or extender

When moving the router isn't practical, bring Wi-Fi closer to the door. A **mesh Wi-Fi system** or an extender placed about halfway between the router and the door usually fixes chronic dropouts.

**Fix:**

- Place the node where it still gets a strong signal from the router, not right next to the door. See our guide on [where to put mesh Wi-Fi nodes](/networking/mesh-wifi-placement/).
- If the extender creates its own network name, connect the doorbell to whichever network is strongest at the door.
- Some doorbell makers sell a plug-in chime that also extends Wi-Fi for their doorbells. Check what's available for your model.

## 7. Update the firmware

Doorbell makers fix connection bugs through firmware updates, which install automatically when the doorbell is online and idle. A doorbell that keeps dropping can miss the update that fixes it.

**Fix:**

- Check the firmware version in the app's device info and compare it with the maker's latest, if listed.
- Improve the signal or power first so the doorbell stays online long enough to update.
- Update your router's firmware too, through its app or web page.

## 8. Check your upload speed and router limits

Live video and recordings are sent **from** your home, so they depend on your upload speed, which is often much lower than download. Several cameras uploading at once can overload a slow connection.

**Fix:**

- Run a speed test and note the upload figure. If it's low, check your internet plan.
- Lower the video quality setting in the app if your model offers one.
- Check the router for MAC filtering, a full device list, or parental controls that block unknown devices.

## Doorbell won't power on at all?

- **Battery models:** charge the battery fully indoors and reinsert it firmly.
- **Wired models:** check the breaker that feeds the transformer, and check whether the old doorbell button or chime worked before the swap. A transformer can fail completely.
- **Check the wires** at the doorbell (breaker off) for a broken or loose wire, and look for corrosion from rain.
- If there's still no power and the wiring and transformer test fine, contact the maker. The unit may be faulty.

## When to call an electrician

Call a licensed electrician if:

- The transformer needs replacing or upgrading, or you can't find it.
- There's no voltage at the doorbell wires and the breaker is on.
- You see scorch marks, melted insulation or a buzzing, hot transformer.
- You want new wiring run to the door for a battery doorbell.

For Wi-Fi only problems, the doorbell maker's support team can often check the device's connection history and tell you whether it's a signal or power issue.
