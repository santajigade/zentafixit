---
title: "Ethernet Not Working? Fixes for a Wired Connection"
description: "Ethernet not working on your PC, console or TV? Check link lights, cables and ports, then fix adapter, driver, IP and powerline adapter problems step by step."
pubDate: 2026-11-03
category: networking
subcategory: ethernet-and-powerline
tags: [ethernet, wired, network cable, router, powerline, windows, adapter]
image: { src: /images/featured/ethernet-not-working.webp, alt: "Illustration of an Ethernet cable plug next to a router port with one dark status light" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Spare Ethernet cable, A second device to test with, Powerline adapter manual (if you use them)]
symptoms:
  - { label: "No lights on the port", to: "1-check-the-link-lights-on-both-ends" }
  - { label: "Says cable unplugged", to: "2-reseat-or-swap-the-cable" }
  - { label: "Connected, but no internet", to: "6-reset-your-ip-settings-to-automatic" }
  - { label: "Stopped after a Windows update", to: "5-update-or-reinstall-the-network-driver" }
  - { label: "Powerline adapter not working", to: "7-fix-powerline-adapters-that-wont-connect" }
  - { label: "Wired but slow", to: "8-wired-but-slow-check-the-link-speed" }
faq:
  - q: "Why is my Ethernet not working but Wi-Fi is?"
    a: "If Wi-Fi works, your internet service and router are fine. The problem is the wired path: the cable, the port on the router or device, a disabled Ethernet adapter, its driver, or the device's IP settings. Swap the cable and try another router port first."
  - q: "How do I know if my Ethernet cable is bad?"
    a: "Swap it for a cable you know works. If the problem follows the old cable to another device, the cable is bad. Bent or broken plug clips, kinks, crushed spots and a connection stuck at 100 Mbps are all signs of a damaged cable."
  - q: "Do Ethernet port lights mean it's working?"
    a: "A lit link light means the two ends can see each other electrically. A flickering activity light means data is moving. Colors and positions vary by brand, so check the device manual for what each color means."
  - q: "Can I plug a powerline adapter into a surge protector?"
    a: "Most makers say no. Surge protectors and power strips filter the high-frequency signal powerline adapters use, which can cut speed or stop them pairing. Plug the adapter straight into a wall outlet. Some adapters have a pass-through socket you can plug the strip into."
  - q: "What Ethernet cable should I buy?"
    a: "Cat 5e or Cat 6 cable handles gigabit home internet. Cat 6 has a little more headroom. Pick a length that reaches without being stretched tight, and avoid flat cables pinched under doors."
---

When a wired connection fails, your computer, console or TV usually says **"network cable unplugged"**, shows no internet, or simply never gets an address. Ethernet is simpler than Wi-Fi, so the fault is almost always in one of a few places along the wire.

The most common causes are **a bad or loose cable**, **a dead port on the router**, **a disabled Ethernet adapter or broken driver**, and **wrong IP settings**. If you use **powerline adapters**, add pairing problems and surge strips to that list. Start at the lights, because they tell you which half of the problem you're in.

<figure><img src="/images/posts/ethernet-not-working-flow.svg" alt="Flowchart: check whether the link light is on at both ends; if the lights are off, suspect the cable, the port or a disabled adapter; if the lights are on but there's no internet, suspect IP settings, the driver or the router" width="640" height="430" loading="lazy" /><figcaption>The link lights split the problem into hardware or settings.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Check the port lights on both ends, then swap the cable and try a different router port. If the lights are on but there's no internet, make sure the Ethernet adapter is enabled, its IP settings are on automatic (DHCP) and the driver is up to date. Powerline adapters must be paired and plugged straight into a wall outlet.</p></div>

## How to tell what's causing it: quick test

1. **Check whether Wi-Fi works** on the same device or another device. If nothing in the house has internet, the problem is the modem or your provider, not the cable. See [Wi-Fi connected but no internet](/networking/wifi-connected-no-internet/) for that.
2. **Look at the lights** where the cable plugs into the router and into your device. Dark on both ends points to the cable, a port or the adapter (fixes 1 to 4).
3. **Lights on but no internet?** The wiring is probably fine. Focus on settings and drivers (fixes 4 to 6).
4. **Plug a different device** (a laptop, for example) into the same cable. If that works, the problem is on the first device.

