---
title: "HDMI ARC vs eARC: What's the Difference and How to Set It Up"
description: "HDMI ARC vs eARC explained: what each can carry, when you need eARC for lossless audio and Atmos, which cable to use and how to set up your soundbar."
pubDate: 2026-11-03
category: tv-audio
subcategory: home-theater-setup
tags: [hdmi, arc, earc, soundbar, receiver, dolby-atmos, hdmi-cec, home-theater]
image: { src: /images/featured/hdmi-arc-vs-earc.webp, alt: "Illustration of a TV connected to a soundbar with a single HDMI cable" }
fixcheck: false
difficulty: easy
time: 10 to 20 min
risk: low
tools: [TV remote, HDMI cable (Ultra High Speed or High Speed with Ethernet), Optical cable (optional)]
symptoms:
  - { label: "Do I need eARC for Atmos?", to: "what-arc-and-earc-can-carry" }
  - { label: "Which port do I use?", to: "2-find-the-arc-or-earc-port-on-each-device" }
  - { label: "Which HDMI cable do I need?", to: "3-use-a-suitable-hdmi-cable" }
  - { label: "TV remote won't control the soundbar", to: "4-turn-on-hdmi-cec" }
  - { label: "Connected, but no sound", to: "arc-connected-but-no-sound" }
  - { label: "My TV has no ARC port", to: "optical-the-fallback-option" }
faq:
  - q: "Can I plug an eARC soundbar into an ARC TV?"
    a: "Yes. eARC is backward compatible, so the pair works as regular ARC. You get stereo and compressed surround, and often streaming Atmos, but not lossless formats like Dolby TrueHD."
  - q: "Do I need eARC for Dolby Atmos?"
    a: "Not always. Streaming apps usually send Atmos inside Dolby Digital Plus, which many TVs can pass over ARC. Lossless Atmos in Dolby TrueHD, mostly from 4K Blu-ray, needs eARC on both the TV and the soundbar or receiver."
  - q: "Do I need a special HDMI cable for eARC?"
    a: "Use an Ultra High Speed HDMI cable or a High Speed HDMI cable with Ethernet. Very old Standard HDMI cables may not work reliably for eARC."
  - q: "Is HDMI ARC better than optical?"
    a: "Usually yes. ARC lets the TV remote control the soundbar and, on many TVs, carries formats optical can't, such as Dolby Digital Plus. Optical is a good fallback when ARC isn't available or won't work."
  - q: "Why does my soundbar show PCM instead of Dolby?"
    a: "The TV's digital audio output is probably set to PCM, or the source is sending stereo. Set the TV output to Auto, Bitstream or Passthrough and check that the soundbar supports the format."
---

HDMI ARC (Audio Return Channel) lets your TV send its sound **back down the same HDMI cable** to a soundbar or AV receiver. One cable carries the picture into the TV and the sound out of it, and your TV remote can usually control the soundbar's volume too.

**eARC** (enhanced ARC) is the newer version. The setup is the same, but eARC has **far more bandwidth**, so it can carry **lossless surround sound and lossless Dolby Atmos** that regular ARC can't. Both ends must support eARC to get those extras.

<figure><img src="/images/posts/hdmi-arc-vs-earc-connection.svg" alt="Connection diagram: a streaming box plugs into HDMI 1 on the TV, and an HDMI cable runs from the TV's HDMI 3 eARC port to the soundbar's HDMI OUT TV ARC or eARC port, with sound flowing back to the soundbar. A dashed optical cable is shown as a fallback." width="640" height="400" loading="lazy" /><figcaption>Video goes into the TV, and sound comes back out on the ARC or eARC cable.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>ARC sends compressed TV audio, such as Dolby Digital 5.1 and stereo, to a soundbar. eARC adds enough bandwidth for lossless formats like Dolby TrueHD with Atmos and uncompressed multichannel audio. To set it up, connect the ARC or eARC ports on both devices with a good HDMI cable, turn on HDMI-CEC and set the TV's sound output to the soundbar or receiver.</p></div>

