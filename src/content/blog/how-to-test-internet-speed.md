---
title: "How to Test Your Internet Speed (and What the Numbers Mean)"
description: "Run an accurate internet speed test, then read the results: download, upload, ping, jitter, Mbps vs MBps, and how to compare them to your plan."
pubDate: 2026-11-20
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-20
category: networking
subcategory: slow-internet-fixes
tags: [internet speed, speed test, wifi, ethernet, ping, latency, bandwidth]
image: { src: /images/featured/how-to-test-internet-speed.webp, alt: "Illustration of a speed gauge with its needle near the top beside a home router sending out Wi-Fi signals" }
fixcheck: false
difficulty: easy
time: 10 to 20 min
risk: low
tools: [Computer or laptop, Ethernet cable (Cat5e or better), USB Ethernet adapter (if your laptop has no port), Phone for Wi-Fi tests, Your internet bill or plan details]
symptoms:
  - { label: "What do the numbers mean?", to: "4-what-download-and-upload-speed-mean" }
  - { label: "Is my ping good?", to: "5-what-ping-latency-and-jitter-mean" }
  - { label: "Downloads slower than the test?", to: "6-mbps-vs-mbps-why-downloads-look-slower" }
  - { label: "Wi-Fi slower than wired?", to: "2-test-on-a-wired-connection-first" }
  - { label: "Slow only in the evening?", to: "7-test-at-different-times-of-day" }
  - { label: "Getting less than I pay for?", to: "8-compare-your-results-to-your-plan" }
faq:
  - q: "What is a good internet speed?"
    a: "It depends on how many people and devices share the connection and what they do. As a reference point, the FCC's broadband benchmark (adopted in March 2024) is 100 Mbps download and 20 Mbps upload. The most useful check is whether your wired results come close to the speed your plan promises."
  - q: "Why is my speed test slower than what I pay for?"
    a: "The most common reasons are testing over Wi-Fi instead of a cable, other devices using the connection during the test, an older device or Ethernet port that can't reach your plan speed, a VPN, or a busy network in the evening. Plans are also sold as 'up to' speeds. Test wired with everything else paused before blaming the provider."
  - q: "What's the difference between Mbps and MBps?"
    a: "Mbps is megabits per second and is how internet speed is sold. MBps is megabytes per second and is what many download windows show. There are 8 bits in a byte, so divide Mbps by 8 to get the most MBps you can expect. A 100 Mbps connection tops out at about 12.5 MBps."
  - q: "What is a good ping for internet?"
    a: "Lower is better. As a rough guide, a ping under about 50 ms feels responsive for most things, and gamers often aim lower. Ping also depends on how far away the test server is, so compare results using the same server."
  - q: "Is a wired or Wi-Fi speed test more accurate?"
    a: "A wired test shows what your internet service is actually delivering to your home. A Wi-Fi test shows what one device gets in one spot. Run both: if wired is fast and Wi-Fi is slow, the problem is your Wi-Fi, not your provider."
  - q: "Do speed test results vary between sites?"
    a: "Yes, somewhat. Each test uses different servers and methods, so results can differ by a noticeable amount. Pick one test, use it consistently, and run it a few times rather than trusting a single result."
---

An internet speed test sends data between your device and a test server and times how fast it moves. You get four main numbers: **download speed**, **upload speed**, **ping** (also called latency) and often **jitter**. Download and upload are measured in **Mbps**, ping and jitter in **milliseconds (ms)**.

A single test over Wi-Fi tells you very little. To get numbers you can trust, **test on a wired connection**, **pause everything else on the network**, **run it a few times at different times of day**, and **compare the results with the speed on your plan**.

<figure><img src="/images/posts/how-to-test-internet-speed-results.svg" alt="Four cards explaining speed test results: download in Mbps is data coming to you, upload in Mbps is data you send, ping in ms is the round trip time to the server, jitter in ms is how much ping varies. A note explains that 8 bits make 1 byte, so 100 Mbps is at most about 12.5 MB per second" width="640" height="400" loading="lazy" /><figcaption>Higher download and upload are better. Lower ping and jitter are better.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Plug a computer into your router with an Ethernet cable, close other apps and pause streaming on other devices, then run a speed test three times. Compare the download and upload results with your plan. If wired results are close to your plan but Wi-Fi is much slower, the problem is your Wi-Fi, not your provider.</p></div>

