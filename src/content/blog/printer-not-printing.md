---
title: "Printer Not Printing? 7 Causes and How to Fix Them"
description: "Printer on but not printing? Clear a stuck queue, fix blank or faded pages, cartridge errors, paper jams, the wrong default printer and drivers, step by step."
pubDate: 2026-11-09
reviewedBy: Santaji Gadepatil
reviewedDate: 2026-11-09
category: gadgets
subcategory: printers-and-scanners
tags: [printer, not printing, print queue, print spooler, ink, toner, paper jam, drivers]
image: { src: /images/featured/printer-not-printing.webp, alt: "Illustration of a desktop printer pushing out a blank page beside an ink cartridge" }
difficulty: easy
time: 10 to 30 min
risk: low
tools: [Lint-free cloth, Flashlight, Plain paper for test pages]
symptoms:
  - { label: "Jobs stuck in the queue", to: "1-clear-jobs-stuck-in-the-print-queue" }
  - { label: "Nothing happens, wrong printer?", to: "2-make-sure-you-are-printing-to-the-right-printer" }
  - { label: "Pages come out blank", to: "3-pages-come-out-blank" }
  - { label: "Faded or streaky prints", to: "4-faded-streaky-or-missing-colors" }
  - { label: "Cartridge error after a new one", to: "5-ink-or-toner-cartridge-not-recognized" }
  - { label: "Paper jam or won't pick up paper", to: "6-paper-jams-and-paper-not-feeding" }
faq:
  - q: "Why is my printer not printing even though it's online?"
    a: "Usually a job is stuck at the front of the queue and is blocking everything behind it, or your computer is sending jobs to a different printer. Cancel all jobs in the queue, restart the printer and check which printer is selected in the Print dialog."
  - q: "Why does my printer print blank pages?"
    a: "On an inkjet, the usual causes are an empty cartridge, protective tape left on a new cartridge, or dried ink blocking the printhead. On a laser printer, check that the toner's shipping seal or tab was removed. Run the printer's own test or print quality page to tell a printer problem from a computer problem."
  - q: "Why won't my printer accept a new ink cartridge?"
    a: "Check that it's the right cartridge number for your model, that all packaging tape is removed and that it clicks fully into place. Dirty contacts, a refilled chip or a firmware update that blocks some non-original cartridges can also cause a cartridge error. Check your manual and the maker's support site."
  - q: "Is it safe to cancel all print jobs?"
    a: "Yes. Canceling jobs only removes them from the queue. Your documents stay on your computer, so you can print them again once the printer is working."
  - q: "Should I run printhead cleaning over and over?"
    a: "No. Each cleaning cycle uses ink. Run it once or twice, print a test page, and if it's still poor, let the printer sit for a few hours before trying again. Repeated cleanings in a row can empty the cartridges."
---

Your printer is on, the computer says it's connected, and yet nothing comes out. Or something does come out, but the page is blank, faded or jammed halfway through. Those are different problems, and the quickest fix depends on where the job is getting stuck.

The most common causes are **a stuck job blocking the print queue**, **printing to the wrong printer**, **empty or badly fitted ink or toner**, and **paper that won't feed**. If your computer actually says the printer is **offline**, start with our guide to [fixing a printer that shows offline](/gadgets/printer-offline/) instead.

<figure><img src="/images/posts/printer-not-printing-print-path.svg" alt="Diagram of a print job's path: app, print queue, driver, connection, printer, then ink and paper, with what commonly goes wrong at each stage" width="640" height="400" loading="lazy" /><figcaption>A job passes through six stages. It can stall at any of them.</figcaption></figure>

<div class="key"><strong>Quick answer</strong><p>Cancel every job in the print queue, restart the printer and the computer, and make sure the right printer is selected. If pages come out blank or faded, print the printer's own test page: if that's poor too, the problem is ink, toner or the printhead, not your computer.</p></div>

## How to tell what's causing it: quick test

