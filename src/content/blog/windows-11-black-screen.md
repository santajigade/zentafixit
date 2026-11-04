---
title: "Windows 11 Black Screen? 8 Fixes That Work"
description: "Windows 11 black screen with or without a cursor? Wake the display, restart the graphics driver, restart Explorer, use Safe Mode or undo a bad update."
pubDate: 2026-11-04
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-04
category: pc-laptops
subcategory: windows-problems
tags: [windows 11, black screen, display, graphics driver, safe mode, explorer, startup]
image: { src: /images/featured/windows-11-black-screen.webp, alt: "Illustration of a laptop with a black screen and a lone mouse cursor" }
difficulty: moderate
time: 10 to 60 min
risk: low
tools: [Keyboard and mouse, Second monitor or TV (optional), Flashlight, USB flash drive (optional)]
symptoms:
  - { label: "No picture, PC seems on", to: "1-check-the-display-connection-and-input" }
  - { label: "Black screen with only a cursor", to: "4-restart-windows-explorer" }
  - { label: "Black after sleep or wake", to: "2-wake-the-screen-and-restart-the-graphics-driver" }
  - { label: "Started after an update", to: "6-uninstall-a-recent-update" }
  - { label: "Faint image on a laptop screen", to: "8-hardware-backlight-ram-or-graphics-card" }
  - { label: "Black before Windows loads", to: "black-screen-before-windows-loads" }
faq:
  - q: "Why is my Windows 11 screen black with just a cursor?"
    a: "Usually Windows Explorer, which draws the desktop and taskbar, has failed to start or crashed. Press Ctrl + Shift + Esc to open Task Manager and run explorer.exe as a new task. If it keeps happening, a recent update, a startup app or a display driver is a common cause."
  - q: "What is the Windows key shortcut to fix a black screen?"
    a: "Press Windows key + Ctrl + Shift + B. Windows restarts the graphics driver, the screen flickers and you may hear a beep. It often brings back a screen that went black after sleep or a game."
  - q: "How do I get to Safe Mode if my screen is black?"
    a: "Turn the PC off by holding the power button, then turn it on and hold power again as soon as Windows starts loading. After two or three interrupted starts, Windows opens the recovery screen. Choose Troubleshoot, Advanced options, Startup Settings, Restart, then press 4 or F4 for Safe Mode."
  - q: "Can a Windows update cause a black screen?"
    a: "Yes. An update can install a driver that doesn't work with your graphics hardware or leave startup in a bad state. You can uninstall the latest quality or feature update from the recovery screen under Troubleshoot, Advanced options, Uninstall Updates."
  - q: "Will I lose my files fixing a black screen?"
    a: "The fixes in this guide don't delete your files. Only resetting Windows or reinstalling it can remove apps or files, and even then the Reset this PC option offers to keep your personal files. Back up first if you can reach your files in Safe Mode."
---

A black screen in Windows 11 can mean the display isn't getting a signal, the graphics driver has stopped, or Windows itself hasn't finished loading the desktop. The clue is **what you can still see**: nothing at all, a mouse cursor, or the manufacturer logo before it goes dark.

The most common causes are a **loose cable or wrong input**, a **stuck graphics driver**, **Windows Explorer failing to start**, and a **bad driver or update**. Start with the quick keyboard fixes before anything else.

<figure><img src="/images/posts/windows-11-black-screen-flow.svg" alt="Flowchart: if the PC shows no power lights, check power; if you see a cursor, restart Explorer; if no cursor, try the graphics driver shortcut and another display; if the screen goes black before the Windows logo, suspect hardware" width="640" height="440" loading="lazy" /><figcaption>Seeing a cursor, a logo or nothing at all points to different fixes.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Press Windows key + Ctrl + Shift + B to restart the graphics driver, and Windows key + P to make sure the right screen is selected. If you see only a cursor, open Task Manager with Ctrl + Shift + Esc and run explorer.exe. If none of that works, boot into Safe Mode and roll back the display driver or uninstall the latest update.</p></div>

## How to tell what's causing it: quick test

1. **Check the PC is really on.** Look for power lights, fan noise or keyboard lights. If it's completely dead, it's a power problem, not a display one.
2. **Move the mouse and press a key.** If a cursor appears, jump to fix 4.
3. **Press Windows key + Ctrl + Shift + B** and wait a few seconds.
4. **Watch a restart.** Do you see the manufacturer logo or the Windows logo before it goes black?
    - **No logo at all:** see the "Black screen before Windows loads" section.
    - **Logo, then black:** the problem is in Windows, a driver or an update (fixes 4 to 7).

## 1. Check the display connection and input

On a desktop, a loose cable or the monitor set to the wrong input looks exactly like a Windows failure.

**Fix:**

- Reseat both ends of the video cable. On a desktop with a graphics card, plug the monitor into the **card's ports**, not the motherboard ports near the USB sockets.
- Use the monitor's buttons to pick the right input (HDMI 1, HDMI 2, DisplayPort).
- Try a different cable or another monitor or TV. If the monitor itself says "no signal", our [monitor no signal guide](/gadgets/monitor-no-signal/) goes deeper.

