---
title: "Microphone Not Working on Windows 11? 9 Fixes"
description: "Mic not working on Windows 11? Check privacy settings, the input device, volume, app settings, Bluetooth headset mode and drivers with these step-by-step fixes."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: gadgets
subcategory: mic-webcam-and-audio
tags: [microphone, windows 11, headset, teams, zoom, audio, bluetooth]
image: { src: /images/featured/microphone-not-working-windows-11.webp, alt: "Illustration of a desktop microphone next to a laptop screen showing a muted mic symbol" }
difficulty: easy
time: 5 to 20 min
risk: low
tools: [Your microphone or headset, A second device for testing (optional)]
symptoms:
  - { label: "Nobody can hear me in any app", to: "2-allow-microphone-access-in-privacy-settings" }
  - { label: "Windows uses the wrong mic", to: "3-choose-the-right-input-device" }
  - { label: "Works in Windows, not in Teams or Zoom", to: "5-pick-the-mic-inside-teams-zoom-or-your-browser" }
  - { label: "Bluetooth headset mic is silent", to: "6-switch-a-bluetooth-headset-to-hands-free-mode" }
  - { label: "Mic too quiet", to: "4-turn-up-the-input-volume-and-test-it" }
  - { label: "Mic not listed at all", to: "mic-not-showing-up-at-all" }
faq:
  - q: "Why is my mic not working on Windows 11 but working on my phone?"
    a: "If the mic works on another device, the hardware is fine and the problem is on your PC. The usual causes are microphone privacy settings, Windows picking a different input device, or the app using the wrong mic. Work through fixes 2, 3 and 5."
  - q: "How do I test my microphone on Windows 11?"
    a: "Go to Settings > System > Sound, select your microphone under Input, and use the microphone test on its properties page. Speak normally and watch the input level. If it moves, Windows hears you."
  - q: "Why does my Bluetooth headset mic not work on my PC?"
    a: "Bluetooth headsets have a high-quality stereo mode with no microphone and a hands-free mode that includes the mic. If an app or Windows is using the stereo entry, the mic is off. Choose the entry with 'Headset' or 'Hands-Free' in its name as your input."
  - q: "Why can't Zoom or Teams hear me when other apps can?"
    a: "Each app has its own microphone setting, and it may still point to a webcam mic or a device you unplugged. Desktop apps also need 'Let desktop apps access your microphone' turned on in Windows privacy settings."
  - q: "Does Windows 11 have a microphone troubleshooter?"
    a: "Yes. Windows 11 includes a recording audio troubleshooter. On newer versions it runs through the Get Help app. Search for Get Help from the Start menu and describe the problem, for example 'microphone not working'."
---

When your microphone stops working on Windows 11, the hardware is rarely broken. The cause is usually a **privacy setting blocking access**, **Windows using a different input device**, or **an app pointing at the wrong mic**. Less often it's a Bluetooth headset in the wrong mode or a driver problem.

Start with the quick test below. It tells you in a minute whether to look at Windows, the app or the hardware.

<figure><img src="/images/posts/microphone-not-working-windows-11-diagnosis.svg" alt="Flowchart: if the mic is not listed under Input in Sound settings, check the connection, Bluetooth mode and driver; if it is listed but the level does not move, check mute, privacy and volume; if the level moves but an app can't hear you, fix that app's mic setting" width="640" height="430" loading="lazy" /><figcaption>The Sound settings test shows where the problem is.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Open Settings > Privacy & security > Microphone and make sure microphone access is on for apps and desktop apps. Then go to Settings > System > Sound and pick the right mic under Input. If Windows hears you but one app doesn't, choose the mic inside that app's settings.</p></div>

## How to tell what's causing it: quick test

1. **Open Settings > System > Sound** and look under **Input**. Is your mic listed?
2. **Select it** and use the microphone test on its properties page. Speak and watch the level bar.
3. **Check what you see:**
    - **Not listed:** a connection, Bluetooth or driver problem (fixes 1, 6 and 8, then the "not showing up" section).
    - **Listed, but the level doesn't move:** a mute, privacy or volume problem (fixes 1, 2, 4 and 9).
    - **Level moves, but your app can't hear you:** an app setting problem (fixes 2 and 5).
4. **Still unsure?** Try the mic on another computer or phone. If it's silent there too, the mic or its cable is faulty.

## 1. Check the mute switch, cable and connection

Many headsets have a **mute switch** on the earcup or an inline control on the cable, and some USB mics have a mute button that lights up red. It's an easy one to miss.

**Fix:**

- Flip the mute switch or press the mic's mute button, and check for a mute light.
- Press your keyboard's mic mute key if it has one (often a function key with a crossed-out mic icon).
- Unplug and reconnect the mic. For USB mics, plug **directly into the PC**, not a hub, and try a different USB port.
- For a 3.5 mm headset, check you're in the right jack. Many laptops have a single combined headset jack. Desktop PCs often have a separate mic jack (usually pink). A headset with one plug may need a splitter on a PC with two jacks.

## 2. Allow microphone access in privacy settings

Windows 11 can block the microphone for every app, or only for some. This is the most common cause when no app can hear you.

<figure><img src="/images/posts/microphone-not-working-windows-11-privacy.svg" alt="Windows 11 Settings path Privacy and security, Microphone, with three switches turned on: Microphone access, Let apps access your microphone, and Let desktop apps access your microphone" width="640" height="400" loading="lazy" /><figcaption>All three switches need to be on for desktop apps like Zoom and Teams.</figcaption></figure>

