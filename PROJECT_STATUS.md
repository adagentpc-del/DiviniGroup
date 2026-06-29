# Divini Growth Project Status

Updated: 2026-06-28

## Brand Boundary

This project is only for **Divini Growth by Divini Group**.

Do not mention or reference any separate company in Divini Growth copy, forms, emails, websites, outreach, funnel materials, backend docs, or operating materials.

## Live Assets

- Website: https://divinigrowth.com
- GitHub repo: https://github.com/adagentpc-del/DiviniGroup
- Local repo: `/Users/adagent/DiviniGroup`
- Domain: `divinigrowth.com`
- Payment: PayPal
- PayPal $19 Deep Revenue Growth Audit link: https://www.paypal.com/ncp/payment/UPW2A82RZCY6A

## Google Assets

Created under `divinigroup@gmail.com`.

### Backend Sheet
https://docs.google.com/spreadsheets/d/1qAy8gfVpdHTrb71vcswnCYZ6dj-k3PmAOVJYl0CGUiA/edit

### Free Missed Revenue Audit Form
https://docs.google.com/forms/d/e/1FAIpQLSf8bl6uEPJnBS4zS-hV9ll24ua3uJFKPV2BPzNVswDcEk4VlQ/viewform

### Paid Deep Revenue Growth Audit Intake Form
https://docs.google.com/forms/d/e/1FAIpQLSeP-jDcwx3-KjyByEYuo00zrszhjFymiWyU3WToeIsz2eSM0A/viewform

### Free Form Edit
https://docs.google.com/forms/d/1jWJMOGm0gQKLSm6Jx5jgEnH0as7dtP-2kXurGHx7tcs/edit

### Paid Form Edit
https://docs.google.com/forms/d/1u2rmue_4BeqDMjA2HikHEv0Tt8K9zdDP8HUdM4J9p6g/edit

## Current Funnel

1. Prospect lands on Divini Growth website.
2. Prospect requests a free Missed Revenue Audit.
3. Website redirects to the Divini-owned Google Form.
4. Backend Sheet captures submissions.
5. Prospect can buy the $19 Deep Revenue Growth Audit through PayPal.
6. After payment, buyer should complete the paid intake form.
7. Divini Growth reviews the lead flow and sells setup or monthly management.

## Important Safety Rule

Do not collect patient names, medical details, treatment details, appointment records, screenshots with patient data, or protected health information.

All forms and website copy should request business operations data only: public website links, social links, booking flow, lead response gaps, follow-up process, reactivation process, review flow, services, packages, and general admin bottlenecks.

## Next Build Direction

Move from simple redirect funnel to an on-site intelligent Revenue Leak Score experience:

1. On-site interactive audit form.
2. Instant score and bottleneck diagnosis.
3. Revenue leak estimate using ethical assumptions.
4. Email capture before showing full results.
5. PayPal $19 Deep Revenue Growth Audit CTA.
6. After payment, deeper intake and fulfillment board.
7. Later phase: secure client dashboard with login and saved results.

## Recommended Technical Path

### Phase 1: Static On-Site Score Engine

Can run immediately on GitHub Pages. No sensitive data storage. Stores temporary results in browser session storage only.

- Interactive quiz on `audit.html`.
- Score algorithm in JavaScript.
- Results page on `results.html`.
- Email capture still posts to Google Form or a Google Apps Script endpoint.
- PayPal CTA appears on results page.

### Phase 2: Backend Capture

Use Google Apps Script as a lightweight backend under `divinigroup@gmail.com`.

- Website posts audit results to Apps Script Web App.
- Apps Script writes to Google Sheet.
- Apps Script emails Divini Group and optionally emails prospect results.

### Phase 3: Client Login/Profile

Requires a real backend/auth layer. Options:

- Firebase Auth + Firestore
- Supabase Auth + Postgres
- Memberstack/Outseta + Google Sheets/Zapier/Make
- WordPress + membership plugin if moving away from GitHub Pages

Recommendation: use Firebase or Supabase when ready. Do not fake secure profiles on static GitHub Pages.

## Open Decisions

- Whether to keep Google Forms or replace them with an on-site form plus Apps Script backend.
- Whether the $19 PayPal product can redirect to the paid intake form after payment.
- Whether to add Firebase/Supabase now or after the first leads come in.
- Whether to build email nurture in Gmail, Mailchimp, ConvertKit, Brevo, or GoHighLevel.
