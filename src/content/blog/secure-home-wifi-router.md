---
title: "How to Secure Your Home Wi-Fi Router in 10 Steps"
description: "Lock down your home Wi-Fi router in 10 steps: admin password, WPA3 or WPA2-AES, firmware updates, WPS, remote access, a guest network for smart devices."
pubDate: 2026-11-03
category: networking
subcategory: network-security
tags: [router, wi-fi, security, wpa3, guest network, firmware, smart home]
image: { src: /images/featured/secure-home-wifi-router.webp, alt: "Illustration of a home Wi-Fi router protected by a shield with a padlock" }
fixcheck: false
difficulty: easy
time: 20 to 45 min
risk: low
tools: [Your router's app or a web browser, The label on your router, A password manager (optional)]
symptoms:
  - { label: "Which security mode do I pick?", to: "2-use-wpa3-or-wpa2-aes-encryption" }
  - { label: "Should I turn off WPS?", to: "5-turn-off-wps" }
  - { label: "Where do smart gadgets go?", to: "7-put-smart-home-gadgets-on-a-guest-network" }
  - { label: "Is UPnP safe?", to: "8-decide-what-to-do-about-upnp" }
  - { label: "Is my router too old?", to: "10-replace-a-router-that-no-longer-gets-updates" }
  - { label: "A stranger on my Wi-Fi?", to: "think-someone-is-already-on-your-network" }
faq:
  - q: "Is WPA3 better than WPA2?"
    a: "Yes. WPA3 makes it much harder to guess your Wi-Fi password by trying words offline and adds other protections. WPA2 with AES is still acceptable if some of your devices can't use WPA3. Avoid WEP, WPA and anything using TKIP."
  - q: "Should I hide my Wi-Fi network name?"
    a: "Hiding the network name (SSID) adds very little security, because the name still appears in the traffic your devices send, and it can make devices connect less reliably. A strong password and WPA3 or WPA2-AES matter far more."
  - q: "How often should I update my router's firmware?"
    a: "Turn on automatic updates if your router has them. If it doesn't, check for updates every few months and right after news of a major router security flaw. A router that hasn't had an update in years may be out of support."
  - q: "Does a guest network really keep smart devices separate?"
    a: "On most routers a guest network can reach the internet but not the devices on your main network, which limits what a hacked gadget could reach. Check that the setting that blocks guests from seeing each other or the local network is turned on."
  - q: "Do I need to secure a router my internet provider gave me?"
    a: "Yes. Many provider gateways update their firmware automatically, but you should still set a strong Wi-Fi password, check the encryption setting, turn off WPS if you can and review connected devices. Use the provider's app or the gateway's web page."
---

Your router is the front door to every phone, laptop, camera and smart plug in your home. Most routers work out of the box, but the default settings are often chosen for easy setup, not security.

The changes that matter most are **a new admin password**, **WPA3 or WPA2-AES encryption with a strong Wi-Fi password**, **automatic firmware updates**, and **a guest network for smart home gadgets**. None of them needs special tools, and most take a minute each in the router's app.

<figure><img src="/images/posts/secure-home-wifi-router-encryption.svg" alt="Chart of Wi-Fi security modes from best to avoid: WPA3 best, WPA2 and WPA3 mixed mode good, WPA2 with AES acceptable, WPA2 with TKIP or WPA avoid, WEP or open never" width="640" height="380" loading="lazy" /><figcaption>Pick the highest mode all your devices can join.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Log in to your router, change the admin password, set Wi-Fi security to WPA3 (or WPA2/WPA3 mixed, or WPA2-AES) with a long passphrase, and turn on automatic firmware updates. Then turn off WPS and remote management, put smart home devices on a guest network, and replace the router once it stops getting updates.</p></div>

## Before you start: log in to your router

1. **Find the login details.** Most routers print the app name or web address, plus the default admin password, on a label on the bottom or back.
2. **Use the app or a browser.** Many newer routers and mesh systems are managed only through a phone app. Others use a web page reached by typing an address from the label into a browser while connected to the router.
3. **Use a wired or nearby connection.** Some changes (like the Wi-Fi password) disconnect every device. Be ready to reconnect.
4. **Write down what you change**, or save it in a password manager.

Menu names vary a lot between brands, so look for sections called Wireless, Security, Advanced, Administration or System. If you rent a gateway from your internet provider, some settings may be in the provider's app instead.

## 1. Change the router's admin password

The **admin password** controls the router's settings. It's different from the Wi-Fi password. Anyone on your network who knows the admin password can change your settings, and older routers often shipped with simple default passwords that are widely known.

**How:**

- Look for **Administration**, **System** or **Router password** in the settings.
- Use a long, unique password you don't use anywhere else. A password manager makes this easy.
- If your router uses an account in an app, secure that account with a strong password and turn on two-step verification if it's offered.

## 2. Use WPA3 or WPA2-AES encryption

Encryption scrambles the traffic between your devices and the router, and it controls who can join. The setting is usually under **Wireless security** or **Security mode**.

**How:**

- Choose **WPA3-Personal** if all your devices support it.
- If older devices can't connect with WPA3, choose **WPA2/WPA3** (often called mixed or transition mode). New devices use WPA3 and older ones fall back to WPA2.
- If WPA3 isn't offered, choose **WPA2-Personal with AES** (sometimes shown as CCMP).
- Avoid **WEP**, **WPA** (without the 2) and **TKIP**. These are outdated and much easier to break.

If you have separate 2.4 GHz and 5 GHz networks, set both.

## 3. Set a strong Wi-Fi password

Encryption is only as strong as the password. Short or common passwords can be guessed.

**How:**

- Use a **passphrase of at least 12 characters**. Longer is better. Four or five random words strung together are strong and easy to type on a TV remote.
- Don't use your address, phone number, pet's name or anything printed on the router.
- Change the **network name (SSID)** too if it shows your name, address or the router model. Something neutral is best.
- After you change it, every device has to reconnect with the new password. Smart home devices may need to be set up again in their apps.

## 4. Turn on firmware updates

Firmware is the router's software. Makers release updates to fix security flaws, and a router with old firmware can be attacked from the internet without anyone touching your Wi-Fi.

**How:**

- Look for **Firmware update**, **Software update** or **Auto update** in the app or under Administration.
- Turn on **automatic updates** if offered. Otherwise, check for updates now and every few months.
- Never unplug the router while it's updating.
- Mesh systems update all their units together, usually from the app.

## 5. Turn off WPS

**WPS (Wi-Fi Protected Setup)** lets devices join with a button press or an 8-digit PIN instead of the password. The PIN method has a long-known weakness that lets attackers guess it far faster than the full password.

**How:**

- Find **WPS** under Wireless or Advanced settings and turn it **off**.
- If you only see an option for the PIN, at least turn that off.
- You lose nothing important. Type the Wi-Fi password once on each device instead.

## 6. Turn off remote management

**Remote management** (also called remote access, remote administration or web access from WAN) lets someone reach the router's settings page from the internet. If it's on and there's a flaw or a weak password, an attacker could change your settings from anywhere.

**How:**

- Find the setting under **Administration** or **Advanced** and turn it **off**.
- Many app-based routers manage settings through the maker's cloud account instead. That's normal, but keep that account's password strong.
- If your provider manages your gateway, they may need their own access. That's usually separate from this setting.

## 7. Put smart home gadgets on a guest network

Cheap cameras, plugs, bulbs and TV boxes often get fewer security updates than phones and laptops. A **guest network** gives them internet access while keeping them away from your computers and files.

<figure><img src="/images/posts/secure-home-wifi-router-guest-network.svg" alt="Diagram of one router with two networks: the main network for phones, laptops and computers, and a guest network for smart plugs, cameras, bulbs and visitors, with a barrier between them; both reach the internet" width="640" height="380" loading="lazy" /><figcaption>Guest devices get the internet but can't reach your laptops.</figcaption></figure>

**How:**

1. Turn on the **guest network** and give it its own strong password, using WPA3 or WPA2-AES.
2. Make sure the option that blocks guests from your local network is on. Names vary, such as **Allow guests to see each other and access my local network** (turn off) or **Client isolation** (turn on).
3. Move smart devices over by setting them up again in their apps with the guest network details.
4. Use the same guest network for visitors.

Some devices need to be on the **same network as your phone** to work, such as many casting devices, printers and some smart speakers. If one stops working on the guest network, move it back to the main one. Many smart plugs also need 2.4 GHz; see our guide on [smart plugs that won't connect](/smart-home/smart-plug-wont-connect/) if pairing fails.

## 8. Decide what to do about UPnP

**UPnP (Universal Plug and Play)** lets devices on your network open ports in the router automatically. Game consoles, video calling apps and some cameras use it so they work without manual setup. The risk is that malware or a hacked gadget inside your network can use it too.

**How to decide:**

- **Most secure:** turn UPnP **off**. If a console or app then reports a strict or limited connection, you can set up a specific port forward for it (check the console maker's support page for the ports).
- **Balanced:** leave UPnP on if you game online or use apps that need it, but keep the router's firmware updated and smart devices on the guest network.
- Never forward ports or put a device in the **DMZ** unless you know exactly why it needs it.

## 9. Review connected devices

Your router keeps a list of everything connected. Checking it now and then shows whether anyone has joined who shouldn't have.

**How:**

- Open the **Connected devices**, **Clients** or **Device list** page.
- Match each device to something you own. Names can be cryptic. Many routers let you rename or pause devices.
- Turning devices off one at a time and watching the list is a quick way to identify the mystery ones.
- If you find something you can't explain, see the section below.

## 10. Replace a router that no longer gets updates

Routers have a limited support life. Once the maker stops releasing firmware, newly found security holes stay open for good.

**How to tell:**

- Search the maker's support site for your model. Look for an **end-of-life** or **end-of-support** notice, or check the date of the last firmware release.
- If the last update was years ago, or the router only supports WEP, WPA or WPA2 with TKIP, it's time to replace it.
- When you buy, choose a router that supports **WPA3** and **automatic updates**, and check how long the maker says it will support it.
- If you rent your gateway, ask your provider whether it's still supported or can be swapped.

## Think someone is already on your network?

- **Change the Wi-Fi password** (step 3) and the **admin password** (step 1). Everyone, including the unwanted guest, gets kicked off, and only those you give the new password can rejoin.
- **Update the firmware** (step 4) and check that remote management is off (step 6).
- If settings keep changing on their own, or the router shows settings you didn't make, **factory reset** it, update the firmware, and set it up from scratch with new passwords. A reset erases everything, so note your settings first.
- Run a malware scan on your computers if you see other warning signs, like browser redirects.

## When to call a pro

Ask your internet provider or a local IT or network installer for help if:

- You can't log in to your router and a reset isn't an option, such as a provider gateway with locked settings.
- You run a home office with sensitive client data, and want separate networks, a firewall or a VPN set up properly.
- Your router is out of support and you need help choosing and setting up a replacement or mesh system.
