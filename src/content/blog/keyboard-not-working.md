---
title: "Keyboard Not Working? Fixes for Windows"
description: "Keyboard not working on Windows? Check the USB port or receiver, batteries, Bluetooth pairing, Filter Keys, drivers and laptop key locks with these fixes."
pubDate: 2026-11-03
category: gadgets
subcategory: keyboards-and-mice
tags: [keyboard, windows 11, wireless keyboard, bluetooth, laptop keyboard, filter keys]
image: { src: /images/featured/keyboard-not-working.webp, alt: "Illustration of a computer keyboard with a USB receiver and a disconnected cable" }
difficulty: easy
time: 5 to 30 min
risk: low
tools: [Fresh batteries or a charging cable, A spare USB port, A second keyboard for testing (optional)]
symptoms:
  - { label: "Wireless keyboard stopped typing", to: "2-replace-or-charge-the-batteries" }
  - { label: "Bluetooth keyboard won't connect", to: "3-re-pair-a-bluetooth-keyboard" }
  - { label: "Keys only work if I hold them", to: "4-turn-off-filter-keys-and-sticky-keys" }
  - { label: "Laptop keys type numbers", to: "6-check-laptop-key-locks-and-test-in-the-bios" }
  - { label: "Wrong characters appear", to: "8-check-the-keyboard-language-and-layout" }
  - { label: "I spilled a drink on it", to: "7-dry-out-a-liquid-spill-fast" }
faq:
  - q: "Why did my keyboard suddenly stop working?"
    a: "The most common causes are a loose USB plug or receiver, flat batteries in a wireless keyboard, a dropped Bluetooth connection, or Filter Keys being turned on by accident. Less often it's a driver glitch after a Windows update. Restarting the PC and trying another USB port fixes many cases."
  - q: "How do I type if my keyboard isn't working?"
    a: "Use the On-Screen Keyboard. On the sign-in screen, click the accessibility icon in the lower-right corner and choose On-screen keyboard. Once signed in, search for On-Screen Keyboard from the Start menu or turn it on in Settings > Accessibility > Keyboard."
  - q: "Why does my keyboard only type when I hold the keys down?"
    a: "Filter Keys is probably on. It ignores short or repeated key presses. Holding the right Shift key for about eight seconds can turn it on by accident. Turn it off in Settings > Accessibility > Keyboard."
  - q: "Why are some letter keys typing numbers on my laptop?"
    a: "Some laptops without a separate number pad have a hidden one built into the letter keys. When Num Lock is on, keys such as U, I, O, J, K and L type numbers. Press Num Lock (sometimes Fn plus another key) to turn it off."
  - q: "Can a keyboard work again after a spill?"
    a: "Often, if you act fast. Unplug or power it off right away, turn it upside down to drain, and let it dry fully before using it. Water dries more cleanly than sugary drinks, which can leave keys sticky and may need cleaning or replacement."
---

When a keyboard stops typing, the keyboard itself is usually fine. The cause is often a **loose USB plug or wireless receiver**, **flat batteries**, a **dropped Bluetooth connection**, or a Windows setting like **Filter Keys** that makes it seem dead. Driver glitches and laptop key locks are the next most likely.

Start with the quick test below. It tells you in a minute whether the problem is the keyboard, the connection or Windows.

<figure><img src="/images/posts/keyboard-not-working-flow.svg" alt="Flowchart: restart the PC and try another USB port; then test the keyboard on another computer or in the BIOS setup screen; if it fails there too, the keyboard, batteries or receiver are at fault; if it works there, the problem is a Windows setting or driver" width="640" height="430" loading="lazy" /><figcaption>Testing outside Windows tells you whether the hardware works.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Restart the PC, plug the keyboard or its receiver into a different USB port directly on the computer, and replace the batteries if it's wireless. If keys respond only when held, turn off Filter Keys in Settings > Accessibility > Keyboard. Then reinstall the keyboard in Device Manager.</p></div>

## How to tell what's causing it: quick test

1. **Restart the PC.** Use Restart, not Shut down, so Windows fully reloads its drivers.
2. **Check the Caps Lock or Num Lock light.** If pressing Caps Lock toggles its light, the keyboard is talking to the PC and the problem is likely a setting.
3. **Test it somewhere else:**
    - **On another computer**, or
    - **In the BIOS setup screen:** restart and press the setup key shown at startup (often F2, Delete or F10, check your manual). If you can move around the menus, the keyboard works.
4. **Check what you found:**
    - **Dead everywhere:** the keyboard, batteries, receiver or cable (fixes 1, 2, 3 and 7).
    - **Works outside Windows only:** a Windows setting or driver (fixes 4, 5 and 8).

Need to type while you troubleshoot? Use the **On-Screen Keyboard**: search for it from the Start menu, or on the sign-in screen click the accessibility icon and choose **On-screen keyboard**.

## 1. Check the USB plug, receiver and port

A plug or wireless receiver that's half out, or a faulty USB port or hub, is the most common cause for a wired or USB-receiver keyboard.

**Fix:**

- Unplug the cable or receiver and plug it back in firmly.
- Try a **different USB port**, ideally one directly on the PC. On a desktop, the ports on the back connect straight to the motherboard and are the most reliable.
- Remove USB hubs, docks and extension cables while testing.
- For a receiver, try a port **close to the keyboard** and away from metal objects, other receivers and Wi-Fi routers. A front port or a short USB extension can help with range.
- Some keyboards come with a receiver paired only to that keyboard. If you lost it or mixed it up with another one, check the maker's app or support page about re-pairing.