## 1. Check the link lights on both ends

Most Ethernet ports have one or two small lights. A steady **link** light means the two ends see each other. A flickering **activity** light means data is moving. Some laptops have no lights, so rely on the router end there.

**Fix:**

- Look at the router port and the device port with the cable plugged in. Wait about 10 seconds after plugging in.
- **No light at either end:** the cable, one of the ports, or the adapter is the problem. Go to fixes 2 to 4.
- **Light on the router but not on the device** (or the reverse): suspect the cable's plug at the dark end, or that port.
- Light colors (green, amber, white) often show speed, but they mean different things on different brands. Check your manual before reading too much into the color.

## 2. Reseat or swap the cable

Ethernet cables fail more often than people think. The little plastic clip breaks so the plug sits loose, the cable gets crushed under furniture, or a pet chews it.

**Fix:**

1. Unplug both ends and push them back in until you hear or feel a **click**.
2. Look at the plugs. A broken clip, bent pins or a cracked housing means replace the cable.
3. **Swap in a cable you know works**, such as the one from a game console or the one in the router box.
4. If you're going through a **wall jack**, test with a cable run directly from the router to the device. If that works, the wall jack or the cable inside the wall is the problem.

For home internet, **Cat 5e or Cat 6** cable is plenty. Very old cables marked Cat 5 (without the "e") may struggle with gigabit speeds.

## 3. Try a different router port and restart the router

Router ports can fail, especially after a power surge or a storm. Restarting the router also clears a stuck switch chip, which is more common than a truly dead port.

**Fix:**

- Move the cable to **another numbered LAN port** on the router. Don't use the port labeled **WAN** or **Internet**, which is meant for the modem.
- Restart the router by unplugging its power for about 30 seconds.
- If you have a separate **network switch** between the router and your device, make sure it has power, then try plugging the device straight into the router to rule the switch out.
- If one port never lights up with any cable or device, that port is likely dead. Use another one, or replace the router if several are dead.

## 4. Make sure the Ethernet adapter is enabled

A disabled adapter looks exactly like an unplugged cable. It can get switched off by accident, by a VPN or by a troubleshooting tool.

**Fix on Windows:**

1. Press **Windows + R**, type `ncpa.cpl` and press Enter. This opens **Network Connections** in Windows 10 and 11.
2. Find **Ethernet**. If it's gray and says **Disabled**, right-click it and choose **Enable**.
3. If it says **Network cable unplugged** with a known-good cable, go back to fixes 2 and 3, then fix 5.

**Fix on a Mac:** open **System Settings > Network** and check that Ethernet (or your USB adapter) is listed and shows **Connected**. If it isn't listed, unplug and replug the adapter.

**On a console, TV or streaming box:** go to its network settings and choose wired or Ethernet setup. Many devices use Wi-Fi until you tell them to use the cable.

**USB and USB-C Ethernet adapters and docks:** try another USB port, plug the dock's own power supply in if it has one, and unplug and replug the adapter.

## 5. Update or reinstall the network driver

A broken or outdated driver can stop the adapter working, often right after a Windows update.

<figure><img src="/images/posts/ethernet-not-working-path.svg" alt="The wired path from device to internet: device and its adapter, Ethernet cable, optional wall jack or switch, router LAN port, then router WAN port and modem; each part lists what to check" width="640" height="360" loading="lazy" /><figcaption>Check each link in the chain, starting from your device.</figcaption></figure>

**Fix on Windows:**

1. Right-click the **Start** button and open **Device Manager**.
2. Expand **Network adapters** and find the Ethernet one (names often include Ethernet, GbE, or Family Controller).
3. A yellow warning icon means a driver problem. Right-click it and choose **Update driver**.
4. If that doesn't help, choose **Uninstall device**, then restart the PC. Windows reinstalls a driver automatically.
5. For the best driver, download it from your PC or motherboard maker's support page using another device. Our guide to [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/) walks through it.

