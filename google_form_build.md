# Divini Growth Google Form Build

Use this to create the live Google Forms for `divinigrowth.com`.

## Account

- Owner / notification email: `divinigroup@gmail.com`
- Brand: Divini Growth by Divini Group
- Domain: `divinigrowth.com`
- Funnel Engine OS Sheet: https://docs.google.com/spreadsheets/d/1psDHqKY_JtNx_jOXapMXGuDpxga9clnpVFWMjxv1O20/edit?usp=drivesdk

## Recommended Build Method

Use `create_divini_growth_engine.gs`.

Run `createDiviniGrowthEngine()` while signed into `divinigroup@gmail.com`.

The script creates:

- Free Missed Revenue Audit form
- Paid Deep Revenue Growth Audit intake form
- Admin email notifications
- Settings rows with both form URLs

## Free Form

Title: `Missed Revenue Audit`

Description:

`Free audit for medspas, aesthetic clinics, wellness clinics, and high-ticket salons. Share your public business links and follow-up gaps. Do not submit patient names, medical details, treatment information, appointment records, screenshots with patient data, or protected health information.`

Questions:

1. Name
2. Email
3. Phone
4. Business name
5. Business type
6. Website
7. Instagram or primary social link
8. Where do most new inquiries come from?
9. What feels like the biggest missed revenue leak right now?
10. Current booking tool, CRM, or scheduler
11. Can Divini Growth email you your audit notes?
12. Can Divini Growth text you about this audit if you provided a phone number?
13. Required privacy confirmation

Confirmation:

`Thanks. Your Missed Revenue Audit request was received. Divini Growth will review the business flow and send 2-3 practical fixes from divinigroup@gmail.com. If you want the deeper breakdown, use the Deep Revenue Growth Audit link on divinigrowth.com.`

## Paid Form

Title: `Deep Revenue Growth Audit Intake`

This form should be used as the Stripe success URL after the $19 payment.

Questions:

1. Name
2. Email used at checkout
3. Phone
4. Business name
5. Business type
6. Website
7. Instagram or primary social link
8. Booking link
9. Describe the current path from inquiry to booked appointment
10. What usually happens when someone does not book after a consult or inquiry?
11. Which areas should the audit review?
12. What services, packages, or memberships matter most for revenue?
13. What would make this audit valuable for you?
14. If the audit finds a clear fix, are you open to setup help?
15. Required privacy confirmation

## Stripe Connection

1. Create a Stripe Payment Link for `$19`.
2. Product name: `Deep Revenue Growth Audit`.
3. Set the success URL to the paid intake Google Form URL.
4. Paste the Stripe Payment Link into `stripeDeepAuditUrl` in `script.js`.
5. Keep Stripe receipt emails on.

## Site Connection

After the free form is created:

1. Copy the live free Google Form URL.
2. Paste it into `googleFormUrl` in `script.js`.
3. Keep the local fallback form for testing only.

