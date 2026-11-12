---
title: "Wi-Fi Not Showing on Windows 11? 9 Fixes That Work"
description: "Wi-Fi icon or option missing in Windows 11, or your network not in the list? Check airplane mode, the adapter, drivers, WLAN AutoConfig and the router band."
pubDate: 2026-11-12
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-12
category: pc-laptops
subcategory: windows-problems
tags: [windows 11, wi-fi, wireless adapter, network driver, device manager, airplane mode, laptop]
image: { src: /images/featured/wifi-not-showing-windows-11.webp, alt: "Illustration of a laptop with a Wi-Fi symbol that has missing arcs and a slash through it" }
difficulty: easy
time: 5 to 45 min
risk: low
tools: [Ethernet cable or phone hotspot (optional), USB flash drive (optional), Your laptop's model number]
symptoms:
  - { label: "No Wi-Fi tile in Quick Settings", to: "3-turn-the-wi-fi-adapter-back-on" }
  - { label: "Airplane mode stuck or Wi-Fi greyed out", to: "2-check-the-wireless-key-or-switch" }
  - { label: "Yellow warning in Device Manager", to: "5-reinstall-roll-back-or-update-the-wi-fi-driver" }
  - { label: "Wi-Fi gone after an update", to: "8-run-a-network-reset" }
  - { label: "No Wi-Fi adapter listed at all", to: "9-check-bios-or-uefi-and-the-adapter-itself" }
  - { label: "Wi-Fi works, my network is missing", to: "wi-fi-works-but-your-network-isnt-listed" }
faq:
  - q: "Why did the Wi-Fi option disappear from Windows 11?"
    a: "Windows hides the Wi-Fi option when it can't see a working wireless adapter. The usual reasons are an adapter that has been disabled, a driver that failed after an update, the adapter being powered off to save energy, or the WLAN AutoConfig service not running. Device Manager tells you which one it is."
  - q: "Why can my phone see my Wi-Fi but my laptop can't?"
    a: "Most often your network runs only on the 5 GHz or 6 GHz band and the laptop's adapter doesn't support it, or the network name is hidden. It can also be distance: phones and laptops have different antennas. Try standing next to the router and check which bands your router broadcasts."
  - q: "Does a network reset delete my files?"
    a: "No. A network reset removes saved Wi-Fi networks and passwords, VPN and virtual adapters, and sets network settings back to default. Your files and apps stay. Write down any Wi-Fi passwords you need before you run it."
  - q: "How do I get a Wi-Fi driver with no internet?"
    a: "Use another computer or your phone to download the Wi-Fi driver for your exact laptop model from the maker's support site, copy it to a USB flash drive, and install it on the laptop. You can also plug in an Ethernet cable or connect a phone by USB tethering to get online temporarily."
  - q: "Can a USB Wi-Fi adapter fix missing Wi-Fi?"
    a: "Yes, if the built-in adapter has failed. A USB Wi-Fi adapter is an inexpensive workaround for laptops and desktops. Pick one that lists Windows 11 support and the bands your router uses."
---

When Wi-Fi is "not showing" in Windows 11, it means one of two very different things. Either the **Wi-Fi option itself is gone** (no Wi-Fi tile in Quick Settings, no Wi-Fi page in Settings, only a globe or Ethernet icon), or Wi-Fi works but **your network just isn't in the list**.

If the option is missing, the usual causes are **airplane mode or a wireless key**, a **disabled adapter**, a **broken or missing driver**, or a **stopped WLAN service**. If only your network is missing, look at the **router**, the **Wi-Fi band** and **hidden network names**.

<figure><img src="/images/posts/wifi-not-showing-windows-11-flow.svg" alt="Flowchart: if the Wi-Fi tile is missing from Quick Settings, check airplane mode and the wireless key, then the adapter in Settings and Device Manager, then drivers, the WLAN service and network reset. If Wi-Fi is on but your network is not listed, check the router, the band, a hidden network name and distance" width="640" height="460" loading="lazy" /><figcaption>First decide whether the Wi-Fi option is missing or only your network is.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Press Windows key + A and make sure airplane mode is off and the Wi-Fi tile is on. If there is no Wi-Fi tile, open Device Manager, expand Network adapters and enable or reinstall the wireless adapter, then restart. If Wi-Fi is on but your network is missing, restart the router and check that your laptop supports the band it uses.</p></div>

## How to tell what's causing it: quick test

1. **Press Windows key + A** to open Quick Settings. Is there a **Wi-Fi tile** at all?
2. **If there's no Wi-Fi tile:** right-click **Start**, open **Device Manager** and expand **Network adapters**. Look for an entry with "Wi-Fi", "Wireless" or "WLAN" in its name.
3. **If there is a Wi-Fi tile:** click the arrow next to it to see the list of networks. Can you see your neighbors' networks but not yours?
4. **Check another device.** If your phone can't see your network either, the problem is the router, not Windows.
5. **Think back.** Did Wi-Fi vanish after a Windows update, a driver install or a VPN install? That points to fixes 5 and 8.

## 1. Turn off airplane mode and turn Wi-Fi on

It sounds obvious, but airplane mode turns off every radio, and the Wi-Fi tile can be toggled off by accident.

**Fix:**

- Press **Windows key + A**. If **Airplane mode** is highlighted, click it to turn it off.
- Make sure the **Wi-Fi** tile is highlighted (on).
- Or open **Settings > Network & internet** and check the **Wi-Fi** switch and the **Airplane mode** switch there.

## 2. Check the wireless key or switch

Many laptops have a **function key** with an antenna or airplane icon, often on the top row, and some older models have a **physical wireless switch** on the side or front. Either one can turn the radio off and make Windows show airplane mode stuck on or Wi-Fi greyed out.

**Fix:**

- Press the wireless or airplane key once, or **Fn** plus that key, then wait a few seconds.
- Look along the edges of the laptop for a small slide switch. Your manual shows where it is.
- If the key does nothing, install your laptop maker's hotkey or system utility. Some keys only work with it.

## 3. Turn the Wi-Fi adapter back on

If the adapter has been disabled, Windows acts as if there is no Wi-Fi hardware at all, so the tile disappears.

**Fix:**

1. Open **Settings > Network & internet > Advanced network settings**.
2. Under **Network adapters**, find the Wi-Fi adapter. If it shows an **Enable** button, click it.
3. You can also press **Windows key + R**, type `ncpa.cpl` and press Enter. This opens **Control Panel > Network and Sharing Center > Change adapter settings**. Right-click the **Wi-Fi** icon and choose **Enable** if it's greyed out.

## 4. Check Device Manager for a hidden or broken adapter

Device Manager shows the real state of the hardware. Right-click **Start**, choose **Device Manager** and expand **Network adapters**.

<figure><img src="/images/posts/wifi-not-showing-windows-11-states.svg" alt="Schematic of where to look: Quick Settings with or without a Wi-Fi tile, and the three Device Manager states for a Wi-Fi adapter: a down arrow means disabled, a yellow warning means a driver problem, and a missing entry means Windows can't see the hardware" width="640" height="400" loading="lazy" /><figcaption>What the Wi-Fi adapter looks like in Device Manager tells you the next fix.</figcaption></figure>

**Fix:**

- **Down arrow on the icon:** the adapter is disabled. Right-click it and choose **Enable device**.
- **Yellow warning triangle:** the driver has a problem. Go to fix 5.
- **No Wi-Fi adapter listed:** click **View > Show hidden devices**. If it appears faded, right-click it and choose **Uninstall device**, then click **Action > Scan for hardware changes**. If it still isn't there, see fix 9.
- Also check **Other devices** for an unknown "Network Controller". That means the driver isn't installed.

## 5. Reinstall, roll back or update the Wi-Fi driver

A driver that broke during an update is one of the most common reasons Wi-Fi disappears.

**Fix:**

1. In Device Manager, right-click the Wi-Fi adapter and choose **Properties**, then open the **Driver** tab.
2. If Wi-Fi stopped after an update, click **Roll Back Driver** if it's available.
3. Otherwise, close the window, right-click the adapter and choose **Uninstall device**. Leave the box to delete the driver unticked for now, then restart. Windows usually reinstalls the driver on its own.
4. Still missing? Download the Wi-Fi (WLAN or wireless) driver for your **exact model** from your laptop or motherboard maker's support site. With no internet, use another computer and a USB flash drive, or plug in an Ethernet cable. Our guide on [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/) walks through it.

## 6. Restart the WLAN AutoConfig service

Windows uses a background service called **WLAN AutoConfig** to find and connect to wireless networks. If it's stopped, the Wi-Fi option can vanish even with a healthy adapter.

**Fix:**

1. Press **Windows key + R**, type `services.msc` and press Enter.
2. Find **WLAN AutoConfig** and double-click it.
3. Set **Startup type** to **Automatic**. If the status says Stopped, click **Start**, then **OK**.
4. Restart the PC.

## 7. Stop Windows powering off the adapter

To save battery, Windows can switch the Wi-Fi adapter off and sometimes fails to wake it. Fast Startup can also keep a stuck adapter stuck, because a normal shut down doesn't fully restart Windows.

**Fix:**

- In Device Manager, open the Wi-Fi adapter's **Properties**. If there's a **Power Management** tab, untick **Allow the computer to turn off this device to save power** and click **OK**.
- Do a **full shut down**: hold **Shift** while you click **Shut down**, wait a minute, then turn the PC on. A Restart also fully restarts Windows.
- To stop it happening again, open **Control Panel > Power Options > Choose what the power buttons do**, click **Change settings that are currently unavailable**, untick **Turn on fast startup** and save.

## 8. Run a network reset

A network reset removes and reinstalls all network adapters and puts network settings back to default. It often fixes Wi-Fi that vanished after an update or a VPN install. It also removes saved Wi-Fi passwords and VPN adapters, so note any you need.

**Fix:**

1. Open **Settings > Network & internet > Advanced network settings**.
2. Choose **Network reset**, then **Reset now** and confirm.
3. Windows restarts. Then reconnect to your Wi-Fi and reinstall any VPN app.

If Wi-Fi comes back and connects but nothing loads, our [Wi-Fi connected but no internet](/networking/wifi-connected-no-internet/) guide picks up from there.

## 9. Check BIOS or UEFI and the adapter itself

If no wireless adapter shows up in Device Manager even with hidden devices shown, Windows can't see the hardware at all.

**Fix:**

- **USB Wi-Fi adapter:** unplug it, plug it into a different USB port (not a hub), and reinstall its driver from the maker's site.
- **BIOS or UEFI:** restart and open the firmware setup (the key varies by maker, often F2, F10, F12, Del or Esc: check your manual). Look for a setting such as **Wireless**, **WLAN** or **Wireless LAN** and make sure it's enabled. Save and exit.
- **Recent repair or upgrade:** if the laptop was just opened, an antenna cable or the Wi-Fi card may have come loose.
- **Quick workaround:** a USB Wi-Fi adapter gets you online while you sort out the built-in one.

## Wi-Fi works but your network isn't listed?

If you can see other networks but not yours, Windows and the adapter are fine. The cause is usually on the router side.

- **Router off or restarting.** Check its lights, restart it and wait a few minutes for Wi-Fi to come back. Can your phone see the network?
- **Band your laptop can't use.** Older or budget adapters may only support 2.4 GHz, and only Wi-Fi 6E or Wi-Fi 7 adapters can see 6 GHz networks. To check, open Command Prompt and run `netsh wlan show drivers`, then look at **Radio types supported**. If it lists 802.11a, 802.11ac or 802.11ax, the adapter can use 5 GHz. If it only lists 802.11b, g and n, it may be 2.4 GHz only. Make sure the router's 2.4 GHz band is turned on in its app or settings page.
- **Hidden network name.** If the router hides its name (SSID), it won't appear in the list. Go to **Settings > Network & internet > Wi-Fi > Manage known networks > Add network** and type the name, security type and password exactly.
- **Too far away.** Walls, floors and appliances weaken the signal. Move next to the router and refresh the list. If that fixes it, the laptop is simply out of range.
- **New network name.** If you changed the router's name or password, or replaced the router, the old saved network won't work. Forget it in **Manage known networks** and connect again.

## When to call a pro

Take it to a computer repair shop or your PC maker's support if:

- No wireless adapter appears in Device Manager, even after enabling it in BIOS or UEFI and showing hidden devices.
- The adapter keeps showing a yellow warning with the maker's latest driver installed.
- Wi-Fi stopped after a drop, a spill or a repair, which points to a loose antenna or failed Wi-Fi card.
- The laptop is under warranty. Opening it yourself may affect coverage.
