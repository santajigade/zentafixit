---
title: "Thermostat Wire Colors Explained (R, C, W, Y, G)"
description: "What thermostat wire colors and terminals mean: R, Rh, Rc, C, W, Y, G and O/B, why the letters matter more than colors, and how to swap a thermostat safely."
pubDate: 2026-11-03
category: hvac
subcategory: thermostat-wiring
tags: [thermostat, thermostat wiring, c wire, heat pump, smart thermostat, hvac, 24v]
image: { src: /images/featured/thermostat-wire-colors.webp, alt: "Illustration of a thermostat base plate with five low-voltage wires connected to its screw terminals" }
fixcheck: false
difficulty: moderate
time: 20 to 45 min
risk: caution
tools: [Small screwdriver, Masking tape and a pen, Phone camera, Multimeter (optional)]
symptoms:
  - { label: "What does each color usually mean?", to: "common-thermostat-wire-colors" }
  - { label: "Removing an old thermostat", to: "before-you-start-label-every-wire" }
  - { label: "Rh and Rc: keep the jumper?", to: "2-r-rh-and-rc-24-v-power" }
  - { label: "No C-wire?", to: "3-c-the-common-wire" }
  - { label: "Heat pump: O or B?", to: "7-ob-heat-pump-reversing-valve" }
  - { label: "Thick wires, 120 or 240 V?", to: "line-voltage-thermostats-dont-mix-them-up" }
faq:
  - q: "Does thermostat wire color matter?"
    a: "Not as much as the terminal letter. Colors follow common conventions, but there's no strict rule and installers use whatever wire is available. Always label each wire by the terminal it was connected to, both at the thermostat and, if you can, at the furnace or air handler."
  - q: "What color is the C-wire on a thermostat?"
    a: "Often blue, sometimes black or another color. The only reliable check is where it connects: the C terminal on the thermostat and the C or COM terminal on the HVAC control board. Many homes have an unused wire tucked behind the wall plate that can be connected as C at both ends."
  - q: "What happens if I connect thermostat wires wrong?"
    a: "The system may not run, may heat when you want cooling, or the fan may run constantly. If R touches C or another wire with power on, it can blow a small fuse on the HVAC control board or damage the transformer. Turn power off before you work and double-check against your labels."
  - q: "Should I use O or B for my heat pump?"
    a: "It depends on the heat pump. Most use O, which switches the reversing valve for cooling. Some use B, which switches it for heating. Your heat pump's documentation says which. If heating and cooling are swapped after a thermostat install, the O/B setting is usually wrong."
  - q: "Do I need the jumper between Rh and Rc?"
    a: "If you have only one R wire, yes. Most systems have one transformer, and the jumper (or the thermostat's internal setting) connects Rh and Rc. If you have two separate R wires, the system uses two transformers and the jumper must be removed."
  - q: "Can I put a smart thermostat on baseboard heaters?"
    a: "Not a standard one. Electric baseboard heaters usually use line voltage thermostats at 120 or 240 V. A low-voltage smart thermostat can't be connected to those wires. You need a thermostat specifically rated for line voltage."
---

Most central heating and cooling systems in US homes use **low-voltage thermostat wiring**, about **24 V AC** from a small transformer in the furnace or air handler. Each wire tells the system to do one job: heat, cool, run the fan or power the thermostat.

The key thing to know: **the terminal letter matters, not the wire color**. Colors follow common conventions (**R red, C blue, W white, Y yellow, G green**), but they aren't required, so always label wires by where they connect.

<figure><img src="/images/posts/thermostat-wire-colors-chart.svg" alt="Chart of common thermostat terminals: R red for 24 V power, C often blue for common, W white for heat, Y yellow for cooling, G green for the fan, O or B often orange for the heat pump reversing valve, and W2 or AUX for second stage or aux heat with no standard color" width="640" height="440" loading="lazy" /><figcaption>Typical colors only. The letter on the terminal is what counts.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>R is 24 V power, C is the common return, W calls for heat, Y calls for cooling, G runs the fan and O/B switches a heat pump between heating and cooling. Colors are only a convention, so label each wire by its terminal letter before you disconnect anything, and turn the power off first.</p></div>

