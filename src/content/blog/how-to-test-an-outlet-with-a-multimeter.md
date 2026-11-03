---
title: "How to Test an Outlet With a Multimeter (Safely)"
description: "Test a 120 V outlet with a multimeter step by step: meter setup, live-dead-live check, the three readings to take and what each result means."
pubDate: 2026-11-03
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-03
category: tools
subcategory: multimeters-and-testers
tags: [multimeter, outlets, voltage, testing, wiring, safety]
image: { src: /images/featured/how-to-test-an-outlet-with-a-multimeter.webp, alt: "Illustration of a digital multimeter with red and black probes beside a wall outlet" }
fixcheck: false
difficulty: easy
time: 5 to 15 min
risk: danger
tools: [Digital multimeter (CAT II or CAT III rated), Test probes with finger guards, Plug-in outlet tester (optional)]
symptoms:
  - { label: "Outlet seems dead", to: "3-measure-hot-to-neutral" }
  - { label: "Checking the ground works", to: "4-measure-hot-to-ground" }
  - { label: "Not sure how to set the meter", to: "1-set-the-meter-to-ac-volts" }
  - { label: "Strange or low reading", to: "what-your-readings-mean" }
  - { label: "Testing a GFCI outlet", to: "testing-a-gfci-outlet" }
faq:
  - q: "What should an outlet read on a multimeter?"
    a: "A standard US outlet should read about 120 V between hot and neutral and about 120 V between hot and ground. Readings within roughly 114 to 126 V are normal. Neutral to ground should be close to 0 V."
  - q: "What setting do I use on a multimeter to test an outlet?"
    a: "Use AC volts, marked V~ or VAC. On an autoranging meter, just pick V~. On a manual meter, pick the first range above 120 V, such as 200 V or 600 V. Black lead in COM, red lead in the V jack."
  - q: "Is it safe to test an outlet with a multimeter?"
    a: "It's a common, low-risk test if you use a meter and probes rated CAT II or higher, keep your fingers behind the probe guards, work with dry hands and never put the leads in the amps jack. Don't open the outlet box while it's energized."
  - q: "Why does my multimeter show a few volts on a dead outlet?"
    a: "Digital meters are very sensitive and can pick up 'ghost' voltage induced from nearby live wires. A few volts or an unsteady reading on a wire you expect to be dead is usually this effect. Meters with a LoZ (low impedance) mode filter it out."
  - q: "Is a plug-in outlet tester as good as a multimeter?"
    a: "For a quick wiring check, a plug-in tester is easier and catches the common faults like open ground and reversed polarity. It doesn't show the actual voltage, and it can miss some faults, so a multimeter tells you more."
---

A multimeter tells you whether an outlet has power and whether it's wired correctly. On a standard US duplex outlet you take **three readings**: **hot to neutral**, **hot to ground** and **neutral to ground**. Together they show a dead circuit, a missing ground or swapped wires.

The test takes a few minutes and you never open the outlet. What matters most is a **properly rated meter**, the **right setting**, and **checking the meter on a known-live outlet first**.

<figure><img src="/images/posts/how-to-test-an-outlet-with-a-multimeter-readings.svg" alt="Face of a US outlet showing the short hot slot, tall neutral slot and round ground hole, with the three probe positions: hot to neutral about 120 V, hot to ground about 120 V, neutral to ground near 0 V" width="640" height="420" loading="lazy" /><figcaption>Three probe positions, three readings. Normal is 120, 120 and near 0.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Set the meter to AC volts (V~), check it on a known-live outlet, then probe the short slot to the tall slot (about 120 V), the short slot to the round hole (about 120 V) and the tall slot to the round hole (near 0 V). Anything else points to a wiring fault.</p></div>

> **Safety first:** You're touching probes to live 120 V contacts. Use a meter and leads rated at least **CAT II 300 V** (CAT III is better), with no cracked insulation. Keep your fingers **behind the probe guards**, work with **dry hands** on a dry floor, and where you can, use **one hand** and keep the other away from anything metal. Never open the outlet box or touch the wires inside while the power is on unless you're a qualified electrician.

## What you need

1. **A digital multimeter** with an AC voltage setting, rated **CAT II 300 V or higher**. CAT III 600 V meters are a common choice for home use and are also suitable for panel work. The rating is printed near the input jacks.
2. **Test leads** with finger guards and a matching or higher CAT rating. Check them for cracks and exposed metal.
3. **A known-live outlet** nearby to prove the meter works.
4. Optional: a **plug-in outlet tester** for a quick second opinion.

## 1. Set the meter to AC volts

**How:**

1. Plug the **black lead into COM** and the **red lead into the V jack** (often marked V with Ω).
2. Turn the dial to **AC volts**, marked **V~** or **VAC**. Don't use DC volts (V with a straight line), which reads wrong on household power.
3. On a **manual-ranging** meter, pick the first range **above 120 V**, such as 200 V or 600 V. Autoranging meters set the range for you.
4. **Never** leave a lead in the **A or mA jack** when measuring voltage. Probing an outlet in the amps jack can short the meter and blow its fuse, or worse.

