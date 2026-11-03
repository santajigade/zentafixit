---
title: "Home Battery Backup: How Long Will It Run My House?"
description: "Estimate how long a home battery will run your house in an outage: kWh vs kW, usable capacity, essential loads, a worked example and solar recharge."
pubDate: 2026-11-03
category: solar-power
subcategory: battery-backup
tags: [home battery, battery backup, power outage, kwh, essential loads, solar battery]
image: { src: /images/featured/home-battery-backup-runtime.webp, alt: "Illustration of a wall-mounted home battery connected to a house with a charge level gauge" }
fixcheck: false
difficulty: easy
time: 20 to 40 min
risk: low
tools: [Battery spec sheet, Electric bills or utility usage data, Appliance nameplates and EnergyGuide labels, Calculator]
symptoms:
  - { label: "kW or kWh?", to: "1-know-the-difference-between-kwh-and-kw" }
  - { label: "How much can I actually use?", to: "2-use-usable-capacity-not-the-headline-number" }
  - { label: "What should I back up?", to: "3-choose-your-essential-loads" }
  - { label: "Show me an example", to: "4-work-through-an-example" }
  - { label: "Will it run my AC or well pump?", to: "5-plan-for-hvac-and-well-pumps" }
  - { label: "Can solar recharge it?", to: "6-add-solar-recharge" }
faq:
  - q: "How long will a 10 kWh battery run a house?"
    a: "It depends on what you run. Divide the usable energy by your hourly use. Running only essentials like the fridge, lights, internet and phone charging might use 3 to 5 kWh a day, so a battery with about 10 kWh usable could last around two days. Running central AC or electric heat can drain it in hours."
  - q: "Can a home battery run central air conditioning?"
    a: "Sometimes. The battery must supply enough power (kW) to start and run the AC, which draws several kilowatts and needs a startup surge. Even if it can, AC uses energy fast, so runtime drops sharply. Ask your installer to check the AC nameplate against the battery's continuous and surge ratings."
  - q: "What is an essential loads panel?"
    a: "It's a small subpanel that holds only the circuits you want backed up, like the fridge, some lights, outlets and the furnace fan. The battery powers that panel during an outage, so big loads can't drain it. Some newer systems can back up the whole main panel and manage loads instead."
  - q: "Will my solar panels recharge the battery during an outage?"
    a: "Only if the system is designed for it. Most battery systems paired with solar can recharge in daylight during an outage. Solar without a battery shuts off when the grid goes down. How much it recharges depends on weather, season and how much you're using at the same time."
  - q: "How many batteries do I need for a whole house?"
    a: "Work out your daily kWh from your electric bill (monthly kWh divided by about 30), decide how many days you want, and divide by one battery's usable capacity. Whole-house backup with AC or electric heat often needs several batteries. Backing up essentials only needs far fewer."
---

A home battery stores energy for when the grid goes down. How long it lasts depends on just two things: **how much energy it can deliver (kWh)** and **how fast your house uses it (kW)**. A battery that keeps a fridge, lights and Wi-Fi going for two days can be flat in a few hours if central AC or an electric water heater is running.

So the honest answer to "how long?" is: it depends on **what you choose to run**. This guide shows how to estimate it for your own home, with a worked example you can copy.

<figure><img src="/images/posts/home-battery-backup-runtime-kwh-vs-kw.svg" alt="Diagram comparing a water tank to a battery: tank size is energy in kWh and sets how long it lasts, the tap size is power in kW and sets how much can run at once. Runtime equals usable kWh divided by average kW" width="640" height="400" loading="lazy" /><figcaption>kWh is the size of the tank. kW is how wide the tap opens.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Runtime in hours equals usable battery kWh divided by the average kW your backed-up loads draw. Essentials only often use 3 to 5 kWh a day, so about 10 kWh usable can last around two days. Central AC, electric heat or a well pump can cut that to hours.</p></div>

> **Safety note:** Home batteries connect to your electrical panel and must be installed by a licensed electrician or certified installer, with the right permits. Never try to power your house by plugging a battery or generator into a wall outlet. Backfeeding can injure utility line workers and damage your wiring.

## How to estimate runtime: the short version

1. **Find the usable capacity** in kWh on the battery spec sheet.
2. **Take off about 10 percent** as a planning allowance for conversion losses.
3. **List the loads** you'll run during an outage and estimate their daily kWh.
4. **Divide** the battery energy by your daily kWh to get days of backup.
5. **Check power (kW)**: the biggest loads that run at the same time, plus any startup surge, must fit within the battery's ratings.

## 1. Know the difference between kWh and kW

- **kWh (kilowatt-hours)** is **energy**, the amount stored in the battery. It decides **how long** you can run things.
- **kW (kilowatts)** is **power**, how much the battery can supply at one moment. It decides **how many things** can run at once.

A battery might store 10 kWh but only deliver 5 kW continuously. It could run a 1 kW load for about 10 hours, but it couldn't run 7 kW of loads at once, even for a minute. Most spec sheets also list a short **peak** or **surge** rating for starting motors.

Your utility bill uses the same unit: monthly kWh. Divide it by about 30 to get your normal daily use, which is a useful upper limit.

## 2. Use usable capacity, not the headline number

Some batteries advertise a total capacity but let you use only part of it, to protect the cells. The spec sheet usually lists **usable** or **usable energy** separately. Use that number.

Two more things reduce what you actually get:

