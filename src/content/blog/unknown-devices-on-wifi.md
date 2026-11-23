---
title: "Unknown Device on Your Wi-Fi? How to Check and Block It"
description: "Spotted an unknown device on your Wi-Fi? Learn how to identify it, rule out your own gadgets, block it, and lock down your router so it can't come back."
pubDate: 2026-11-23
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-23
category: networking
subcategory: network-security
tags: [wifi, router, network security, mac address, unknown device, wifi password, guest network]
image: { src: /images/featured/unknown-devices-on-wifi.webp, alt: "Illustration of a home Wi-Fi router with several connected devices, one of them highlighted as unknown" }
fixcheck: false
difficulty: easy
time: 15 to 45 min
risk: low
tools: [Phone or computer on your network, Router admin login or router app, Router label with default login details]
symptoms:
  - { label: "Where do I see connected devices?", to: "1-open-your-routers-connected-devices-list" }
  - { label: "How do I tell what a device is?", to: "2-identify-each-device-by-name-maker-and-mac-address" }
  - { label: "My own phone shows as unknown", to: "3-rule-out-private-wi-fi-addresses-on-your-own-phones" }
  - { label: "How do I kick it off?", to: "5-block-or-pause-the-device" }
  - { label: "Keep it from coming back", to: "6-change-your-wi-fi-password-the-right-way" }
  - { label: "Worried the router is hacked", to: "think-someone-got-into-the-router-itself" }
faq:
  - q: "How do I see who is connected to my Wi-Fi?"
    a: "Log in to your router's admin page or open your router or mesh app, then look for a list called something like connected devices, clients, attached devices or DHCP clients. It shows each device's name (if it shares one), its IP address and its MAC address."
  - q: "Why does my own phone show up as an unknown device?"
    a: "Most modern iPhones and Android phones use a private (randomized) Wi-Fi address by default, so the router sees a MAC address that doesn't match the one printed in the phone's settings and often can't show a maker or name. Smart plugs, bulbs and TV sticks also tend to show up with odd or blank names."
  - q: "Can a neighbor use my Wi-Fi without the password?"
    a: "Not on a network secured with WPA2 or WPA3 and a strong password, unless they got the password some other way, for example from a guest, a shared photo of the router label or a weak or default password. Open networks and WPS push-button pairing are the common weak spots."
  - q: "Does blocking a MAC address stop someone for good?"
    a: "No. Blocking a MAC address stops that device as it is, but MAC addresses are easy to change, so a determined person can get back on. Changing your Wi-Fi password is what actually locks out everyone you didn't give the new password to."
  - q: "Will changing my Wi-Fi password disconnect all my devices?"
    a: "Yes. Every phone, laptop, TV, printer and smart home device will drop off and need the new password. If you keep the same network name, most devices just ask for the new password. Plan a few minutes to reconnect smart gadgets, which can be the slowest part."
  - q: "Is an unknown device on my Wi-Fi dangerous?"
    a: "Usually it turns out to be one of your own gadgets. A real stranger on your network can use your bandwidth and may be able to see shared folders or other devices on your home network, which is why you should identify it and change your password if you can't account for it."
---

Seeing a device you don't recognize in your router's list is unsettling, but most of the time it's something you own. **Smart plugs, TV sticks, printers, game consoles and phones using private Wi-Fi addresses** often show up with blank names, odd model numbers or "unknown".

The job is simple: **list every connected device**, **match each one to something in your home**, then **block anything you can't explain and change your Wi-Fi password**. You don't need any special tools, just your router's admin page or app.

<figure><img src="/images/posts/unknown-devices-on-wifi-flow.svg" alt="Flowchart: open the router's device list, check if the name or maker matches something you own, if yes check for a private Wi-Fi address on your phones, if no switch devices off one at a time, and if it still can't be explained, block it and change the Wi-Fi password" width="640" height="440" loading="lazy" /><figcaption>Most unknown devices turn out to be your own. Block and change the password only if one is left over.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Open your router's admin page or app and find the connected devices list. Match each entry to a device in your home by name, maker and MAC address, remembering that phones often use private addresses. If something is still unexplained, block or pause it, then change your Wi-Fi password and turn off WPS so it can't reconnect.</p></div>

