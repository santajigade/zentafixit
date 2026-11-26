---
title: "How to Add RAM to a Laptop (and Check if Yours Can Take It)"
description: "Add RAM to a laptop step by step: check if memory is soldered, find slots and the supported DDR type, buy a matching SO-DIMM and install it safely."
pubDate: 2026-11-26
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-26
category: pc-laptops
subcategory: upgrades
tags: [ram, memory, laptop, upgrade, so-dimm, ddr4, ddr5]
image: { src: /images/featured/how-to-add-ram-to-laptop.webp, alt: "Illustration of an open laptop base with a memory module being pressed into its slot" }
fixcheck: false
difficulty: easy
time: 20 to 60 min
risk: low
tools: [Small Phillips screwdriver, Plastic pry tool, Anti-static wrist strap (optional), New SO-DIMM memory module]
symptoms:
  - { label: "Can my laptop be upgraded?", to: "1-check-whether-your-laptops-ram-can-be-upgraded" }
  - { label: "How many slots do I have?", to: "2-find-your-slot-count-type-and-maximum" }
  - { label: "DDR4 or DDR5?", to: "3-buy-the-right-module" }
  - { label: "How do I open it?", to: "5-open-the-bottom-panel" }
  - { label: "Black screen after the upgrade", to: "laptop-wont-start-after-adding-ram" }
faq:
  - q: "Can I add RAM to any laptop?"
    a: "No. Many thin laptops and all Apple silicon MacBooks have memory soldered to the main board or built into the chip, so it can't be changed. Check your model's spec page or service manual for a removable SO-DIMM slot before you buy anything."
  - q: "Can I put DDR5 RAM in a DDR4 laptop?"
    a: "No. DDR4 and DDR5 modules have the notch in a different place, so one won't fit the other's slot, and the laptop's processor supports only one type. Buy the type your laptop's spec lists."
  - q: "Do both RAM sticks need to match?"
    a: "They don't have to, but matching modules work best. Two modules of the same size and speed let most laptops run in dual-channel mode. With mismatched modules, the memory usually runs at the speed of the slower one."
  - q: "Why does my laptop take so long to start after adding RAM?"
    a: "On the first start with new memory, many laptops run memory training, where the firmware tests and tunes the new module. The screen can stay black longer than usual. Leave it alone and let it finish instead of holding the power button."
  - q: "How do I check how much RAM my laptop has?"
    a: "In Windows 11, open Settings > System > About and look at Installed RAM. Task Manager > Performance > Memory also shows the total, the speed, how many slots are used and the form factor."
---

Adding memory is one of the cheapest ways to help a laptop that slows down with lots of browser tabs or apps open. The work itself is usually a few screws and one click. The part that trips people up is **finding out whether the RAM can be upgraded at all**, and then **buying the exact type the laptop supports**.

You need three answers before you order: **is there a removable slot**, **how many slots and how much memory the laptop supports**, and **which DDR type and speed it uses**. Then it's static safety, the bottom panel and the module itself.

