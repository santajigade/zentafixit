---
title: "Wi-Fi Slow on One Device Only? 9 Fixes That Work"
description: "Wi-Fi fast on your phone but slow on one laptop or tablet? Compare devices, then fix the band, VPN, background downloads, drivers and router limits."
pubDate: 2026-11-07
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-08
category: networking
subcategory: slow-internet-fixes
tags: [wi-fi, slow internet, laptop, phone, windows, vpn, router]
image: { src: /images/featured/wifi-slow-on-one-device.webp, alt: "Illustration of a router beside two phones, one with full Wi-Fi signal and one with a weak signal and a barely filled loading bar" }
difficulty: easy
time: 10 to 40 min
risk: low
tools: [A second device such as your phone, A speed test website or app, Ethernet cable (optional)]
symptoms:
  - { label: "Slow only in a far room", to: "3-check-the-band-and-the-distance" }
  - { label: "Started after installing a VPN", to: "4-turn-off-any-vpn-or-proxy" }
  - { label: "Slow on my Windows laptop", to: "6-update-the-wi-fi-driver-windows" }
  - { label: "Older phone, laptop or tablet", to: "8-check-the-devices-wi-fi-standard" }
  - { label: "After changing router settings", to: "9-check-router-limits-priority-and-mac-filtering" }
  - { label: "Slow even next to the router", to: "still-slow-right-next-to-the-router" }
faq:
  - q: "Why is my Wi-Fi slow on one device but fast on others?"
    a: "If other devices in the same spot are fast, your internet plan and router are working. The slow device is usually on the weaker 2.4 GHz band, running a VPN, downloading updates in the background, using an outdated Wi-Fi driver, or simply has an older, slower Wi-Fi radio."
  - q: "Can a phone case slow down Wi-Fi?"
    a: "It can. Cases with metal parts, metal plates for magnetic mounts, or built-in battery packs can weaken the signal a little. Take the case off and run a speed test in the same spot to check."
  - q: "Does a VPN slow down Wi-Fi?"
    a: "A VPN sends all your traffic through another server, which adds distance and extra work for the device. A nearby, fast server may barely change your speed, while a distant or busy one can slow things a lot. Disconnect it briefly to compare."
  - q: "Should I turn off private or random MAC addresses?"
    a: "Keep them on for public Wi-Fi, where they protect your privacy. On your home network, turning them off for that one network is fine if your router uses device rules, such as priority or parental limits, that need to recognize the device."
  - q: "Will a new router fix one slow device?"
    a: "Usually not. If every other device is fast, the router is doing its job. A new router only helps if the old one is very old, or if the slow device supports a newer Wi-Fi standard than the router does."
---

When one laptop, phone or tablet crawls on Wi-Fi while everything else in the house is fast, the good news is that your internet plan and router are probably fine. Something about that one device, or how it connects, is holding it back.

The most common causes are **a weak or crowded band (2.4 GHz instead of 5 GHz)**, **distance and walls**, **a VPN**, **background updates or cloud sync**, and on Windows laptops, **an outdated Wi-Fi driver**. Less often it's **an older Wi-Fi radio**, **a router limit** or **a hardware fault**.

<figure><img src="/images/posts/wifi-slow-on-one-device-flow.svg" alt="Flowchart: run a speed test on the slow device and on another device in the same spot at the same time; if both are slow, the problem is the spot, the router or the internet service; if only one is slow, the problem is that device's settings, software or Wi-Fi hardware" width="640" height="440" loading="lazy" /><figcaption>A side-by-side test tells you whether to fix the device or the spot.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Run a speed test on the slow device and another device side by side. If only one is slow, restart it, forget and rejoin the network, turn off any VPN, pause background downloads and update its Wi-Fi driver. If it's still slow right next to the router, the device's Wi-Fi hardware may be old or faulty.</p></div>

## How to tell what's causing it: quick test

1. **Put both devices in the same spot.** On a phone, turn off mobile data so you're testing Wi-Fi.
2. **Run the same speed test on both,** one after the other, using the same website or app.
3. **Both slow?** The problem is the spot or the connection, not the device. Move closer to the router, or check the router and internet service.
4. **Only one slow?** The problem is on that device. Work through the fixes below in order.
5. **Optional: move the slow device right next to the router** and test again. If it's fast there, distance or band is the cause (fix 3). If it's slow even there, look at its software, settings and hardware (fixes 4 to 9).