## How to run an accurate speed test: quick steps

1. Find your plan's download and upload speeds on your bill or online account.
2. Pause downloads, streaming, backups and game updates on every device.
3. Connect a computer to the router with an Ethernet cable and run the test three times.
4. Run the same test on Wi-Fi, near the router and then where you usually sit.
5. Write down download, upload, ping and jitter for each run, with the time of day.

## 1. Get your connection ready

Anything else using the internet during the test takes a share of the bandwidth, so your result comes out lower than what the line can really do.

**How:**

- Pause streaming, large downloads, cloud backups, game and system updates on all devices, including smart TVs and game consoles.
- Turn off any **VPN** on the test device. A VPN routes traffic through another server and usually lowers speed and raises ping.
- Close other browser tabs and apps on the test device.
- If the connection has been flaky, restart the modem and router first and give them a few minutes to come back online. Our [guide to resetting a router](/networking/how-to-reset-router/) explains the difference between a restart and a factory reset, so you don't wipe your settings by mistake.

## 2. Test on a wired connection first

Wi-Fi speed drops with distance, walls, floors and interference from neighbors' networks. A wired test takes Wi-Fi out of the picture and shows what your provider is actually delivering.

**How:**

1. Plug an Ethernet cable from a **LAN port on your router** (or modem/router combo) into your computer. If your laptop has no Ethernet port, a USB Ethernet adapter works.
2. Turn off Wi-Fi on that computer so the test can't use it by accident.
3. Run the test three times and note the results.

**Watch for hardware limits.** An older **Fast Ethernet** port or adapter tops out at 100 Mbps, and so does a damaged cable or one with only some wires connected. If your plan is faster than 100 Mbps and your wired test sticks right below that number, check the port, adapter and cable. A **Cat5e or newer** cable and a gigabit port are needed for faster plans. Even a gigabit connection tests a bit below 1,000 Mbps because of network overhead.

<figure><img src="/images/posts/how-to-test-internet-speed-wired-vs-wifi.svg" alt="Flowchart: run a wired test with other devices paused. If the wired result is close to your plan, the service is fine and Wi-Fi or the device is the limit, so improve Wi-Fi placement, use 5 GHz, add mesh or use a cable. If not, restart the modem and router and retest at different times. If it is still low every time, contact your internet provider" width="640" height="392" loading="lazy" /><figcaption>A wired test tells you whether to fix your Wi-Fi or call your provider.</figcaption></figure>

## 3. Run the test and save the results

Well-known free tests include Speedtest by Ookla, Fast.com and Cloudflare's speed test. Many providers also have a test in their app. They use different servers and methods, so **pick one and stick with it** when comparing results.

**How:**

1. Open the test in a browser or app and let it choose the nearest server.
2. Run it **three times** and use the typical result, not the best or worst.
3. Note **download, upload, ping and jitter**. Some tests show only download until you open more details.
4. Repeat over Wi-Fi: first in the same room as the router, then where you usually use the internet.

## 4. What download and upload speed mean

**Download** is how fast data comes to you: web pages, streaming video, app and game downloads. **Upload** is how fast you send data out: your side of a video call, photo and file backups to the cloud, posting videos, livestreaming.

Both are measured in **megabits per second (Mbps)**. Gigabit plans are often written as **Gbps** (1 Gbps is 1,000 Mbps). Higher is better.

Upload is often much lower than download, especially on **cable** internet. That's normal for many plans, not a fault. **Fiber** plans more often offer matching download and upload speeds. Check your plan to see what upload speed it includes.

How much speed you need depends on how many people and devices are online at once. A household with several people streaming and on video calls at the same time needs more than one person browsing. Streaming services and video call apps list their own recommended speeds in their help pages, and those are the best guide for your use.

## 5. What ping, latency and jitter mean

**Ping** (or **latency**) is the time, in milliseconds, for a small piece of data to travel to the test server and back. Lower is better. You feel high ping as lag: a delay in online games, people talking over each other on calls, or pages that are slow to start loading even on a fast plan.

