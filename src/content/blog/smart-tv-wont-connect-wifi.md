---
title: "Smart TV Won't Connect to Wi-Fi? Fixes"
description: "Smart TV won't connect to Wi-Fi? Restart the TV from the wall, check the router, password and band, fix DNS and date settings, update firmware or use Ethernet."
pubDate: 2026-11-03
category: tv-audio
subcategory: smart-tvs
tags: [smart tv, wifi, router, dns, ethernet, streaming]
image: { src: /images/featured/smart-tv-wont-connect-wifi.webp, alt: "Illustration of a smart TV showing a Wi-Fi symbol with a warning mark, beside a router" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [TV remote, Your Wi-Fi name and password, Ethernet cable (optional), USB flash drive (for offline updates, optional)]
symptoms:
  - { label: "Worked yesterday, not today", to: "1-restart-the-tv-fully-from-the-wall" }
  - { label: "My network isn't in the list", to: "4-try-the-other-wi-fi-band" }
  - { label: "Says wrong password", to: "3-re-enter-the-wi-fi-password-carefully" }
  - { label: "Connected but no internet", to: "6-change-the-dns-setting" }
  - { label: "Other devices are offline too", to: "2-restart-the-modem-and-router" }
  - { label: "Apps won't load", to: "connected-but-apps-wont-load" }
faq:
  - q: "Why won't my smart TV connect to Wi-Fi when other devices can?"
    a: "The TV may need a full restart from the wall, it may only support the 2.4 GHz band or an older security mode, it may be too far from the router, or its date, time or DNS settings may be wrong. Unplug the TV for 60 seconds, re-enter the password and try the other band."
  - q: "How do I reset the network on my smart TV?"
    a: "Most smart TVs have a network reset option in the network or general settings menu. It clears saved Wi-Fi details so you can set the connection up again. The exact name and location vary by brand, so check your TV's manual or the maker's support site."
  - q: "Can I use an Ethernet cable instead of Wi-Fi on my TV?"
    a: "Yes, if your TV has an Ethernet (LAN) port. A wired connection is usually more stable than Wi-Fi and is the most reliable fix for a TV that keeps dropping off. Plug the cable into the router or a mesh node and choose wired in the TV's network settings."
  - q: "Why does my TV say connected but no internet?"
    a: "The TV has joined your Wi-Fi but can't reach the internet. Check that other devices are online, restart the modem and router, check the TV's date and time, and try setting the DNS manually to a public DNS service."
  - q: "Does my smart TV support 5 GHz Wi-Fi?"
    a: "Many newer TVs do, but some older and budget models only support 2.4 GHz. Check the specifications in the manual or on the maker's website. If your router uses one combined network name, the TV picks a band automatically."
---

A smart TV that won't join Wi-Fi is usually stuck, not broken. The most common causes are a TV that **never fully restarts**, a **router that needs a reboot**, a **mistyped password**, a **Wi-Fi band or security mode the TV doesn't support**, or wrong **DNS or date settings**.

Start with the restarts. Most TVs only go into standby when you press the power button, so the network chip never resets.

<figure><img src="/images/posts/smart-tv-wont-connect-wifi-flow.svg" alt="Flowchart: does the TV see your network? If not, move closer, try the other band or check if the network is hidden. If it sees it but won't join, re-enter the password and check the router security mode. If it joins but has no internet, restart the router, check date and time and set DNS manually. If nothing works, use Ethernet" width="640" height="430" loading="lazy" /><figcaption>The step where it fails points to the fix.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Unplug the TV from the wall for 60 seconds, restart your modem and router, then reconnect and type the password slowly. If the TV can't see your network, try the 2.4 GHz band. If it connects but apps won't load, fix the date and time, set the DNS manually, update the firmware, or plug in an Ethernet cable.</p></div>

## How to tell what's causing it: quick test

1. **Check another device** (a phone or laptop) near the TV. If it has no internet either, the problem is your internet or router, not the TV. See fix 2 and our guide to [Wi-Fi connected but no internet](/networking/wifi-connected-no-internet/).
2. **Open the TV's network settings** and look at the Wi-Fi list.
    - **Your network isn't listed?** See fixes 1 and 4.
    - **It's listed but won't join or says the password is wrong?** See fixes 3 and 4.
    - **It joins but says no internet, or apps won't load?** See fixes 5, 6 and 7.
3. **Look for a network test** in the TV's settings. Many TVs have one, and the step where it fails is a useful clue.

## 1. Restart the TV fully from the wall

On most smart TVs, the remote's power button only puts the TV into standby. The software, including the Wi-Fi chip, keeps running and can stay stuck. A full power cycle clears it.

**Fix:**

1. Turn the TV off and **unplug it from the wall outlet** (or switch off the power strip).
2. Wait **60 seconds**. Some makers suggest also holding the TV's own power button for a few seconds while it's unplugged to drain remaining power.
3. Plug it back in, turn it on and try connecting again.

## 2. Restart the modem and router

If the router has been running for weeks, or it lost its connection to your internet provider, devices may join Wi-Fi but get nowhere. New devices may fail to join at all.

**Fix:**

1. Unplug the **modem** and the **router** (or the single gateway box from your provider).
2. Wait 30 seconds. Plug the modem in first and wait until its lights settle, usually a couple of minutes.
3. Plug in the router and wait for its Wi-Fi light.
4. Restart the TV and reconnect.

If you have a mesh system, make sure the TV is near a mesh node, not at the edge of coverage.

## 3. Re-enter the Wi-Fi password carefully

Typing with a TV remote is slow and error-prone. Passwords are **case-sensitive**, and it's easy to pick a wrong letter or a 0 for an O.

**Fix:**

- In the TV's network settings, choose your network and select **forget** or **remove** if the option is there, then join again.
- Use the TV's "show password" option, if it has one, to check each character before you confirm.
- Check the password on your router label or in your router's app. If you changed it recently, the TV still has the old one.
- Some TVs let you type with a phone app or a USB keyboard, which is easier.

## 4. Try the other Wi-Fi band

Most routers broadcast on two bands. **2.4 GHz** reaches farther and through more walls but is slower. **5 GHz** is faster but has shorter range. Some older or budget TVs only support 2.4 GHz, and some can't handle the newest security mode.

<figure><img src="/images/posts/smart-tv-wont-connect-wifi-bands.svg" alt="Comparison of 2.4 GHz and 5 GHz Wi-Fi bands: 2.4 GHz has longer range, goes through walls better, is slower and is supported by nearly all TVs; 5 GHz is faster, has shorter range and may not be supported by older TVs. Tip: if the TV is far from the router, try 2.4 GHz" width="640" height="380" loading="lazy" /><figcaption>Older TVs often only see 2.4 GHz networks.</figcaption></figure>

**Fix:**

- If the router shows two networks (often one name ends in 5G), try the other one on the TV.
- If the router uses **one combined name** for both bands and the TV won't join, check your router app for an option to split the bands or create a 2.4 GHz network, then connect the TV to that.
- If your router is set to **WPA3 only**, an older TV may not support it. A WPA2/WPA3 mixed (transition) mode lets older devices join. Check your router's app or manual.
- If your network is **hidden** (not broadcasting its name), use the TV's option to add a network manually, or unhide it.
- Move the router higher and closer to the TV, or add a mesh node nearby.

## 5. Check the date and time

Streaming apps and update servers use secure connections, and those depend on the correct date and time. If the TV's clock is wrong, often after a power cut, apps and updates can fail even though Wi-Fi is connected.

**Fix:**

- Open the TV's **date and time** settings and set it to **automatic** (often "network time"), with the correct time zone.
- If automatic isn't available until you're online, set the date and time manually, then reconnect.

## 6. Change the DNS setting

DNS turns website names into addresses. If the DNS server your TV gets from the router is slow or failing, the TV connects to Wi-Fi but apps can't find their servers.

**Fix:**

1. In the TV's network settings, look for **IP settings**, **advanced settings** or **DNS settings**.
2. Change DNS from automatic to **manual**.
3. Enter a public DNS service, such as **8.8.8.8** (Google Public DNS) or **1.1.1.1** (Cloudflare).
4. Save, restart the TV and test again.

You can switch back to automatic at any time.

## 7. Update the TV firmware

Firmware updates fix Wi-Fi bugs and keep apps working. A TV that hasn't updated in a long time can have trouble connecting or running current apps.

**Fix:**

- Once connected (even with Ethernet or a phone hotspot), look for **software update** or **firmware update** in the TV's settings and install any update.
- If the TV can't get online at all, many makers let you download the firmware to a **USB flash drive** from their support website and install it from there. Follow the maker's instructions for your exact model, and don't unplug the TV during the update.
- If nothing else works, a **factory reset** can clear corrupted settings. It erases your apps and sign-ins, so treat it as a last step.

## 8. Use an Ethernet cable instead

If your TV has an Ethernet (LAN) port, a cable is the most reliable fix. It avoids distance, walls and Wi-Fi interference completely.

**Fix:**

- Run an Ethernet cable from the router or a mesh node's spare port to the TV.
- In the TV's network settings, choose **wired** connection.
- If the router is in another room, a **mesh node** near the TV with an Ethernet port, or a pair of **powerline adapters**, can bring a wired connection to the TV without a long cable.

## Connected but apps won't load?

- Check the date and time (fix 5) and DNS (fix 6) first.
- **Sign out and back in** to the app, or uninstall and reinstall it if your TV allows it.
- Check the streaming service's status page or social media for an outage.
- **Clear the app's cache** if the TV offers it in the app settings.
- If only one app fails and everything else works, the TV may be too old for the latest version of that app. A plug-in streaming stick is a cheap workaround.

## When to call a pro

Contact the TV maker or a TV repair service if:

- The TV can't see **any** Wi-Fi networks at all, even right next to the router, after a full restart and update. The Wi-Fi module may have failed.
- Ethernet doesn't work either, and the cable and router port test fine with another device.
- The TV is under warranty and the problem started on its own.

Call your internet provider if no devices in the house can get online. For a TV out of warranty with a failed Wi-Fi chip, a streaming stick or Ethernet is usually cheaper than a repair.
