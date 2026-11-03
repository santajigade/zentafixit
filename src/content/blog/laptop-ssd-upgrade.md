---
title: "How to Upgrade Your Laptop to an SSD"
description: "Upgrade your laptop to an SSD step by step: check 2.5-inch SATA vs M.2 SATA vs NVMe, M.2 size and key, back up, clone or reinstall, and install safely."
pubDate: 2026-11-03
category: pc-laptops
subcategory: upgrades
tags: [ssd, laptop, upgrade, nvme, m.2, sata, cloning, bitlocker]
image: { src: /images/featured/laptop-ssd-upgrade.webp, alt: "Illustration of an open laptop base with an M.2 SSD being slid into its slot" }
fixcheck: false
difficulty: moderate
time: 1 to 3 hours
risk: low
tools: [Small Phillips screwdriver (often size 0 or 00), Plastic pry tool, New SSD, USB flash drive or SSD enclosure, External drive for backup]
symptoms:
  - { label: "Which SSD fits my laptop?", to: "1-find-out-what-your-laptop-takes" }
  - { label: "M.2 SATA or NVMe?", to: "2-pick-the-right-ssd-sata-or-nvme" }
  - { label: "My laptop uses BitLocker", to: "3-back-up-and-save-your-bitlocker-key" }
  - { label: "Clone or start fresh?", to: "4-choose-clone-or-fresh-install" }
  - { label: "New SSD not detected", to: "new-ssd-not-showing-up" }
faq:
  - q: "Can I put an NVMe SSD in any laptop?"
    a: "No. The laptop needs an M.2 slot that supports NVMe (PCIe). Some M.2 slots only support SATA drives, and older laptops may only have a 2.5-inch bay. Check your laptop's manual or the maker's spec page before you buy."
  - q: "Is it worth upgrading an old laptop to an SSD?"
    a: "If it still has a spinning hard drive, usually yes. An SSD makes startup, app launches and file searches much faster, and it's often the single biggest improvement you can make to an older laptop."
  - q: "Do I need to reinstall Windows after upgrading to an SSD?"
    a: "Not if you clone your old drive to the new one. A fresh install is cleaner and is the better choice if Windows was slow or unstable, but you'll need to reinstall your apps and copy your files back."
  - q: "Will I lose my Windows license when I change the drive?"
    a: "Usually not. Windows 11 licenses on most laptops are tied to the hardware and linked to your Microsoft account, so Windows normally activates again on its own after a clean install on the same laptop."
  - q: "What size SSD should I get?"
    a: "Pick at least the capacity of the data you have now, with room to grow. For Windows 11 with everyday apps, 500 GB to 1 TB suits most people. Check how much of your current drive is used in Settings > System > Storage."
---

Swapping an old hard drive or a small SSD for a new SSD is one of the easiest laptop upgrades, and it can make an aging laptop feel new. The hard part isn't the screwdriver work. It's **buying the right drive** and **moving Windows over without losing anything**.

Before you order, you need three answers: **what slot your laptop has** (2.5-inch bay or M.2), **what that slot supports** (SATA or NVMe), and **whether storage is removable at all**. Then back up, choose clone or fresh install, and do the swap.

<figure><img src="/images/posts/laptop-ssd-upgrade-types.svg" alt="Comparison of three laptop SSD types: a 2.5-inch SATA drive that connects through a SATA connector, an M.2 SATA drive usually with two notches called B and M key, and an M.2 NVMe drive usually with one notch called M key; NVMe is the fastest but only works in an NVMe-capable slot" width="640" height="420" loading="lazy" /><figcaption>Same M.2 shape, different connection. Check what the slot supports.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Check your laptop's manual for a 2.5-inch bay or an M.2 slot, and whether the M.2 slot supports SATA or NVMe and which length (usually 2280). Back up your files and save your BitLocker recovery key, then clone the old drive or do a fresh Windows install. Work unplugged and grounded.</p></div>

## Before you buy: quick checklist

1. **Find your exact model number** on the sticker under the laptop or in the maker's support app.
2. **Look up the storage spec** in the user manual or service manual on the maker's support site. Search for "storage," "M.2" or "SSD."
3. **Note four things:** the slot type, SATA or NVMe support, the M.2 length, and whether there's a second free slot.
4. **Check how much space you use** in **Settings > System > Storage** so the new drive is big enough.
5. **Confirm the drive is not soldered.** If the manual says storage isn't user-replaceable, stop here.

## 1. Find out what your laptop takes

Laptops use one of these:

- **2.5-inch bay:** common in older laptops with a hard drive. A 2.5-inch SATA SSD drops right in. Most laptop bays take **7 mm thick** drives. Some older ones take 9.5 mm, and a 7 mm drive still fits those, sometimes with a spacer.
- **M.2 slot:** a small card slot on the main board, used by most laptops made in recent years. Some laptops have both, or two M.2 slots.
- **Soldered storage:** many thin laptops and recent MacBooks have storage built into the main board. It can't be upgraded, so an external SSD is your only option there.

To see what's in your laptop now, search the Start menu for **Defragment and Optimize Drives**. The **Media type** column shows "Hard disk drive" or "Solid state drive." Your PC maker's support app may show the exact drive model too.

## 2. Pick the right SSD: SATA or NVMe

M.2 is only the **shape**. The drive inside talks to the laptop one of two ways:

| Type | Fits | Speed | Notes |
| --- | --- | --- | --- |
| 2.5-inch SATA | 2.5-inch bay | Good, much faster than a hard drive | Easiest upgrade for older laptops |
| M.2 SATA | M.2 slot that supports SATA | Same as 2.5-inch SATA | Usually has two notches (B and M key) |
| M.2 NVMe | M.2 slot that supports NVMe (PCIe) | Several times faster than SATA | Usually has one notch (M key) |

