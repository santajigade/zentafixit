---
title: "USB Device Not Recognized? 8 Fixes for Windows 10, 11 and Mac"
description: "USB device not recognized on Windows 10 or 11? Try another port and cable, check power, reinstall it in Device Manager and turn off USB power saving."
pubDate: 2026-11-22
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-22
category: gadgets
subcategory: external-drives-and-usb
tags: [usb, usb device not recognized, device manager, windows 11, windows 10, usb hub, mac]
image: { src: /images/featured/usb-not-recognized.webp, alt: "Illustration of a laptop showing a warning sign with a USB flash drive pulled out beside its port" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [A different USB cable, A second computer for testing (optional), Powered USB hub (optional)]
symptoms:
  - { label: "Error pops up as soon as I plug in", to: "4-reinstall-it-in-device-manager-windows" }
  - { label: "Works for a while, then drops out", to: "5-turn-off-usb-power-saving-windows" }
  - { label: "Only fails through a hub or front port", to: "2-swap-the-cable-and-skip-the-hub" }
  - { label: "Flash drive or hard drive won't show", to: "7-flash-drives-and-hard-drives-check-disk-management" }
  - { label: "My Mac doesn't see it", to: "8-mac-check-system-information" }
  - { label: "Not recognized on any computer", to: "not-recognized-on-any-computer" }
faq:
  - q: "What does \"USB device not recognized\" mean?"
    a: "Windows noticed that something was plugged in, but it couldn't identify the device or load a working driver for it. The cause can be the cable, the port, a hub, low power, a driver problem or the device itself. Trying another port, cable and computer tells you which side the problem is on."
  - q: "Can a bad USB cable cause this error?"
    a: "Yes, and it's one of the most common causes. A worn cable, a loose plug or a charge-only cable can let power through while data fails. Always try a known good data cable before changing settings."
  - q: "Is it safe to uninstall USB devices in Device Manager?"
    a: "Uninstalling a device entry removes its driver, and Windows reinstalls it the next time it detects the device, usually after a restart. If you uninstall entries under Universal Serial Bus controllers, a USB keyboard and mouse may stop working until you restart, so save your work first."
  - q: "Why does my USB device keep disconnecting and reconnecting?"
    a: "Common causes are USB power saving, an unpowered hub, a loose or damaged cable, or a device that draws more power than the port supplies. Turn off USB power saving (fix 5), plug in directly, and try a different cable."
  - q: "Should I use a driver updater app to fix it?"
    a: "No. Get drivers from Windows Update, the device maker or your PC maker's support page. Third-party driver updater apps can install the wrong driver or bundle unwanted software."
---

The "USB device not recognized" message means Windows noticed something was plugged in but couldn't work out what it is. You may see a pop-up saying the last USB device you connected malfunctioned, or the device may show up in Device Manager as **Unknown USB Device** with a yellow warning icon.

Most of the time the cause is simple: a **bad or charge-only cable**, a **flaky port or hub**, **not enough power**, or a **driver that loaded wrong**. Work through the fixes in order and change one thing at a time, so you know what actually fixed it.

<figure><img src="/images/posts/usb-not-recognized-flow.svg" alt="Flowchart: restart and try another port, then try another cable without a hub; if the device works on another computer the problem is this computer, so try fixes 4 to 7; if it fails there too, check power in fix 3 and the not recognized on any computer section" width="640" height="456" loading="lazy" /><figcaption>A second computer tells you whether to fix the PC or the device.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Unplug the device, restart the computer, and plug it straight into a different port with a known good data cable. If Windows still doesn't recognize it, uninstall it in Device Manager and restart, then turn off USB power saving. If it fails on every computer, the device or its cable is the problem.</p></div>

> **Protect your data first:** If the device is a drive that holds the only copy of important files, don't accept any prompt to format, initialize or "repair" it while you troubleshoot.

## How to tell what's causing it: quick test

1. **Restart and try another port.** Plug the device directly into the computer, not a hub, dock or monitor.
2. **Try a different cable** if the device uses one, ideally the cable that came with it.
3. **Try a second computer.** If it works there, the problem is your computer's ports, settings or drivers (fixes 4 to 7). If it fails there too, the device, cable or its power is the problem (fix 3 and the last sections).
4. **Note when it fails.** An error the moment you plug in points to a driver or connection problem. A device that works, then drops out, often points to power saving or power supply (fixes 3 and 5).

## 1. Restart and try a different port

A port can stop responding after sleep, or a driver can load in a bad state. A restart clears that, and a different port rules out a worn or dirty socket.

**Fix:**

1. Unplug the device and choose **Restart** from the Start menu. A restart fully reloads drivers.
2. Plug the device back in once Windows has finished starting.
3. Try every port on the computer. On a desktop, use the **rear ports**, which connect directly to the motherboard. Front-panel ports go through an internal cable and can be less reliable.
4. Look into the port with a flashlight. Lint or debris can stop a plug seating fully. Blow it out gently with canned air; don't poke metal into it.
5. On a desktop, if nothing helps, shut down, unplug the power cord for a minute, then start it again.

## 2. Swap the cable and skip the hub

Cables cause a lot of "not recognized" errors. A worn cable can pass enough power to light up a device while data fails, and some USB-C cables are **charge-only** and carry no data at all. Hubs, docks and extension cables add more connections that can fail.

**Fix:**

- Use the cable that came with the device, or another cable you know carries data (one that works for syncing a phone, for example).
- Remove any extension cable, hub, dock or adapter, and plug in directly.
- If the device only works directly, the hub or dock is the weak link. Try the hub's own power adapter, if it has one, or replace it.
- Push plugs in fully. USB 3 Micro-B plugs (the wide, two-part plug on many older portable drives) are easy to leave half-seated.

## 3. Give the device enough power

Each USB port supplies a limited amount of power. Devices like portable hard drives, webcams and some audio interfaces can draw more than an unpowered hub or an older laptop port provides, and they fail to connect or keep dropping out.

**Fix:**

- If the device has its own power adapter, connect it and switch the device on.
- Plug power-hungry devices directly into the computer, or use a **powered USB hub** (one with its own wall adapter).
- On a laptop, plug in the charger. Some laptops limit USB power on battery; check your manual.
- Unplug other USB devices you don't need right now, then try again.

<figure><img src="/images/posts/usb-not-recognized-chain.svg" alt="Diagram of the USB chain: device, cable, hub, port and driver, each with a note: the device needs power, the cable must carry data, the hub should be powered or skipped, a rear port is best, and the driver comes from Windows or macOS" width="640" height="300" loading="lazy" /><figcaption>A break anywhere in the chain gives the same error, so test one link at a time.</figcaption></figure>

## 4. Reinstall it in Device Manager (Windows)

If the error appears as soon as you plug in, Windows may have a broken or wrong driver for the device. Removing the entry makes Windows set it up from scratch.

**Fix:**

1. With the device plugged in, right-click Start and choose **Device Manager**.
2. Look for entries with a yellow warning icon, often **Unknown USB Device** under **Universal Serial Bus controllers**, or under the device's own category (such as Disk drives or Cameras).
3. Double-click it and read the **Device status** box. Note any message or code so you can search the device maker's support site for it.
4. On the **Driver** tab, choose **Uninstall Device** and confirm.
5. Unplug the device, restart the computer, and plug it back in. Windows reinstalls the driver.
6. If nothing reappears, open the **Action** menu in Device Manager and choose **Scan for hardware changes**.

Uninstalling entries under Universal Serial Bus controllers can stop a USB keyboard and mouse until you restart, so save your work first.

## 5. Turn off USB power saving (Windows)

Windows can power down USB ports to save energy. On some PCs, a device doesn't wake back up properly and drops out or comes back as "not recognized", especially after sleep.

**Fix: stop Windows turning off the USB root hubs**

1. In **Device Manager**, expand **Universal Serial Bus controllers**.
2. Double-click each **USB Root Hub** entry (there may be several). If there's a **Power Management** tab, untick **Allow the computer to turn off this device to save power** and click OK.

**Fix: turn off USB selective suspend**

1. Open **Control Panel** and choose **Power Options**.
2. Next to your active plan, click **Change plan settings**, then **Change advanced power settings**.
3. Expand **USB settings**, then **USB selective suspend setting**, and set it to **Disabled** (on a laptop, for both On battery and Plugged in).
4. Click OK and restart.

Not every PC shows these options. If yours doesn't, skip this fix. Turning off power saving can shorten laptop battery life slightly, so you can switch it back on if it doesn't help.

## 6. Update chipset and USB drivers (Windows)

The USB ports themselves need drivers, which usually come with your PC's chipset drivers. Outdated or mismatched ones can cause repeated recognition errors on many devices, not just one.

**Fix:**

- Run **Windows Update** and install everything, including any optional driver updates.
- Get the latest **chipset** and **USB** drivers from your PC maker's support page for your exact model, or from the motherboard maker for a custom desktop.
- If the device needs its own driver (some printers, audio interfaces and capture devices do), install it from the device maker's site.

Our guide to [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/) walks through each of these sources and how to roll back a driver that makes things worse.

## 7. Flash drives and hard drives: check Disk Management

Sometimes Windows recognizes the USB device fine, but a drive still doesn't appear in File Explorer. That's a different problem: the drive is connected, but it has no drive letter or uses a format Windows can't read.

**Fix:**

1. Right-click Start and choose **Disk Management**.
2. Find the drive by its size. If it's listed with a healthy partition but no letter, right-click the partition, choose **Change Drive Letter and Paths**, then **Add** a free letter.
3. If it shows as "Not Initialized", "Unallocated" or "RAW", stop. Those choices can erase the drive.

For the full walk-through, including file system problems between Mac and Windows, see [external hard drive not showing up](/gadgets/external-drive-not-showing-up/).

## 8. Mac: check System Information

Macs don't show the Windows error message, but a device can still fail to connect. First, check whether macOS sees it at all.

**Fix:**

1. Hold the **Option** key, click the **Apple menu**, and choose **System Information**.
2. Click **USB** in the sidebar. If the device is listed, the Mac sees it, and the problem is software, a driver or (for drives) the format.
3. If it isn't listed, try another port, cable and adapter, just as on Windows. USB-C adapters and docks are common weak points.
4. On newer Mac laptops, macOS may ask whether to **allow the accessory to connect**. Choose Allow. If you dismissed it, unplug and plug the device back in.
5. Restart the Mac with the device unplugged, then connect it again.

If the device needs special software, check the maker's site for a version that supports your macOS version.

## Not recognized on any computer?

If the device fails on two computers with two different cables, the device itself is the likely problem.

- Check for physical damage: a bent or loose connector, a cracked case, or a plug that wiggles.
- If it has a power adapter, try a matching replacement from the device maker.
- Check the warranty before opening anything, as opening the case usually voids it.
- For a flash drive or hard drive with important files, stop plugging it in repeatedly and contact a **data recovery service**. Each attempt on a failing drive can make recovery harder.

## When to call a pro

Contact a computer repair shop, or the device or PC maker, if:

- No USB device works in any port on your computer, even after a restart and driver updates.
- A port is loose, bent or physically damaged.
- You notice a burning smell, heat or scorch marks around a port or device. Unplug it and stop using it.
- A drive holding important files isn't recognized anywhere, or clicks, grinds or beeps.

A repair shop can test the ports and the device with known good hardware, and replace a damaged port or board if needed.