- **Conversion losses.** Power goes through an inverter to become 120/240 V AC, and some is lost as heat. Taking off about 10 percent is a reasonable planning allowance. Check your spec sheet for the round-trip efficiency.
- **Backup reserve.** If your battery also cycles daily to save on your bill, it may not be full when an outage starts. Most systems let you set a **backup reserve**, a level it won't go below in normal use. If storms are forecast, raise it.

Cold also matters. Batteries in an unheated garage in winter may limit output to protect themselves. Check the maker's temperature range.

## 3. Choose your essential loads

Whole-home backup sounds best, but the more you back up, the faster the battery drains. Many installs use an **essential loads panel**: a small subpanel with only the circuits you choose, such as:

- Refrigerator and freezer
- Some lights and outlets
- Internet modem and router
- Furnace fan or boiler controls (for gas or oil heat)
- Sump pump, well pump or medical equipment if you need them

Some newer systems back up the whole main panel and use **smart load control** to switch off big loads like the water heater or AC when the battery runs low. Either way, decide your list before you size anything.

To estimate each load's daily kWh, use **watts × hours used per day ÷ 1,000**. For a fridge, take the yearly kWh on its EnergyGuide label and divide by 365.

## 4. Work through an example

<figure><img src="/images/posts/home-battery-backup-runtime-example.svg" alt="Worked example as bars: refrigerator 1.5 kWh a day, LED lights 0.6, internet 0.5, TV 0.4, phones and laptop 0.3, microwave and coffee maker 0.7, total 4.0 kWh a day. A battery with 10 kWh usable, minus 10 percent losses, gives 9 kWh, which lasts about 2.2 days" width="640" height="440" loading="lazy" /><figcaption>Example only. Your loads and battery will differ.</figcaption></figure>

**Assumptions (example only, check your own numbers):** a battery with **10 kWh usable**, fully charged when the outage starts, no solar recharge, gas heat, and no AC running.

| Load | Assumed use | kWh per day |
| --- | --- | --- |
| Refrigerator | EnergyGuide label about 550 kWh a year | 1.5 |
| LED lights | 10 bulbs × 10 W × 6 hours | 0.6 |
| Modem and router | about 20 W × 24 hours | 0.5 |
| TV | 100 W × 4 hours | 0.4 |
| Phones and a laptop | charging | 0.3 |
| Microwave and coffee maker | short daily use | 0.7 |
| **Total** | | **4.0** |

Battery energy after losses: 10 kWh × 0.9 = **9 kWh**.
Runtime: 9 ÷ 4.0 = **about 2.2 days**.

Now check power: the biggest things that might run together (microwave about 1 to 1.5 kW, fridge starting up, lights, TV) total well under 3 kW, which most home batteries can supply. If you add a gas furnace fan for heat in winter, add its watts × hours of runtime per day, and runtime drops.

You can run the same numbers with this [battery storage calculator](https://zentacalculator.com/ecology/battery-storage/).

## 5. Plan for HVAC and well pumps

These are the loads that decide whether a battery lasts days or hours.

- **Central AC and heat pumps** often draw several kilowatts while running, plus a startup surge. They can use more energy in an afternoon than the whole essentials list uses in a day. Check the nameplate on the outdoor unit for its ratings and ask your installer whether the battery can start it. A **soft-start kit**, fitted by an HVAC pro, is a common way to reduce the surge.
- **Electric furnaces, baseboard heat and electric water heaters** draw a lot of power for long periods. Most essential-loads plans leave them off.
- **Gas furnaces** need only power for the blower fan and controls, which is far easier to back up.
- **Well pumps** are often 240 V and have a big startup surge, but they run in short bursts, so their daily energy is modest. The battery must be able to deliver 240 V and the surge. Check the pump's nameplate and confirm with your installer.

## 6. Add solar recharge

With solar panels and a battery system designed for backup, the panels can recharge the battery during the day while the grid is down. On a sunny day that can stretch runtime a lot. On cloudy or winter days, recharge may be small.

Things to know:

- **Solar without a battery shuts off** in an outage to protect utility workers. You need the battery and backup equipment for solar to keep working.
- What you use during the day comes out of the solar first, so a smaller daytime load leaves more to recharge the battery.
- Your monitoring app shows what the panels made on past days in the same season, which is a good guide. If output is lower than usual, see [why solar panels produce less than expected](/solar-power/solar-panels-low-output/).

## 7. Stretch your runtime during an outage

- **Turn off big loads** you don't need: electric water heater, dryer, oven, extra freezers you can empty.
- **Keep the fridge and freezer shut** as much as possible.
- **Run heavy loads in the sunniest hours** if you have solar.
- **Raise the backup reserve** when a storm is forecast so the battery starts full.
- **Watch the app.** Most systems show charge level and power use in real time.

## Want backup for the whole house?

It's possible, but it usually means several batteries and either load management or giving up AC and electric heat during long outages. Start with your daily kWh from your bill, multiply by the days you want, and divide by one battery's usable capacity. If the number is big, an essential loads panel plus a battery, or a standby generator for long outages, may be the better value. For short outages and smaller needs, a [portable power station](/solar-power/what-size-power-station-do-i-need/) can cover a fridge and a few essentials.

## When to call an electrician or installer

Talk to a licensed electrician or a certified battery installer to:

- Confirm the battery can **start and run** your AC, heat pump or well pump.
- Set up an **essential loads panel** or whole-home backup with load control.
- Add batteries or connect a battery to existing solar.
- Check why the battery isn't switching over in an outage, or shuts down under load.

Battery installation involves your main electrical panel, permits and utility rules, so it's not a DIY job.
