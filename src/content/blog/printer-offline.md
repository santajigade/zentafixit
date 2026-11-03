---
title: "Printer Offline? How to Fix It in Windows 11 and 10"
description: "Printer showing offline in Windows? Check power and Wi-Fi, a changed IP address, Use Printer Offline, the print spooler and drivers, step by step."
pubDate: 2026-11-03
category: gadgets
subcategory: printers-and-scanners
tags: [printer, offline, windows 11, windows 10, wifi, print spooler, drivers]
image: { src: /images/featured/printer-offline.webp, alt: "Illustration of a desktop printer with a disconnected wireless signal and a paper tray" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Your printer's control panel or a network configuration page, Access to your Wi-Fi router app or settings (optional)]
symptoms:
  - { label: "Printer was fine, now says offline", to: "1-check-the-printer-is-on-and-on-the-network" }
  - { label: "Offline after a new router or Wi-Fi password", to: "2-reconnect-it-after-a-wi-fi-change" }
  - { label: "Offline after a restart or power cut", to: "3-fix-a-changed-ip-address" }
  - { label: "Jobs stuck in the queue", to: "6-restart-the-print-spooler-service" }
  - { label: "Prints to the wrong printer", to: "4-set-the-right-printer-as-default" }
  - { label: "Still offline after everything", to: "still-offline-after-all-that" }
faq:
  - q: "Why does my printer say offline when it is on?"
    a: "Windows marks a printer offline when it can't reach it, not when the printer is off. The usual reasons are the printer dropping off Wi-Fi, a new IP address the PC doesn't know about, the Use Printer Offline option being ticked, or a stuck print spooler."
  - q: "How do I get my printer back online in Windows 11?"
    a: "Restart the printer and your router, confirm the printer is on the same Wi-Fi network as your PC, then open the print queue and make sure Use Printer Offline is not ticked. If it's still offline, restart the Print Spooler service, then remove and re-add the printer."
  - q: "Why does my wireless printer keep going offline?"
    a: "The most common cause is the router handing the printer a new IP address after a restart, while Windows still looks for the old one. Giving the printer a fixed (reserved) address in your router settings usually stops it. Weak Wi-Fi and printer sleep modes can also cause it."
  - q: "Will removing and re-adding my printer delete anything?"
    a: "No documents are lost. You only lose the printer's custom settings on that PC, such as default paper size or duplex choice, which you can set again. Cancel any stuck jobs first so they don't print later by surprise."
  - q: "Does a USB printer go offline too?"
    a: "Yes, usually because of a loose cable, a different USB port, a USB hub, or the printer being off when Windows started. Plug it straight into the PC, try another port and restart the spooler."
---

When Windows says your printer is **offline**, it doesn't mean the printer is switched off. It means your PC tried to talk to it and got no answer. The printer may be fine and sitting on the desk with a green light.

The most common causes are **the printer dropping off Wi-Fi**, **its IP address changing**, the **Use Printer Offline** option being switched on, or a **stuck print spooler**. Work through the fixes below in order. Most people are printing again by fix 3.

<figure><img src="/images/posts/printer-offline-flow.svg" alt="Flowchart: restart the printer and router, check the printer's own screen for a network connection; if it has no connection reconnect Wi-Fi, if it is connected check the IP address and the Use Printer Offline setting, then restart the spooler" width="640" height="440" loading="lazy" /><figcaption>Start at the printer, then work back toward the PC.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Restart the printer, your router and your PC, then make sure the printer is on the same Wi-Fi network. In Windows, open the print queue and untick Use Printer Offline. If it's still offline, restart the Print Spooler service, then remove and re-add the printer.</p></div>

## How to tell what's causing it: quick test

1. **Look at the printer's own screen or lights.** Most network printers show a Wi-Fi or network icon. No icon, or a blinking one, means the printer itself isn't connected.
2. **Print a network configuration page** from the printer's menu or button combination (check your manual). It shows the network name and the printer's current IP address.
3. **Try printing from a phone** on the same Wi-Fi. If the phone can print, the printer and network are fine and the problem is on the PC (fixes 3 to 8).
4. **If nothing can print**, the problem is the printer or the network (fixes 1 and 2).

## 1. Check the printer is on and on the network

Printers go into deep sleep, lose Wi-Fi after a power cut, or wake up before the router does and fail to connect.

**Fix:**

1. Turn the printer off with its power button, wait 30 seconds and turn it on.
2. Restart your router if other devices have also had trouble today.
3. Restart the PC.
4. For a wired printer, check the Ethernet or USB cable at both ends. Plug a USB printer straight into the PC, not into a hub or monitor port.
5. Clear any error on the printer's screen (paper jam, empty ink, open cover). Some printers refuse to report "ready" until it's cleared.

## 2. Reconnect it after a Wi-Fi change

If you've changed your router, Wi-Fi name or Wi-Fi password, the printer is still trying the old network. It won't move over on its own.

**Fix:**

- Use the printer's **wireless setup wizard** on its screen, or the maker's app, to join the new network. Printers without a screen often use a WPS button or a setup mode. Check your manual for the exact steps.
- Make sure the PC and printer are on the **same network**. A PC on a guest network or a separate mesh "IoT" network often can't see the printer.
- Many home printers only support the **2.4 GHz** band. If your router combines both bands under one name and the printer won't join, check your manual and router settings.

If your PC itself has trouble staying online, sort that first with our guide to [Wi-Fi connected but no internet](/networking/wifi-connected-no-internet/).

## 3. Fix a changed IP address

This is the most common cause of a printer that "randomly" goes offline. Your router hands out addresses, and after a restart it can give the printer a new one. Windows keeps sending jobs to the old address and decides the printer is offline.

<figure><img src="/images/posts/printer-offline-ip-change.svg" alt="Diagram: the PC sends a print job to the printer's old IP address, which no longer answers, while the printer now sits at a new address; a reserved address in the router keeps them matched" width="640" height="400" loading="lazy" /><figcaption>Windows still points at the old address. A reserved address stops this.</figcaption></figure>

**Fix:**

1. Find the printer's current IP address on the network configuration page from the quick test.
2. In Windows, open **Printers & scanners** (Windows 11: Settings > Bluetooth & devices; Windows 10: Settings > Devices), choose the printer, then **Printer properties > Ports**.
3. If the ticked port shows a different IP address, click **Configure Port** and enter the new one. If the port type doesn't allow editing, remove and re-add the printer (fix 7).
4. On a Standard TCP/IP port, **unticking "SNMP Status Enabled"** in Configure Port can stop Windows from wrongly reporting a working printer as offline.
5. To stop it happening again, set a **reserved (fixed) IP address** for the printer in your router's app or settings. Look for "DHCP reservation" or "address reservation".

## 4. Set the right printer as default

Sometimes the printer isn't offline at all. Windows is sending jobs to a different, offline entry, such as an old copy of the same printer or a printer from a previous home.

**Fix:**

- In Printers & scanners, turn off **Let Windows manage my default printer**. Otherwise Windows picks the last printer you used at your current location.
- Select your printer and choose **Set as default**.
- If you see two entries for the same printer (for example "Printer" and "Printer (Copy 1)"), print a test page from each. Remove the one that doesn't work.

## 5. Turn off "Use Printer Offline"

Windows has a manual offline switch. If it's ticked, Windows holds every job in the queue, even when the printer is fine.

**Fix:**

1. Open **Printers & scanners**, select the printer and choose **Open print queue**.
2. Open the **Printer** menu (or the **...** menu in newer versions of Windows).
3. If **Use Printer Offline** is ticked, click it to untick it.
4. If you can't find it there, open Control Panel > **Devices and Printers**, right-click the printer, choose **See what's printing**, and check the Printer menu.

## 6. Restart the print spooler service

The Print Spooler is the Windows service that manages print jobs. If a job gets stuck, the spooler can hang and every printer shows offline or "error".

**Fix:**

1. Press **Windows + R**, type `services.msc` and press Enter.
2. Find **Print Spooler**, right-click it and choose **Restart**.
3. If jobs are still stuck: stop the Print Spooler, open `C:\Windows\System32\spool\PRINTERS` (click Continue if asked for permission), delete the files inside that folder only, then start the spooler again.
4. Try a test page.

Only delete files inside the PRINTERS folder. Don't delete the folder itself or anything else in `spool`.

## 7. Remove and re-add the printer

A fresh install clears a wrong port, a broken WSD connection or a corrupted setting in one go.

**Fix:**

1. Cancel any jobs in the queue.
2. In Printers & scanners, select the printer and choose **Remove**.
3. Restart the PC.
4. Choose **Add device** (Windows 11) or **Add a printer or scanner** (Windows 10). Pick your printer from the list once it appears.
5. If it doesn't appear, choose the option to add it manually and enter its IP address from the configuration page.

## 8. Update or reinstall the printer driver

Windows usually installs a basic driver on its own. If the printer was set up years ago, or after a major Windows update, the driver can stop working properly.

**Fix:**

- Download the current driver or software package for your exact model from the printer maker's support site. Don't use third-party "driver updater" sites.
- Remove the printer first (fix 7), install the new package, then add the printer again.
- If the maker's full software causes trouble, the basic Windows driver is often enough for everyday printing.

For more on drivers in general, see our guide to [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/).

## Still offline after all that?

- **Run the printer troubleshooter** if your version of Windows offers one (search the Start menu for "printer troubleshoot").
- **Turn off VPN software** or try with your security software paused briefly. Some VPNs and firewalls block access to devices on your home network.
- **Try a USB cable** as a test. If USB printing works, the printer is fine and the problem is the network setup.
- **Reset the printer's network settings** from its menu and set up Wi-Fi again from scratch. Check your manual first, as this can also clear other settings.
- **Update the printer's firmware** using the maker's app or the printer's own menu.

## When to call a pro

Contact the printer maker's support, or a local computer repair shop, if:

- The printer shows a hardware error code or won't finish starting up.
- It won't join any network even after a network reset.
- It can't print from any device, including over USB.

For an older budget inkjet, compare the repair quote with the price of a new printer. Repairs often cost more than the printer is worth.
