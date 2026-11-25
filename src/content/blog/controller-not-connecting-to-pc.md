---
title: "Game Controller Not Connecting to PC? 8 Fixes That Work"
description: "Controller won't connect to your PC? Try a data USB cable, put it in pairing mode, remove old Bluetooth pairings, update firmware and check Steam Input."
pubDate: 2026-11-25
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-25
category: gadgets
subcategory: gaming-controllers
tags: [controller, gamepad, pc gaming, bluetooth, usb, steam, windows 11]
image: { src: /images/featured/controller-not-connecting-to-pc.webp, alt: "Illustration of a game controller beside a desktop PC with a broken Bluetooth signal between them" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [USB data cable that fits your controller, Fresh batteries or a charged battery pack, Paper clip (for some reset buttons)]
symptoms:
  - { label: "Nothing happens over USB", to: "1-use-a-usb-cable-that-carries-data" }
  - { label: "PC can't find it over Bluetooth", to: "2-put-the-controller-in-pairing-mode" }
  - { label: "Paired, but won't reconnect", to: "3-remove-the-old-pairing-and-start-again" }
  - { label: "Connects, then drops out", to: "5-fix-dropouts-and-interference" }
  - { label: "Windows sees it, the game doesn't", to: "7-check-steam-input-and-the-games-controller-settings" }
  - { label: "Lights won't come on at all", to: "controller-wont-turn-on-or-show-up-anywhere" }
faq:
  - q: "Why won't my controller connect to my PC with a USB cable?"
    a: "The most common reason is a charge-only cable. Many cheap cables have no data wires, so the controller charges but Windows never sees it. Try the cable that came with the controller or one you know transfers files, and plug it straight into a port on the PC rather than a hub."
  - q: "How do I pair an Xbox controller with a PC over Bluetooth?"
    a: "Only Xbox controllers with Bluetooth can do it (most made since the Xbox One S). Turn the controller on, then hold the small pair button on top until the Xbox button flashes quickly. On the PC, open Settings, then Bluetooth and devices, choose Add device, then Bluetooth, and pick the controller."
  - q: "Can I use a PlayStation controller on a PC?"
    a: "Yes. PlayStation controllers connect over USB or Bluetooth. Windows sees them as a game controller, but not every game supports them directly. Steam can translate the controls for games in your Steam library, which usually solves it."
  - q: "Why does my controller stop working on my console after I pair it to my PC?"
    a: "Many controllers remember only one Bluetooth device at a time, so pairing to the PC can replace the console pairing. Plugging the controller into the console with a USB cable usually pairs it back to the console."
  - q: "Do I need a wireless adapter for my controller?"
    a: "Not if your controller and PC both have Bluetooth. Some controllers also work with their own USB wireless adapter, which can be steadier than Bluetooth. Older Xbox One controllers without Bluetooth need a USB cable or the Xbox Wireless Adapter for Windows."
---

When a game controller won't connect to your PC, it either never shows up at all, pairs but won't reconnect, or connects in Windows while your game ignores it. Each of those points to a different fix, so start by noticing which one you have.

The usual causes are a **charge-only USB cable**, a controller that **isn't in pairing mode**, an **old Bluetooth pairing** getting in the way, **out-of-date firmware**, or a **game or Steam setting** that is looking for a different kind of controller.

<figure><img src="/images/posts/controller-not-connecting-to-pc-flow.svg" alt="Flowchart: first try a USB data cable. If the PC detects it, the controller works and the problem is Bluetooth pairing, so remove the old pairing and pair again. If the PC doesn't detect it over USB, try another cable and port, charge the controller and reset it" width="640" height="430" loading="lazy" /><figcaption>A wired test tells you whether the problem is the connection or the controller.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug the controller in with a USB cable you know carries data. If that works, the controller is fine: remove it from Bluetooth settings on the PC, put it in pairing mode and pair it again. If it works in Windows but not in a game, check the game's controller setting and Steam Input.</p></div>

## How to tell what's causing it: quick test

1. **Charge it or fit fresh batteries.** A low battery can let the lights come on while pairing keeps failing.
2. **Try a wired connection** with a USB cable that you know transfers data, plugged straight into the PC.
    - **Works wired?** The controller is fine. The problem is wireless pairing (causes 2 to 5).
    - **Not detected wired either?** Try another cable and port (cause 1), then reset the controller (cause 6).
3. **Check Windows itself.** Press Windows + R, type `joy.cpl` and press Enter. If the controller appears in the Game Controllers list and responds on its Properties tab, Windows sees it, and the problem is the game (cause 7).

## 1. Use a USB cable that carries data

Many USB cables, especially ones bundled with cheap gadgets, are charge-only. The controller lights up and charges, but no data reaches the PC, so Windows never detects it.

**Fix:**

- Use the cable that came with the controller, or one you know can transfer files from a phone.
- Plug straight into a USB port on the PC. On a desktop, the ports on the back (on the motherboard) are usually more reliable than front ports or a hub.
- Try a different port. If one port works and another doesn't, the port or hub is the problem.
- Listen for the Windows connect sound. If you hear it, the cable and port are fine.

## 2. Put the controller in pairing mode

Turning a controller on is not the same as pairing mode. It must be actively looking for a new device, which usually shows as a fast flashing light.

**Fix:**

- **Xbox controllers (with Bluetooth):** turn it on, then hold the small pair button on the top edge, near the USB port, until the Xbox button flashes quickly.
- **PlayStation DualShock 4:** hold the Share and PS buttons together until the light bar flashes.
- **PlayStation DualSense:** hold the Create and PS buttons together until the lights around the touch pad flash.
- **Other controllers:** check the manual. Many use a dedicated sync button or a button combination held for a few seconds.

Then, on Windows 11, open **Settings**, then **Bluetooth and devices**, make sure Bluetooth is on, choose **Add device**, then **Bluetooth**, and pick the controller from the list. Pairing mode only lasts a short time, so start the search on the PC first if it keeps timing out.

## 3. Remove the old pairing and start again

If the controller was paired before, Windows may hold a stale record that blocks a fresh connection. The controller may also remember a console instead of your PC, since many controllers keep only one Bluetooth pairing at a time.

**Fix:**

1. In **Settings**, then **Bluetooth and devices**, find the controller, open its menu and choose **Remove device**.
2. Turn the controller off, then put it back in pairing mode (cause 2).
3. Add it again from **Add device**.
4. If you also use it on a console, plug it into the console with a USB cable later to pair it back there.

For general Bluetooth problems that affect other devices too, see our guide to [Bluetooth that won't connect](/phones-tablets/bluetooth-wont-connect/).

## 4. Update the controller firmware and Windows

Controllers get firmware updates that fix connection bugs, and older firmware can struggle with newer versions of Windows.

**Fix:**

- **Xbox controllers:** install the Xbox Accessories app from the Microsoft Store, connect the controller with USB, and check for an update.
- **PlayStation controllers:** firmware updates usually come through a PlayStation console, or through a firmware update tool from the maker for some models. Check the maker's support site.
- Run **Windows Update** and install optional driver updates if any are listed for Bluetooth.
- Update your PC's Bluetooth driver from the PC or motherboard maker's support page if Windows has nothing new.

## 5. Fix dropouts and interference

If the controller connects but drops out, freezes or lags, the wireless link is weak. Bluetooth uses the crowded 2.4 GHz band, and many desktop PCs have a small antenna, or none at all if Bluetooth comes from a tiny USB dongle on the back.

<figure><img src="/images/posts/controller-not-connecting-to-pc-signal.svg" alt="Diagram of a desk setup: a controller with a clear line of sight to a Bluetooth adapter on a short USB extension at the front of the desk works well, while a dongle plugged into the back of a PC under the desk next to USB 3 devices and a Wi-Fi router gets a weak signal" width="640" height="400" loading="lazy" /><figcaption>Bring the Bluetooth adapter out from behind the PC and away from other 2.4 GHz gear.</figcaption></figure>

**Fix:**

- Move closer and make sure nothing metal or the PC case sits between the controller and the Bluetooth adapter.
- If you use a Bluetooth dongle, plug it into a short USB extension cable so it sits on the desk, not behind the PC.
- Keep the dongle away from USB 3 drives and hubs, which can interfere with nearby 2.4 GHz radios.
- Disconnect Bluetooth devices you aren't using, such as old headphones.
- If your controller has its own USB wireless adapter, try it. It is often steadier than Bluetooth.
- In **Device Manager**, open your Bluetooth adapter's Properties and, on the Power Management tab if there is one, untick the option that lets Windows turn it off to save power.

## 6. Reset the controller

A reset clears the controller's own pairing memory and settings, which fixes many stubborn problems.

**Fix:**

- **PlayStation controllers:** turn the controller off, then press a straightened paper clip into the small hole on the back of the controller and hold it for about 5 seconds. Pair again afterward.
- **Xbox controllers:** hold the Xbox button for about 10 seconds to turn it off fully, wait a moment, then turn it back on. Removing the batteries for a minute does the same.
- **Other brands:** look in the manual for a reset hole or button combination.

## 7. Check Steam Input and the game's controller settings

If Windows sees the controller in `joy.cpl` but a game ignores it, the game may only expect one type of controller, or two tools may be fighting over it.

**Fix:**

- Look in the game's settings for a controller or input option and make sure it is turned on.
- In **Steam**, open **Settings**, then **Controller**, and turn on support for your controller type (for example, PlayStation or Nintendo). Steam then translates it into a controller the game understands.
- If the controller works in the Steam menus but the game behaves strangely, try turning Steam Input off for that one game in the game's properties, or on if it was off.
- Close other controller tools or remapping apps you have installed, then test again. Two programs translating the same controller can cause doubled or missing input.
- Make sure only one controller is set as player one. Unplug any extra gamepads, racing wheels or flight sticks while you test.

## 8. Rule out a hardware fault

If nothing works on any cable, port or PC, the controller itself may be faulty. A damaged USB port on the controller, a worn battery or a failed wireless chip can all stop it connecting.

**Fix:**

- Test it on another PC, console or phone. If it fails everywhere, the controller is the problem.
- Wiggle the cable gently at the controller end while it's plugged in. If it connects and disconnects, the port is worn.
- Check the warranty. Many controllers have one, and a failed connection inside the first year is usually covered.
- If the sticks also wander on their own, our guide to [controller stick drift](/gadgets/controller-stick-drift/) covers that separately.

## Controller won't turn on or show up anywhere?

- **Charge it for at least 30 minutes** with a known good cable and charger. A fully drained battery can take a while before the lights respond.
- **Swap the batteries** on controllers that use AA batteries, and check the contacts for corrosion.
- **Try a reset** (cause 6), then a wired connection.
- If there are still no lights and no connection on any device, it needs repair or replacement.

## When to get it repaired or replaced

Contact the maker or retailer if:

- It isn't detected over USB on any cable, port or computer.
- The charging port is loose or damaged.
- It disconnects even with fresh batteries, a reset and the controller right next to the adapter.
- The battery swells, gets hot or the case cracks. Stop using it and don't try to charge it.

Opening a controller usually voids its warranty, so check that first. If it's out of warranty and a wired connection still works, using it with a cable can be a reasonable stopgap.
