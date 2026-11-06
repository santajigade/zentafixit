---
title: "Blue Screen of Death on Windows? 9 Fixes That Work"
description: "Got a blue screen with a stop code? Note the code, undo recent drivers or updates, use Safe Mode, run SFC and DISM, test RAM and check for heat, step by step."
pubDate: 2026-11-06
category: pc-laptops
subcategory: windows-problems
tags: [windows 11, windows 10, blue screen, bsod, stop code, crash, safe mode, drivers]
image: { src: /images/featured/blue-screen-of-death.webp, alt: "Illustration of a laptop showing a plain blue crash screen with a yellow warning accent" }
difficulty: moderate
time: 15 min to 2 hours
risk: caution
tools: [External drive or USB flash drive for backups, USB flash drive (8 GB or more) for recovery media, Small Phillips screwdriver (desktop RAM check), Can of compressed air]
symptoms:
  - { label: "Started after a driver or update", to: "1-undo-a-recent-driver-or-windows-update" }
  - { label: "Stop code mentions memory", to: "5-test-your-memory-ram" }
  - { label: "Crashes while gaming or under load", to: "7-check-for-overheating-and-overclocks" }
  - { label: "Started after new hardware", to: "8-reseat-ram-and-check-new-hardware" }
  - { label: "Crashes before Windows loads", to: "stuck-in-a-blue-screen-loop" }
  - { label: "Random crashes, no clear pattern", to: "4-repair-system-files-with-sfc-and-dism" }
faq:
  - q: "Is a blue screen bad for my computer?"
    a: "One blue screen is not usually harmful by itself. Windows stops on purpose to protect your data when something goes badly wrong. The real risks are losing unsaved work and, if crashes keep happening, damaged files. Repeated blue screens mean something needs fixing, so back up your files and work through the fixes."
  - q: "What does the stop code on a blue screen mean?"
    a: "The stop code is a short name for the type of error Windows hit, such as MEMORY_MANAGEMENT or CRITICAL_PROCESS_DIED. It points you toward a likely area (memory, drivers, storage or hardware) but it is a clue, not a diagnosis. The same code can have several different causes."
  - q: "How do I find out what caused a blue screen after the PC restarts?"
    a: "Search Start for Reliability Monitor (View reliability history). Red X icons mark crashes, and clicking one shows the details Windows recorded, often including the stop code. Look for an app, driver or update installed just before the crashes began."
  - q: "Why does my crash screen look black instead of blue?"
    a: "On newer Windows 11 builds, Microsoft changed the crash screen, so it may appear black instead of blue. It is the same kind of crash and the same fixes in this guide apply."
  - q: "Can a virus cause a blue screen?"
    a: "It can, especially malware that tampers with drivers or system files, but drivers, updates and hardware are far more common causes. Running a full scan and a Microsoft Defender Offline scan is a quick way to rule it out."
  - q: "Will resetting Windows fix a blue screen?"
    a: "If the cause is software, Reset this PC (Settings > System > Recovery on Windows 11) usually fixes it and offers to keep your personal files. It will not fix failing RAM, a dying drive or overheating, so test the hardware first and back up before any reset."
---

A blue screen (often called the Blue Screen of Death, or BSOD) means Windows hit an error it couldn't recover from, so it stopped and restarted to protect your data. On newer Windows 11 builds the same crash screen may look black instead of blue. Either way, the screen shows a **stop code** that is your best clue.

The most common causes are a **bad driver or Windows update**, **corrupted system files**, **faulty or loose RAM**, a **failing drive** and **overheating or overclocking**. Malware is possible but less common. Work through the fixes in order: the quick, safe ones come first.

<figure><img src="/images/posts/blue-screen-of-death-flow.svg" alt="Flowchart: write down the stop code and back up your files, then check whether Windows starts normally; if not, use Windows Recovery for Startup Repair, Safe Mode or System Restore; if it starts but crashes now and then, undo recent updates and drivers, then run SFC and a RAM test" width="640" height="440" loading="lazy" /><figcaption>Whether Windows still starts decides where you begin.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Write down the stop code, then undo whatever changed last: a new driver, a Windows update or new hardware. If crashes continue, run DISM and SFC to repair Windows, test your RAM with Windows Memory Diagnostic and check the drive with chkdsk. If Windows won't start, use Startup Repair or Safe Mode from the recovery screen.</p></div>

