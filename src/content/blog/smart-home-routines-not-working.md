---
title: "Smart Home Routines Not Running? 8 Causes and Fixes"
description: "Smart home routine or automation not running? Check offline devices, time zone, trigger conditions, conflicts, account links, hubs and app updates step by step."
pubDate: 2026-11-03
category: smart-home
subcategory: automation
tags: [smart home, routines, automations, alexa, google home, apple home, smartthings, hub]
image: { src: /images/featured/smart-home-routines-not-working.webp, alt: "Illustration of a smart home hub linked to a light, a plug and a clock, with one broken link" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Your phone with the smart home app, Router access (optional)]
symptoms:
  - { label: "Runs from the app, not on its own", to: "3-the-trigger-or-conditions-dont-match" }
  - { label: "Runs at the wrong time", to: "2-wrong-time-zone-or-home-location" }
  - { label: "One device in it does nothing", to: "1-a-device-in-the-routine-is-offline" }
  - { label: "Stopped working after an update", to: "7-an-app-or-firmware-update-changed-something" }
  - { label: "Arrive or leave home trigger fails", to: "8-your-phone-cant-report-its-location" }
  - { label: "Never runs at all", to: "routine-never-runs-at-all" }
faq:
  - q: "Why does my routine work when I tap it but not on its own?"
    a: "Tapping a routine skips the trigger and any conditions, so the actions run straight away. If it works that way but not automatically, the problem is the trigger: a wrong time zone, a sensor that isn't reporting, a condition that blocks it, or a phone that can't share its location."
  - q: "Do smart home routines work without internet?"
    a: "It depends on where the routine runs. Many routines run in the manufacturer's cloud and stop during an internet or service outage. Routines that run on a local hub can keep working without internet, but voice control and cloud-linked devices usually stop. Check your app's help pages to see where your routines run."
  - q: "Why do my sunset routines run at the wrong time?"
    a: "Sunrise and sunset times are worked out from the home address or location saved in your app. If that address, or the time zone on your hub or account, is wrong, the routine fires at the wrong time. Fix the home location and the time zone, then save the routine again."
  - q: "Can two routines cancel each other out?"
    a: "Yes. If one routine turns a light on and another turns it off at about the same time, or a device has its own schedule, the last command wins. It can look as if the routine never ran. Review all routines and device schedules that touch the same device."
  - q: "Do I need a hub for routines to work?"
    a: "Not always. Many speaker and app routines run in the cloud with no hub. Some systems do need one: for example, Apple Home automations need a home hub such as an Apple TV or HomePod, and Zigbee or Z-Wave devices need a compatible hub. Check what your system requires."
---

A smart home routine (also called an automation or scene) has three parts: a **trigger** that starts it, optional **conditions** that must be true, and **actions** that control your devices. When a routine stops running, one of those three parts has broken, or the place where the routine runs (your hub or the cloud) can't reach the devices.

The most common causes are **a device that has gone offline**, **a wrong time zone or home location**, **a trigger or condition that never matches**, and **a routine that conflicts with another one**. Expired account links, hub or cloud outages and app updates make up most of the rest.

<figure><img src="/images/posts/smart-home-routines-not-working-anatomy.svg" alt="Diagram of a smart home routine: a trigger such as a time, sensor or voice command, then conditions such as only after sunset, then actions on devices, with the routine running on a hub or in the cloud" width="640" height="400" loading="lazy" /><figcaption>A routine fails when its trigger, a condition or a device action breaks.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>First run the routine by hand from the app. If it works, the trigger or a condition is the problem: check the time zone, home location and sensor. If it fails, a device or account link is the problem: check that every device shows online and relink any service that is disconnected.</p></div>

## How to tell what's causing it: quick test

1. **Run the routine by hand** from the app (most apps have a play or run button). This skips the trigger and conditions.
2. **If nothing happens at all,** check the app for offline devices and any outage notice, then see causes 1, 5 and 6.
3. **If some actions work and others don't,** the failing device is offline or unlinked (causes 1 and 5).
4. **If everything works by hand,** the trigger or a condition is blocking it (causes 2, 3, 4 and 8).
5. **Check the routine's history or activity log**, if your app has one. It often shows whether the routine fired and which step failed.

<figure><img src="/images/posts/smart-home-routines-not-working-flow.svg" alt="Flowchart: run the routine by hand; if it works, check the trigger, time zone, conditions and conflicts; if it fails, check device status, account links and outages" width="640" height="380" loading="lazy" /><figcaption>Running it by hand splits the problem in two.</figcaption></figure>

## 1. A device in the routine is offline

A routine can only control devices the app can reach. If a plug, bulb or sensor has dropped off Wi-Fi or lost contact with its hub, that step fails, and on some systems the whole routine stops.

**Fix:**