<figure><img src="/images/posts/printer-not-printing-flow.svg" alt="Flowchart: print a test page from the printer itself; if it prints badly or not at all, check ink, toner, paper and jams; if it prints fine, check whether the job reaches the queue; if it is stuck in the queue clear it and restart the spooler, otherwise check the selected printer and driver" width="640" height="440" loading="lazy" /><figcaption>The printer's own test page splits the problem in two.</figcaption></figure>

1. **Read the printer's screen or lights.** A paper, ink, jam or open cover warning will stop all printing until it's cleared.
2. **Print a test or status page from the printer itself**, using its menu or button combination (check your manual).
    - **Blank, faded or no page?** The problem is in the printer: ink, toner, printhead or paper (causes 3 to 6).
    - **Prints fine?** The printer works. The problem is on the computer side (causes 1, 2 and 7).
3. **Open the print queue** on your computer. If your job is sitting there with "Error" or "Printing" and not moving, go to cause 1.
4. **Try printing from another device**, such as a phone on the same Wi-Fi. If that works, focus on the first computer.

## 1. Clear jobs stuck in the print queue

The print queue works in order. If the first job gets stuck, perhaps because of a huge file or a printer that was off when you hit Print, every job behind it waits too.

**Fix (Windows):**

1. Open Settings > **Bluetooth & devices > Printers & scanners** (Windows 10: Settings > Devices > Printers & scanners).
2. Select your printer and choose **Open print queue**.
3. Right-click the stuck job and choose **Cancel**, or use the printer menu to **Cancel all documents**.
4. If jobs won't clear, press **Windows + R**, type `services.msc`, find **Print Spooler**, right-click it and choose **Restart**.
5. Turn the printer off for 30 seconds, turn it back on and print one short test page.

**Fix (Mac):**

1. Open **System Settings > Printers & Scanners**, select your printer and open its print queue.
2. Delete the stuck jobs and make sure the queue isn't paused. If it is, click **Resume**.
3. As a last resort, Control-click in the printer list and choose **Reset printing system**. This removes every printer from the Mac, so you'll need to add yours again afterwards.

## 2. Make sure you are printing to the right printer

Many computers have several printer entries: old printers, "Copy 1" duplicates, PDF and fax printers, or a printer from work. If the job goes to the wrong one, your printer simply never hears about it.

**Fix:**

- In the **Print** dialog, check the printer name before you click Print. Apps often remember the last printer you used.
- In Windows, open Printers & scanners, turn off **Let Windows manage my default printer**, select your printer and choose **Set as default**.
- On a Mac, pick your printer under **Default printer** in Printers & Scanners.
- Remove duplicate or old entries you no longer use so they can't be picked by mistake.

## 3. Pages come out blank

A page that feeds through with nothing on it means the printer received the job but couldn't put ink or toner on the paper. If the printer's own test page is blank too, the computer is not to blame.

**Fix:**

- **New cartridge?** Remove it and check for any orange or clear protective tape over the nozzles or contacts. Pull it all off, then refit the cartridge until it clicks.
- **Laser printer with new toner?** Many toner cartridges have a shipping seal, clip or pull tab. Check the instruction sheet that came with it.
- **Check ink or toner levels** on the printer's screen or in its app. An empty black cartridge can mean blank text pages even when the color cartridges are full.
- **Check the document.** A blank page at the end of a document, or white text, will print exactly as blank as it looks.
- If it's an inkjet that hasn't been used for weeks, dried ink may be blocking the printhead. See cause 4.

## 4. Faded, streaky or missing colors

Faded prints and white lines usually mean low ink or toner, or partly blocked inkjet nozzles. Inkjets that sit unused for a long time are especially prone to this.

**Fix:**

1. Print a **print quality report** or **nozzle check** from the printer's menu or app. Gaps in a color block show which color is blocked.
2. Run the **printhead cleaning** tool once or twice, then print the report again. Don't run it many times in a row. Each cycle uses ink. If it's still poor, let the printer sit for a few hours and try once more.
3. Check print settings: **Draft**, **toner save** or **grayscale** modes deliberately print lighter or without color.
4. On a laser printer with faded or streaky pages, the toner may be low. Some makers suggest removing the cartridge and gently rocking it to spread the remaining toner. Check your manual first.
5. Use the right paper setting. Printing on glossy photo paper with a plain paper setting, or the other way round, can smear or fade.