> **Safety first:** Back up your files before you try bigger fixes. If Windows starts, copy your documents, photos and anything else you can't replace to an external drive or cloud storage now, because repeated crashes can damage files. If you open a desktop PC, shut it down, switch off the power supply and unplug it first. On laptops, check your manual before removing any panel, as opening some models can affect the warranty.

## How to tell what's causing it: quick test

1. **Write down the stop code.** It appears in capital letters with underscores, such as CRITICAL_PROCESS_DIED. If the screen also shows a "What failed" line with a file ending in .sys, write that down too. It is usually a driver name. Taking a phone photo is easiest.
2. **Ask what changed recently.** A new driver, a Windows update, a new app, new RAM or a new graphics card is the most likely suspect.
3. **Open Reliability Monitor.** Search Start for "reliability" and open **View reliability history**. Red X icons mark crashes. Click a day to see what failed and what was installed just before.
4. **Note when it crashes.** Crashes only while gaming or under heavy load point toward heat or power. Crashes at startup point toward drivers, the boot drive or system files. Random crashes often point toward RAM.

<figure><img src="/images/posts/blue-screen-of-death-stop-codes.svg" alt="Table of common stop codes and typical causes: CRITICAL_PROCESS_DIED, system files or a driver; MEMORY_MANAGEMENT, RAM or a driver; IRQL_NOT_LESS_OR_EQUAL, usually a driver or RAM; DRIVER_IRQL_NOT_LESS_OR_EQUAL, a driver; PAGE_FAULT_IN_NONPAGED_AREA, RAM, a driver or antivirus; INACCESSIBLE_BOOT_DEVICE, boot drive or storage setting; WHEA_UNCORRECTABLE_ERROR, hardware, heat or overclock" width="640" height="470" loading="lazy" /><figcaption>Stop codes point to a likely area, not a guaranteed cause.</figcaption></figure>

Treat the table as a starting point. Any stop code can have other causes, so if the suggested fixes don't help, keep working down the list.

## 1. Undo a recent driver or Windows update

Drivers run deep inside Windows, so a buggy one can crash the whole system. A new Windows update can also clash with an older driver.

**Fix:**

1. **Roll back a driver:** right-click Start, open **Device Manager**, right-click the device you updated (often under Display adapters, Network adapters or Storage controllers), choose **Properties**, open the **Driver** tab and click **Roll Back Driver** if it's available.
2. **Uninstall a recent update:** go to **Settings > Windows Update > Update history > Uninstall updates** and remove the update installed just before the crashes began.
3. **Remove a new app** you installed around the same time, especially antivirus, VPN, overclocking or hardware control software, which often install their own drivers.
4. Restart and use the PC normally for a day to see if the crashes stop.

Once things are stable, get drivers from Windows Update or your PC or device maker, not from driver updater tools. Our guide to [updating drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/) walks through it.

## 2. Start Windows in Safe Mode

Safe Mode starts Windows with only basic drivers. If the crashes stop there, a driver or startup app is the likely cause, and it gives you a stable place to undo changes and copy your files.

**Fix:**

1. Open the Windows Recovery Environment. If Windows starts, hold **Shift** while you click **Restart**. If it doesn't, Windows usually opens the recovery screen on its own after two or three failed starts.
2. Choose **Troubleshoot > Advanced options > Startup Settings > Restart**.
3. Press **4** or **F4** for Safe Mode, or **5** or **F5** for Safe Mode with Networking.
4. In Safe Mode, roll back drivers or uninstall apps as in fix 1.

If your PC uses BitLocker or device encryption, the recovery screen may ask for a recovery key. It is often saved in the Microsoft account you used to set up the PC, so look it up from another device.

## 3. Roll back with System Restore

System Restore returns Windows system files, drivers and settings to an earlier restore point. It doesn't touch your personal files, but apps installed after that point may need reinstalling.

**Fix:**

- **If Windows starts:** search Start for **Create a restore point**, click **System Restore** and pick a point from before the crashes began.
- **If it doesn't:** from the recovery screen, choose **Troubleshoot > Advanced options > System Restore**.

If no restore points are listed, System Restore wasn't turned on. Skip to the next fix.

## 4. Repair system files with SFC and DISM

Damaged Windows files can cause crashes such as CRITICAL_PROCESS_DIED. Two built-in tools check and repair them.

**Fix:**