## What ARC and eARC can carry

ARC arrived with **HDMI 1.4**. eARC came with **HDMI 2.1**, though some TVs and soundbars added eARC without supporting every other HDMI 2.1 feature, so check for the eARC label rather than the version number.

<figure><img src="/images/posts/hdmi-arc-vs-earc-comparison.svg" alt="Comparison chart of ARC and eARC: ARC was added in HDMI 1.4, has low bandwidth, carries stereo and compressed 5.1, and on some TVs carries the streaming type of Dolby Atmos. eARC was added in HDMI 2.1, has much higher bandwidth, carries compressed or lossless 5.1 and 7.1, and carries Dolby TrueHD and DTS-HD Master Audio." width="640" height="400" loading="lazy" /><figcaption>eARC can do everything ARC does, plus lossless audio.</figcaption></figure>

In plain terms:

- **Stereo TV and streaming audio:** both work fine.
- **5.1 surround from streaming apps and broadcasts:** usually sent as compressed Dolby Digital or Dolby Digital Plus. ARC handles Dolby Digital; support for Dolby Digital Plus over ARC depends on the TV and soundbar.
- **Dolby Atmos from streaming apps:** streaming services typically deliver Atmos inside Dolby Digital Plus, a compressed format. Many TVs can pass this over ARC, if both devices support it.
- **Lossless audio** (Dolby TrueHD, Dolby Atmos in TrueHD, DTS-HD Master Audio, uncompressed 5.1 or 7.1 PCM): this mostly comes from 4K Blu-ray players and some game consoles. It **needs eARC** when it travels through the TV.
- **DTS formats:** some TVs don't pass DTS over ARC or eARC at all. Check your TV's manual or audio specifications.

eARC also builds lip sync correction into the standard, which helps keep voices matched to lips.

**Do you need eARC?** If you mostly stream, ARC is often enough. If you play 4K Blu-ray discs through the TV, or want the best quality Atmos from a capable system, eARC on both the TV and the soundbar or receiver is worth having.

## Quick setup checklist

1. **Check that both devices** have an HDMI port labeled ARC or eARC.
2. **Connect those two ports** with a suitable HDMI cable.
3. **Turn on HDMI-CEC** on the TV, and on the soundbar or receiver if it has a setting.
4. **Set the TV's audio output** to the external speaker, receiver or HDMI ARC.
5. **Play something** and check the format shown on the soundbar or receiver.

The sections below cover each step in more detail.

## 1. Check what your TV and soundbar support

eARC only works when **both ends** support it. If one end is ARC only, the pair works as regular ARC, which is fine for most streaming.

**How:**

- Look at the labels printed next to the HDMI ports on the back or side of each device.
- Check the spec sheet or manual for "eARC", "ARC", Dolby Atmos and DTS support.
- Some older TVs need a firmware update to enable eARC. Update the TV and the soundbar before you start.

## 2. Find the ARC or eARC port on each device

Most TVs have **only one** ARC or eARC port, even if they have three or four HDMI inputs. On the soundbar or receiver, the port is usually labeled **HDMI OUT (TV ARC)** or similar.

**How:**

1. Find the TV port labeled **ARC** or **eARC**. It may share a number with a regular input, such as "HDMI 3 (eARC)".
2. Find the soundbar or receiver port labeled **ARC**, **eARC** or **TV**.
3. Connect those two ports. Any other HDMI port won't send audio back to the soundbar.

On some TVs the eARC port is also one of the few ports that supports 4K at 120Hz. If you have a console that needs that port, plug the console into your receiver or a soundbar with HDMI passthrough instead, or check your TV manual for which ports support what.

## 3. Use a suitable HDMI cable

Any HDMI cable can work for basic ARC, but very old or damaged cables cause dropouts and missing formats.

**How:**

- For **eARC**, use an **Ultra High Speed HDMI cable** or a **High Speed HDMI cable with Ethernet**. eARC relies on wires that older Standard HDMI cables may not include.
- Keep the run reasonably short and avoid sharp bends behind wall mounts.
- If sound drops out, swap in a known-good cable before changing settings.