Printing a page or two every week helps keep inkjet nozzles from drying out.

## 5. Ink or toner cartridge not recognized

A cartridge error right after you fit a new cartridge is common. The printer reads a small chip on each cartridge through metal contacts, and if it can't read it, or doesn't accept it, it stops printing.

**Fix:**

- Check the cartridge number matches the one your printer lists. A similar looking cartridge from a different series won't work.
- Remove the cartridge and refit it firmly until it clicks. Close the cover fully.
- Wipe the metal contacts on the cartridge gently with a dry lint-free cloth. Don't touch the contacts or nozzles with your fingers.
- Turn the printer off and on again so it rereads the cartridges.
- Refilled or non-original cartridges can be rejected, sometimes after a firmware update. If an original cartridge works and the other one doesn't, the cartridge is the problem. Check the cartridge seller's or printer maker's support site.

## 6. Paper jams and paper not feeding

A jam or a misfeed stops printing until it's fully cleared. Even a small torn scrap left inside can keep the jam warning on.

> **Safety first:** Turn the printer off and unplug it before reaching inside. On a laser printer, the area near the output (the fuser) can be very hot. Let it cool for several minutes before touching anything there.

**Fix:**

1. Open every door and tray your manual shows for clearing jams, including the rear access panel if there is one.
2. Pull the jammed sheet slowly with both hands, in the direction the paper normally travels. Yanking it can tear it and leave pieces behind.
3. Use a flashlight to look for torn scraps or foreign objects like paper clips.
4. For paper that won't pick up: take the stack out, fan it, square the edges and reload it. Don't overfill the tray, and slide the paper guides snug against the stack without bending it.
5. Use plain, dry paper of a weight your printer supports. Damp, curled or very thin paper misfeeds more often.
6. If the rollers look shiny or dusty, wipe them with a lint-free cloth lightly dampened with water (check your manual).

## 7. Reinstall or update the printer driver

The driver turns your document into instructions the printer understands. A damaged or outdated driver, often after a major Windows or macOS update, can make jobs vanish, print garbled symbols or fail with a generic error.

**Fix:**

- Remove the printer from Printers & scanners (Windows) or Printers & Scanners (Mac), restart the computer, then add it again.
- If that doesn't help, download the current driver or software for your exact model from the printer maker's own support site. Avoid third-party "driver updater" sites.
- If the maker's full software package causes trouble, the basic driver that Windows or macOS installs on its own is often enough for everyday printing.

For more on safe driver updates, see our guide to [updating drivers in Windows 11](/pc-laptops/update-drivers-windows-11/).

## Printer does nothing at all?

- **No lights or screen?** Check the power cord at both ends and try a different wall outlet. Plug it straight into the wall rather than a power strip as a test.
- **Lights on but no response?** Unplug the printer for a full minute, then plug it back in. This clears more than the power button alone.
- **Stuck on startup or a hardware error message?** Look up the exact message on the printer maker's support site rather than guessing what it means.
- **Over USB?** Try a different cable and plug it straight into the computer, not into a hub or monitor.
- **Only one app won't print?** Try printing from a different app. If that works, save the file as a PDF and print the PDF.

## When to call a pro

Contact the printer maker's support, or a local repair shop, if:

- The printer shows a hardware error that a full power reset doesn't clear.
- Prints stay streaky or blank after new original cartridges and a few cleaning cycles.
- It grinds, clicks loudly or jams on every sheet even with no paper scraps inside.
- You see smoke, smell burning or notice the case getting unusually hot. Unplug it and stop using it.

For an older budget inkjet, compare any repair quote with the price of a new printer. Repair is often more than the printer is worth, though a new printhead or cartridge set may be all it needs.
