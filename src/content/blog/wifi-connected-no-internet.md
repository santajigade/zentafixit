---
title: "Wi-Fi Connected but No Internet? 9 Fixes That Work"
description: "Wi-Fi says connected but nothing loads? Find out if it's your device, router or ISP, then restart in the right order and fix IP, DNS, VPN and driver issues."
pubDate: 2026-11-03
category: networking
subcategory: slow-internet-fixes
tags: [wi-fi, no internet, router, modem, dns, windows, isp]
image: { src: /images/featured/wifi-connected-no-internet.webp, alt: "Illustration of a laptop showing full Wi-Fi bars next to a router with a broken link to the internet" }
difficulty: easy
time: 5 to 30 min
risk: low
tools: [A second device such as your phone, Ethernet cable (optional)]
symptoms:
  - { label: "No device has internet", to: "1-restart-the-modem-and-router-in-the-right-order" }
  - { label: "Modem lights are off or red", to: "3-check-the-cables-and-the-modem-lights" }
  - { label: "Only one device has no internet", to: "4-restart-the-device-and-toggle-airplane-mode" }
  - { label: "Started after installing a VPN", to: "6-turn-off-any-vpn-or-proxy" }
  - { label: "Websites won't load, apps do", to: "7-renew-your-ip-address-and-fix-dns" }
  - { label: "Nothing works on any device", to: "still-no-internet-on-any-device" }
faq:
  - q: "What does 'connected, no internet' mean?"
    a: "Your device has a working Wi-Fi link to the router, but the router isn't passing traffic to and from the internet. The break is either between the router and your internet provider, or in your device's network settings such as its IP address or DNS."
  - q: "Why does only my laptop say no internet when my phone works?"
    a: "If other devices on the same Wi-Fi are online, the router and internet service are fine. The problem is on the laptop: a VPN or proxy, a stuck IP address, a DNS issue, a network driver glitch or saved network settings. Restarting it, forgetting the network and a network reset fix most cases."
  - q: "How long should I wait after restarting my modem?"
    a: "Give the modem a few minutes to reconnect, until its online or internet light is steady, before you plug the router back in. Then give the router a minute or two to start up. Some modems take longer after an outage or an update."
  - q: "Can a bad Ethernet cable cause no internet on Wi-Fi?"
    a: "Yes. The cable between the modem and the router carries all your internet traffic. If it's loose or damaged, Wi-Fi still connects to the router but nothing reaches the internet. Reseat it or swap it for a spare."
  - q: "Will a Windows network reset delete anything?"
    a: "It removes and reinstalls your network adapters and sets networking components back to default. You'll need to re-enter Wi-Fi passwords, and VPN or virtual switch software may need to be set up again. Your files are not affected."
---

When your device shows full Wi-Fi bars but nothing loads, the Wi-Fi link to your router is working. What's broken is the next step: the router talking to the internet, or your device getting the right address and DNS settings from the router.

The most common causes are **a modem or router that needs a restart**, **an outage at your internet provider**, **a loose cable between the modem and router**, and on a single device, **a VPN, a stuck IP address or bad DNS settings**. The first job is finding out which side the problem is on.

<figure><img src="/images/posts/wifi-no-internet-flow.svg" alt="Flowchart: check whether other devices on the same Wi-Fi have internet; if none do, the problem is the modem, router or internet provider; if others work, the problem is on this one device" width="640" height="340" loading="lazy" /><figcaption>One question tells you whether to fix the router or the device.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>If no device has internet, restart the modem first, wait for its online light, then restart the router, and check your provider for an outage. If only one device is affected, restart it, turn off any VPN, forget and rejoin the network, and run a network reset.</p></div>

## How to tell where the problem is: quick test

1. **Check another device on the same Wi-Fi.** Turn off mobile data on your phone first, so you're testing Wi-Fi and not cellular.
2. **If nothing on your Wi-Fi works,** the problem is the modem, router or internet service. Start with fixes 1 to 3, and 9.
3. **If other devices work,** the problem is on this device. Skip to fixes 4 to 8.
4. **Optional: plug a laptop into the router with an Ethernet cable.** If it works wired but not on Wi-Fi, focus on the device's Wi-Fi settings or the router's Wi-Fi.

## 1. Restart the modem and router in the right order

The **modem** connects your home to your internet provider. The **router** creates your Wi-Fi network. Many homes have a single combined box (a gateway). Restarting them in the right order lets each one connect cleanly.

<figure><img src="/images/posts/wifi-restart-order.svg" alt="Restart order: unplug the modem and router, wait about 30 seconds, plug in the modem and wait for its online light, then plug in the router and wait a minute or two, then reconnect your device" width="640" height="300" loading="lazy" /><figcaption>Modem first, router second, device last.</figcaption></figure>

**Fix:**

1. Unplug the power from both the modem and the router (or the single gateway).
2. Wait about **30 seconds**.
3. Plug in **the modem only**. Wait until its online or internet light is steady. This can take a few minutes.
4. Plug in the router and give it a minute or two to start up.
5. Reconnect your device and try a website.

Use the power cable, not the small reset pinhole. Holding the reset button erases your router's settings.

## 2. Check for an outage at your internet provider

If the restart didn't help and no device can get online, the problem may be outside your home.

**Fix:**

