---
title: "Monitor Says No Signal? Fixes"
description: "Monitor says No Signal? Check the input source, cables, the graphics card port, Windows projection mode, resolution and sleep settings with these fixes."
pubDate: 2026-11-03
category: gadgets
subcategory: monitors-and-displays
tags: [monitor, no-signal, hdmi, displayport, graphics card, windows 11, second monitor]
image: { src: /images/featured/monitor-no-signal.webp, alt: "Illustration of a computer monitor with a blank screen and a loose display cable" }
difficulty: easy
time: 5 to 30 min
risk: low
tools: [A spare HDMI or DisplayPort cable, Your monitor's buttons or remote]
symptoms:
  - { label: "No Signal as soon as I plug it in", to: "1-select-the-right-input-source" }
  - { label: "New desktop PC, monitor stays black", to: "3-plug-into-the-graphics-card-not-the-motherboard" }
  - { label: "Second monitor says No Signal", to: "4-check-the-windows-projection-mode" }
  - { label: "No Signal after sleep", to: "5-wake-the-pc-and-reset-the-graphics-driver" }
  - { label: "Black after changing a setting", to: "6-lower-the-resolution-or-refresh-rate" }
  - { label: "No picture even at startup", to: "no-signal-even-when-the-pc-starts" }
faq:
  - q: "Why does my monitor say no signal when the PC is on?"
    a: "The monitor isn't receiving a picture on the input it's set to. Usually it's on the wrong input, the cable is loose or plugged into the motherboard instead of the graphics card, or Windows isn't sending a picture to that screen. Check those first."
  - q: "Can a bad cable cause No Signal?"
    a: "Yes. A damaged cable, a bent connector or a cable too slow for the resolution and refresh rate can give a blank screen. Try a known-good cable, and avoid long chains of adapters while testing."
  - q: "Why does my monitor say no signal after waking from sleep?"
    a: "The PC or monitor may not have woken fully, or the graphics card didn't re-detect the screen. Move the mouse and press a key, then try Windows + Ctrl + Shift + B. Updating the graphics driver often fixes repeat cases."
  - q: "How do I fix No Signal on a second monitor?"
    a: "Press Windows + P and choose Extend or Duplicate. Then open Settings > System > Display, click Detect under Multiple displays, and check the second monitor's input source and cable."
  - q: "Does a USB-C cable work for a monitor?"
    a: "Only if your PC's USB-C port supports video output (often marked with a DisplayPort or Thunderbolt symbol) and the cable supports video. Many USB-C ports and charge-only cables don't carry a picture."
---

When a monitor shows **No Signal**, the screen itself is working: it powered on and is looking for a picture. It just isn't getting one on the input it's watching. The cause is almost always simple: the **wrong input source**, a **loose or wrong cable**, a cable in the **motherboard port instead of the graphics card**, or **Windows not sending a picture** to that screen.

Work through these fixes in order. The quick ones come first.

<figure><img src="/images/posts/monitor-no-signal-flow.svg" alt="Flowchart: check the monitor's input source and both cable ends; then ask whether you see the PC maker's logo or BIOS screen when the PC starts; if no, check the GPU port, another cable and whether the PC starts; if yes, the problem is in Windows: projection mode, resolution, sleep or the graphics driver" width="640" height="430" loading="lazy" /><figcaption>A picture at startup means the hardware path works.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Use the monitor's buttons to pick the input your cable is in, and reseat the cable at both ends. On a desktop with a graphics card, plug into the card's ports, not the motherboard's. If you see a picture during startup but not in Windows, press Windows + P and choose Extend or Duplicate.</p></div>

## How to tell what's causing it: quick test

1. **Check the monitor's power light.** No light means a power problem, not a signal problem. Check the power cable and outlet.
2. **Restart the PC and watch the screen.** Do you see the PC maker's logo, the motherboard logo or a BIOS message?
    - **Yes, then it goes black:** the cable and port work. The problem is in Windows (fixes 4 to 7).
    - **No picture at all:** check input, cable and port (fixes 1, 2, 3 and 8), then the "even when the PC starts" section.
3. **Try another screen** (a TV works) with the same cable and port. If that one works, focus on the monitor's input and settings.

## 1. Select the right input source

Most monitors have two or more inputs, such as HDMI 1, HDMI 2, DisplayPort and USB-C. If the monitor is watching a different one from where your cable is plugged in, you get No Signal.

**Fix:**

- Press the monitor's **Input** or **Source** button, or open its menu, and choose the port your cable is in. Port names are printed next to each socket.
- If the monitor has an **auto input** or **auto source** setting, turn it on so it finds the active input.
- Give it a few seconds after switching. Some monitors take a moment to lock on.

## 2. Reseat the cable at both ends

A connector pushed only partway in, or one that worked loose when the desk was moved, is a common cause.

**Fix:**

1. Turn off the monitor.
2. Unplug the cable at **both** the monitor and the PC, then push each end in firmly. DisplayPort plugs usually click in. Some DVI and VGA plugs have screws to tighten.
3. Turn the monitor back on.
4. Check the connectors for bent pins or damage, and make sure the cable isn't pulled tight or kinked.

## 3. Plug into the graphics card, not the motherboard

On a desktop PC with a separate graphics card, the video ports on the motherboard (near the USB ports, higher up on the back) are usually turned off. The working ports are on the **graphics card**, lower down in a horizontal slot.

<figure><img src="/images/posts/monitor-no-signal-ports.svg" alt="Back of a desktop PC: video ports on the motherboard panel near the top are marked as usually disabled when a graphics card is installed, and the ports on the graphics card in a horizontal slot lower down are marked as the ones to use" width="640" height="420" loading="lazy" /><figcaption>With a graphics card installed, use its ports, lower down on the back.</figcaption></figure>

**Fix:**

- Move the cable to an HDMI or DisplayPort socket on the graphics card.
- If the PC has no separate graphics card, the motherboard ports are the right ones.
- Laptops have only one set of video ports, so this doesn't apply to them.

## 4. Check the Windows projection mode

Windows can send the picture to only one screen. If it's set to "PC screen only" on a laptop or "Second screen only," the other screen gets nothing. This is the usual cause when a **second monitor** or a laptop's external monitor shows No Signal.

**Fix:**

1. Press **Windows + P** on the keyboard.
2. Choose **Duplicate** or **Extend**. If the screen you need is still blank, press Windows + P again and try the other options.
3. Open **Settings > System > Display**. Under **Multiple displays**, click **Detect**.
4. If both screens are listed, select the blank one and make sure it isn't set to disconnect.

## 5. Wake the PC and reset the graphics driver

If the monitor shows No Signal after the PC has been idle, the PC may still be asleep, or the graphics card may have lost track of the screen while it slept.

**Fix:**

- Move the mouse and press a key. Press the PC's power button briefly if nothing happens (don't hold it).
- Press **Windows + Ctrl + Shift + B**. Windows restarts the graphics driver, and you may hear a beep. This often brings the picture back.
- Turn the monitor off and on with its own button while the PC is awake.
- If this happens often, update the graphics driver (fix 8). Some monitors also have a deep sleep or power saving option for DisplayPort that can cause wake problems. Check your monitor's manual.

