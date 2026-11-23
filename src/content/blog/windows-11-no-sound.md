---
title: "No Sound on Windows 11? 9 Causes and Fixes"
description: "No sound on Windows 11? Check mute, the output device, the volume mixer, HDMI and Bluetooth, then the audio service and driver. Simple fixes in order."
pubDate: 2026-11-23
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-23
category: pc-laptops
subcategory: windows-problems
tags: [windows 11, no sound, audio, speakers, headphones, hdmi, bluetooth, audio driver]
image: { src: /images/featured/windows-11-no-sound.webp, alt: "Illustration of a laptop with a crossed-out speaker icon on screen next to a desktop speaker" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Headphones or a second speaker for testing]
symptoms:
  - { label: "No sound from anything", to: "1-check-the-volume-mute-and-the-speakers-themselves" }
  - { label: "Sound plays from the wrong device", to: "2-choose-the-right-output-device" }
  - { label: "Only one app is silent", to: "3-check-the-volume-mixer-for-the-app" }
  - { label: "No sound through my monitor or TV", to: "4-fix-sound-over-hdmi-or-a-monitor" }
  - { label: "Bluetooth headphones are silent", to: "5-reconnect-bluetooth-headphones-or-speakers" }
  - { label: "Says no output devices found", to: "no-output-devices-found" }
faq:
  - q: "Why did my sound suddenly stop working on Windows 11?"
    a: "The most common reasons are that Windows switched to a different output device (often after you plugged in a monitor, dock or headset), the volume or an app was muted, or a Windows update changed the audio driver. Check the output device in Settings > System > Sound first."
  - q: "How do I reset audio settings on Windows 11?"
    a: "There is no single reset button for all audio settings. The closest steps are restarting the Windows Audio service, choosing your output device again, turning off audio enhancements, and uninstalling the audio device in Device Manager and restarting so Windows reinstalls it."
  - q: "Why do I have sound in headphones but not in my laptop speakers?"
    a: "When headphones are plugged in, Windows sends sound to them. If the speakers stay silent after you unplug them, pick the speakers again under Output in Sound settings. If the speakers are still silent while selected and unmuted, the driver or the speakers themselves may be at fault."
  - q: "Why does a YouTube video have no sound but other apps work?"
    a: "Check that the video player and the browser tab are not muted, then open the volume mixer in Settings > System > Sound and make sure the browser's slider is up. Close and reopen the browser if it still plays silently."
  - q: "Can a Windows update break the sound?"
    a: "Yes, an update can install a driver that does not suit your hardware. Roll back the driver in Device Manager, or install the audio driver from your PC maker's support site. Check Windows Update again later for a fix."
---

When there's no sound on Windows 11, the speakers are rarely broken. Most of the time **Windows is sending sound to a different device**, something is **muted**, or **one app's volume is turned down**. Less often it's a stuck audio service or a driver problem after an update.

Work through the quick test first. It takes a minute and tells you whether the problem is your speakers, Windows, or a single app.

<figure><img src="/images/posts/windows-11-no-sound-diagnosis.svg" alt="Flowchart: if your speakers or headphones are not chosen under Output in Sound settings, pick them; if they are chosen but the test sound is silent, check the cable, mute, service and driver; if the test sound plays but one app is silent, check that app and the volume mixer" width="640" height="430" loading="lazy" /><figcaption>The output device test shows where the sound is getting lost.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Click the speaker icon on the taskbar, make sure the volume is up and not muted, and use the arrow next to the slider to pick the speakers or headphones you want. If one app is still silent, open Settings > System > Sound > Volume mixer and raise that app's volume.</p></div>

## How to tell what's causing it: quick test

1. **Open Settings > System > Sound** and look under **Output**. Is the device you want selected?
2. **Select it** to open its properties and play the test sound if there's one, or play any video or song.
3. **Check what you hear:**
    - **Your device isn't listed:** a connection, Bluetooth or driver problem (fixes 1, 5 and 8, then the "no output devices" section).
    - **It's listed and selected, but it's silent:** a mute, cable, service or driver problem (fixes 1, 7, 8 and 9).
    - **Test sound plays, but one app is silent:** an app or mixer problem (fix 3).
4. **Still unsure?** Plug in a pair of wired headphones. If they work, the PC is fine and the speakers or their cable are the problem.

## 1. Check the volume, mute and the speakers themselves

It sounds obvious, but a muted taskbar volume, a keyboard mute key, or external speakers that are switched off cause a lot of "no sound" problems.

**Fix:**

- Click the **speaker icon** on the taskbar (or press **Windows key + A**) and drag the volume slider up. If the icon shows a cross, click it to unmute.
- Press your keyboard's **mute or volume up key**. On many laptops these share a function key.
- For external speakers, check they're **powered on**, their own volume knob is up, and the cable is pushed fully into the right jack (usually green on desktop PCs).
- Unplug headphones. While they're connected, many PCs send sound only to them.
- Restart the PC. It clears a lot of one-off audio glitches.

## 2. Choose the right output device

Windows can switch the output to a monitor, a dock, a headset or a virtual device you don't use, especially after you plug something in. Sound then plays somewhere you can't hear it.

**Fix:**

1. Click the speaker icon on the taskbar, then the **arrow next to the volume slider**, and pick your speakers or headphones from the list.
2. Or open **Settings > System > Sound** and choose the device under **Output**.
3. If the device is listed but greyed out or says it's disabled, open it and choose **Allow**.

## 3. Check the volume mixer for the app

Windows keeps a separate volume for each app. A browser, game or music player can be muted or set very low while everything else works.

**Fix:**

