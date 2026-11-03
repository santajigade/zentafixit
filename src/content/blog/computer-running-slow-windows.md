---
title: "Computer Running Slow? 9 Windows Fixes That Work"
description: "Windows PC running slow? Use Task Manager to find the cause, then cut startup apps, free disk space, scan for malware and check your drive and RAM."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: pc-laptops
subcategory: slow-pc-fixes
tags: [windows 11, slow pc, task manager, startup apps, ssd, ram]
image: { src: /images/featured/computer-running-slow-windows.webp, alt: "Illustration of a desktop monitor and tower with a speed gauge whose needle sits near low" }
difficulty: easy
time: 20 to 60 min
risk: low
tools: [External drive or cloud storage, Laptop charger]
symptoms:
  - { label: "Slow to start up", to: "3-turn-off-startup-apps" }
  - { label: "Disk at 100% in Task Manager", to: "8-check-whether-you-have-a-hard-drive-or-an-ssd" }
  - { label: "Pop-ups, ads or strange new apps", to: "5-scan-for-malware-with-windows-security" }
  - { label: "Slow with many apps or tabs open", to: "9-check-whether-you-need-more-ram" }
  - { label: "Laptop slow on battery", to: "6-change-the-power-mode" }
  - { label: "Drive almost full", to: "4-free-up-disk-space" }
faq:
  - q: "Why is my computer so slow all of a sudden?"
    a: "A sudden slowdown is usually one program or browser tab using a lot of CPU, memory or disk, a Windows update running in the background, or malware. Open Task Manager with Ctrl, Shift and Esc and sort by each column to see what's busy."
  - q: "How do I see what is slowing down my PC?"
    a: "Open Task Manager (Ctrl, Shift and Esc). On the Processes page, click the CPU, Memory and Disk column headers to sort. Whatever sits at the top using a lot for minutes at a time is your main suspect."
  - q: "Will an SSD make my computer faster?"
    a: "If your PC still has a spinning hard drive, moving to an SSD is usually the single biggest speed upgrade. Startup, app loading and updates all get much quicker. Check Task Manager, Performance, Disk to see which type you have."
  - q: "How much RAM do I need for Windows 11?"
    a: "Windows 11 needs at least 4 GB. Many people find 8 GB fine for browsing and office work, and 16 GB more comfortable for heavy multitasking, many browser tabs or photo editing. Task Manager shows how much of your memory is in use."
  - q: "Does restarting a computer make it faster?"
    a: "Often, yes. A restart clears programs that have stopped responding and memory that wasn't released. Use Restart rather than Shut down, because Fast Startup means a shutdown doesn't fully reset Windows."
---

A slow Windows PC usually isn't worn out. Most of the time something is hogging its resources: **too many startup apps**, **a nearly full drive**, **a program or browser using lots of memory**, or **malware**. On older PCs, a **spinning hard drive** or **too little RAM** is often the real bottleneck.

Windows has the tools to find out which, starting with Task Manager. Work down this list in order. The free, quick fixes come first.

<figure><img src="/images/posts/computer-running-slow-windows-task-manager.svg" alt="Chart: open Task Manager, sort the Processes page, and see which column is near 100 percent; high CPU points to a busy program, malware or power mode; high memory points to too many apps, startup items or too little RAM; high disk points to a full drive, malware or a hard drive" width="640" height="400" loading="lazy" /><figcaption>The column that's maxed out points you to the right fixes.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Restart the PC, then open Task Manager and close whatever is using the most CPU, memory or disk. Turn off startup apps you don't need, free up disk space and run a scan in Windows Security. If the disk often sits at 100% on an older PC, an SSD upgrade usually makes the biggest difference.</p></div>

## How to find what's slowing it down: quick test

1. **Restart** (not Shut down) and note whether the PC is quick at first and slows down later.
2. **Open Task Manager** with **Ctrl + Shift + Esc**.
3. On the **Processes** page, click the **CPU**, **Memory** and **Disk** column headers in turn to sort by each.
4. **See which one stays near 100%.**
    - **CPU high?** Check causes 2, 5 and 6.
    - **Memory high?** Check causes 2, 3 and 9.
    - **Disk high?** Check causes 4, 5 and 8.

## 1. Restart (not just shut down)

Many PCs go weeks without a real restart. On most Windows 11 PCs, **Fast Startup** is on, which means Shut down saves part of the system state instead of starting fresh. A restart clears stuck programs and unreleased memory.

**Fix:**

- Save your work, then choose **Start > Power > Restart**.
- If an update is waiting, choose **Update and restart** and let it finish.
- Make restarting a weekly habit.

## 2. Find the hog in Task Manager

One runaway app or browser tab can slow down everything else.

**Fix:**

1. In Task Manager, sort by CPU, Memory and Disk.
2. If an app you recognize is using a lot and you don't need it now, close it normally. If it won't close, right-click it in Task Manager and choose **End task**.
3. Don't end processes you don't recognize. Many belong to Windows. Search the name first if you're unsure.
4. If your browser is the hog, close spare tabs and remove extensions you don't use.
5. If one app keeps doing this, update or reinstall it.

## 3. Turn off startup apps

Many programs set themselves to start with Windows and run in the background all day. They slow down startup and use memory you could use for other things.

**Fix:**