> **Safety first:** Only check and block devices on a network you own or manage. Don't try to access, scan or "hack back" a device you think belongs to a neighbor. Before changing router settings, make sure you know the admin password, or have the login printed on the router label, so you don't lock yourself out.

## How to tell if a device is really unknown: quick check

1. **Count what you own.** Walk through the house and list everything that uses Wi-Fi: phones, tablets, laptops, TVs, streaming sticks, game consoles, printers, smart speakers, doorbells, cameras, thermostats, plugs and bulbs. Most homes have more than people expect.
2. **Open the device list** on your router (step 1 below) and count the entries. If the numbers roughly match, you probably have nothing to worry about.
3. **Look for recent connections.** Many routers show when a device connected or how long it has been online. Something that appeared on the day a guest visited is easy to explain.
4. **Check if it's online right now.** Some lists also show devices that were connected earlier. Focus first on anything that is active now and you can't account for.

## 1. Open your router's connected devices list

Every router keeps a list of the devices it has handed an IP address to. Where you find it depends on the brand, so treat the names below as examples, not exact menu paths.

**How:**

1. If you have a **mesh system or a router with an app**, open the app. The device list is usually on the home screen or under a Devices or Clients tab.
2. Otherwise, on a phone or computer connected to your Wi-Fi, open a web browser and type the router's address. It's printed on the router label and is often **192.168.0.1** or **192.168.1.1**.
3. Log in with the admin username and password. If you never changed it, the default is usually on the **router label** or in the manual.
4. Look for a section with a name like **Connected Devices**, **Attached Devices**, **Clients**, **Device List** or **DHCP Clients**.

If you can't log in at all, see our guide on [how to reset a router](/networking/how-to-reset-router/), but treat a reset as a last resort, because it wipes your Wi-Fi name and password too.

## 2. Identify each device by name, maker and MAC address

Each entry usually shows a **device name** (if the device shares one), an **IP address** and a **MAC address**, a hardware ID made of six pairs of letters and numbers like `3C:22:FB:xx:xx:xx`.

**How:**

1. **Read the name first.** Names like "Living-Room-TV", "Galaxy-S" or a printer model number are easy to match. Many smart gadgets show a chip maker or a short code instead of a friendly name.
2. **Check the maker.** Many routers show the manufacturer next to each device. If yours doesn't, the **first three pairs** of a MAC address identify the maker. You can type them into any MAC address lookup tool to see who made the network chip.
3. **Compare with the device itself.** On most devices the MAC address is in the network or "About" settings. TVs, consoles and printers often show it in a network status screen.
4. **Rename devices** in the router or app once you identify them. Next time, anything new and unnamed will stand out.

<figure><img src="/images/posts/unknown-devices-on-wifi-mac.svg" alt="A MAC address split into two halves: the first three pairs identify the maker, the last three are unique to the device. A note explains that if the second character of the address is 2, 6, A or E, it is a private or randomized address" width="640" height="360" loading="lazy" /><figcaption>The first half of a MAC address names the maker, unless it's a private address.</figcaption></figure>

## 3. Rule out private Wi-Fi addresses on your own phones

This is the most common reason a family phone looks like a stranger. Modern **iPhones, iPads, Android phones and Windows laptops** can use a **private (randomized) MAC address** for each Wi-Fi network. The router sees an address that doesn't match the phone's hardware address, and it usually can't show a maker.

**How:**

1. **Spot one.** A private address has **2, 6, A or E** as its second character, for example `x2:`, `x6:`, `xA:` or `xE:`. Real hardware addresses almost never do.
2. **On iPhone or iPad,** go to Settings, then Wi-Fi, tap the info (i) button next to your network and look at **Private Wi-Fi Address**. The address shown there is the one your router sees.
3. **On Android,** open your Wi-Fi network's details and look for **Privacy** or **MAC address type**. Wording varies by phone maker, so check your manual if it's not obvious.
4. **On Windows 11,** look in your Wi-Fi network's properties for **Random hardware addresses**.
5. Compare those addresses with the list. You don't need to turn the privacy feature off: you can just rename the entry in your router.

## 4. Find a mystery device by switching things off

If an entry still has no name and no maker you recognize, the quickest test is elimination.

**How:**