**Fix:**

1. Open **Settings > Privacy & security > Microphone**.
2. Turn on **Microphone access**.
3. Turn on **Let apps access your microphone**, and check the app you need is switched on in the list below it.
4. Scroll down and turn on **Let desktop apps access your microphone**. Most video call apps and games installed from a website or installer count as desktop apps.

## 3. Choose the right input device

Windows may be listening to a webcam mic, a disconnected headset, or a "Stereo Mix" device instead of the mic you're using. This often happens after you plug in a new headset or dock.

**Fix:**

1. Open **Settings > System > Sound**.
2. Under **Input**, choose the mic you want to use.
3. If there's an option on its properties page to allow the device, make sure it's allowed and not disabled.

You can also right-click the speaker icon on the taskbar and open **Sound settings** to get there faster.

## 4. Turn up the input volume and test it

A mic set to a very low input volume can look dead. Some apps also turn the level down on their own.

**Fix:**

1. In **Settings > System > Sound**, select your mic under **Input** to open its properties.
2. Raise the **Input volume** slider. Start near the top and lower it if your voice sounds distorted.
3. Run the microphone test and speak at a normal volume. The level should move clearly.

If it's still very quiet, open the classic Sound panel: **Settings > System > Sound > More sound settings**, go to the **Recording** tab, open your mic's **Properties**, and check the **Levels** tab. Make sure the speaker icon next to the level isn't showing a mute symbol.

## 5. Pick the mic inside Teams, Zoom or your browser

Each video call app has its own microphone setting, separate from Windows. It might still point to your laptop's built-in mic or a headset you unplugged.

**Fix:**

- **Teams, Zoom, Discord and similar apps:** open the app's **Settings** and look for **Audio** or **Devices**. Choose your mic from the list and use the app's built-in test if it has one.
- **Turn off the app's own mute.** It's separate from your headset's mute switch.
- **Browser calls (Google Meet, web Teams and similar):** click the icon to the left of the web address, check the site is allowed to use the microphone, then reload the page.
- **Close other apps** that might be using the mic, then restart the call app.

## 6. Switch a Bluetooth headset to hands-free mode

Bluetooth headsets work in two modes: a **stereo mode** with good sound but **no microphone**, and a **hands-free mode** that turns the mic on. Windows often shows them as two separate devices with the same name.

**Fix:**

1. In **Settings > System > Sound**, under **Input**, choose the entry with **"Headset"** or **"Hands-Free"** in its name.
2. Pick the same headset entry in your call app.
3. Expect sound to get a little less clear during calls. That's normal for hands-free mode.
4. If the mic still isn't listed, remove the headset from **Settings > Bluetooth & devices** and pair it again.

## 7. Run the recording audio troubleshooter

Windows 11 has a built-in troubleshooter for recording problems. It checks for disabled devices, muted inputs and some driver issues.

**Fix:**

- Open **Settings > System > Troubleshoot > Other troubleshooters** and run **Recording Audio** if it's listed.
- On newer versions of Windows 11, troubleshooters open in the **Get Help** app. You can also search for **Get Help** from the Start menu and type "microphone not working."

## 8. Update or reinstall the audio driver

A corrupted or outdated driver can make the mic vanish or stay silent, especially after a big Windows update.

**Fix:**

1. Right-click **Start** and open **Device Manager**.
2. Expand **Audio inputs and outputs** and find your microphone.
3. Right-click it and choose **Update driver**, then **Search automatically for drivers**.
4. If that doesn't help, right-click it, choose **Uninstall device**, and restart the PC. Windows reinstalls it automatically.
5. For built-in laptop mics, also check **Sound, video and game controllers**, and get the latest audio driver from your PC maker's support site or app.

Check **Windows Update**, including **optional updates**, too. PC makers often deliver audio driver fixes there.

## 9. Turn off exclusive mode and audio enhancements

Two advanced settings can confuse some apps: **exclusive mode**, which lets one app take over the mic, and **audio enhancements** such as noise suppression from the PC maker.

**Fix:**

1. Go to **Settings > System > Sound > More sound settings** and open the **Recording** tab.
2. Right-click your mic and choose **Properties**.
3. On the **Advanced** tab, untick **Allow applications to take exclusive control of this device**. Click **Apply**.
4. Turn off audio enhancements for the mic. Depending on your PC, this is on the mic's properties page in Settings or in the PC maker's audio app.
5. Test again. If the mic works, leave these off.

## Mic not showing up at all?

If Windows doesn't list the mic anywhere:

- **Try it on another PC or phone.** If it's dead there too, the mic, cable or headset is faulty.
- **Check Device Manager** for a device with a yellow warning icon, or under **View > Show hidden devices**.
- **Test a different mic** on your PC. If that one works, your original mic is the problem. If it doesn't, the PC's port or audio hardware may be.
- **Restart, don't shut down.** On many PCs, Shut down saves part of the system for a faster start, while Restart reloads everything, including drivers.

## When to replace or repair it

Replace the mic or headset if it doesn't work on any device, the cable is frayed or the plug is loose, or the mic cuts in and out when you move the cable.

Get your PC checked by the maker or a repair shop if a known-good mic doesn't work in any port, the built-in mic and every external mic are silent after a driver reinstall, or the headset jack feels loose. USB headsets and mics are an easy way to bypass a damaged headset jack in the meantime.
