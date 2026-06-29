# Divini Growth by Divini Group

Divini Growth is the Divini Group funnel and operating system for helping medspas, aesthetic clinics, wellness clinics, salons, and tanning salons recover missed revenue from leads, booking gaps, follow-up gaps, and client reactivation.

Public domain target:

https://divinigrowth.com

Support email:

divinigroup@gmail.com

## What Is In This Repo

- `index.html`: public landing page for the free Missed Revenue Audit.
- `thank-you.html`: post opt-in confirmation page.
- `styles.css`, `script.js`, `assets/`: website files.
- `engine/`: full internal funnel, outreach, fulfillment, Google Forms, PayPal, and operating docs.
- `CNAME`: GitHub Pages custom domain setting for `divinigrowth.com`.

## Funnel Flow

1. Outreach to medspas, clinics, wellness practices, salons, and tanning salons.
2. Prospect clicks into the free Missed Revenue Audit.
3. Prospect receives a useful mini audit result.
4. Prospect is offered the $19 Deep Revenue Growth Audit.
5. Paid intake routes into the Divini Growth backend sheet.
6. Divini Growth reviews the submission and offers the correct monthly service.
7. Monthly service is billed through PayPal and fulfilled through the backend operating tracker.

## Google Workspace Setup

Use the green Alyssa Google profile with:

divinigroup@gmail.com

Run this Apps Script file from that account:

`engine/funnel/create_divini_growth_engine.gs`

It creates the Google Form structure and connects the form flow to the Divini Growth backend process. After it runs, paste the live free audit form URL into `script.js` as `googleFormUrl`.

If any Google Sheet or Form was accidentally created under another Google account, recreate it from the Apps Script under `divinigroup@gmail.com`. That is cleaner than transferring ownership because forms, sheets, triggers, and permissions can break when moved between Google accounts.

## PayPal Setup

Create a PayPal payment link for:

- Product: Deep Revenue Growth Audit
- Price: $19
- Success URL: the paid intake Google Form URL
- Receipt email: customer email

Then paste the PayPal payment link into `script.js` as `deepAuditPaymentUrl`.

## GoDaddy DNS For GitHub Pages

In GoDaddy DNS for `divinigrowth.com`, use GitHub Pages records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | adagentpc-del.github.io |

After DNS is saved, enable GitHub Pages for this repo from:

Settings -> Pages -> Deploy from branch -> `main` -> `/root`

Set custom domain to:

divinigrowth.com

Then enable Enforce HTTPS once GitHub finishes provisioning the certificate.

## Compliance Boundary

Do not collect patient medical information, diagnoses, medical history, treatment details, or appointment-specific health information. The audit should only collect business operations and marketing information.