1. Note the unknown device's IP or MAC address and refresh the list so it shows as online.
2. **Turn off or unplug** one group of devices at a time: smart plugs and bulbs, then TVs and streaming sticks, then consoles and printers. Turn Wi-Fi off on phones and tablets.
3. Refresh the router list after each group. When the unknown entry disappears, it belongs to the last group you switched off.
4. Narrow it down to one device and rename it in the router.
5. Don't forget **less obvious devices**: video doorbells, cameras, robot vacuums, smart washers or fridges, e-readers, a work laptop, a car parked nearby or a kid's handheld game.

## 5. Block or pause the device

If you've checked everything and one device is still unexplained, block it right away. It buys you time while you change the password.

**How:**

1. In the router app or admin page, open the device's entry. Look for an option like **Block**, **Pause**, **Remove** or **Deny access**.
2. Some routers only offer **MAC filtering** or an **access control** list. Add the unknown MAC address to the blocked list and save.
3. Refresh the list to confirm the device is gone.
4. Remember that **blocking by MAC address is not a lock**. MAC addresses can be changed, so a determined person can rejoin. Treat the block as a stopgap and go straight to step 6.

## 6. Change your Wi-Fi password the right way

Changing the password is the step that actually removes everyone who shouldn't be there. Anyone without the new password is locked out.

**How:**

1. In the router's **Wireless** or **Wi-Fi** settings, set a new password of at least **12 to 16 characters**. A short phrase of several random words is strong and easy to type on a TV.
2. Set the security type to **WPA3**, or **WPA2/WPA3 mixed** if some older devices can't use WPA3. If WPA3 isn't offered, use **WPA2 with AES**. Avoid WEP, WPA (original) or "open".
3. **Turn off WPS** (the push-button or PIN pairing), which can let people join without the password.
4. Save and reconnect your own devices with the new password. Keeping the same network name makes this easier.
5. Don't share the new password by posting a photo of the router label. Use a guest network for visitors (step 8).

## 7. Lock down the router so it stays secure

A changed Wi-Fi password doesn't help if someone can still log in to the router itself. Do these while you're in the settings.

**How:**

1. **Change the router admin password** from the default to something unique. This is different from the Wi-Fi password.
2. **Update the firmware.** Look for a firmware or software update option, or turn on automatic updates if your router offers them.
3. **Turn off remote management** (admin access from the internet) unless you actually use it.
4. If your router is old and no longer gets updates, it may be time to replace it.

For the full checklist, see our guide on [how to secure your home Wi-Fi router](/networking/secure-home-wifi-router/).

## 8. Set up a guest network for visitors and smart gadgets

A guest network gives visitors internet access without putting them on the same network as your computers and shared files. Many routers can also keep guests from seeing each other.

**How:**

1. Look for **Guest Network** in the router app or admin page and turn it on.
2. Give it its own name and a separate strong password.
3. If your router offers it, turn on the option that **stops guests from reaching your local network** or other devices.
4. Share the guest password with visitors. Change it now and then, especially after a party or a long stay.
5. Some people also put smart plugs, bulbs and cameras on the guest network so a weak gadget can't reach their laptops. Check that the devices still work there, as some need to be on the same network as your phone during setup.

## Think someone got into the router itself?

Signs include settings you didn't change, a different Wi-Fi name or password, a new admin account, changed DNS settings, or you suddenly can't log in with the password you set.

**What to do:**

1. Disconnect the router from the modem or wall jack so it's offline.
2. **Factory reset** it using the reset button (check your manual for how long to hold it).
3. Set it up again from scratch with a **new admin password**, a **new Wi-Fi password** and the latest firmware, and turn off WPS and remote management.
4. Change passwords for important accounts (email, banking) from a device you trust, and turn on two-factor sign-in where it's offered.
5. If the router came from your internet company, call them. They can check it, reset it remotely or swap it.

## When to call a pro

Most people can sort this out themselves in under an hour. Get help if:

- Unknown devices keep **coming back after you change the password and update the router**.
- Router settings keep changing, or you see signs of the router being taken over.
- You run a home office or small business and need separate networks, logging or a firewall set up properly.

Your **internet service provider** can help with a router they supplied. For more involved setups, a local IT or network technician can audit the network and set it up securely.