## 1. Restart the device

A device that has run for days can end up with stuck apps or a confused Wi-Fi radio. A full restart clears that.

**Fix:**

1. Fully restart the device (not just sleep or lock it).
2. On a phone or tablet, you can also turn **airplane mode** on, wait 10 seconds, then turn it off.
3. Run your speed test again.

## 2. Forget the network and rejoin

Saved Wi-Fi settings can get stuck, especially after a router change or update. Rejoining makes the device connect from scratch.

**Fix:**

- **iPhone or iPad:** go to **Settings > Wi-Fi**, tap the info button next to your network and tap **Forget This Network**.
- **Windows:** open Wi-Fi settings, choose **Manage known networks**, select your network and choose **Forget**.
- **Mac and Android:** open the Wi-Fi settings, find your network and choose the forget or remove option. Menu names vary by version.
- Reconnect and type the password again.

## 3. Check the band and the distance

Most routers broadcast on two bands, and some newer ones on three. **2.4 GHz** reaches farther and goes through walls better, but it's slower and more crowded. **5 GHz** (and **6 GHz** on newer gear) is faster but has shorter range. If your router uses one network name for all bands, a device can get stuck on 2.4 GHz even when it's close enough for 5 GHz.

**Fix:**

- **Move closer** and test again. Walls, floors, metal, mirrors and fish tanks all weaken Wi-Fi.
- **Turn Wi-Fi off and on** near the router so the device picks the band again.
- If your router shows separate network names for each band, join the **5 GHz** one when you're within a room or two of the router.
- If it uses one name, some router apps show which band each device is on, or let you split the bands. Check your manual.
- On some Windows laptops, the Wi-Fi adapter's **Advanced** tab in Device Manager has a **Preferred Band** option. Not every adapter has it.
- If the slow device is in a far room, better router placement or mesh Wi-Fi is the real fix. See our guide to [mesh Wi-Fi placement](/networking/mesh-wifi-placement/).