- Open the app and look for devices marked **offline**, **not responding** or **unavailable**.
- Power cycle the device: unplug it for 10 seconds, or flip its wall switch off and on for bulbs.
- Check that it is in range of your router or hub, and that battery sensors have fresh batteries.
- If a device was removed and added again, it may count as a **new device**. Open the routine and pick it again.

If a plug or bulb won't reconnect at all, see [how to fix a smart plug that won't connect](/smart-home/smart-plug-wont-connect/).

## 2. Wrong time zone or home location

Time-based routines rely on the time zone set in your app, account or hub. **Sunrise and sunset** triggers also use your home address or location to work out the times. If either is wrong, routines run hours early, hours late or not at all.

**Fix:**

1. Open your app's **home settings** and check the address or location.
2. Check the **time zone** on the account, the hub and any speaker or display used for routines.
3. Check your phone's date and time are set automatically.
4. Open the routine, check the time and the **AM/PM** setting, and save it again.

This often happens after a move, after a hub is set up with default settings, or when a home was created while traveling.

## 3. The trigger or conditions don't match

The trigger must happen exactly as set, and every condition must be true at that moment. A routine that says "when motion is detected, **only between 6 PM and 11 PM**, **only if nobody is home**" can easily be blocked by one condition.

**Fix:**

- Read the trigger carefully. "When the door **opens**" won't fire on a door that is already open.
- Remove conditions one at a time and test, then add back the ones you need.
- Check sensors report correctly in the app. Walk past a motion sensor or open a contact sensor and watch its status change.
- Some sensors have a **cooldown** after triggering and won't report again for a short time. Check the manual.
- For voice-started routines, say the exact phrase saved in the routine.

## 4. Two routines conflict

If two routines control the same device, or a device has its own built-in schedule, they can cancel each other. One turns the porch light on, another turns it off a moment later, and it looks as if nothing ran.

**Fix:**

- List every routine, automation and **device schedule** that touches the device. Check the device's own settings page too.
- Check other apps. A light may be controlled by its maker's app and by a speaker app at the same time.
- Combine overlapping routines into one, or space their times apart.
- Turn off "away" or "vacation" modes that may override normal routines.

## 5. An account link has expired

Voice assistants and hub apps often control devices through a **linked account** with the device maker (called a skill, action, integration or service). If that link expires, or you change the password on the maker's account, the devices stay in the list but stop responding to routines.

**Fix:**

1. Open the maker's own app and confirm the device works there.
2. In your main smart home app, find the linked service and check its status.
3. **Unlink and link it again**, signing in with the maker's account.
4. Reopen the routine and reselect any devices that disappeared.

If you use voice routines and the speaker itself has stopped answering, see [why Alexa is not responding](/smart-home/alexa-not-responding/).

## 6. A hub or cloud service outage

Many routines run in the **cloud**, on the maker's servers. If your internet is down, or the service is having an outage, those routines stop. Routines that run on a **local hub** need that hub to be powered, online and on the latest firmware.

**Fix:**

- Check your internet on another device.
- Look for outage notices in the app, or on the maker's status page or social accounts.
- Restart the hub: unplug it for 30 seconds, plug it back in and wait until its status light shows normal.
- For systems that need a home hub (for example, Apple Home automations run through an Apple TV or HomePod), check the hub shows as connected in the app.
- Give your hub a stable spot with good signal, and avoid moving it often.

## 7. An app or firmware update changed something

Updates can change how triggers work, rename devices, move routines to a new section of the app or require you to accept new permissions. Sometimes an update simply breaks a routine until you open and save it again.

**Fix:**

- Update the app, the hub and the device firmware to the latest versions.
- Open the routine and look for warnings, missing devices or blank steps.
- **Edit and save** the routine again, or delete it and recreate it.
- Read the app's release notes or help pages for known issues.

## 8. Your phone can't report its location

"Arrive home" and "leave home" routines use your phone's location (geofencing). If the app can't use location in the background, the trigger never fires.

**Fix:**

- In your phone's settings, set the app's location permission to **Always** (or "Allow all the time") and turn on precise location.
- Turn off battery saver or battery optimization for the app, which can stop it running in the background.
- Make sure the person in the routine is signed in on the phone they carry.
- Check the home location is correct (cause 2), and try a larger geofence radius if your app offers one.

## Routine never runs at all?

- **Check it is turned on.** Many apps have an enable toggle on each routine, and some turn routines off after errors.
- **Check who owns it.** Some routines only run for the account that made them, or only on one speaker or display.
- **Rebuild it.** Delete the routine and create a fresh, simple one with one trigger and one action. If that works, add steps back one at a time.
- **Restart everything:** the hub, the router and your phone.

## When to call a pro

Contact the device maker's support, or a smart home installer, if:

- A hub or device won't come back online after restarts and a factory reset.
- Routines fail across many devices and you can't find an outage.
- You have a professionally installed system (security, lighting control or whole-home automation). Changes may need the installer's account.
- A routine controls anything safety-related, such as locks, garage doors or alarms, and it behaves unpredictably. Don't rely on it until it is fixed.
