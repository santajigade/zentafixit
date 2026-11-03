---
title: "Windows 11 Update Stuck? 8 Fixes That Work"
description: "Windows 11 update stuck at a percentage or on Working on updates? Learn how long to wait, then free space, clear the update cache and use Safe Mode."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: pc-laptops
subcategory: windows-problems
tags: [windows 11, windows update, stuck update, safe mode, troubleshooting, pc]
image: { src: /images/featured/windows-11-update-stuck.webp, alt: "Illustration of a computer monitor showing a circular progress indicator and a stalled progress bar" }
difficulty: moderate
time: 30 to 120 min
risk: low
tools: [External drive or cloud storage for a backup, Charger (for laptops), Internet connection]
symptoms:
  - { label: "Stuck at the same percent", to: "how-to-tell-if-its-really-stuck" }
  - { label: "Download stuck in Settings", to: "4-pause-and-resume-updates" }
  - { label: "Fails with a low space warning", to: "2-free-up-disk-space" }
  - { label: "Same update fails again and again", to: "6-clear-the-windows-update-download-cache" }
  - { label: "Stuck on Working on updates", to: "7-use-safe-mode-to-remove-a-bad-update" }
  - { label: "Restart loop or won't boot", to: "stuck-in-a-restart-loop-or-wont-boot" }
faq:
  - q: "How long should a Windows 11 update take?"
    a: "It varies a lot. A small monthly update often finishes within minutes, while a large feature update can take an hour or more, especially on an older PC with a hard drive. If the percentage hasn't moved and the drive light shows no activity for 2 hours or more, it's probably stuck."
  - q: "Is it safe to turn off my PC during an update?"
    a: "Avoid it if you can. Forcing power off while Windows is writing files can leave it unable to start. Only hold the power button once you're confident it's truly stuck, and plug in a laptop first. Windows usually rolls the update back on the next start."
  - q: "Why does my Windows update keep failing?"
    a: "The most common reasons are too little free disk space, a corrupted download in the update cache, a connected device or driver that conflicts, or a third-party antivirus program. Free up space, clear the cache and try again with extra devices unplugged."
  - q: "Can I stop a Windows 11 update?"
    a: "While it's downloading, yes. Go to Settings, Windows Update and choose Pause updates. Once it's installing on the restart screen, you can't safely cancel it. Let it finish or roll back by itself."
  - q: "Will I lose my files if a Windows update fails?"
    a: "Normally no. A failed update rolls back and your files stay in place. Problems are rare, but that's exactly why it's smart to back up important files before any big update or repair."
---

A Windows 11 update can look stuck in two places: in **Settings**, where the download or install percentage stops moving, or on the **blue restart screen** that says "Working on updates" or similar. Very often it isn't stuck at all, just slow.

When it really has stalled, the cause is usually **too little disk space**, a **corrupted download**, a **connected device getting in the way**, or a **bad update that needs removing**. Work through the fixes below in order.

<figure><img src="/images/posts/windows-11-update-stuck-flow.svg" alt="Flowchart: first wait at least 2 hours with no change; if the update is stuck inside Settings, check space, pause and resume, run the troubleshooter and clear the cache; if it is stuck on the restart screen, force a restart, then use Safe Mode or remove the update" width="640" height="440" loading="lazy" /><figcaption>Where the update is stuck decides which fixes to try first.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Give it at least 2 hours with no progress before you act. Then restart, free up disk space, unplug extra devices and pause then resume updates. If the same update keeps failing, clear the update cache. If the PC is stuck on the restart screen, use Safe Mode or Advanced options to remove the update.</p></div>

> **Before you start:** If you can still reach your desktop, back up important files to an external drive or cloud storage. Plug a laptop into its charger. An update losing power halfway through is a common way to turn a slow update into a PC that won't start.

## How to tell if it's really stuck

1. **Check the clock.** Note the time and the percentage. Big feature updates can sit on one number for a long while.
2. **Watch the drive activity light** if your PC has one. Flickering means it's still working.
3. **On the restart screen**, a moving spinner alone doesn't prove progress, but a percentage that changes does.
4. **Wait at least 2 hours** with no change at all, longer on an older PC with a hard drive. If nothing has moved by then, it's time to act.

## 1. Restart the PC properly

A restart clears a hung download or a background service that has stopped responding.

**Fix:**

- **Stuck in Settings:** use Start, Power, **Update and restart** or **Restart**. Don't use Shut down. Windows may not fully reset on a shutdown when Fast Startup is on.
- **Stuck on the restart screen:** press and hold the power button for about 10 seconds until the PC turns off. Wait a minute, then turn it on. Windows will usually finish the update or undo it.
- If it says "Undoing changes", leave it alone until it's done.

## 2. Free up disk space

Updates need room to download and unpack, and feature updates need a lot. Low space is one of the most common reasons an update stalls or fails.

**Fix:**

