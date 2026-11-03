---
title: "Mesh Wi-Fi Placement: Where to Put Your Nodes"
description: "Where to put mesh Wi-Fi nodes: main node by the modem, satellites halfway to dead zones, up high and in the open, plus wired backhaul and how to test signal."
pubDate: 2026-11-03
category: networking
subcategory: mesh-wi-fi
tags: [mesh wi-fi, wi-fi, router, dead zones, wired backhaul, signal strength]
image: { src: /images/featured/mesh-wifi-placement.webp, alt: "Illustration of a two-story house with three mesh Wi-Fi nodes and overlapping signal circles" }
fixcheck: false
difficulty: easy
time: 20 to 60 min
risk: low
tools: [Your mesh system's app, A phone or laptop for testing, Ethernet cables (optional)]
symptoms:
  - { label: "Where does the main node go?", to: "1-put-the-main-node-by-the-modem" }
  - { label: "Where do satellites go?", to: "2-place-satellites-halfway-to-the-dead-zone" }
  - { label: "How many nodes do I need?", to: "6-choose-how-many-nodes-you-need" }
  - { label: "Should I wire the nodes?", to: "5-use-wired-backhaul-if-you-can" }
  - { label: "Still have dead spots", to: "still-getting-dead-spots" }
  - { label: "How do I test the signal?", to: "7-test-and-adjust" }
faq:
  - q: "How far apart should mesh nodes be?"
    a: "Close enough that each satellite still gets a strong signal from the node before it. A common rule of thumb is no more than about two rooms apart, with fewer walls between them. Most mesh apps have a placement test that tells you if a node is too far away, so follow that over any fixed distance."
  - q: "Should mesh nodes be in line of sight of each other?"
    a: "It helps but isn't required. Fewer walls, floors and large objects between nodes means a stronger link. Doorways, hallways and open stairwells often give the clearest path."
  - q: "Can I put a mesh node in a cabinet or behind a TV?"
    a: "Try not to. Cabinets, TVs, metal shelves and appliances absorb or reflect Wi-Fi signals. Put nodes in the open, ideally on a shelf or table at about waist height or higher."
  - q: "Is wired backhaul worth it?"
    a: "If your home already has Ethernet in the walls, yes. Connecting nodes with Ethernet frees up all the wireless capacity for your devices and usually gives faster, steadier speeds, especially for nodes that are far apart or on different floors. Check that your mesh system supports it."
  - q: "Does the main mesh node have to be next to the modem?"
    a: "It has to connect to the modem with an Ethernet cable, but the cable can be long. If your modem is at one end of the house, a longer cable that moves the main node toward the middle usually gives better coverage."
---

A mesh Wi-Fi system uses a **main node** (connected to your modem) and one or more **satellite nodes** that pass the signal along. Each satellite can only give your devices a signal as good as the link it gets from the node before it. That's why **placement matters more than how many nodes you buy**.

The basics: put the **main node near the modem and as central as you can**, place each **satellite about halfway** between the last node and the dead zone, keep nodes **in the open and off the floor**, and use **wired backhaul** if your home has Ethernet. Then test, and move nodes a few feet if needed.

<figure><img src="/images/posts/mesh-wifi-placement-floorplan.svg" alt="Floor plan showing the modem and main node near the middle of the home, a satellite halfway between the main node and a far bedroom, and a second satellite halfway to the garage, with overlapping coverage circles" width="640" height="420" loading="lazy" /><figcaption>Each satellite sits halfway between the node before it and the weak spot.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Connect the main node to your modem in a central, open spot. Place each satellite halfway between the main node and the area with weak Wi-Fi, not in the dead zone itself. Keep nodes up high, away from TVs, metal and fish tanks, and use the app's placement test to confirm each one gets a strong link.</p></div>

## Plan before you place

1. **Find the weak spots.** Walk around with your phone and note where Wi-Fi is slow or drops.
2. **Find your Ethernet jacks.** Wired backhaul changes the plan (step 5).
3. **Sketch a rough floor plan.** Mark the modem, the weak spots and possible outlets for each node.
4. **Set up the main node first,** then add satellites one at a time.

## 1. Put the main node by the modem

The main node must connect to your modem with an **Ethernet cable**. Ideally it sits in the **middle** of the home so its signal reaches out in all directions.

**How:**

- If your modem is already central, put the main node next to it, on a shelf or table, not on the floor.
- If the modem is at one end of the house or in a basement, use a **longer Ethernet cable** to move the main node toward the middle. Flat or thin cables can run under rugs or along baseboards.
- Don't hide it in a closet, media cabinet or behind the modem's equipment pile.

## 2. Place satellites halfway to the dead zone

The most common mistake is putting a satellite **in** the dead zone. If the satellite can barely hear the main node, it can only pass on that weak signal.

**How:**

- Place each satellite about **halfway** between the main node and the area that needs coverage.
- A common rule of thumb is no more than about **two rooms** from the node before it. Fewer walls is better.
- For a second floor, put the satellite roughly **above or near** the main node's position, or near an open stairwell, rather than at the far corner.
- For a long house, a **chain** works: main node, then a satellite in the middle, then one near the far end.

<figure><img src="/images/posts/mesh-wifi-placement-dos-donts.svg" alt="Comparison of good and poor mesh node spots: good spots are in the open, at waist height or higher, halfway between nodes; poor spots are inside cabinets, behind TVs, next to metal, near fish tanks and microwaves, on the floor or in the dead zone itself" width="640" height="400" loading="lazy" /><figcaption>A few feet can make a real difference to signal.</figcaption></figure>

## 3. Keep nodes in the open and up high

Wi-Fi signals spread out from the node, and anything dense in the way weakens them. Nodes on the floor lose signal into the floor and furniture.

**How:**

- Put nodes on a **shelf, table or desk**, at about waist height or higher.
- Keep them **out of cabinets and drawers** and at least a short distance from walls.
- If the manual says which way a node should stand or face, follow it. Many mesh nodes are designed to stand upright.
- Use an extension cord or a nearby outlet so the node can sit in the right spot, rather than wherever the outlet is.

## 4. Avoid things that block or disrupt Wi-Fi

Some materials and devices weaken Wi-Fi more than others.

**Keep nodes away from:**

- **Metal:** filing cabinets, metal shelving, appliances, mirrors with metal backing and metal doors.
- **Water:** fish tanks, water heaters and large plants. Water absorbs Wi-Fi signals.
- **TVs and big screens:** don't put a node directly behind one.
- **Dense walls:** brick, stone, concrete and plaster with metal lath.
- **Interference:** microwave ovens and some older cordless phones and baby monitors use the same 2.4 GHz band.

## 5. Use wired backhaul if you can

**Backhaul** is the link between nodes. By default it's wireless, which uses some of the Wi-Fi capacity. **Wired backhaul** connects nodes with Ethernet, so all the wireless capacity goes to your devices.

**How:**

- If you have Ethernet jacks in the walls, connect each satellite to one. The other end must reach the same switch or router as the main node.
- With wired backhaul, satellites don't need to be within range of each other, so you can put them right where you need coverage.
- Some systems also support **MoCA** (Ethernet over coax) or **powerline** adapters for backhaul. Check your system's support pages.
- Check the app to confirm the node shows as **wired** or **Ethernet** backhaul.

If a wired node won't connect, see [how to fix Ethernet not working](/networking/ethernet-not-working/).

## 6. Choose how many nodes you need

There's no single right number. It depends on your home's size, layout, floors and wall materials.

**How:**

- Start with the main node and **one satellite**, then add more only if you still have weak spots.
- A home with **several floors**, thick walls or a long, narrow layout usually needs more nodes than an open plan of the same size.
- **More isn't always better.** Too many wireless nodes can slow things down, because traffic has to hop through each one. Each extra hop shares airtime.
- Check the coverage claims on the box as a rough guide only. Real coverage depends on your walls and layout.

## 7. Test and adjust

**How:**

1. **Use the app's placement test.** Most mesh apps rate each node's link as good, fair or poor, or similar. Move any node rated poor closer to the node before it.
2. **Run a speed test** next to the main node, then in each room you care about. Speeds in far rooms will be lower, but they shouldn't collapse.
3. **Check signal strength** if your phone or laptop shows it. Wi-Fi signal is measured in **dBm**, a negative number where closer to zero is stronger. Around -67 dBm or stronger is a common target for smooth video calls and streaming. (For how dBm works, see this explainer on [decibels, dB and dBm](https://www.instrumentationblog.in/decibel-in-electronics-db-dbm/).)
4. **Move nodes a few feet** and test again. Small moves around furniture can help.
5. **Restart the system** after big changes so devices pick the best node.

## Still getting dead spots?

- **Move the nearest satellite closer** to the node before it, even if that leaves it a little farther from the dead spot.
- **Add a node** between the weakest satellite and the dead spot.
- **Wire one satellite** with Ethernet, MoCA or powerline if you can.
- **Check the device,** not just the Wi-Fi. Older phones, laptops and smart TVs may have weaker Wi-Fi radios.
- **Update the mesh system's firmware** in the app.
- If your streaming still stutters near a node, see [why streaming keeps buffering](/tv-audio/streaming-keeps-buffering/).

## When to call a pro

Consider a network installer or a low-voltage electrician if:

- You want **Ethernet run** through walls, ceilings or between floors for wired backhaul.
- You have a large home, an outbuilding, a detached garage or thick masonry walls that mesh nodes can't get through.
- Your ISP's internet is slow even when you're connected by cable next to the modem. That's a provider issue, not placement.

Never run Ethernet cable through the same holes or boxes as electrical wiring, and turn off power before drilling near outlets or switches.