<figure><img src="/images/posts/keyboard-not-working-connections.svg" alt="Three ways a keyboard connects and what to check for each: a wired USB keyboard, check the plug and try another port; a keyboard with a USB receiver, check batteries, the power switch and the receiver; a Bluetooth keyboard, check batteries, Bluetooth on, and remove and pair again" width="640" height="400" loading="lazy" /><figcaption>Know which type you have and start with its checks.</figcaption></figure>

## 2. Replace or charge the batteries

Wireless keyboards often keep working with weak batteries and then stop all at once. Lag, missed keys or a blinking light are early warnings.

**Fix:**

- Put in **fresh batteries** of the type marked inside the compartment, or charge it with its cable. Some keyboards need a few minutes of charging before they wake.
- Check the **power switch**. Many wireless keyboards have a small on/off switch on the top edge or underneath.
- Clean the battery contacts if you see white or green corrosion.

## 3. Re-pair a Bluetooth keyboard

Bluetooth keyboards can drop their pairing after a Windows update, a battery change or being paired to another device such as a tablet.

**Fix:**

1. Open **Settings > Bluetooth & devices** and make sure **Bluetooth** is on.
2. If the keyboard is listed, select its menu (three dots) and choose **Remove device**.
3. Put the keyboard into **pairing mode**. This usually means holding a Bluetooth or channel button until a light blinks quickly. Check the manual for your model.
4. Click **Add device > Bluetooth**, pick the keyboard, and type any code it shows if asked.
5. Multi-device keyboards have channel buttons. Make sure you're on the channel paired to this PC.

## 4. Turn off Filter Keys and Sticky Keys

**Filter Keys** ignores short or repeated presses, so the keyboard seems dead unless you hold each key. Holding the **right Shift key for about eight seconds** can turn it on by accident. **Sticky Keys**, which turns on after pressing Shift five times, makes Shift, Ctrl and Alt stay pressed.

**Fix:**

1. Open **Settings > Accessibility > Keyboard**. (Use the mouse, or the On-Screen Keyboard if needed.)
2. Turn off **Filter keys** and **Sticky keys**.
3. To stop it happening again, open each one and turn off its **keyboard shortcut**.

## 5. Reinstall the keyboard driver

A corrupted driver can make a keyboard stop responding, often after a Windows update or after plugging it into a new port.

**Fix:**

1. Right-click **Start** and open **Device Manager**.
2. Expand **Keyboards**. Look for a yellow warning icon.
3. Right-click your keyboard (often listed as **HID Keyboard Device** or **Standard PS/2 Keyboard** on laptops) and choose **Uninstall device**.
4. Restart the PC. Windows reinstalls the driver automatically.
5. If it still fails, check **Windows Update** and your PC maker's support app for driver updates, and install the keyboard maker's software if it has one. See [how to update drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/) for the safe sources.

## 6. Check laptop key locks and test in the BIOS

Laptop keyboards have a few extra things that can go wrong.

**Fix:**

- **Letters type numbers:** some laptops have a number pad hidden in the letter keys. Press **Num Lock** (on some models with **Fn**) to turn it off.
- **Top row keys do the wrong thing:** the **Fn Lock** may be on. Many laptops toggle it with **Fn + Esc** or a key with a padlock symbol. Check your manual.
- **Whole keyboard dead:** test it in the BIOS setup screen (see the quick test). If it works there, the problem is in Windows. If it doesn't, the keyboard or its internal ribbon cable may need service.
- **Some keys dead after a crumb or dust buildup:** turn the laptop off, tilt it, and blow around the keys with short bursts of canned air.
- **Plug in a USB keyboard** to keep working while you sort it out.

## 7. Dry out a liquid spill fast

Liquid can short a keyboard right away or cause problems days later. Fast action gives you the best chance.

> **Safety first:** If liquid gets into a laptop, turn it off immediately by holding the power button and unplug the charger. Don't turn it back on to "check" it. Never use a hair dryer on high heat or put a laptop in an oven.

**Fix:**

1. **Unplug** a USB keyboard, or remove the batteries from a wireless one. For a laptop, power off and unplug as above.
2. Turn it **upside down** to let liquid drain. Open a laptop like a tent, keys down.
3. Wipe up what you can with a lint-free cloth.
4. Let it **dry fully**, for at least a day or two, in a warm, dry room.
5. **Sugary or sticky drinks** (soda, coffee with sugar, juice) leave residue that can make keys stick even once dry. Desktop keyboards can often be cleaned, but laptops usually need a repair shop to clean inside properly.

## 8. Check the keyboard language and layout

If keys work but type the **wrong characters** (quotes and symbols in odd places, or Y and Z swapped), Windows is using a different keyboard layout.

**Fix:**

1. Look at the language code near the clock on the taskbar, such as **ENG** or **ENG US**.
2. Press **Windows + Space** to switch between installed layouts.
3. To remove a layout you don't use, open **Settings > Time & language > Language & region**, select your language's options, and remove the extra keyboard. For most US users, keep **US** (QWERTY).

## Keyboard still dead everywhere?

If it doesn't work on any computer or in the BIOS:

- **Wired keyboard:** check the cable for damage, especially where it enters the keyboard. If it has a detachable cable, try another one.
- **Wireless keyboard:** try a new set of batteries from a fresh pack, and a different receiver if the maker sells replacements.
- **Laptop keyboard:** use a USB or Bluetooth keyboard in the meantime. Internal keyboards can be replaced, but on many models it's a bigger job than it looks.

## When to call a pro

Get help from the maker's support or a repair shop if:

- A laptop keyboard doesn't work in the BIOS, even after a restart and with the battery charged.
- Liquid got into a laptop, especially a sugary drink.
- Several keys stopped working together, which can point to a damaged internal cable.
- The laptop gets hot, smells burnt or the case looks swollen near the keyboard.

For external keyboards, check the warranty first. A replacement is often quicker and cheaper than a repair.