1. Open **Settings > System > Storage**.
2. Click **Temporary files**, tick the items you don't need (leave Downloads unticked unless you've checked that folder), then remove them.
3. Check **Cleanup recommendations** for large unused files and apps.
4. Move photos and videos to an external drive if you're still tight. As a rule of thumb, aim for 20 GB or more free before a feature update.

## 3. Disconnect peripherals and external drives

External drives, USB sticks, SD cards, docks and some older accessories can confuse an update, especially a feature update that checks your hardware.

**Fix:**

- Unplug everything except the keyboard, mouse and (for a desktop) the monitor.
- Remove SD cards and disconnect docking stations.
- Restart and try the update again. Plug things back in once it's done.

## 4. Pause and resume updates

If the download is stuck at a percentage in Settings, pausing resets the download and often gets it moving again.

**Fix:**

1. Open **Settings > Windows Update**.
2. Click **Pause updates** (for 1 week).
3. Restart the PC.
4. Go back to Windows Update, click **Resume updates**, then **Check for updates**.

Also check your internet connection. A weak or metered connection can make a download crawl. You can see whether a connection is set as metered under **Settings > Network & internet**, then your Wi-Fi or Ethernet properties.

## 5. Run the Windows Update troubleshooter

Windows includes a troubleshooter that checks update settings and services and resets the ones it finds broken.

**Fix:**

1. Open **Settings > System > Troubleshoot > Other troubleshooters**.
2. Next to **Windows Update**, click **Run**.
3. Follow the prompts, apply any fixes, then restart and try again.

On newer versions of Windows 11, this may open the **Get Help** app to run the same checks. Follow its steps the same way.

## 6. Clear the Windows Update download cache

Windows stores update files in a folder before installing them. If a download is corrupted, Windows can keep trying the same broken file. Clearing it makes Windows download a fresh copy. This is safe, but follow the steps carefully and only delete the folder named below.

<figure><img src="/images/posts/windows-11-update-stuck-cache.svg" alt="Three steps: open Services and stop the Windows Update service, delete the contents of C:\Windows\SoftwareDistribution\Download, then start the Windows Update service again and check for updates" width="640" height="300" loading="lazy" /><figcaption>Stop the service, empty one folder, start the service again.</figcaption></figure>

**Fix:**

1. Search Start for **Services** and open it.
2. Find **Windows Update**, right-click it and choose **Stop**.
3. Open File Explorer and go to `C:\Windows\SoftwareDistribution\Download`.
4. Select everything **inside** the Download folder and delete it. Approve the admin prompt if one appears. Don't delete any other Windows folders.
5. Back in Services, right-click **Windows Update** and choose **Start**.
6. Restart, then go to Settings > Windows Update and click **Check for updates**.

## 7. Use Safe Mode to remove a bad update

If Windows gets stuck on the restart screen every time, or starts but misbehaves after an update, Safe Mode loads only the basics so you can remove the update.

**Fix:**

1. **If you can reach the desktop**, hold **Shift** while you click Restart. **If you can't**, turn the PC on and hold the power button to switch it off as soon as Windows starts loading. After two failed starts in a row, Windows usually opens its recovery screen on the third.
2. Choose **Troubleshoot > Advanced options**.
3. Pick **Uninstall Updates** to remove the latest quality or feature update, or pick **Startup Settings > Restart** and press **4** for Safe Mode.
4. In Safe Mode, you can remove an update from **Settings > Windows Update > Update history > Uninstall updates**.
5. Restart normally. Pause updates for a week if the same update keeps causing trouble.

## 8. Install the update manually

If one update refuses to install through Windows Update, you can install it another way.

**Fix:**

- **Feature updates:** use the Windows 11 Installation Assistant from Microsoft's official Windows 11 download page. It keeps your files and apps.
- **Monthly updates:** note the update number shown in Windows Update (it starts with KB). Search for that number on the Microsoft Update Catalog website, download the version for your PC and run it.
- **Third-party antivirus:** temporarily disabling it during the install sometimes helps. Turn it back on straight after.

Drivers can block updates too. See our guide on how to [update drivers in Windows 11](/pc-laptops/update-drivers-windows-11/).

## Stuck in a restart loop or won't boot?

- Let the recovery screen appear (see fix 7), then go to **Troubleshoot > Advanced options**.
- Try **Uninstall Updates** first.
- Try **System Restore** if it's available, and pick a restore point from before the update. Your personal files are not affected.
- **Startup Repair** can fix some boot problems on its own.
- If none of those work, a reset may be needed. Choose the option to keep your files, but expect to reinstall apps.

## When to call a pro

Take your PC to a repair shop, or contact the manufacturer's support, if:

- It won't start at all and none of the recovery options work.
- You see a black screen, no recovery menu, or repeated blue error screens.
- You can't back up your files and need them recovered before a reset.
- The drive makes clicking noises or Windows reports disk errors. The drive may be failing, and updates are just the first thing to struggle.
- It's a work PC. Your IT department may control updates and have its own fix.
