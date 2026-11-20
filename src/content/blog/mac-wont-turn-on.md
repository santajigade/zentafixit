---
title: "Mac Won't Turn On? 9 Causes and Fixes"
description: "Mac won't turn on or start up? Check power and charging, force a restart, rule out the display, then use macOS Recovery, safe mode or a firmware revive."
pubDate: 2026-11-20
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-20
category: pc-laptops
subcategory: mac-problems
tags: [mac, macbook, imac, wont turn on, startup, macos recovery, apple silicon]
image: { src: /images/featured/mac-wont-turn-on.webp, alt: "Illustration of an open laptop with a dark screen, a power symbol and a charging cable with a plug" }
difficulty: easy
time: 10 to 60 min
risk: low
tools: [Your Mac's charger and cable, A known-working wall outlet, A second Mac (only for a firmware revive)]
symptoms:
  - { label: "Nothing at all: no lights, no fans", to: "1-check-the-power-source-and-charger" }
  - { label: "MacBook battery ran completely flat", to: "2-charge-a-dead-macbook-battery" }
  - { label: "Fans or a chime, but a black screen", to: "4-rule-out-a-display-problem" }
  - { label: "Folder with a question mark", to: "6-repair-the-startup-disk-in-macos-recovery" }
  - { label: "Stuck on the logo or progress bar", to: "7-start-up-in-safe-mode" }
  - { label: "Spilled liquid or dropped it", to: "mac-still-wont-turn-on" }
faq:
  - q: "How do I force a Mac to turn on?"
    a: "Press and hold the power button (Touch ID on many MacBooks) for about 10 seconds, release it, then press it once more. Make sure the Mac is connected to a working outlet first. On MacBooks, give a flat battery some time on the charger before trying."
  - q: "Do I have an Apple silicon or Intel Mac?"
    a: "If the Mac starts, choose Apple menu > About This Mac. A line that says Chip (for example Apple M1) means Apple silicon; a line that says Processor with Intel means an Intel Mac. If it won't start, look up its serial number (printed on the underside of laptops or the stand or base of desktops) on Apple's support site."
  - q: "Can I reset the SMC on an Apple silicon Mac?"
    a: "No. Apple silicon Macs don't have a separate SMC to reset. The equivalent is to shut the Mac down fully, or hold the power button for about 10 seconds, then start it again. SMC and NVRAM resets apply only to Intel Macs."
  - q: "My Mac makes a sound but the screen stays black. What does that mean?"
    a: "If you hear fans, a startup chime or keyboard lights come on, the Mac is getting power and the problem is more likely the display or a startup issue. Try raising the brightness, connecting an external display, and forcing a restart."
  - q: "Will I lose my files if my Mac won't turn on?"
    a: "Not necessarily. Most fixes here, including First Aid, safe mode and a firmware revive, leave your data alone. Reinstalling macOS from Recovery normally keeps your files too. Erasing the disk or using a firmware restore does delete data, so only do those if you have a backup."
  - q: "How much does it cost to fix a Mac that won't turn on?"
    a: "It depends on the cause. A new charger is a modest cost, while a logic board, display or battery repair out of warranty can cost hundreds of dollars. Check your warranty or AppleCare coverage before paying for repairs."
---

When a Mac won't turn on, the cause is usually simpler than it looks: **no power reaching it** (a bad outlet, cable or charger), **a MacBook battery that ran completely flat**, or a Mac that is actually on but showing **a black screen**. Less often, the Mac powers up but **can't finish starting macOS**, or the hardware itself has failed.

The first job is to tell "no power at all" apart from "powers on but won't start up." Several steps differ between **Apple silicon** Macs (M1 and later) and older **Intel** Macs, and each section says which it applies to.

<figure><img src="/images/posts/mac-wont-turn-on-flow.svg" alt="Flowchart: connect to a known-working outlet and charge, then hold the power button for 10 seconds and press it again; if there are no signs of life, check the outlet, cable and charger, and consider the battery or hardware; if there are fans, sounds or lights, check the display, then use macOS Recovery and safe mode" width="640" height="440" loading="lazy" /><figcaption>Signs of life (fans, sounds or lights) split the problem in two.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug the Mac into a wall outlet you know works, using its own charger, and let a MacBook charge for a while. Then press and hold the power button for about 10 seconds, release it and press it again. If you hear fans or see lights but the screen stays dark, check the brightness and try an external display before moving on to macOS Recovery.</p></div>

> **Safety first:** If your Mac got wet, smells of burning, or a MacBook's case is bulging or the trackpad is lifting (signs of a swollen battery), unplug it and don't try to power it on. Don't charge or press on a swollen battery. Take it to Apple or an authorized service provider.

## How to tell what's wrong: quick test

1. **Plug into a known-working outlet.** Test the outlet with a lamp or phone charger. Skip power strips and extension cords for now.
2. **Use the Mac's own charger and cable** (or another one of the same or higher wattage). On a MacBook, leave it charging for 15 to 30 minutes.
3. **Press and hold the power button for about 10 seconds**, release it, then press it once normally.
4. **Look and listen for signs of life:** fan noise, a startup chime, a keyboard backlight, the Caps Lock light when you press it, or a charging light on older MagSafe connectors.
    - **No signs of life at all?** Focus on causes 1, 2 and 3, then the last two sections.
    - **Signs of life but a black screen, or it stops partway through startup?** Go to causes 4 to 9.

## 1. Check the power source and charger

A tripped outlet, a loose cable or a failed power adapter is the most common reason a Mac seems dead. A desktop Mac has no battery, so it gets nothing at all if the outlet or cord fails.

**Fix:**

- Plug directly into a wall outlet you've just tested. If it's on a GFCI or a switched outlet, make sure it's reset and switched on.
- Check the cable at both ends for bent pins, damage, dirt or lint in the port. Unplug and reseat it firmly.
- On a MacBook, try a different USB-C port, or the MagSafe port if your model has one.
- Borrow a charger rated for your Mac if you can. Very low wattage chargers may not power some MacBooks.
- On an iMac or Mac mini, unplug the power cord, wait about 15 seconds, plug it back in and wait a few seconds before pressing the power button.

If the MacBook powers on but won't charge, see our guide to a [laptop that's plugged in but not charging](/pc-laptops/laptop-plugged-in-not-charging/).