<figure><img src="/images/posts/how-to-test-an-outlet-with-a-multimeter-setup.svg" alt="Multimeter setup: dial set to V with a wavy line for AC volts, black lead in COM, red lead in the V jack, and a warning never to use the A or mA jack for voltage" width="640" height="400" loading="lazy" /><figcaption>Dial on V~, black in COM, red in V. The amps jacks stay empty.</figcaption></figure>

## 2. Check the meter on a known-live outlet

This is the first half of the **live-dead-live** check electricians use. A meter with a dead battery, a broken lead or the wrong setting reads 0 V, which you could mistake for a dead outlet.

**How:**

1. Pick an outlet you know is working (something plugged into it runs).
2. Measure between the short and tall slots. You should see **about 120 V**.
3. If you don't, check the dial, the leads and the meter's battery before going on.

## 3. Measure hot to neutral

On a US outlet, the **short slot is hot** and the **tall slot is neutral**. The round hole below is ground.

**How:**

1. Put the **black probe in the tall (neutral) slot** first, then the **red probe in the short (hot) slot**.
2. Hold the probes steady by their grips and read the display.
3. Remove the red probe first, then the black.

**Normal reading: about 120 V.** US household voltage is nominally 120 V and typically falls within about **114 to 126 V**. A reading in that range means the outlet has power.

## 4. Measure hot to ground

This checks that the ground connection is actually connected.

**How:**

1. Black probe in the **round ground hole**, red probe in the **short (hot) slot**.
2. **Normal reading: about 120 V**, close to the hot-to-neutral reading.

On an older two-slot outlet with no ground hole, skip this step and step 5. Two-slot outlets have no ground connection to test.

## 5. Measure neutral to ground

**How:**

1. Black probe in the **round ground hole**, red probe in the **tall (neutral) slot**.
2. **Normal reading: close to 0 V.** A volt or two can be normal when other things on the circuit are running.

## 6. Recheck the meter on the known-live outlet

Finish the **live-dead-live** check by measuring the known-live outlet again. If it still reads about 120 V, your readings on the test outlet are trustworthy. If the meter now reads 0 V there too, the meter or leads failed partway and you need to test again.

## What your readings mean

| Hot to neutral | Hot to ground | Neutral to ground | Likely meaning |
| --- | --- | --- | --- |
| About 120 V | About 120 V | Near 0 V | Correctly wired |
| 0 V | 0 V | 0 V | No power (open hot): tripped breaker, tripped GFCI or loose wire |
| 0 V or unsteady | About 120 V | 0 V or unsteady | Open neutral |
| About 120 V | 0 V or unsteady | 0 V or unsteady | Open ground (not connected) |
| About 120 V | Near 0 V | About 120 V | Reversed polarity (hot and neutral swapped) |

A few notes:

- **Ghost voltage:** digital meters can show a few volts, or a jumpy reading, on a wire that isn't really connected. Treat an unsteady low reading as "not connected". Meters with a **LoZ** (low impedance) mode filter this out.
- **Low but steady voltage** (well under 114 V) can come from a loose connection or a long, heavily loaded circuit. You can estimate how much a long wire run drops with this [cable voltage drop calculator](https://zentacalculator.com/electrical/cable-voltage-drop/), but loose connections need an electrician.
- **Reversed polarity** still powers most things, but it leaves the hot connected to parts meant to be neutral, such as the threaded shell of a lamp socket. Get it fixed.

## Easier option: a plug-in outlet tester

A plug-in outlet tester costs about $10 to $25 at a hardware store. You plug it in and its lights show a pattern you match against the chart printed on it. It catches the common faults above (open ground, open neutral, open hot, reversed polarity) in seconds, with no probes near live contacts.

It doesn't show the actual voltage, and it can miss some faults, such as a bootleg ground (neutral jumpered to ground at the outlet). Use it for quick checks and the multimeter when you want numbers.

## Testing a GFCI outlet

A multimeter's three readings work the same on a GFCI outlet. The meter draws almost no current, so it won't trip the GFCI. To test the protection itself, press the outlet's **TEST** button. Power should cut off with a click, and **RESET** restores it.

Many plug-in testers also have a GFCI test button. It won't trip a GFCI that has no ground wire (often labeled "No equipment ground"), so use the outlet's own TEST button there. If your GFCI keeps cutting out, see [why a GFCI outlet keeps tripping](/electrical/gfci-outlet-keeps-tripping/).

## No reading at all?

- **Check the meter again** on a known-live outlet (step 2).
- **Check for a GFCI** elsewhere on the circuit. A tripped GFCI in a bathroom, kitchen, garage or outside can cut power to ordinary outlets after it. Press RESET on each one.
- **Check the breaker panel** for a tripped breaker. Push it fully to OFF, then back ON.
- **Check for a wall switch.** Some outlets, often in living rooms and bedrooms, are switched for a lamp, and sometimes only the top or bottom half.

## When to call an electrician

Call a licensed electrician if:

- You find an **open neutral**, **open ground**, **reversed polarity** or low voltage you can't explain.
- The outlet is **dead** and no breaker, GFCI or switch explains it.
- You see **scorch marks**, smell burning, or the outlet or cover plate feels warm.
- Several outlets read oddly, or lights dim and brighten on their own. That can point to a loose neutral, which needs attention soon.

Fixing these means working inside the box, which requires turning off the breaker and proving the wires dead first. If you're not trained for that, leave it to an electrician.