## 4. Turn on HDMI-CEC

ARC uses **HDMI-CEC** (Consumer Electronics Control) to let the TV and soundbar talk to each other. CEC is also what lets your TV remote change the soundbar volume and turn it on and off with the TV. Many TVs need CEC on for eARC as well.

**How:**

- Look in your TV's settings for HDMI-CEC. Brands often give it their own name, such as Anynet+ (Samsung), SIMPLINK (LG), BRAVIA Sync (Sony) or CEC (many others). The exact menu path varies, so search your manual for "CEC".
- Turn on the matching setting on the soundbar or receiver if it has one.
- If the TV has a separate **eARC mode** setting, set it to Auto or On.

## 5. Set the TV's audio output

**How:**

1. In the TV's sound settings, set the output to **HDMI ARC**, **receiver**, **external speaker** or similar, rather than the TV speakers.
2. Look for a **digital audio output** format setting. **Auto**, **Passthrough** or **Bitstream** sends surround and Atmos to the soundbar to decode. **PCM** usually converts audio to stereo when using ARC.
3. On the soundbar or receiver, select the **TV**, **ARC** or **eARC** input if it doesn't switch automatically.

## 6. Decide where to plug in your other devices

You have two common layouts:

- **Everything into the TV.** Streaming boxes, consoles and players plug into the TV, and the TV sends their sound out over ARC or eARC. This is simplest. With plain ARC, some TVs only pass stereo or compressed formats from their HDMI inputs, so lossless audio from a disc player needs eARC.
- **Everything into the receiver.** If your receiver or soundbar has HDMI inputs, plug sources into it and run one cable to the TV. Disc and console audio goes straight to the receiver. ARC or eARC then only carries sound from the TV's own apps.

## 7. Test it

**How:**

1. Play something you know is in surround or Atmos.
2. Check the format indicator on the soundbar, receiver display or app.
3. Turn the TV volume up and down with the TV remote. The soundbar volume should follow.

If the format shows as stereo or PCM when you expected surround, go back to step 5 and check the digital output setting.

## ARC connected but no sound?

- **Power cycle in order:** turn everything off, unplug the TV and soundbar for a minute, then power the soundbar first and the TV second.
- **Recheck the ports:** both ends must be on the ARC or eARC ports.
- **Toggle CEC off and on** on the TV, then restart both devices.
- **Set the output again:** some TVs switch back to their own speakers after an update.
- **Try PCM output** briefly. If sound returns, the soundbar may not support the format the TV was sending.
- **Swap the cable** for a known-good one.
- **Update firmware** on both devices.

If you're also losing the picture, see [what to do when your TV says No Signal on HDMI](/tv-audio/tv-no-signal-hdmi/). For a soundbar that stays silent no matter what, see [soundbar not making sound](/tv-audio/soundbar-no-sound/).

## Optical: the fallback option

If your TV has no ARC port, or ARC just won't work reliably, an **optical (TOSLINK) cable** from the TV's digital audio out to the soundbar is a solid fallback.

- **What it carries:** stereo and compressed 5.1 surround such as Dolby Digital, and DTS on TVs that output it.
- **What it can't carry:** Dolby Atmos, Dolby Digital Plus, or lossless formats.
- **No CEC:** you'll usually use the soundbar remote for volume, although some soundbars can learn your TV remote's volume buttons.

Push the plug in until it clicks, and remove the small protective cap from the cable ends if there is one.

## When to get help

Most ARC and eARC problems come down to ports, settings or firmware. Contact the TV or soundbar maker's support if:

- Neither device has ever produced sound over ARC, even with a new cable and fresh firmware.
- One HDMI port stopped working while the others still work. The port may be damaged.
- eARC is listed in the specs, but the setting is missing from the menu.

If your setup includes in-wall HDMI runs, a home theater installer can test the hidden cable for you.