Signal strength is shown in **dBm** on some devices, a negative number where closer to zero is stronger. Around -67 dBm or stronger is a common target for smooth streaming and video calls. (For how the scale works, see this explainer on [decibels, dB and dBm](https://www.instrumentationblog.in/decibel-in-electronics-db-dbm/).) On a Mac, hold **Option** and click the Wi-Fi icon in the menu bar to see it.

## 4. Turn off any VPN or proxy

A VPN sends all your traffic through another server, often far away, and a busy server slows everything. A leftover proxy setting can do the same.

**Fix:**

- Disconnect or quit the VPN app and run the speed test again.
- If it's much faster without the VPN, pick a closer server in the app, or update the app.
- **Windows:** go to **Settings > Network & internet > Proxy** and turn off any manual proxy you didn't set up on purpose.
- Some security apps filter web traffic too. Pause it briefly to test.

## 5. Stop background updates and cloud sync

The device may be fast, but busy. Updates, game downloads and photo or file backups can use most of the connection without you noticing.

**Fix:**

- **Windows:** open **Task Manager** (Ctrl + Shift + Esc) and click the **Network** column on the Processes tab to see what's using the connection.
- **Mac:** open **Activity Monitor** and check the **Network** tab.
- Let large updates finish, or pause them, and pause sync apps and game launchers while you test.
- On a phone, check for a photo backup or app updates in progress.

## 6. Update the Wi-Fi driver (Windows)

On Windows laptops, an old or buggy Wi-Fi driver is a common reason one machine is slower than everything else.

**Fix:**

1. Right-click **Start** and open **Device Manager**.
2. Expand **Network adapters**, right-click your Wi-Fi adapter and choose **Update driver**.
3. Windows often says the best driver is already installed. Check your **laptop maker's support page** for a newer Wi-Fi driver for your model, too.
4. Install any pending updates in **Windows Update**, including optional driver updates.
5. Restart and test again.

Our guide on [how to update drivers in Windows 11](/pc-laptops/update-drivers-windows-11/) walks through each method.

## 7. Turn off power saving and low data mode

Battery and data saving modes trade speed for battery life or lower data use.

**Fix:**

- **Windows laptop:** plug it in and test. Try a higher-performance power mode in **Settings > System > Power & battery**. In Device Manager, open the Wi-Fi adapter's **Properties** and, on the **Power Management** tab (if it has one), untick **Allow the computer to turn off this device to save power**.
- **iPhone:** turn off **Low Power Mode** in **Settings > Battery**. In **Settings > Wi-Fi**, tap the info button next to your network and turn off **Low Data Mode**, which cuts background activity and can lower video quality in some apps.
- **Android:** turn off battery saver and data saver briefly to test. Names and locations vary by brand.

## 8. Check the device's Wi-Fi standard

Older devices have older Wi-Fi radios. A laptop with Wi-Fi 4 (802.11n) won't match a new phone with Wi-Fi 6 or 7, even in the same chair. Budget devices may also have fewer antennas.

<figure><img src="/images/posts/wifi-slow-on-one-device-standards.svg" alt="Chart of Wi-Fi generations: Wi-Fi 4 (802.11n) uses 2.4 and 5 GHz; Wi-Fi 5 (802.11ac) uses 5 GHz; Wi-Fi 6 (802.11ax) uses 2.4 and 5 GHz; Wi-Fi 6E adds 6 GHz; Wi-Fi 7 (802.11be) uses 2.4, 5 and 6 GHz. Newer generations are faster, and top speed is capped by the older of the device and the router" width="640" height="420" loading="lazy" /><figcaption>The older of the device and the router sets the top speed.</figcaption></figure>

**Fix:**

- **Windows:** open Command Prompt and run `netsh wlan show interfaces`. The **Radio type** line shows the standard in use, such as 802.11ac or 802.11ax.
- **Mac:** hold **Option** and click the Wi-Fi icon. The **PHY Mode** line shows the standard.
- **Phones and tablets:** check the maker's spec sheet for your model.
- If the device is stuck on an old standard such as Wi-Fi 4, a **USB Wi-Fi adapter** that supports a newer standard can help a desktop or laptop. Plug it into a short USB extension cable so it isn't right next to other USB 3 devices, which can interfere with 2.4 GHz.
- For a desktop or TV near the router, an **Ethernet cable** beats any Wi-Fi upgrade.

## 9. Check router limits, priority and MAC filtering

Many routers can limit single devices with speed caps, priority (QoS), parental controls, scheduled pauses or a block list (MAC filtering). An old rule, or one someone else set, can slow one device.

**Fix:**

- Open your router's app or admin page and find the device list. Look for **speed limits**, **priority**, **parental controls** or **access control** set on that device.
- Remove the limit, or give the device normal or high priority, and test again.
- Check the device isn't on the **guest network**. Some routers limit guest speeds.
- **Private or random MAC addresses:** phones, tablets and Windows PCs can use a different hardware address (MAC) per network, so the router may see a new device and your rule no longer matches. For your home network only, you can switch this off: on iPhone, tap the info button next to the network and change **Private Wi-Fi Address**; on Android, look for a **Privacy** or MAC option in the network's details; on Windows, look for **Random hardware addresses** in Wi-Fi settings.

## Still slow right next to the router?

If it's still slow sitting beside the router, look at these:

- **Malware:** run a full scan. On Windows, use **Windows Security**. Unknown apps using a lot of network in Task Manager or Activity Monitor are a warning sign.
- **Phone cases and accessories:** remove cases with metal parts, magnetic mount plates or battery packs, and test again.
- **A damaged antenna:** on many laptops the Wi-Fi antennas run through the screen lid. If Wi-Fi got worse after a drop or a screen repair, an antenna cable may be loose or damaged.
- **Reset network settings:** on Windows 11, go to **Settings > Network & internet > Advanced network settings > Network reset**. On iPhone, go to **Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings**. You'll need to re-enter Wi-Fi passwords.
- **Test on another network,** such as a phone hotspot. If it's slow everywhere, the device is the problem.

## When to call a pro

Contact the device maker or a repair shop if:

- The device is slow on every Wi-Fi network, even beside the router, after a network reset.
- Wi-Fi got worse after a drop, water exposure or a screen or battery repair.
- The Wi-Fi adapter disappears from Device Manager, or keeps turning itself off.

If several devices are slow in the same rooms, that's coverage: a network installer can help with placement, mesh Wi-Fi or Ethernet. If every device is slow, even wired, contact your internet provider.