## 2. Charge a dead MacBook battery

If a MacBook's battery drains to zero, it may not respond to the power button straight away, even once plugged in. It needs a little charge before it can start.

**Fix:**

- Leave it connected to its charger for at least 15 to 30 minutes, longer if it sat unused for weeks.
- Then hold the power button for about 10 seconds, release it, and press it again.
- Many recent MacBooks start up on their own when you open the lid or connect power, so don't be surprised if it springs to life while charging.
- If it only ever works while plugged in, the battery may need service. If it starts, check **System Settings > Battery** for a battery health or service message.

## 3. Force a restart with the power button

A Mac can freeze in a state that looks exactly like "off." A forced restart clears it, on both Apple silicon and Intel Macs.

**Fix:**

1. Press and hold the power button for about **10 seconds**. On MacBooks with Touch ID, the Touch ID sensor is the power button.
2. Release it, wait a few seconds, then press it once normally.
3. If nothing happens, repeat once more while the Mac is plugged in.

## 4. Rule out a display problem

If you heard the fans, a chime or saw a keyboard light, the Mac may be on with a blank screen. The display brightness, a sleeping display, or a failed screen or cable can all look like a dead Mac.

**Fix:**

- Press the **brightness up** key several times.
- Press the Caps Lock key. If its light toggles, the Mac is running.
- Connect an external monitor or TV. If a picture appears there, the built-in display or its connection likely needs service.
- On a desktop Mac, check the monitor's power, input source and cable.

## 5. Unplug every accessory

A faulty USB hub, dock, external drive or other accessory can stop a Mac from starting, or make it try to start from the wrong disk.

**Fix:**

- Disconnect everything except power: hubs, docks, drives, printers, SD cards, displays and other cables.
- Try starting up again. If it works, reconnect accessories one at a time to find the one causing trouble.

## 6. Repair the startup disk in macOS Recovery

If the Mac turns on but shows a **folder with a flashing question mark**, it can't find a startup disk. If it starts and then stops or keeps restarting, the disk may need repair. macOS Recovery has tools for both. How you open it depends on your chip.