> **Safety first:** Turn off power to the HVAC system at the furnace or air handler power switch or the breaker before touching thermostat wires. Low voltage isn't usually a shock hazard, but a short can blow a fuse or damage the control board. If your thermostat is marked **120 V or 240 V** or has thick wires joined with wire nuts, it's a line voltage thermostat: stop and read the line voltage section below.

## Before you start: label every wire

1. **Turn off the power** at the furnace switch or breaker. Check the thermostat screen goes blank, or that the system won't start.
2. **Take a clear photo** of the wiring on the old thermostat, showing every terminal letter.
3. **Label each wire** with masking tape and the **terminal letter**, not the color. A wire on the W terminal gets "W" even if it's red.
4. **Note any jumper** (a short wire between two terminals, often Rh and Rc) and any wire that isn't connected.
5. **Wrap the bundle around a pencil** so it can't slip back into the wall while you work.

If you can safely open the furnace or air handler panel (power off), check where each wire lands on the control board too. Both ends should match.

## Common thermostat wire colors

| Terminal | Typical color | What it does |
| --- | --- | --- |
| R (or Rh, Rc) | Red | 24 V power from the transformer |
| C | Blue, sometimes black | Common return, gives constant power |
| W or W1 | White | Calls for heat (first stage) |
| W2 or AUX | No standard color | Second stage heat or heat pump backup |
| Y or Y1 | Yellow | Calls for cooling (compressor) |
| Y2 | No standard color | Second stage cooling |
| G | Green | Runs the indoor fan |
| O/B | Often orange (O) or dark blue (B) | Heat pump reversing valve |
| E | No standard color | Emergency heat (some heat pumps) |

These are conventions, not rules. Your house may differ, especially after earlier repairs.

## 1. Terminal letters matter more than colors

A thermostat cable usually has 2 to 8 or more colored conductors. Installers often grab whichever color is free, and previous owners may have rewired things. Two wires with the same color in two houses can do completely different jobs.

**What to do:**

- Trust the **terminal letter** on the old thermostat and on the control board.
- Ignore spare wires that weren't connected at either end. Leave them folded back, not touching anything.
- When a new thermostat's labels differ (for example W1 instead of W), match by function using its manual.

## 2. R, Rh and Rc: 24 V power

**R** carries 24 V AC from the transformer. Some thermostats split it into **Rh** (power for heating) and **Rc** (power for cooling) for homes with two separate systems, such as a boiler with a separate AC.

<figure><img src="/images/posts/thermostat-wire-colors-rh-rc.svg" alt="Two wiring cases: one transformer with a single R wire to Rh and a jumper to Rc; two transformers, one for heat and one for cooling, with separate wires to Rh and Rc and no jumper" width="640" height="400" loading="lazy" /><figcaption>One R wire: keep the jumper. Two R wires: remove it.</figcaption></figure>

**What to do:**

- **One R wire:** connect it to R, or to Rh or Rc as your new thermostat's manual says. Keep the jumper, or set the internal jumper option, so both are powered.
- **Two R wires** (labeled Rh and Rc on the old thermostat): connect each to its own terminal and **remove the jumper**. Joining two transformers together can damage them.

## 3. C: the common wire

**C** completes the 24 V circuit back to the transformer. A basic thermostat doesn't need it, but most **smart thermostats** need C for steady power to run their screen and Wi-Fi.

**What to do:**