<figure><img src="/images/posts/how-to-add-ram-to-laptop-check-flow.svg" alt="Flowchart: look up your exact model, read the memory spec, then check for a removable slot; if there is none the memory is soldered and can't be upgraded; if there is a SO-DIMM slot, note the DDR type, speed and maximum and buy a matching module" width="640" height="440" loading="lazy" /><figcaption>The spec sheet answers the big question before you pick up a screwdriver.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Look up your laptop's memory spec on the maker's site or in its service manual. If it lists a removable SO-DIMM slot, buy a module of the same DDR type (DDR4 and DDR5 aren't interchangeable) at a supported speed, then shut down, unplug, ground yourself, open the bottom panel, insert the module at an angle and press it down until the clips latch.</p></div>

> **Safety first:** Shut the laptop down fully (not sleep) and unplug the charger before opening it. If the service manual says to disconnect the internal battery, do that before touching the board. Static can damage memory without any visible sign, so ground yourself on bare metal first. If the battery looks swollen or the case is bulging, stop and get it serviced.

## Before you start: quick checklist

1. **Find your exact model number** on the sticker under the laptop, on the box, or in the maker's support app.
2. **Open the maker's spec page or service manual** for that model and search for "memory" or "RAM."
3. **Note what it says** about slots, memory type, speed and maximum capacity.
4. **Check what's installed now** in Task Manager (step 2 below).
5. **Download the service manual** if there is one. It shows the screws, clips and where the slots are.

## 1. Check whether your laptop's RAM can be upgraded

Laptop memory comes in two forms:

- **SO-DIMM modules:** small removable sticks that clip into a slot on the main board. These can be swapped or added.
- **Soldered (onboard) memory:** chips fixed to the main board. They can't be changed. Memory listed as **LPDDR** (such as LPDDR4X or LPDDR5) is almost always soldered.

Many thin and light laptops have all their memory soldered. Some have a mix: part soldered, plus one SO-DIMM slot you can fill. **All Apple silicon MacBooks** have memory built into the chip package, and most Intel MacBooks from recent years are soldered too, so a RAM upgrade isn't possible on them. Apple's support site lists the memory specs for older Mac models that do have slots.

A few newer laptops use a different removable module called **CAMM2** (or LPCAMM2). If your spec page mentions it, buy only that type and follow the maker's instructions.

If everything is soldered, adding RAM isn't an option. Closing unused apps and browser tabs, or the fixes in [why a Windows computer runs slow](/pc-laptops/computer-running-slow-windows/), are the next best thing.

## 2. Find your slot count, type and maximum

**On the maker's site:** the spec page or service manual usually lists the number of memory slots, the memory type (for example DDR4 or DDR5 SO-DIMM), the supported speed and the maximum total memory. Trust this over anything else.

**In Windows:** open **Task Manager** (Ctrl + Shift + Esc), go to **Performance**, then **Memory**. You'll see:

- **Slots used**, such as "1 of 2," which tells you whether a slot is free.
- **Form factor**, such as SODIMM.
- **Speed** of the memory now installed.

Treat the slot count as a hint, not proof. On laptops with soldered memory plus one slot, Windows may count the soldered memory as a slot, so confirm with the spec page. Some laptops also put a second slot under the keyboard or on the other side of the board, which is harder to reach.

**Maximum memory:** the spec page lists the most the laptop officially supports. Some laptops can use more than the listed figure, but that isn't guaranteed, so plan around the official number.

## 3. Buy the right module

Match these to your laptop's spec:

| What to match | Why it matters |
| --- | --- |
| **Form factor: SO-DIMM** | Desktop DIMMs are longer and won't fit a laptop slot |
| **DDR generation** | DDR4 and DDR5 have the notch in different places and aren't interchangeable |
| **Speed** | A faster module usually runs at the laptop's supported speed. A slower one can drag all memory down |
| **Capacity per slot** | Stay within the per-slot and total maximum in the spec |

A few more tips:

- **Match what's installed.** If you're adding a second module, buy the **same capacity and speed** as the first. Matched pairs let most laptops run in **dual-channel** mode, which can be noticeably faster than one module alone. With a mismatch, the laptop usually runs everything at the slower speed.
- **Replacing both is fine too.** For the cleanest result, some people buy a matched kit and replace the old module.
- **Older laptops:** DDR3 laptops may need **DDR3L** (low voltage) modules. Check the spec, as a standard DDR3 module may not work in a DDR3L-only laptop.
- **Memory makers' online configurators** let you pick your laptop model and show compatible modules. They're a helpful second check against the spec page.

## 4. Prepare and protect against static

You won't feel the static that can damage a memory module.

**How:**

1. **Shut down fully.** Use Shut down, not Sleep or Hibernate, and unplug the charger and any USB devices.
2. **Work on a hard table**, not carpet or a bed, with good light.
3. **Ground yourself** by touching a bare metal surface, or wear an anti-static wrist strap clipped to bare metal.
4. **Keep the new module in its anti-static bag** until you need it.
5. **Hold modules by the edges.** Don't touch the gold contacts or the chips.

## 5. Open the bottom panel

**How:**

1. **Follow your model's service manual** if there is one. It shows which screws to remove and where the clips are.
2. **Remove the bottom panel screws.** Keep them in order, since some may be different lengths. Check for screws hidden under rubber feet or labels.
3. **Release the clips with a plastic pry tool**, starting at a seam or corner. Metal tools can scratch or crack the case. Don't force it.
4. **Disconnect the battery if the manual says to.** Usually this means unplugging its connector from the board. Hold your finger on the power button for a few seconds afterward if the manual suggests it.
5. **Find the memory slot.** It may sit under a thin metal shield or a plastic film. Lift that carefully if the manual says it's removable.

## 6. Install the module

<figure><img src="/images/posts/how-to-add-ram-to-laptop-install.svg" alt="Two views of installing a SO-DIMM laptop memory module: a side view of the module going into the slot at an angle, contacts first, and a top view of the module pressed flat with the clips at both sides latched over its edges" width="640" height="420" loading="lazy" /><figcaption>In at an angle, then press flat until both clips snap over the edges.</figcaption></figure>

**To remove an old module** (if you're replacing one): gently push the two side clips outward at the same time. The module pops up at an angle. Slide it out.

**To insert the new one:**

1. **Line up the notch** on the module's gold edge with the key in the slot. It only fits one way. If it doesn't line up, check that you have the right DDR type.
2. **Insert it at an angle**, gold contacts first, about the same angle a released module pops up to. Push it firmly into the slot until the contacts are almost fully hidden.
3. **Press the module down flat** until the side clips snap over its edges. You'll usually hear or feel a click.
4. **Check both clips are latched** and the module sits evenly. A module that's in crooked or only part way is the most common cause of a failed upgrade.

Reconnect the battery if you disconnected it, refit any shield, then replace the bottom panel and screws.

## 7. Start up and check the new RAM

1. **Plug in the charger and turn the laptop on.**
2. **Be patient on the first start.** Many laptops run **memory training** with new RAM, testing and tuning it before Windows loads. The screen may stay black, or the power light may blink, for longer than usual. Don't hold the power button to force it off.
3. **Check the total in Windows.** Open **Settings > System > About** and look at **Installed RAM**, or go to **Task Manager > Performance > Memory** and check the total and **Slots used**.
4. **Optional test:** search the Start menu for **Windows Memory Diagnostic** and let it restart and check the memory.

If Windows shows less memory than you installed, a small amount may be marked "hardware reserved" for the graphics. A much lower number usually means one module isn't seated or isn't compatible.

## Laptop won't start after adding RAM?

- **Give it time.** Memory training can take a while on the first start. Leave it plugged in for several minutes before you decide it's stuck.
- **Reseat the module.** Shut down, unplug, open it up again and take the module out and back in, pressing until both clips latch.
- **Check the battery connector** if you disconnected it. A loose connector can leave the laptop dead.
- **Try the new module alone, then the old one alone.** If the laptop starts with the old module but not the new one, the new one is likely incompatible or faulty.
- **Listen and look.** Some laptops beep or blink a light in a pattern when memory isn't detected. The meaning varies by maker, so check the service manual.
- **Update the BIOS** from your laptop maker's support page once it runs again, if the release notes mention memory compatibility.

For other storage upgrades on the same laptop, see [how to upgrade your laptop to an SSD](/pc-laptops/laptop-ssd-upgrade/).

## When to call a pro

Take it to a repair shop or the maker's service center if:

- The slot is under the keyboard or main board, or the manual calls for a lot of disassembly.
- The case won't open without force, or clips are breaking.
- The battery is swollen or damaged.
- The laptop won't start even with the original memory put back.
- The laptop is under warranty and you're not sure opening it is allowed. Check the warranty terms first.