If the Ethernet adapter doesn't appear at all, even under **View > Show hidden devices**, check that it isn't turned off in the BIOS or UEFI settings (check your PC manual), or the port may have failed.

## 6. Reset your IP settings to automatic

Your device needs an address from the router, handed out automatically by a feature called DHCP. If someone typed in a fixed (static) address, or the device didn't get one, you'll see a connection with no internet.

**Fix on Windows:**

1. Open **Command Prompt** and run `ipconfig`. Look at the Ethernet adapter's IPv4 address.
2. An address starting with **169.254** means the device didn't get one from the router. Restart the router and the device.
3. To check for a static address in Windows 11, go to **Settings > Network & internet > Ethernet**, find **IP assignment** and choose **Edit**. Set it to **Automatic (DHCP)**. Do the same for **DNS server assignment** unless you set a custom DNS on purpose.
4. Then, in an admin Command Prompt, run `ipconfig /release`, `ipconfig /renew` and `ipconfig /flushdns`.

**Fix on a Mac:** in **System Settings > Network > Ethernet > Details > TCP/IP**, set Configure IPv4 to **Using DHCP**, then click **Renew DHCP Lease**.

If a VPN is running, disconnect it and test again. VPNs can take over the wired connection too.

## 7. Fix powerline adapters that won't connect

Powerline adapters send your network through the home's electrical wiring. They're handy, but they're picky about where and how they're plugged in.

**Fix:**

- **Plug each adapter straight into a wall outlet.** Surge protectors, power strips and many UPS units filter out the signal. If your adapter has a pass-through socket, plug the strip into that instead.
- **Pair them again.** Most kits pair with a button on each adapter: press it on one, then on the other within the time limit in your manual. Watch for the link light to turn on.
- **Keep them on the same brand and standard.** Adapters from different standards may not talk to each other. Check the box or manual.
- **Try a different outlet.** Performance drops through some circuits, near big appliances, or across the two halves of your breaker panel. Try an outlet in another room to test.
- **Watch for noise makers.** Phone chargers, LED drivers, and motors on the same outlet or nearby can disrupt the signal. Move them, or plug them into the adapter's filtered pass-through socket if it has one.
- **Reset to factory settings** (usually a long press on the pair or reset button) and pair from scratch if nothing else works.

## 8. Wired but slow: check the link speed

A damaged cable or a weak port often still connects, just at **100 Mbps instead of 1,000 Mbps (gigabit)**. If your plan is faster than 100 Mbps, you'll notice.

**Fix:**

- On Windows, open **Network Connections** (`ncpa.cpl`), double-click **Ethernet** and read the **Speed** line. 100.0 Mbps on a gigabit device usually means a cable or plug problem.
- Swap the cable first. Gigabit needs all eight wires in the cable working; 100 Mbps uses only four, so a single broken wire can drop the speed.
- Try another router port and make sure any switch in the path is a gigabit model.
- Some TVs and older devices have 100 Mbps ports by design. That's normal and still plenty for streaming.

## Still no connection on any port?

- **Test with a second device and a second cable** on the same router port. If neither works, the router's ports or the router itself has failed.
- **Plug your device directly into the modem** (restart the modem first). If that works, the router is the problem.
- **Factory reset the router** only if you can set it up again. A reset erases your Wi-Fi name, password and settings.
- On a desktop, a **cheap plug-in network card or USB Ethernet adapter** is an easy way around a dead built-in port.

## When to call a pro

Call your internet provider or a local network installer if:

- A cable run inside the walls, or a wall jack, tests dead and you'd rather not re-terminate it yourself.
- Several router ports died after a storm or power surge. The router, and possibly other connected gear, may need replacing.
- The modem has no internet on a wired connection either, after a restart. That's a provider issue.
- You want new wired runs to an office or TV. Installers can run and terminate Cat 6 cleanly.
