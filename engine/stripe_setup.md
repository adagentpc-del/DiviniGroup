# PayPal Setup

## Product 1

Name: Deep Revenue Growth Audit

Price: $19 one-time

Description:

Get a deeper review of your lead response, booking path, reactivation opportunities, and review flow. You will receive a practical missed revenue action plan for your business.

Success URL:

Use the paid audit Google Form URL after it is created by `funnel/create_divini_growth_engine.gs`.

## Product 2

Name: Revenue Recovery Setup

Starting price: $750 one-time

Description:

Setup of the first missed revenue recovery system: lead tracker, follow-up templates, staff SOP, and simple workflow improvements for new inquiries, consults, rebooking, or reviews.

## Product 3

Name: Monthly Growth Ops Management

Starting price: $297 per month

Higher tiers:

- $497 per month for active follow-up management and reporting
- $750 per month for multi-channel follow-up, monthly campaign support, and optimization

## Placement

After creating the $19 payment link in PayPal:

1. Copy the payment link.
2. Open `funnel/script.js`.
3. Paste it into:

```js
const paypalDeepAuditUrl = "PASTE_STRIPE_LINK_HERE";
```

4. Set the PayPal success page to the paid audit intake Google Form.
5. Keep PayPal receipts on.
6. Make sure the business name shown in PayPal is Divini Group or the correct Divini Growth billing descriptor.

## Notes

- Do not collect card information on the Divini Growth website.
- Let PayPal host checkout.
- Do not promise specific revenue outcomes.
- The audit is an operational review, not legal, medical, or clinical advice.