1. Right-click Start and open **Terminal (Admin)** or **Command Prompt (Admin)**.
2. Type `DISM /Online /Cleanup-Image /RestoreHealth` and press Enter. This repairs the Windows image that SFC uses as its source. It can take several minutes and may seem stuck at times, so let it finish.
3. Then type `sfc /scannow` and press Enter.
4. Restart when both are done. If SFC reports that it found and fixed files, watch whether the crashes stop.

## 5. Test your memory (RAM)

Faulty RAM is a classic cause of random blue screens, especially MEMORY_MANAGEMENT and PAGE_FAULT_IN_NONPAGED_AREA.

**Fix:**

1. Save your work, then search Start for **Windows Memory Diagnostic**.
2. Choose **Restart now and check for problems**. The PC restarts and runs the test, which can take a while.
3. Windows shows the result after it restarts. If it reports errors, a memory stick is likely faulty. See fix 8 for reseating and testing one stick at a time.

A clean result doesn't fully rule out RAM, but it makes it less likely.

## 6. Check the drive with chkdsk

A failing or corrupted drive can crash Windows, and INACCESSIBLE_BOOT_DEVICE often means Windows can't read the drive it starts from.

**Fix:**

1. Open **Terminal (Admin)** and type `chkdsk C: /f` then press Enter.
2. Because C: is in use, it will ask to run at the next restart. Type **Y**, then restart and let it finish.
3. Many drive makers offer a free health tool that reads the drive's own health status. If it shows warnings, back up immediately and plan to replace the drive.

## 7. Check for overheating and overclocks

Heat and unstable overclocks make processors and graphics cards produce errors, which can show up as WHEA_UNCORRECTABLE_ERROR or crashes only during games and heavy work.

**Fix:**

- Make sure vents aren't blocked. Use a laptop on a hard, flat surface, not a bed or couch.
- With the PC off and unplugged, blow dust out of vents and fans with compressed air in short bursts. Hold fans still so they don't spin too fast.
- Turn off any overclock. In the BIOS or UEFI settings, set CPU and memory settings back to default, including memory profiles such as XMP or EXPO, then test again. Check your motherboard or PC manual for where these settings live.

## 8. Reseat RAM and check new hardware

A memory stick or card that has worked loose, or a new part that isn't compatible, can cause crashes. This is mostly a desktop fix. Many laptops have RAM soldered in place.

**Fix:**

1. Shut down, switch off the power supply, unplug the PC and touch a bare metal part of the case to discharge static.
2. Release the clips on each RAM stick, remove it and press it back in firmly until the clips snap shut.
3. Reseat the graphics card and check that its power cables are fully connected.
4. If crashes began after adding a part, remove it and test. With more than one RAM stick, try one stick at a time to find a bad one.

## 9. Scan for malware

Malware that tampers with system files or drivers can cause crashes, though it's a less common cause than the fixes above.

**Fix:**

1. Open **Windows Security > Virus & threat protection** and run a **Full scan** from **Scan options**.
2. Then run the **Microsoft Defender Offline scan** from the same menu. It restarts the PC and scans before Windows fully loads.

## Stuck in a blue screen loop?

If Windows crashes every time it starts, you can still fix it from the recovery screen.

- **Run Startup Repair:** let the PC fail to start two or three times to open the recovery screen, then choose **Troubleshoot > Advanced options > Startup Repair**.
- **Undo the latest update:** under **Troubleshoot > Advanced options > Uninstall Updates**, remove the latest quality or feature update.
- **Try Safe Mode or System Restore** (fixes 2 and 3) from the same menu.
- **Check recent BIOS changes.** If INACCESSIBLE_BOOT_DEVICE appeared after a BIOS change or update, the storage setting may have changed. Restore BIOS defaults and check your manual.
- **No recovery screen at all?** On another PC, make Windows installation media on a USB flash drive with Microsoft's media creation tool, boot from it and choose **Repair your computer**.

If the screen goes black rather than showing a crash screen, see our [Windows 11 black screen guide](/pc-laptops/windows-11-black-screen/) instead.

## When to call a pro

Get help from a computer repair shop or your PC maker's support if:

- Windows Memory Diagnostic or a drive health tool reports errors and you aren't comfortable replacing parts.
- The PC crashes even in Safe Mode or from installation media, which points toward hardware.
- You smell burning, see swollen laptop batteries, or fans run at full speed with the PC still overheating.
- Your files aren't backed up and the drive is failing. Stop using it and let a pro try to recover the data first.
- The PC is under warranty. Opening it yourself could complicate a claim.