1. Play sound in the silent app so it shows up in the mixer.
2. Open **Settings > System > Sound** and choose **Volume mixer** near the bottom.
3. Raise the slider for that app and check it isn't muted. Some apps can also be set to a different output device here, so check that too.
4. Check the app itself: video players and browser tabs have their own mute. In most browsers you can right-click a tab to unmute it.
5. Close and reopen the app.

## 4. Fix sound over HDMI or a monitor

When you connect a TV or monitor by HDMI or DisplayPort, Windows may send sound to it. Many monitors have **no speakers** at all, so the sound goes nowhere. Others have speakers with their own volume.

<figure><img src="/images/posts/windows-11-no-sound-outputs.svg" alt="Diagram of a PC with four possible sound outputs: built-in or desktop speakers, wired headphones, a monitor or TV over HDMI, and Bluetooth headphones, with the note that sound only plays from the one chosen under Output" width="640" height="380" loading="lazy" /><figcaption>Windows plays sound through one output at a time. Pick the one you can hear.</figcaption></figure>

**Fix:**

- If you want sound from your PC speakers, choose them under **Output** instead of the monitor.
- If you want sound from the TV or monitor, choose it under Output, then turn up the volume on the TV or monitor itself and check it isn't muted.
- Make sure the display has speakers. If it doesn't, use its headphone jack (if it has one) or your PC speakers.
- Unplug and reconnect the HDMI cable with the TV on. If the display still doesn't appear under Output, update the graphics driver, since HDMI sound runs through it.

## 5. Reconnect Bluetooth headphones or speakers

Bluetooth audio drops out when the headphones connect to another device first, the battery is low, or the pairing gets stuck. Windows may also show two entries for one headset, a stereo one and a "Hands-Free" or "Headset" one with lower sound quality.

**Fix:**

1. Charge the headphones, and turn off Bluetooth on your phone for a moment so it doesn't grab them.
2. Open **Settings > Bluetooth & devices** and check the headphones say **Connected**. If not, click them and choose **Connect**.
3. Under **Output** in Sound settings, pick the stereo entry for listening to music and videos.
4. If they still won't play, remove the device in **Bluetooth & devices**, put the headphones in pairing mode, and choose **Add device** to pair them again.

## 6. Run the audio troubleshooter

Windows 11 has a built-in audio troubleshooter that checks for muted or disabled devices, stopped services and some driver problems.

**Fix:**

- Open **Settings > System > Troubleshoot > Other troubleshooters** and run the **Audio** troubleshooter.
- On newer versions of Windows 11, troubleshooters open in the **Get Help** app. You can also search for **Get Help** from the Start menu and type "no sound."
- Follow its suggestions, then test again.

## 7. Restart the Windows Audio service

The Windows Audio service handles all sound on your PC. If it stops or hangs, every app goes silent, often with a red cross on the speaker icon.

**Fix:**

1. Press **Windows key + R**, type **services.msc** and press Enter.
2. Find **Windows Audio** in the list.
3. Right-click it and choose **Restart**. If it's stopped, choose **Start**.
4. Double-click it and check **Startup type** is set to **Automatic**.
5. Do the same for **Windows Audio Endpoint Builder** if sound still doesn't come back.

## 8. Update, roll back or reinstall the audio driver

A corrupted or wrong driver can make sound disappear, often right after a big Windows update. Our guide on [how to update drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/) covers the wider process.

**Fix:**

1. Right-click **Start** and open **Device Manager**.
2. Expand **Sound, video and game controllers** and find your audio device (often named after the audio chip maker, or "High Definition Audio Device").
3. If sound broke after an update, right-click it, choose **Properties**, open the **Driver** tab and click **Roll Back Driver** if it's available.
4. Otherwise right-click it and choose **Update driver**, then **Search automatically for drivers**.
5. If that doesn't help, right-click it, choose **Uninstall device**, and restart the PC. Windows reinstalls the driver.
6. For laptops and brand-name desktops, get the latest audio driver from your PC maker's support site or app. Check **Windows Update > Advanced options > Optional updates** too.

## 9. Turn off audio enhancements

Audio enhancements and sound effects from Windows or your PC maker can stop sound on some devices, or make it crackle or cut out.

**Fix:**

1. Open **Settings > System > Sound** and select your output device.
2. Find **Audio enhancements** on its properties page and turn them **Off**. Some PCs put these in the PC maker's own audio app instead.
3. If your PC has the older option, go to **Settings > System > Sound > More sound settings**, open the **Playback** tab, right-click your device, choose **Properties**, and on the **Advanced** tab untick **Allow applications to take exclusive control of this device**.
4. Try a different **Default format** (sample rate) on that same Advanced tab if sound is still missing, then test.

## No output devices found?

If the speaker icon shows a cross and Windows says no output devices are found:

- **Restart, don't shut down.** On many PCs Shut down saves part of the system for a faster start, while Restart fully reloads the drivers.
- **Open Device Manager** and choose **Action > Scan for hardware changes**. Look for a device with a yellow warning icon, and check **View > Show hidden devices**.
- **Install the audio driver** from your PC maker's support site for your exact model.
- **Try a USB headset or USB speaker.** These bring their own sound hardware, so they often work even when the built-in audio doesn't. It's a handy test and a workaround.

## When to get your PC repaired

Contact your PC maker or a repair shop if wired headphones and the built-in speakers are both silent after a driver reinstall, if the headphone jack feels loose or only works when you wiggle the plug, or if Windows never detects any audio device. A crackle or buzz from the speakers at any volume can also point to a hardware fault.

If the PC is under warranty, contact the maker before opening it or replacing parts.