<figure><img src="/images/posts/mac-wont-turn-on-chip-steps.svg" alt="Comparison chart of startup steps for Apple silicon and Intel Macs: force restart by holding the power button about 10 seconds applies to both; macOS Recovery opens by holding the power button until startup options appear on Apple silicon, or holding Command and R at startup on Intel; safe mode uses the startup options screen on Apple silicon or holding Shift on Intel; SMC and NVRAM resets apply to Intel only; a firmware revive needs a second Mac with Apple Configurator" width="640" height="480" loading="lazy" /><figcaption>The fix is often the same; only the keys you hold are different.</figcaption></figure>

**Fix:**

1. **Open macOS Recovery.**
    - **Apple silicon:** with the Mac shut down, press and hold the power button until you see "Loading startup options," then choose **Options** and click **Continue**.
    - **Intel:** press the power button, then immediately press and hold **Command and R** until you see an Apple logo or spinning globe.
2. Choose **Disk Utility**, select your startup disk (often named Macintosh HD), and click **First Aid**. Run it, then repeat for any other volumes it lists.
3. Quit Disk Utility. If First Aid finds no problems but the Mac still won't start, choose **Reinstall macOS** from the Recovery window. This normally keeps your files, but have a backup if you can.
4. If you see other symbols, such as a circle with a line through it, see Apple's support guide for your model.

## 7. Start up in safe mode

If your Mac gets stuck on the Apple logo or a progress bar, or starts and then shuts off, safe mode starts it with only the essentials. It skips login items and some extensions, and checks the startup disk.

**Fix:**

- **Apple silicon:** shut down, then hold the power button until the startup options appear. Select your startup disk, press and hold **Shift**, then click **Continue in Safe Mode**.
- **Intel:** press the power button, then immediately press and hold **Shift** until the login window appears.
- If it starts in safe mode, restart normally. If it now works, a login item or recently installed app was likely the cause. Remove anything you added just before the problem started. If it starts but crawls, see our guide to a [Mac running slow](/pc-laptops/mac-running-slow/).

## 8. Reset the SMC or NVRAM (Intel Macs only)

On Intel Macs, the System Management Controller (SMC) handles power, the battery, fans and the power button. Resetting it can bring back a Mac that ignores the power button. **This does not apply to Apple silicon Macs**, which have no separate SMC; a full shutdown or the 10-second power button hold does the same job.

**Fix:**

- **SMC on an Intel desktop (iMac, Mac mini, Mac Pro):** shut down, unplug the power cord, wait 15 seconds, plug it back in, wait 5 seconds, then press the power button.
- **SMC on an Intel MacBook:** the key combination depends on whether your model has the Apple T2 Security Chip and whether its battery is removable. See Apple's support guide for your model.
- **NVRAM (Intel only):** shut down, then press the power button and immediately press and hold **Option, Command, P and R** together for about 20 seconds before releasing. Apple silicon Macs reset NVRAM automatically when needed.

## 9. Revive the firmware with Apple Configurator

Rarely, for example after a power cut during a macOS update, the firmware can become unresponsive. Apple's fix is to **revive** the firmware from a **second Mac** running Apple Configurator, connected with a supported USB-C cable. This works for Apple silicon Macs and Intel Macs with the T2 chip.

**Fix:**

- A **revive** updates the firmware and recovery tools and is designed to keep your data.
- A **restore** erases the Mac and installs fresh firmware and macOS. Use it only if revive fails and you have a backup.
- The exact port to use and the key sequence to put the Mac in DFU mode vary by model. Follow Apple's support guide for your model, step by step.
- No second Mac? An Apple Store or authorized service provider can do this for you.

## Mac still won't turn on?

If none of the above works, the problem is likely hardware:

- **Liquid damage.** Even a small spill can short the logic board. Unplug it, don't keep trying to power it on, and get it to a repair shop quickly.
- **Drops or impacts.** A damaged board, charging port or display connection can look like "won't turn on."
- **Failed power supply** (desktops) or **battery and charging circuit** (laptops).
- **Logic board failure**, which needs professional repair or replacement.

## When to call a pro

Book a repair with Apple or an authorized service provider if:

- There are no signs of life with a known-good outlet and charger, after charging for 30 minutes and a forced restart.
- The Mac got wet, was dropped, or you smell burning.
- The MacBook case is bulging or the trackpad is lifting.
- You need a firmware revive and don't have a second Mac.
- Recovery and safe mode both fail, or Disk Utility reports that it can't repair the disk.

Check your warranty and AppleCare status first. If you have no backup, tell the technician before any repair that might erase the drive.
