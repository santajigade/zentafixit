---
title: "External Hard Drive Not Showing Up? 8 Fixes for Windows and Mac"
description: "External hard drive not showing up? Check the cable, port and power, give it a drive letter in Disk Management and fix Mac or Windows format issues safely."
pubDate: 2026-11-03
category: gadgets
subcategory: external-drives-and-usb
tags: [external hard drive, usb, disk management, windows, mac, exfat, data recovery]
image: { src: /images/featured/external-drive-not-showing-up.webp, alt: "Illustration of a portable external hard drive with a USB cable and a laptop port" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [A different USB cable, A second computer for testing (optional), Powered USB hub (optional)]
symptoms:
  - { label: "No sound, no light, nothing happens", to: "1-check-the-cable-port-and-power" }
  - { label: "Shows in Disk Management, not File Explorer", to: "4-give-it-a-drive-letter-in-disk-management" }
  - { label: "Windows says disk not initialized", to: "5-disk-not-initialized-stop-before-you-click" }
  - { label: "Works on Mac, not on Windows (or the reverse)", to: "6-the-file-system-doesnt-match-your-computer" }
  - { label: "Drive is clicking or beeping", to: "drive-clicking-beeping-or-not-spinning" }
faq:
  - q: "Why is my external hard drive not showing up but the light is on?"
    a: "The drive has power, but the computer either isn't recognizing it or can't read it. Check Disk Management on Windows or Disk Utility on Mac. If the drive appears there, it usually needs a drive letter or uses a format your computer can't read. If it doesn't appear, try another cable and port."
  - q: "Will initializing a disk delete my files?"
    a: "Initializing writes a new partition table, which makes the existing files inaccessible. Recovery may still be possible afterward, but it gets harder with every step you take. If the drive held important files, don't initialize or format it. Try it on another computer first, or contact a data recovery service."
  - q: "What format works on both Mac and Windows?"
    a: "exFAT works on both and has no practical file size limit for home use. FAT32 also works on both but can't store a single file larger than 4 GB. NTFS is read-only on a Mac without extra software, and Mac formats like APFS aren't readable on Windows without extra software."
  - q: "Can a bad USB cable stop a drive from showing up?"
    a: "Yes. Cables are one of the most common causes. A worn cable, a charge-only cable, or a USB 3 cable that isn't fully seated can power the drive's light but not pass data. Try a known good cable before anything else."
  - q: "My external drive is clicking. Can I fix it myself?"
    a: "No. Repeated clicking usually means a mechanical fault inside the drive. Every time you power it on you risk more damage to the data. Unplug it and, if the files matter, contact a professional data recovery service."
---

An external hard drive that doesn't show up is alarming, but most of the time the files are still there. The computer just isn't **seeing** the drive, or it sees it and **can't read** it.

The common causes are a **bad cable, port or power supply**, a **missing drive letter** in Windows, or a **file system the computer doesn't understand**. Start with the simple checks. Don't format or initialize anything until you've read fix 5.

<figure><img src="/images/posts/external-drive-not-showing-up-flow.svg" alt="Flowchart: plug the drive directly into the computer with a known good cable; if it does not appear in Disk Management or Disk Utility it is a cable, port or power problem, if it does appear it needs a drive letter or a compatible format" width="640" height="440" loading="lazy" /><figcaption>The key question: does the system disk tool see the drive at all?</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug the drive straight into the computer with a different cable, and connect its power adapter if it has one. If it then shows in Disk Management (Windows) or Disk Utility (Mac) but not in File Explorer or Finder, give it a drive letter or check its format. Never initialize or format a drive that holds files you need.</p></div>

> **Protect your data first:** If the drive holds the only copy of important files, stop at any warning that offers to format, initialize or "repair" it. And if the drive clicks, grinds or beeps, unplug it now and jump to the last section.

## How to tell what's causing it: quick test

1. **Listen and look.** Does the drive light up, spin or vibrate when plugged in? No sign of life points to cable, port or power (fixes 1 to 3).
2. **Open the system disk tool.** On Windows, right-click Start and choose **Disk Management**. On a Mac, open **Disk Utility** (Applications > Utilities).
3. **Find the drive by its size.** If it's listed, the hardware connection works and the problem is a letter, partition or format (fixes 4 to 6).
4. **Try a second computer.** If it fails on two computers with two cables, the drive or its enclosure is the likely problem.

## 1. Check the cable, port and power

Most "dead" external drives are really a cable or port problem. The cable may carry enough power to light the LED but not carry data reliably.

**Fix:**

1. Unplug the drive and plug it straight into a port on the computer itself. Avoid hubs, docks, keyboard ports and monitor ports for now.
2. On a desktop, use a **rear port**, which connects directly to the motherboard.
3. Swap to a **different cable**, ideally the one that came with the drive. Some USB-C cables only charge and don't carry data.
4. Make sure a USB 3 Micro-B plug (the wide, two-part plug on many older portable drives) is pushed fully in.
5. Restart the computer with the drive connected.

## 2. Give it enough power

Small portable drives (usually 2.5-inch) run on USB power alone. Larger desktop drives (usually 3.5-inch) need their own **power adapter** plugged into a wall outlet, and won't work on USB power alone.

**Fix:**

- If your drive came with a power adapter, connect it and switch the drive on if it has a power button.
- Bus-powered drives can fail on unpowered USB hubs, older laptop ports and some tablets. Use a **powered USB hub** (one with its own wall adapter) or a port directly on the computer.
- Some older drives came with a Y-cable that draws power from two ports. Plug in both ends.

<figure><img src="/images/posts/external-drive-not-showing-up-connections.svg" alt="Diagram comparing three ways to connect a drive: directly to a computer port works best, through a powered USB hub works, through an unpowered hub may not supply enough power; a desktop drive also needs its wall adapter" width="640" height="400" loading="lazy" /><figcaption>Direct or through a powered hub. Unpowered hubs often can't run a hard drive.</figcaption></figure>

## 3. Check Device Manager (Windows)

If Windows doesn't list the drive in Disk Management, check whether it sees the USB device at all.

**Fix:**

1. Right-click Start and open **Device Manager**.
2. Expand **Disk drives** and **Universal Serial Bus controllers**. Look for a yellow warning icon.
3. Right-click a warning entry and choose **Uninstall device**, then unplug the drive, restart and plug it back in. Windows reinstalls the driver.
4. Check that Windows is up to date. For more help with drivers, see our guide to [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/).

## 4. Give it a drive letter in Disk Management

A drive can work perfectly and still be hidden in File Explorer because Windows didn't give it a **drive letter**. This often happens when the letter it used before is now taken by another drive.

**Fix:**

1. Open **Disk Management** and find the drive by its size.
2. If the partition shows a healthy file system (such as NTFS or exFAT) but no letter, right-click it and choose **Change Drive Letter and Paths**.
3. Click **Add**, pick a free letter and click OK.
4. The drive should now appear in File Explorer.

This step doesn't touch your files. If the menu only offers options like **New Simple Volume** or **Format**, stop and read fixes 5 and 6 first.

## 5. "Disk not initialized": stop before you click

If Windows pops up **Initialize Disk**, or Disk Management shows the drive as "Not Initialized" or "Unknown", Windows can't read the drive's partition table.

On a **brand-new, empty drive**, initializing is normal. Pick GPT for most modern drives and continue.

On a **drive with files on it**, don't. Initializing and then formatting makes your files inaccessible. Recovery may still be possible, but it gets harder.

**Fix (drive with data):**

- Click **Cancel** on the prompt.
- Try the drive on another computer, and on a Mac if it may have been formatted there.
- If it still shows as not initialized or "RAW", copy nothing to it and contact a **data recovery service** if the files matter.

## 6. The file system doesn't match your computer

Mac and Windows use different file systems, and each can't fully use the other's by default. A drive that works on one may look blank, unreadable or read-only on the other.

| Format | Windows | Mac |
|---|---|---|
| exFAT | Read and write | Read and write |
| FAT32 | Read and write (4 GB file limit) | Read and write (4 GB file limit) |
| NTFS | Read and write | Read only |
| APFS or Mac OS Extended | Not readable without extra software | Read and write |

**Fix:**

- Copy the files off on the computer that **can** read the drive.
- Then reformat it as **exFAT** if you need it to work on both. Formatting erases the drive, so only do it after the files are safely copied elsewhere.

## 7. Mac: check Disk Utility and Finder settings

On a Mac, the drive may be connected but not mounted, or hidden from the Finder sidebar and desktop.

**Fix:**

- In **Disk Utility**, choose View > **Show All Devices**. If the drive's volume is greyed out, select it and click **Mount**.
- In Finder settings, under General and Sidebar, make sure **External disks** is ticked.
- If macOS asks you to allow an accessory to connect, choose Allow.

## 8. Try another computer or enclosure

If two computers and two cables can't see it, the problem is the drive. In many external drives, the USB circuit board in the case fails while the drive inside is fine.

**Fix:** Contact the drive maker about warranty first, as opening the case usually voids it. Out of warranty, a repair shop can test the drive in a different enclosure or a USB adapter.

## Drive clicking, beeping or not spinning?

Repeated **clicking, ticking, grinding or beeping** usually means a mechanical fault, such as a damaged read head or a stuck motor.

- **Unplug it now.** Each power-on can scratch the platters and destroy data.
- Don't run disk repair tools, freeze it, tap it or open it.
- If the files matter, contact a professional **data recovery** service. Costs vary widely depending on the damage, so ask for a free evaluation and quote first.
- If the files don't matter, claim the warranty or recycle it properly.

## When to call a pro

Contact a data recovery service or a computer repair shop if:

- The drive clicks, grinds, beeps or smells hot.
- It was dropped and now isn't detected.
- Windows wants to initialize or format a drive that holds files you need.
- It shows as RAW or unreadable on every computer.

Then start a backup routine: keep important files in at least two places, so a single failed drive is an inconvenience, not a loss.