- Use your phone on **mobile data** to check your provider's app or website for outage alerts in your area.
- Many providers also let you check service status or run a line test from their app.
- If there's an outage, there's nothing to fix at home. Wait it out or use your phone's hotspot.
- If your account shows an unpaid bill or a service change, that can also cut service.

## 3. Check the cables and the modem lights

A cable that has worked loose stops internet traffic even though Wi-Fi still connects.

**Fix:**

- Push in both ends of the **coax, fiber or phone line** going into the modem, and the **Ethernet cable** between the modem and router.
- Make sure the cable from the modem goes into the router's **WAN or internet port**, which is often a different color or set apart from the others.
- Look at the modem's lights. An online, internet or link light that's off, blinking for a long time or red usually means the modem can't reach your provider. Light colors and meanings vary, so check your provider's guide for your model.
- Try a spare Ethernet cable between the modem and router if you have one.

## 4. Restart the device and toggle airplane mode

When only one device is stuck, a simple restart fixes a surprising number of cases. Turning airplane mode on and off forces the Wi-Fi radio to reconnect from scratch.

**Fix:**

1. Turn on **airplane mode**, wait 10 seconds, then turn it off. On a laptop, you can also turn Wi-Fi off and on.
2. If that doesn't help, fully **restart the device**.
3. Check the date and time are correct. A clock that's far off can make secure websites fail to load.

## 5. Forget the network and reconnect

Saved network settings can get stuck, especially after a router change.

**Fix:**

- **Windows:** open Wi-Fi settings, choose **Manage known networks**, select your network and choose **Forget**.
- **iPhone or iPad:** go to **Settings > Wi-Fi**, tap the info button next to the network and tap **Forget This Network**.
- **Mac and Android:** open the Wi-Fi settings, find your network and choose the forget or remove option. Menu names vary by version.
- Reconnect and type the password again.

If you're on public Wi-Fi in a hotel, cafe or airport, open a browser and look for a **sign-in page**. Until you accept it, you'll see "connected, no internet."

## 6. Turn off any VPN or proxy

A VPN routes all your traffic through another server. If the VPN can't connect, it can block everything. A proxy setting left over from work or school software does the same.

**Fix:**

- Disconnect or quit your VPN app and try again. If it works, update or reinstall the VPN.
- **Windows:** go to **Settings > Network & internet > Proxy** and turn off any manual proxy you didn't set up on purpose.
- **Mac:** check the **Proxies** section in your Wi-Fi network's details in System Settings.
- Some security and antivirus apps include their own web filtering. Pause it briefly to test.

## 7. Renew your IP address and fix DNS

Your device needs an IP address from the router and a working **DNS** server to turn website names into addresses. If apps like messaging work but websites don't, DNS is a likely suspect.

**Fix on Windows:**

1. Search for **Command Prompt**, right-click it and choose **Run as administrator**.
2. Run these one at a time:
    - `ipconfig /release`
    - `ipconfig /renew`
    - `ipconfig /flushdns`
3. Run `ipconfig` and look at the IPv4 address. One starting with **169.254** means the device didn't get an address from the router. Restart the router (fix 1).

**Fix on a Mac:** open your Wi-Fi network's **Details** in System Settings, go to **TCP/IP** and click **Renew DHCP Lease**.

**Try a different DNS server:** in your device's or router's network settings, set DNS to a well-known public service such as Cloudflare (`1.1.1.1`) or Google (`8.8.8.8`). If that fixes it, your provider's DNS was the problem.

## 8. Reset network settings (Windows network reset)

If one Windows PC still won't get online, a network reset reinstalls the network adapters and puts networking settings back to default. You'll need to re-enter Wi-Fi passwords afterward.

**Fix:**

1. **Windows 11:** go to **Settings > Network & internet > Advanced network settings > Network reset**. **Windows 10:** go to **Settings > Network & Internet > Status > Network reset**.
2. Click **Reset now** and confirm. The PC restarts.
3. If it still fails, open **Device Manager**, expand **Network adapters**, and update the Wi-Fi driver, or download the latest one from your laptop maker's website using another device.

Phones have a similar option. On iPhone it's **Settings > General > Transfer or Reset iPhone > Reset > Reset Network Settings**. Android's location varies by brand, usually under System or General management.

## 9. Update the router firmware

Old router firmware can cause dropped connections and problems with newer devices. Firmware updates also fix security holes.

**Fix:**

- Open your router's app, or log in to its web page using the address on its label.
- Look for a firmware or software update option and install any update. Don't unplug the router while it updates.
- If you rent the gateway from your provider, they usually update it automatically. Ask them to check it.
- A router that's many years old and keeps dropping out may simply need replacing.

## Still no internet on any device?

- **Connect a laptop directly to the modem** with an Ethernet cable, bypassing the router. If that works, the router is the problem. Try a factory reset of the router (and set it up again) or replace it.
- **If even a direct connection fails**, and there's no announced outage, the problem is the modem or your provider's line. Call your provider. They can test the line and the modem remotely.
- **A modem you bought yourself** may need to be activated or re-registered with your provider after a reset. Your provider can do this over the phone.

## When to call your internet provider (or a pro)

Contact your internet provider if:

- The modem's online light won't come on after a restart and the cables are secure.
- Your connection drops out every day, or at the same times.
- The outside line, wall jack or cable looks damaged, or service died after storm or construction work.

If your provider says the line is fine but Wi-Fi keeps failing around the house, a local network installer can check your router placement and wiring, or set up mesh Wi-Fi.