- If you have a C wire, connect it to **C** on the thermostat and make sure it's on **C or COM** at the control board.
- No C wire? Look for a **spare wire** in the bundle that could be connected at both ends. Otherwise, some thermostats include a power adapter kit, or an HVAC technician can run a new cable.
- Power problems from a missing or loose C wire often show up as Wi-Fi drops and random reboots. See [smart thermostat not connecting to Wi-Fi](/smart-home/smart-thermostat-not-connecting-to-wifi/) for that troubleshooting.

**Watch out:** on some **older thermostats**, a terminal marked **B** was used as the common, not as a heat pump wire. If your old thermostat had a B wire and you don't have a heat pump, check the control board before connecting it.

## 4. W, W1 and W2: heat

**W** (or **W1**) calls for heat. On a furnace, it starts the burner sequence. **W2** is a second stage of heat on two-stage furnaces, or the **auxiliary heat** on many heat pumps. Some thermostats label that terminal **AUX**.

**What to do:**

- Connect W to W or W1.
- Connect a second heat wire to W2 or AUX, as your thermostat's manual says.
- On a heat pump, don't put the compressor on W. The compressor runs from Y in both heating and cooling.

## 5. Y, Y1 and Y2: cooling

**Y** (or **Y1**) runs the outdoor compressor. On an AC it means cooling. On a **heat pump**, it runs the compressor for **both** heating and cooling, with O/B deciding which. **Y2** is second stage cooling on two-stage systems.

**What to do:** connect Y to Y or Y1 and any second stage wire to Y2.

## 6. G: the fan

**G** turns on the indoor blower. The thermostat uses it when the fan is set to ON, and in cooling mode on many systems.

**What to do:** connect G to G. If the fan runs all the time after a swap, check that G isn't connected to R and that the thermostat fan setting is AUTO.

## 7. O/B: heat pump reversing valve

Heat pumps use one wire to switch the **reversing valve** between heating and cooling.

- **O** energizes the valve **for cooling**. Most heat pumps use O.
- **B** energizes the valve **for heating**. Some brands use B.

Many thermostats have one **O/B** terminal and a setting to choose which. Check your heat pump's documentation. If you get **cold air in heat mode and warm air in cooling** after the install, this setting is the usual cause. See [heat pump blowing cold air](/hvac/heat-pump-blowing-cold-air/) for other causes.

## 8. Other terminals you may see

- **E:** emergency heat, which runs only the backup heat on some heat pumps.
- **L:** a fault or service indicator on some heat pumps.
- **S or S1/S2:** sensor terminals for an outdoor or remote temperature sensor.
- **Humidifier or accessory terminals:** labels vary by brand.

If a wire was on a terminal your new thermostat doesn't have, don't guess. Check both manuals or ask an HVAC technician.

## Line voltage thermostats: don't mix them up

Electric **baseboard heaters** and some wall heaters use **line voltage thermostats** that switch **120 V or 240 V** directly. They look different from low-voltage systems:

- Usually **2 or 4 thick wires**, often black and red, joined with **wire nuts** rather than small screw terminals.
- A label on the thermostat stating **120 V or 240 V** and a current rating.
- No furnace or air handler involved.

**Never connect a line voltage circuit to a low-voltage (24 V) thermostat.** It can destroy the thermostat, cause a fire and give you a serious shock. Turn off the breaker, verify the wires are dead with a non-contact voltage tester, and replace it only with a thermostat **rated for line voltage**. If you're unsure, call an electrician.

Gas fireplaces and some wall furnaces use **millivolt** thermostats, which also need a compatible model.

## When to call an HVAC technician

Call a licensed HVAC technician or electrician if:

- Your wire labels don't match any terminal on the new thermostat, or you're unsure about O/B, W2 or a heat pump setup.
- The system doesn't run after the swap, and you've double-checked the wiring and power.
- The furnace's low-voltage **fuse keeps blowing** or the transformer hums or gets hot.
- You need a **new C wire** run through the wall.
- It's a **line voltage** thermostat and you're not experienced with 120/240 V wiring.

Correct wiring is mostly careful labeling. Photo, tape, then match each letter to its letter.