## 6. Lower the resolution or refresh rate

If you changed the resolution or refresh rate and the screen went blank, the monitor can't display what the PC is sending. It may show No Signal, "Out of Range" or "Input not supported."

**Fix:**

- **Wait about 15 seconds.** Windows reverts a display change you don't confirm.
- If it stays blank, connect a different screen, open **Settings > System > Display**, and choose the **Recommended** resolution. Under **Advanced display**, choose a lower refresh rate.
- No other screen? Use low-resolution mode. If Windows is interrupted while starting two or three times in a row (hold the power button to turn it off as the logo shows), it opens the blue recovery screen. Choose **Troubleshoot > Advanced options > Startup Settings > Restart**, then **Enable low-resolution video**, and fix the setting from there.
- High refresh rates often need DisplayPort or a newer HDMI port and cable. Check what your monitor supports on each input.

## 7. Try another cable, port or adapter

Cables do fail, sometimes only at higher resolutions. Adapters (USB-C to HDMI, DisplayPort to HDMI and others) add another thing to go wrong.

**Fix:**

- Swap in a **known-good cable** of the same type.
- Try a **different port** on both the PC and the monitor.
- Remove adapters, docks and switches while testing, and connect directly.
- For **USB-C**, make sure the PC's port supports video (often marked with a DisplayPort or Thunderbolt symbol) and the cable isn't a charge-only cable.

If you're working with a TV rather than a monitor, many of the same checks apply. See [TV says No Signal on HDMI](/tv-audio/tv-no-signal-hdmi/) for TV-specific fixes.

## 8. Update or reinstall the graphics driver

A broken or outdated graphics driver can leave Windows unable to drive a screen, especially after a big Windows update.

**Fix:**

1. Connect a screen that works, or use the laptop screen.
2. Install the latest driver from Windows Update, your PC maker, or the graphics chip maker. See [how to update drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/).
3. If the problem started right after a driver update, roll that driver back in **Device Manager > Display adapters**.

## No Signal even when the PC starts?

If you never see a logo or BIOS screen, Windows isn't the problem yet:

- **Check the PC is really running.** Fans spinning, lights on, and no long beep pattern. Some motherboards have status lights that show which part failed. Check its manual.
- **Graphics card power:** many cards need one or more power cables from the power supply. Check they're fully clipped in.
- **Reseat parts** if you're comfortable: with the PC unplugged, reseat the graphics card and memory.
- **Test the monitor** with another device, such as a laptop or game console. If nothing shows on any input, the monitor may be faulty.

## When to call a pro

Get help from the maker or a repair shop if:

- The monitor shows No Signal with every device, cable and input.
- The PC shows no picture on any screen, even after reseating the graphics card and memory.
- You smell burning or see damage on a port or cable.
- A port feels loose or wobbles when the cable is plugged in.