1. In Task Manager, open the **Startup apps** page. (You can also use **Settings > Apps > Startup**.)
2. Look at the **Startup impact** column.
3. Right-click apps you don't need right away and choose **Disable**.
4. Leave security software and drivers you recognize (audio, touchpad, graphics) on.
5. Restart and see how much quicker it starts.

Disabling an app at startup doesn't uninstall it. You can still open it whenever you like.

## 4. Free up disk space

Windows needs free space for updates, temporary files and its page file. When the drive is almost full, everything slows down.

**Fix:**

1. Open **Settings > System > Storage**.
2. Click **Temporary files** and remove what you don't need. Check the Downloads folder before you tick it.
3. Open **Cleanup recommendations** for large or unused files and apps.
4. Turn on **Storage Sense** to clear temporary files automatically.
5. Uninstall apps you no longer use in **Settings > Apps > Installed apps**.
6. Move photos and videos to an external drive or cloud storage.

## 5. Scan for malware with Windows Security

Malware, adware and crypto-mining programs can use CPU and disk constantly while hiding in the background. Pop-ups, a new browser home page or programs you didn't install are warning signs.

**Fix:**

1. Open **Start > Windows Security > Virus & threat protection**.
2. Click **Quick scan**.
3. If it finds anything, follow the steps to remove it, then go to **Scan options** and run a **Full scan**.
4. For stubborn infections, choose **Microsoft Defender Offline scan** in Scan options. The PC will restart and scan before Windows loads.
5. Uninstall programs you don't recognize, and remove unknown browser extensions.

Run only one real-time antivirus program. Two at once can slow the PC badly.

## 6. Change the power mode

Windows can trade speed for battery life. On a laptop in a power-saving mode, everything can feel sluggish, especially on battery.

**Fix:**

1. Open **Settings > System > Power & battery**.
2. Under **Power mode**, choose **Balanced** or **Best performance** while plugged in.
3. Check whether **Energy saver** (Battery saver on some versions) is on, and turn it off if you need speed.
4. Some laptops also have a performance setting in the manufacturer's app. Check your manual.

Keep laptop vents clear. A PC that runs hot slows itself down to protect the processor.

## 7. Install Windows updates and drivers

Updates fix bugs that cause slowdowns, and old graphics, chipset or storage drivers can hurt performance.

**Fix:**

- Open **Settings > Windows Update** and click **Check for updates**.
- Look under **Advanced options > Optional updates** for driver updates offered for your PC.
- For graphics drivers, use your PC maker's or graphics card maker's official tool or website.

For step-by-step help, see our guide on how to [update drivers in Windows 11](/pc-laptops/update-drivers-windows-11/).

## 8. Check whether you have a hard drive or an SSD

Older and budget PCs often have a spinning **hard disk drive (HDD)**. Windows 11 runs on one, but slowly: the disk often sits at 100% during startup, updates and app launches. A **solid-state drive (SSD)** has no moving parts and is far quicker.

<figure><img src="/images/posts/computer-running-slow-windows-hdd-ssd.svg" alt="Comparison of a hard disk drive with spinning platters and a solid-state drive with memory chips: the hard drive has moving parts, slower startup and frequent 100 percent disk use, while the SSD has no moving parts, faster startup and rarely maxes out" width="640" height="400" loading="lazy" /><figcaption>If Task Manager says HDD and the disk is often at 100%, the drive is your bottleneck.</figcaption></figure>

**Fix:**

1. In Task Manager, open the **Performance** page and click **Disk 0**. The drive type (**SSD** or **HDD**) appears near the top right.
2. You can also search Start for **Defragment and Optimize Drives** and check the **Media type** column.
3. If it's an HDD, an SSD upgrade is usually the most noticeable improvement you can make. See our [laptop SSD upgrade guide](/pc-laptops/laptop-ssd-upgrade/).
4. Back up your files before any drive upgrade.

## 9. Check whether you need more RAM

When memory is full, Windows moves data to the drive, which is much slower, especially on a hard drive.

**Fix:**

1. In Task Manager, open **Performance > Memory**. Check the total installed and how much is **In use**.
2. If it's often near the top with just your usual apps open, you're short on memory.
3. Run fewer apps and tabs at once, and turn off startup apps (cause 3).
4. Windows 11 needs at least 4 GB. Many people find 8 GB fine for light use and 16 GB more comfortable for heavy multitasking.
5. Many desktops and some laptops have RAM slots you can upgrade. Many thin laptops have memory soldered in. Check your PC's manual or the maker's specifications first.

## Still slow after all that?

- **Lighten the visual effects.** Search Start for **Adjust the appearance and performance of Windows** and choose **Adjust for best performance**.
- **Check the drive's health.** Clicking or grinding sounds from a hard drive mean back up now.
- **Reset this PC** as a last resort: **Settings > System > Recovery > Reset PC**, choosing **Keep my files**. You'll need to reinstall your apps. Back up first anyway.

## When to call a pro

Take it to a computer repair shop if:

- Malware keeps coming back after scans.
- The hard drive clicks, grinds or Windows reports disk errors.
- The PC shuts down or restarts on its own, or overheats with fans at full speed.
- You'd like an SSD or RAM upgrade but aren't comfortable opening the case.
- You need files recovered before a reset.