**Jitter** is how much the ping changes from moment to moment. A steady ping matters for live things like calls and games. High jitter shows up as choppy audio, frozen video or rubber-banding in games.

A few things to know:

- Ping depends partly on **how far away the server is**, so compare results from the same server.
- Some tests show ping **at idle** and **while loaded** (during the download and upload). If loaded ping is far higher than idle ping, your connection lags badly whenever someone is downloading. Some routers have a quality of service (QoS) setting that can help. Check your router's manual.
- Traditional satellite internet has much higher ping than cable, fiber or DSL because the signal has to reach a satellite high above the earth and come back.
- Some tests also show **packet loss**. Any loss you see on repeated wired tests is worth mentioning to your provider.

## 6. Mbps vs MBps: why downloads look slower

Internet speed is sold in **megabits** per second (Mbps, small b). Many download windows, browsers and game launchers show **megabytes** per second (MB/s or MBps, big B). There are **8 bits in a byte**, so divide by 8.

| Plan or test result | Most you'll see in a download window |
| --- | --- |
| 100 Mbps | about 12.5 MBps |
| 300 Mbps | about 37.5 MBps |
| 1,000 Mbps (1 Gbps) | about 125 MBps |

Real downloads land a bit below these numbers because of overhead, and a file server can be slower than your connection. So a 300 Mbps plan downloading at 30 MBps is working well, not at a tenth of its speed. To estimate how long a large file or game will take, try this [download time calculator](https://zentacalculator.com/other/download-time/).

## 7. Test at different times of day

Your connection shares capacity with other homes in your area. Speeds can dip in the **evening**, when many people are streaming at once. A single morning test can't show that.

**How:**

- Run your wired test at a few different times, for example morning, early evening and late evening, on more than one day.
- Write down the results and the time of each.
- If speed is fine during the day but drops every evening, that pattern is useful evidence when you talk to your provider.
## 8. Compare your results to your plan

Find your plan's download and upload speeds on your bill or in your online account. Internet plans are usually advertised as **"up to"** a certain speed, so results somewhat below it are common.

**Use these rough rules:**

- **Wired results close to your plan:** your service is fine. If things still feel slow, look at Wi-Fi coverage, router placement or the device itself.
- **Wired fine, Wi-Fi much slower:** test near the router. If it's fast there, it's a coverage problem; if it's slow everywhere, it may be the router or the device. Phones and laptops with older Wi-Fi can't reach high plan speeds.
- **Wired results well below your plan on every test:** restart the modem and router, test again, then contact your provider with your notes.

The FCC's broadband benchmark, adopted in March 2024, is **100 Mbps download and 20 Mbps upload**. It's a reference point for what counts as broadband, not a promise of what your plan delivers.

## Results much lower than your plan?

Work through these before you call:

- **Restart** the modem and router, wait a few minutes, and test wired again.
- **Check the modem's lights.** A light that is blinking or a different color than usual can mean a signal problem on the provider's side. Your modem's manual explains its lights.
- **Try a different cable and port**, and another computer if you have one.
- **Connect directly to the modem** if you have a separate modem and router (power-cycle the modem when you swap devices). If the speed is fine there but not through the router, the router is the bottleneck.
- **Check for an old modem or router.** Equipment that is several years old may not support the speed tier you're now paying for. Your provider can tell you whether your modem is approved for your plan.

If only one phone or laptop is slow while others are fine, see [Wi-Fi slow on one device](/networking/wifi-slow-on-one-device/).

## When to call your internet provider

Contact your provider if:

- **Wired** tests are well below your plan speed, on several days and at different times, after restarting your equipment.
- Ping or jitter is high on wired tests even when nothing else is using the connection, or you see packet loss.
- The modem shows warning lights, or speed drops sharply when it rains or at the same time every day.
- You rent the modem from them and it's an older model.

Have your notes ready: the test you used, wired and Wi-Fi results, and the dates and times. Ask them to check the signal to your modem and confirm your plan speed. If the line tests fine on their end and your wired results are still low, ask about a technician visit or a modem replacement.
