---
title: "Mac Running Slow? 9 Fixes to Speed It Up"
description: "Mac running slow? Find the cause in Activity Monitor, then free storage, trim login items, tame browser tabs and check memory pressure, step by step."
pubDate: 2026-11-03
category: pc-laptops
subcategory: mac-problems
tags: [mac, macos, slow mac, activity monitor, storage, memory]
image: { src: /images/featured/mac-running-slow.webp, alt: "Illustration of a laptop with an hourglass on screen and a speed gauge with its needle near low" }
difficulty: easy
time: 15 to 60 min
risk: low
tools: [External drive or cloud storage, Your Mac's charger]
symptoms:
  - { label: "Fans loud, apps freezing", to: "2-find-the-culprit-in-activity-monitor" }
  - { label: "Storage almost full", to: "3-free-up-storage-space" }
  - { label: "Slow to start up", to: "4-trim-login-items-and-background-apps" }
  - { label: "Slow with lots of browser tabs", to: "5-close-browser-tabs-and-extensions" }
  - { label: "Slow right after a macOS update", to: "6-give-spotlight-time-after-an-update" }
  - { label: "Older Mac, slow at everything", to: "9-check-for-heat-and-hardware-age" }
faq:
  - q: "Why is my Mac suddenly so slow?"
    a: "The most common causes are one app or browser tab using a lot of CPU or memory, a nearly full drive, or background indexing after a macOS update. Open Activity Monitor and sort by CPU and Memory to see what's busy."
  - q: "Why is my Mac slow after an update?"
    a: "After a macOS update, Spotlight and other background tasks often re-index your files and photos. You may see processes like mds and mdworker using CPU. This usually settles down within a day or so. Keep the Mac plugged in and awake to let it finish."
  - q: "How do I see what is slowing down my Mac?"
    a: "Open Activity Monitor from Applications, Utilities, or search for it with Spotlight (Command and Space). The CPU tab shows what's using the processor, and the Memory tab shows a Memory Pressure graph. Yellow or red pressure means your Mac is short on memory."
  - q: "Can I add more RAM to my Mac?"
    a: "On Macs with Apple silicon, memory is built into the chip and can't be upgraded. Some older Intel Macs, mainly certain iMac and Mac mini models, allow RAM upgrades. Check Apple's technical specifications for your exact model."
  - q: "Do I need a cleaner app to speed up my Mac?"
    a: "Usually not. The built-in tools (Activity Monitor, Storage settings and Login Items) handle most slowdowns. Be careful with apps that claim to clean or speed up your Mac, as some are aggressive or unwanted software."
---

A slow Mac is rarely broken. In most cases something is using more than its share: **one app or browser tab eating CPU or memory**, a **nearly full drive**, **too many apps launching at login**, or **background indexing after a macOS update**. Older Macs can also simply be **short on memory** for today's apps.

macOS has the tools to find the cause built in. Start with a restart and Activity Monitor, then work down the list.

<figure><img src="/images/posts/mac-running-slow-flow.svg" alt="Flowchart: restart, then open Activity Monitor and check the Memory tab; if memory pressure is green, look for a CPU hog, a full drive, login items or indexing; if it is yellow or red, cut tabs and apps, and consider that the Mac may need more memory" width="640" height="440" loading="lazy" /><figcaption>The Memory Pressure graph tells you which half of the list to start with.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Restart your Mac, then open Activity Monitor and quit whatever is using the most CPU or memory. Free up storage, remove apps you don't need from Login Items and close spare browser tabs. If it's slow only after an update, give it a day to finish indexing.</p></div>

## How to find what's slowing it down: quick check

1. **Restart** using the Apple menu, then Restart. Note whether it's fast for a while and then slows down again.
2. **Open Activity Monitor** (in Applications, then Utilities, or press Command and Space and type "Activity Monitor").
3. **Click the CPU tab** and then the **% CPU** column to sort. Anything near the top using a lot for minutes at a time is a suspect.
4. **Click the Memory tab** and look at the **Memory Pressure** graph at the bottom.
    - **Green?** Memory is fine. Check causes 2, 3, 4 and 6.
    - **Yellow or red?** Your Mac is short on memory. Check causes 5, 8 and 9.

## 1. Restart your Mac

Macs often go weeks without a restart. Over time, apps leak memory and background processes pile up. A restart clears all of that.

**Fix:**

- Save your work, then choose **Apple menu > Restart**.
- When the restart dialog appears, untick **Reopen windows when logging back in** if you want a clean start.
- Install any pending updates while you're at it (see cause 7).

## 2. Find the culprit in Activity Monitor

One runaway process can slow everything and make the fans roar. Activity Monitor shows exactly what is busy.

<figure><img src="/images/posts/mac-running-slow-activity-monitor.svg" alt="Sketch of the Activity Monitor window with its five tabs: CPU, Memory, Energy, Disk and Network; the CPU tab sorts apps by percent CPU and the Memory tab has a memory pressure graph that is green when fine, yellow when tight and red when the Mac needs more memory" width="640" height="440" loading="lazy" /><figcaption>The CPU and Memory tabs answer most "why is it slow" questions.</figcaption></figure>

**Fix:**

1. Sort by **% CPU** on the CPU tab and by **Memory** on the Memory tab.
2. If an app you recognize is using a lot and you don't need it, quit it normally first.
3. If it won't quit, select it and click the **Stop** button (the X at the top of the window), then choose **Quit** or **Force Quit**.
4. Don't force quit processes you don't recognize. Many are part of macOS. Search the name first if you're unsure.
5. If one app keeps misbehaving, update it or reinstall it.

## 3. Free up storage space

macOS needs free space for its swap files, caches and updates. When the drive is nearly full, everything slows down and updates may fail.

**Fix:**

1. Open **Apple menu > System Settings > General > Storage**. (On older macOS versions: Apple menu > About This Mac > Storage.)
2. Review the **Recommendations**, such as storing files in iCloud or emptying the Trash automatically.
3. Click the **i** button next to categories like Applications or Documents to find and delete large files.
4. Empty the **Trash** and delete old downloads, installers and phone backups you don't need.
5. Move big photo and video libraries to an external drive.

Aim to keep a good amount free, not just a few gigabytes.

## 4. Trim login items and background apps

Apps that launch at login slow down startup and keep using memory in the background all day.

**Fix:**

1. Open **System Settings > General > Login Items** (called **Login Items & Extensions** on newer macOS versions).
2. Under **Open at Login**, select apps you don't need right away and click the **minus** button below the list.
3. Under **Allow in the Background**, turn off items for apps you no longer use.
4. Restart and see whether startup feels quicker.

Turning an item off doesn't delete the app. You can still open it when you need it.

## 5. Close browser tabs and extensions

Modern websites are heavy. A browser with dozens of open tabs, video pages and extensions can use more memory than every other app combined.

**Fix:**

- Close tabs you don't need, or bookmark them for later.
- Review your extensions and remove any you don't use or don't recognize. In Safari, open **Safari > Settings > Extensions**. In other browsers, look in the browser's settings or menu.
- In Chrome, the built-in Task Manager (in the More tools menu) shows which tabs use the most memory.
- Try another browser for a day. If the Mac feels quicker, your old browser profile or extensions are the problem.

## 6. Give Spotlight time after an update

After a macOS update or a migration to a new Mac, **Spotlight** re-indexes your files, and the Photos app may analyze your library. That background work can make a new update feel slow.

**Fix:**

- In Activity Monitor, look for processes named **mds**, **mds_stores** or **mdworker**. If they're busy, indexing is running.
- Keep the Mac plugged in and awake. It usually settles within a day or so, longer with a big library.
- Don't force quit these processes. They'll just restart.
- If it never settles, restart and check for a newer macOS update, which may include a fix.

## 7. Update macOS and your apps

Updates often fix bugs that cause slowdowns, heat and battery drain.

**Fix:**

- Open **System Settings > General > Software Update** and install what's available. Back up first with Time Machine or another method.
- Update your apps in the App Store, and update apps from other sources in their own menus.
- An app built for an older Mac may run slowly on Apple silicon. Check the developer's website for a newer version.

## 8. Check memory pressure (RAM limits)

If memory pressure is often yellow or red even with few apps open, your Mac doesn't have enough RAM for how you use it. macOS then swaps data to the drive, which is much slower than RAM.

**Fix:**

- See how much memory you have under **Apple menu > About This Mac**.
- Run fewer heavy apps at once, and close tabs (see cause 5).
- On **Apple silicon Macs**, memory is part of the chip and can't be upgraded. The fix is lighter habits or, eventually, a Mac with more memory.
- Some older **Intel** iMac and Mac mini models allow RAM upgrades. Check Apple's specifications for your exact model before buying memory.

## 9. Check for heat and hardware age

Macs slow themselves down when they get too hot, to protect the chip. Older Macs also struggle with new versions of macOS and modern apps, and some older models still use a slow spinning hard drive.

**Fix:**

- Use your Mac on a hard, flat surface, not a bed or a cushion, so the vents stay clear.
- On older Intel Macs, loud constant fans can mean dust buildup. A repair shop can clean it.
- Check **About This Mac** for the year and chip. If Apple no longer offers new macOS versions for it, apps will keep getting slower over time.
- To make the interface lighter, try **System Settings > Accessibility > Display** and turn on **Reduce motion** and **Reduce transparency**.

## Still slow after all that?

- **Try Safe Mode.** It starts the Mac with only essential software. On Apple silicon, shut down, then press and hold the power button until startup options appear. Select your startup disk, hold **Shift** and click **Continue in Safe Mode**. On Intel Macs, hold **Shift** right after turning it on. If it's fast in Safe Mode, a login item or add-on is the cause.
- **Try a new user account.** If a fresh account is fast, the problem is in your own settings or apps.
- **Reinstall macOS** from macOS Recovery as a last resort. Back up first. Reinstalling normally keeps your files, but a backup protects you if anything goes wrong.

## When to call a pro

Book an Apple Store or authorized repair visit if:

- Your Mac restarts by itself, shows error screens or won't start.
- The fans run at full speed constantly, even when idle.
- Activity Monitor shows nothing busy but the Mac is still very slow.
- You hear clicking from an older Mac with a hard drive, or Disk Utility reports errors.
- The battery is swollen or the case is lifting. Stop using it and get it checked.
