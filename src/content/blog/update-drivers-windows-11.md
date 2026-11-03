---
title: "How to Update Drivers in Windows 11 Safely"
description: "Update drivers in Windows 11 the safe way: Windows Update, Device Manager, your PC maker's app and GPU drivers, plus how to roll back a bad driver."
pubDate: 2026-11-03
category: pc-laptops
subcategory: drivers-and-updates
tags: [drivers, windows 11, device manager, graphics card, windows update, restore point]
image: { src: /images/featured/update-drivers-windows-11.webp, alt: "Illustration of a laptop screen with a circuit chip and a circular update arrow" }
fixcheck: false
difficulty: easy
time: 10 to 40 min
risk: low
tools: [Your PC's model number, An internet connection]
symptoms:
  - { label: "Where should I start?", to: "1-check-windows-update-and-optional-updates" }
  - { label: "One device has a yellow warning", to: "2-update-one-device-in-device-manager" }
  - { label: "I need a graphics driver", to: "4-get-graphics-drivers-from-nvidia-amd-or-intel" }
  - { label: "Are driver updater apps safe?", to: "5-skip-third-party-driver-updater-apps" }
  - { label: "A new driver broke something", to: "6-roll-back-a-driver" }
faq:
  - q: "Does Windows 11 update drivers automatically?"
    a: "Yes, for many devices. Windows Update installs drivers that Microsoft and PC makers have tested for your hardware. Some newer or optional drivers appear under Settings > Windows Update > Advanced options > Optional updates instead, and you choose whether to install them."
  - q: "Should I update all my drivers regularly?"
    a: "Not necessarily. If everything works, there's little reason to chase every new version. Update when a device misbehaves, when a game or app asks for a newer graphics driver, or when your PC maker lists a fix or security update for your model."
  - q: "Are free driver updater programs safe?"
    a: "Many are not worth the risk. They can install the wrong driver, bundle unwanted software or push you to pay to fix problems that don't exist. Windows Update, your PC maker and the chip maker cover nearly every driver you need."
  - q: "How do I see which driver version I have?"
    a: "Open Device Manager, right-click the device and choose Properties, then open the Driver tab. It shows the driver provider, date and version number."
  - q: "What if Roll Back Driver is grayed out?"
    a: "Windows has no previous driver saved for that device. You can uninstall the device and restart so Windows reinstalls a default driver, install an older version from your PC maker's site, or use a restore point made before the update."
---

Drivers are small programs that let Windows talk to your hardware: the graphics chip, Wi-Fi, audio, touchpad, printer and more. Most of the time Windows 11 keeps them current on its own, and you never need to think about them.

When you do need a new driver, the safest sources are **Windows Update**, **your PC maker's support app or website**, and **the chip maker itself** for graphics cards. Here's how to use each one, and how to undo an update that causes trouble.

<figure><img src="/images/posts/update-drivers-windows-11-sources.svg" alt="Chart of safe driver sources in order: first Windows Update and its optional updates, then your PC maker's support app or website, then the graphics chip maker for GPU drivers; third-party driver updater apps are marked as a source to avoid" width="640" height="400" loading="lazy" /><figcaption>Start at the top and only move down if you need to.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Create a restore point, then check Settings > Windows Update, including Advanced options > Optional updates. For laptops and branded PCs, use the maker's support app or website. For gaming or graphics work, get GPU drivers from NVIDIA, AMD or Intel. If a new driver causes problems, roll it back in Device Manager.</p></div>

## Which method should I use?

1. **Everyday updates:** let Windows Update handle it (step 1).
2. **One device not working:** check it in Device Manager (step 2).
3. **Laptop or prebuilt PC:** use your PC maker's support tool (step 3). Laptop parts such as touchpads, hotkeys and power management often need the maker's version.
4. **Games or creative apps:** install the latest graphics driver from the chip maker (step 4).
5. **Something broke after an update:** roll back the driver (step 6) or use your restore point.

## Before you start: create a restore point

A restore point is a snapshot of system files, drivers and settings. If a driver update leaves your PC unstable, you can go back to it without losing your documents.

**How:**

1. Search the Start menu for **Create a restore point** and open it.
2. On the **System Protection** tab, check that protection is **On** for your system drive (usually C:). If it's off, select the drive, click **Configure**, and turn on system protection.
3. Click **Create**, give it a name such as "Before driver update," and wait for the confirmation.

Back up important files too. A restore point doesn't protect your personal files from a failing drive.

## 1. Check Windows Update and optional updates

Windows Update is the easiest and safest source. Drivers here have been submitted by the hardware maker and matched to your device.

**How:**

1. Open **Settings > Windows Update** and click **Check for updates**. Install what it finds and restart if asked.
2. Go to **Advanced options > Optional updates**.
3. Expand **Driver updates**. Tick only the drivers for devices you're having trouble with, then click **Download & install**.

Optional drivers aren't always needed. If your PC is working well, it's fine to leave them alone.

## 2. Update one device in Device Manager

Device Manager lists every piece of hardware and flags problem devices with a **yellow warning icon**. It's also where you check driver versions and roll back drivers.

**How:**

1. Right-click **Start** and choose **Device Manager**.
2. Expand the category (for example **Display adapters**, **Network adapters** or **Bluetooth**) and find the device.
3. Right-click it and choose **Update driver**, then **Search automatically for drivers**.
4. If Windows says the best driver is already installed, that only means it found nothing newer on your PC. Check Windows Update or your PC maker next.
5. If you downloaded a driver from a trusted source, choose **Browse my computer for drivers** and point it to the folder.

<figure><img src="/images/posts/update-drivers-windows-11-driver-tab.svg" alt="Device Manager device Properties window, Driver tab, showing driver provider, date and version, and the buttons Driver Details, Update Driver, Roll Back Driver, Disable Device and Uninstall Device, with Roll Back Driver highlighted" width="640" height="420" loading="lazy" /><figcaption>The Driver tab shows your version and has the Roll Back button.</figcaption></figure>

**Tip:** if a device acts up and no update helps, right-click it and choose **Uninstall device**, then restart. Windows reinstalls a default driver for most devices on startup.

## 3. Use your PC maker's support app or website

Dell, HP, Lenovo, ASUS, Acer, Microsoft Surface and other makers test drivers for each model. Their versions of chipset, audio, touchpad, power and hotkey drivers often include tweaks a generic driver lacks.

**How:**

- **Use the preinstalled app** if your PC has one. Common examples are **Dell SupportAssist**, **HP Support Assistant** and **Lenovo Vantage**. Run its update check and install the recommended items.
- **Or use the website.** Find the serial number or service tag on the sticker under the laptop or in the maker's app, enter it on the maker's support page, and download drivers for your exact model and Windows 11.
- **Check BIOS or firmware updates** listed there too. Read the notes, plug laptops into the charger, and never turn the PC off while firmware updates.

## 4. Get graphics drivers from NVIDIA, AMD or Intel

Graphics drivers change more often than most, and new games often ask for a recent one. The chip maker usually releases them before they reach Windows Update.

**How:**

1. Find your graphics chip: in Device Manager, expand **Display adapters**. Many laptops list two (a built-in Intel or AMD chip plus a separate NVIDIA or AMD chip).
2. Download from the chip maker only:
    - **NVIDIA:** the NVIDIA app or the drivers page on nvidia.com.
    - **AMD:** AMD Software: Adrenalin Edition from amd.com.
    - **Intel:** Intel Driver & Support Assistant from intel.com.
3. Run the installer and restart when it finishes. Your screen may flicker or go black briefly during the install. That's normal.
4. If you had problems with the old driver, look for a **clean install** or **factory reset** option in the installer.

On some laptops, the maker's own graphics driver is required for features like switching between the two graphics chips. If the chip maker's installer refuses to run or a laptop feature stops working, use the driver from your PC maker's support page instead.

## 5. Skip third-party driver updater apps

Ads for "driver updater" or "driver booster" programs promise to scan and fix all your drivers. Avoid them.

They can:

- Install a driver meant for a **similar but different** device, which can cause crashes or a black screen.
- Bundle toolbars, extra apps or adware.
- Report scary numbers of "outdated" drivers to sell a paid version.

Everything you need comes from Windows Update, your PC maker or the chip maker. If a site you landed on from a search ad offers a driver download, go to the maker's official site instead.

## 6. Roll back a driver

If a device stopped working, the screen flickers, or Wi-Fi drops after a driver update, go back to the previous version.

**How:**

1. Open **Device Manager**, right-click the device and choose **Properties**.
2. Open the **Driver** tab and click **Roll Back Driver**.
3. Pick a reason, click **Yes**, and restart.

If **Roll Back Driver** is grayed out, Windows has no older driver saved. Download the previous version from your PC maker or chip maker, or use System Restore (below).

Windows Update may offer the same driver again later. If it keeps causing problems, you can **pause updates** for a while in **Settings > Windows Update** while you wait for a fixed version.

## Driver update broke Windows?

If the PC crashes, shows a black screen or won't reach the desktop after a driver install:

- **Black screen but the PC is on:** press **Windows + Ctrl + Shift + B**. This restarts the graphics driver and often brings the picture back.
- **Use System Restore:** search for **Create a restore point**, click **System Restore**, and pick the point you made before the update.
- **Can't reach the desktop:** if Windows fails to start a few times in a row, it opens the recovery screen. Choose **Troubleshoot > Advanced options > System Restore**, or **Startup Settings** to start in Safe Mode and roll back the driver from there.

## When to get help

Contact your PC maker's support or a repair shop if:

- A device still doesn't work after trying the Windows, PC maker and chip maker drivers.
- Device Manager shows a device as **Unknown device** and no source has a driver for it.
- The PC crashes repeatedly even after a restore point.
- A firmware or BIOS update was interrupted and the PC won't start.

New drivers rarely make a sluggish PC fast. If performance is the real problem, see [why a Windows computer runs slow](/pc-laptops/computer-running-slow-windows/).
