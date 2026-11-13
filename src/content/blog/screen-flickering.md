---
title: "Screen Flickering on Windows? 8 Causes and Fixes"
description: "Screen flickering on Windows 10 or 11? Use the Task Manager test, then check the cable, refresh rate, graphics driver, apps and brightness settings."
pubDate: 2026-11-13
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-13
category: gadgets
subcategory: monitors-and-displays
tags: [screen flickering, monitor, laptop, windows 11, windows 10, graphics driver, refresh rate]
image: { src: /images/featured/screen-flickering.webp, alt: "Illustration of a computer monitor with flickering horizontal bands across the screen" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [A spare HDMI, DisplayPort or USB-C video cable, A second monitor or TV for testing (optional)]
symptoms:
  - { label: "Flickers when I touch the cable", to: "1-reseat-or-replace-the-display-cable" }
  - { label: "Started after a driver update", to: "3-restart-update-or-roll-back-the-graphics-driver" }
  - { label: "Only in one app or browser", to: "4-update-or-remove-an-incompatible-app" }
  - { label: "Flickers in games or videos", to: "5-turn-off-adaptive-brightness-and-variable-refresh" }
  - { label: "Only at low brightness", to: "6-raise-the-brightness-to-rule-out-pwm-flicker" }
  - { label: "Laptop flickers when I move the lid", to: "flickering-on-every-screen-or-when-you-move-the-lid" }
faq:
  - q: "Why is my screen flickering on Windows 11?"
    a: "The most common causes are a loose or damaged display cable, a refresh rate that doesn't match the monitor, a graphics driver problem and an app that doesn't play well with Windows. Open Task Manager first: if it flickers too, look at the driver and hardware. If it doesn't, an app is the likely cause."
  - q: "How do I restart the graphics driver?"
    a: "Press Windows + Ctrl + Shift + B. The screen goes black for a moment and you may hear a beep while Windows restarts the graphics driver. Your open apps stay open."
  - q: "Can a bad HDMI cable cause screen flickering?"
    a: "Yes. A worn cable, a loose connector or a cable that can't handle the resolution and refresh rate can cause flickering, black flashes or sparkles. Try a known-good cable and connect directly, without adapters, while you test."
  - q: "Why does my laptop screen only flicker at low brightness?"
    a: "Many screens dim by switching the backlight on and off very quickly, a method called PWM. At low brightness the off periods are longer, and some people notice it as flicker or eye strain. Raising the brightness usually reduces it."
  - q: "Is screen flickering a sign my monitor is dying?"
    a: "Not usually. Most flickering comes from cables, settings or drivers. It points to hardware when the flicker shows up on the startup or BIOS screen, with every cable and PC, or on a laptop when you move the lid."
---

A flickering screen on a Windows 10 or 11 PC can look serious, but the cause is usually simple. The most common culprits are a **loose or damaged display cable**, a **refresh rate that doesn't match the screen**, a **graphics driver problem** and an **app that doesn't get along with Windows**. Brightness and power saving features cause the rest.

Start with the Task Manager test below. It takes a minute and tells you which half of this guide to read. The quick fixes come first.

<figure><img src="/images/posts/screen-flickering-flow.svg" alt="Flowchart: press Ctrl + Shift + Esc to open Task Manager; if Task Manager flickers too, the cause is the driver, display or hardware, so check the cable, refresh rate, driver and brightness fixes; if it does not flicker, an app is the likely cause, so check fix 4" width="640" height="380" loading="lazy" /><figcaption>If Task Manager flickers too, the problem is not a single app.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Open Task Manager. If it flickers too, reseat or swap the display cable, set the correct refresh rate, and update or roll back the graphics driver. If Task Manager is steady, update or remove the app that started the flickering.</p></div>

## How to tell what's causing it: quick test

1. **Open Task Manager** with **Ctrl + Shift + Esc** and watch it for a minute.
    - **Task Manager flickers too:** the cause is likely the graphics driver, a setting or the hardware (fixes 1 to 3 and 5 to 8).
    - **Everything flickers except Task Manager:** an app is the likely cause (fix 4).
2. **Restart the graphics driver** with **Windows + Ctrl + Shift + B**. If the flicker stops for a while, the driver is involved.
3. **Restart the PC and watch the startup screen.** Flicker on the PC maker's logo or the BIOS screen, before Windows loads, points to the cable, the screen or the hardware, not Windows.
4. **On a laptop, connect an external monitor or TV.** If the external screen is steady and the built-in one flickers, the laptop's own screen or its internal cable is the likely cause.

## 1. Reseat or replace the display cable

A connector that is partly pulled out, a bent pin or a worn cable can drop the signal for a split second, which shows up as flicker, black flashes or sparkles. Cables that can just about manage a lower resolution sometimes fail at higher resolutions and refresh rates.

**Fix:**

1. Turn off the monitor and unplug the cable at **both ends**, then push each end in firmly. DisplayPort plugs usually click in.
2. Wiggle the cable gently at each end. If the flicker comes and goes as you move it, replace the cable.
3. Swap in a **known-good cable** of the same type (HDMI, DisplayPort or USB-C) and try a different port on the PC and the monitor.
4. Remove adapters, docks and switches while you test, and connect directly.
5. For **USB-C**, use a cable that supports video, not a charge-only cable.

## 2. Match the refresh rate to your screen

The refresh rate is how many times per second the screen redraws. If Windows sends a rate the monitor or cable handles poorly, you can get flicker or a screen that blinks black now and then.

**Fix:**

1. Open **Settings > System > Display > Advanced display**.
2. If you have more than one screen, pick the flickering one at the top.
3. Under **Choose a refresh rate**, try the monitor's rated rate. If that flickers, try a lower one, such as 60 Hz, to see if it settles.
4. While you're in Display settings, set the resolution to the one marked **(Recommended)**.

If the monitor supports a high refresh rate but flickers at it, check that you are using a port and cable that support that rate. Your monitor's manual lists what each input can do.

## 3. Restart, update or roll back the graphics driver

The graphics driver is the software that lets Windows talk to the graphics chip. A buggy, outdated or freshly updated driver is one of the most common causes of flickering, especially right after a Windows update.

**Fix:**

- **Restart it:** press **Windows + Ctrl + Shift + B**. The screen goes dark for a moment and comes back. This is a quick way to clear a glitch.
- **Update it:** get the latest driver through Windows Update, your PC maker's support app or the graphics chip maker's website. See [how to update drivers in Windows 11 safely](/pc-laptops/update-drivers-windows-11/) for each method.
- **Roll it back** if the flicker started right after a driver update:
    1. Right-click **Start** and choose **Device Manager**.
    2. Expand **Display adapters**, right-click your graphics adapter and choose **Properties**.
    3. On the **Driver** tab, click **Roll Back Driver**. If the button is grayed out, there is no earlier driver saved. Install an older version from the PC maker's site instead.
- **Reinstall it:** in the same place, choose **Uninstall device**, then restart. Windows reinstalls a basic driver, and you can then install the full one.

## 4. Update or remove an incompatible app

If Task Manager stays steady while the rest of the screen flickers, an app is probably clashing with Windows or the graphics driver. Antivirus suites, screen overlay tools, older utilities and some browsers have caused this after updates.

**Fix:**

1. Think about what you installed or updated just before the flicker began.
2. **Update that app** to the latest version. Many flicker bugs are fixed by the developer.
3. If it still flickers, close the app completely and see if the flicker stops.
4. Uninstall it in **Settings > Apps > Installed apps** and restart. You can reinstall a fresh copy later.
5. If it happens only in a **web browser**, turn off hardware acceleration in the browser's settings and restart the browser.
6. Not sure which app? Start Windows in **Safe Mode** from **Settings > System > Recovery > Advanced startup**. If the screen is steady in Safe Mode, a driver or startup app is the cause.

## 5. Turn off adaptive brightness and variable refresh

Features that adjust the screen on the fly can make brightness pump up and down or cause flicker in games and videos. On laptops these include automatic brightness and content-based brightness. On gaming monitors and PCs, variable refresh features (often called Adaptive-Sync, FreeSync or G-Sync) can flicker at low frame rates, in loading screens or with some drivers.

**Fix:**

- **Laptop brightness:** open **Settings > System > Display**, expand **Brightness**, and turn off the options that change brightness automatically, based on lighting or on what's on the screen. Option names vary by PC.
- **Dynamic refresh rate:** some laptops offer a **Dynamic** refresh rate under **Advanced display**. Pick a fixed rate instead and test.
- **Variable refresh:** turn it off in the monitor's on-screen menu or in your graphics control panel, then test. If the flicker stops, try updating the graphics driver and turning the feature back on.
- **Monitor extras:** in the monitor's menu, try turning off dynamic contrast, eco or power saving modes and very high overdrive settings. Check your manual for the names your monitor uses.

## 6. Raise the brightness to rule out PWM flicker

Many screens control brightness with **PWM** (pulse-width modulation). Instead of dimming the backlight smoothly, they switch it fully on and off many times a second, and the screen looks dimmer when the off time is longer. Most people never notice. Some people see a faint flicker, get eye strain or headaches, especially at low brightness.

<figure><img src="/images/posts/screen-flickering-pwm.svg" alt="Two light output waveforms: at high brightness the backlight is on for long stretches with short off gaps; at low brightness it is on only briefly with long off gaps, which some people notice as flicker" width="640" height="360" loading="lazy" /><figcaption>At low brightness, the backlight spends more of its time off.</figcaption></figure>

**Fix:**

- **Raise the brightness** and see if the flicker or eye strain eases. Turn down room lighting or use dark mode if the screen feels too bright.
- Some monitors list a **flicker-free** mode or say so in their specs. Check the monitor's manual or the maker's product page.
- If this bothers you on a new screen, look for one that is described as flicker-free or DC-dimmed when you shop.

PWM flicker is normal behavior, not a fault. If the flicker is clearly visible at all brightness levels, it is more likely one of the other causes here.

## 7. Rule out interference and power problems

Electrical noise and unstable power can cause flicker, rolling lines or a screen that dims and recovers.

**Fix:**

- Plug the monitor **directly into a wall outlet** instead of a crowded power strip, and try a different outlet.
- Move video cables away from power cords, speakers and other electronics.
- If the flicker happens only when nearby lights or appliances switch on, try the monitor on another circuit.
- On a **laptop**, check whether it flickers only on battery or only on the charger. Try the original charger, then update the BIOS and the PC maker's power software, which often fix display power bugs.
- Check the monitor's **power cable or brick** is pushed in firmly at both ends.

## 8. Test with another screen or PC

Swapping parts tells you which one is at fault.

**Fix:**

- Connect the flickering monitor to **another PC, laptop or game console**. If it flickers there too, the monitor is the likely problem.
- Connect your PC to a **different monitor or TV**. If that one is steady, look again at the first monitor's cable, input and settings.
- On a desktop with a graphics card, make sure the cable is in the **card's ports**, not the motherboard's. If you also get blank screens, see [monitor says No Signal](/gadgets/monitor-no-signal/) for more port and input checks.

## Flickering on every screen or when you move the lid?

Some patterns point to hardware that settings won't fix:

- **Laptop flickers when you open, close or move the lid.** The thin display cable that runs through the hinge may be worn or loose. This is a repair job.
- **Flicker on the startup or BIOS screen** on the built-in laptop screen, while an external monitor stays steady: the laptop's panel or internal cable is likely failing.
- **The monitor flickers on every PC and cable**, or you see lines, dark patches or a backlight that pulses: the monitor's panel or power board is likely failing.
- **Every screen you connect flickers** with known-good cables: the graphics card or the laptop's graphics chip may be at fault.

Back up your files if the problem is getting worse.

## When to call a pro

Contact the maker or a repair shop if:

- The flicker shows before Windows loads, or follows the monitor from one PC to another.
- A laptop screen flickers when you move the lid.
- The screen flickers with lines, dark patches or color blotches, or the case or cable shows damage.
- You smell burning or hear buzzing from the monitor or its power supply. Unplug it and stop using it.

Check your warranty first. Screens and hinge cables are often covered, and opening the case yourself can void it.