<figure><img src="/images/posts/laptop-ssd-upgrade-m2-sizes.svg" alt="Outline of M.2 SSD lengths drawn to scale, all 22 mm wide: 2230 is 30 mm long, 2242 is 42 mm, 2260 is 60 mm and 2280 is 80 mm, the most common laptop size; the screw sits at the far end opposite the connector" width="640" height="360" loading="lazy" /><figcaption>The four digits are width and length in millimeters. 2280 is the most common.</figcaption></figure>

**What to check:**

- **Protocol:** a drive can fit an M.2 slot physically and still not work if the slot doesn't support it. An NVMe drive won't run in a SATA-only slot, and some NVMe-only slots ignore M.2 SATA drives.
- **Length:** match the number in the spec, such as **2280** (22 mm wide, 80 mm long). Some compact laptops use **2230** or **2242**. A longer drive won't reach the mounting screw.
- **Thickness:** very thin laptops may need a **single-sided** drive (chips on one side only). Check the manual if it mentions this.
- **PCIe generation:** a newer-generation NVMe drive works in an older NVMe slot, but runs at the slot's speed. There's little point paying extra for speed the laptop can't use.

## 3. Back up and save your BitLocker key

Even a smooth upgrade can go wrong, and with a fresh install your files stay behind on the old drive.

**How:**

1. **Back up your files** to an external drive or cloud storage. Check that the backup opens before you start.
2. **Check for BitLocker or device encryption.** Many Windows 11 laptops turn on device encryption automatically. Look in **Settings > Privacy & security > Device encryption**, or search for **Manage BitLocker**.
3. **Save the recovery key.** If encryption is on, it's usually stored in your Microsoft account online. You can also choose **Back up your recovery key** in Manage BitLocker. Write it down or save it somewhere off the laptop.
4. If you plan to clone, consider choosing **Suspend protection** in Manage BitLocker first, and check afterward that it's back on.

Without that key, you may be locked out of the drive if the laptop asks for it after the swap.

## 4. Choose clone or fresh install

**Clone** copies everything (Windows, apps, settings and files) to the new SSD, so the laptop starts up just as it was.

- Many SSD brands offer a free cloning tool for their drives. Check the SSD maker's site.
- With only one drive slot, connect the new SSD to the laptop with a **USB enclosure or adapter** that matches the drive type (SATA or NVMe), clone, then swap it in.
- The used space on the old drive must fit on the new one.

**Fresh install** puts a clean copy of Windows 11 on the new SSD.

- Make a USB installer with the **Media Creation Tool** from Microsoft's Windows 11 download page. You'll need a USB flash drive of at least 8 GB.
- Reinstall your apps and copy your files back from the backup.
- Afterward, install drivers from Windows Update and your PC maker. See [how to update drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/).

A fresh install is the better choice if the old Windows was slow, cluttered or crashing.

## 5. Open the laptop safely

> **Safety first:** Shut down fully (not sleep), unplug the charger and any USB devices. Static electricity can damage parts you can't see, so work on a hard table, not carpet, and touch a bare metal surface or wear an anti-static wrist strap before handling the drive. Never pry near a swollen battery. If the battery looks puffy, stop and get it serviced.

**How:**

1. Follow the maker's service manual for your model. It shows which screws to remove and where the clips are.
2. Remove the bottom panel screws. Keep them in order, as some are different lengths, and note any hidden under rubber feet.
3. Use a **plastic** pry tool to release the clips. Metal tools can scratch or crack the case.
4. If the manual says to disconnect the internal battery before working on the board, do it now.

## 6. Install the new SSD

**M.2 drive:**

1. Remove the small screw at the end of the old drive. It pops up at an angle.
2. Slide it out. Move any heat spreader, shield or thermal pad over to the new drive if the laptop uses one.
3. Insert the new drive at a slight angle, gold contacts first, until it's fully seated.
4. Press it flat and replace the screw. Don't overtighten.

**2.5-inch drive:**

1. Remove the drive's bracket or caddy and disconnect it from the SATA connector or ribbon cable.
2. Move the bracket screws to the new SSD, connect it, and secure it.

Replace the panel, reconnect the charger and turn it on.

## 7. Boot up and finish the setup

- **Cloned drive:** the laptop should start Windows normally. If it asks for the BitLocker recovery key, enter the one you saved.
- **Fresh install:** plug in the USB installer and start from it. Many laptops show a one-time boot menu at startup (the key varies by brand, check your manual). Pick the new SSD when the installer asks where to install.
- **Second drive:** if you added the SSD alongside the old drive, open **Disk Management** (right-click Start), and when asked to initialize the new disk, choose **GPT**. Then create a new volume.

Keep the old drive until you're sure everything works. It makes a handy backup drive in a USB enclosure.

## New SSD not showing up?

- **Reseat it.** An M.2 drive that isn't fully inserted or screwed flat may not be detected.
- **Check the type.** An NVMe drive in a SATA-only slot, or the reverse, won't appear.
- **Check the firmware setup screen** (BIOS or UEFI). If the drive is listed there but not in Windows, it may just need initializing in Disk Management.
- **Installer sees no drives:** some laptops need a storage driver (often Intel Rapid Storage Technology) loaded during Windows setup. Download it from your PC maker's support page onto the USB stick and choose **Load driver** in the installer.
- **Update the BIOS** from your PC maker if the manual mentions SSD compatibility fixes.

## When to call a pro

Take it to a repair shop or the maker's service center if:

- Your model needs the keyboard, battery or main board removed to reach the drive.
- The case won't open without force, or clips are breaking.
- The battery is swollen or damaged.
- The laptop won't start after the upgrade, even with the old drive put back.
- You need data recovered from an old drive that won't read.