## 2. Wake the screen and restart the graphics driver

Sometimes the display doesn't wake properly from sleep, or the graphics driver stops after a game or video.

**Fix:**

- Press **Windows key + Ctrl + Shift + B**. The screen flickers and you may hear a beep as the graphics driver restarts.
- If nothing happens, press and hold the power button for about 10 seconds to force the PC off, wait a moment, then turn it on again. Only do this when other fixes fail, as unsaved work will be lost.

## 3. Switch projection mode

If the PC thinks it should show the picture on a second screen (or a TV that's off), your main screen stays black.

**Fix:** Press **Windows key + P**, then press the down arrow and Enter to step through PC screen only, Duplicate, Extend and Second screen only. Wait a few seconds after each one.

## 4. Restart Windows Explorer

If you can see a cursor but no desktop or taskbar, **Windows Explorer** (explorer.exe) isn't running.

**Fix:**

1. Press **Ctrl + Shift + Esc** to open Task Manager. If that doesn't work, press Ctrl + Alt + Delete and choose Task Manager.
2. Choose **Run new task**, type `explorer.exe` and press Enter.
3. If the desktop comes back but the problem returns after each restart, a startup app may be the cause. In Task Manager, open the Startup apps page and disable recently added apps one at a time.

## 5. Roll back or reinstall the display driver in Safe Mode

A new or corrupted graphics driver is a very common cause, especially after a Windows update or a driver install.

<figure><img src="/images/posts/windows-11-black-screen-recovery.svg" alt="Menu path in the Windows recovery screen: Advanced options, Troubleshoot, Advanced options, then Startup Settings for Safe Mode, Uninstall Updates or System Restore" width="640" height="420" loading="lazy" /><figcaption>The recovery screen gets you to Safe Mode, update removal and System Restore.</figcaption></figure>

**Fix:**

1. **Get to the recovery screen.** Hold the power button to turn the PC off. Turn it on, and when the logo appears, hold power again to turn it off. After two or three tries, Windows shows **Preparing Automatic Repair**, then a blue screen with options.
2. Choose **Advanced options**, then **Troubleshoot**, **Advanced options**, **Startup Settings**, **Restart**.
3. Press **4** or **F4** for Safe Mode (5 or F5 for Safe Mode with Networking).
4. In Safe Mode, right-click Start, open **Device Manager** and expand **Display adapters**.
5. Right-click your graphics adapter, choose **Properties**, open the **Driver** tab and choose **Roll Back Driver** if it's available. If not, choose **Uninstall device**, then restart normally. Windows loads a basic driver so you get a picture back.
6. Then install the latest driver from your PC maker or graphics card maker. Our guide on [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/) shows how.

## 6. Uninstall a recent update

If the black screen started right after Windows Update, removing that update often fixes it.

**Fix:**

1. Open the recovery screen as in fix 5, then choose **Troubleshoot**, **Advanced options**, **Uninstall Updates**.
2. Choose **Uninstall latest quality update** first. If that doesn't help, try **Uninstall latest feature update**.
3. If you have restore points, **System Restore** on the same menu can take Windows back to an earlier date without touching your personal files.

If an update was still installing when it froze, see our guide to [Windows 11 update stuck](/pc-laptops/windows-11-update-stuck/).

## 7. Turn off Fast Startup

Fast Startup saves part of Windows to disk at shutdown so it starts faster. On some PCs it causes a black screen at startup, especially with older display drivers.

**Fix:** Once you can reach the desktop (normal or Safe Mode), open **Control Panel**, **Power Options**, **Choose what the power buttons do**, select **Change settings that are currently unavailable**, untick **Turn on fast startup** and save.

## 8. Hardware: backlight, RAM or graphics card

If none of the software fixes help, the problem may be hardware.

**Fix:**

- **Laptop flashlight test:** shine a flashlight at the screen at an angle. If you can faintly see the desktop, the **backlight** or screen has failed. An external monitor will still work.
- **Desktop with a graphics card:** if you have one, and your processor has built-in graphics, try the motherboard's video port with the card removed (power off and unplugged first). Or try a different card.
- **Recent upgrade:** if you just added RAM or a new part, put the old one back and try again.

## Black screen before Windows loads?

If you never see the manufacturer logo:

- **Unplug USB devices** (drives, hubs, phones) and try again. A connected drive can confuse startup.
- On a laptop, connect the charger and do a **hard reset**: power off, unplug the charger, hold power for 15 to 30 seconds, then reconnect and start it.
- Listen for **beep patterns** or watch for blinking lights. Many PCs signal hardware faults this way, and your PC maker's support site lists what they mean for your model.
- If the logo appears on an external monitor but not the built-in screen, the screen, cable or backlight is likely at fault.

## When to call a pro

Get help from a computer repair shop or your PC maker if:

- The screen stays black before the logo even after unplugging everything.
- The flashlight test shows a faint image (backlight or screen repair).
- The PC beeps or blinks an error code at startup.
- You can't reach Safe Mode or the recovery screen at all.
- The PC is under warranty. Opening it yourself may affect coverage.
