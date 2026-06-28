var DIVINI_ENGINE_SHEET_ID = "1psDHqKY_JtNx_jOXapMXGuDpxga9clnpVFWMjxv1O20";
var DIVINI_ADMIN_EMAIL = "divinigroup@gmail.com";
var STRIPE_DEEP_AUDIT_URL = "PASTE_STRIPE_PAYMENT_LINK_HERE";

function createDiviniGrowthEngine() {
  var sheet = SpreadsheetApp.openById(DIVINI_ENGINE_SHEET_ID);

  var freeForm = FormApp.create("Missed Revenue Audit");
  freeForm.setDescription(
    "Free audit for medspas, aesthetic clinics, wellness clinics, and high-ticket salons. Share your public business links and follow-up gaps. Do not submit patient names, medical details, treatment information, appointment records, screenshots with patient data, or protected health information."
  );
  freeForm.setConfirmationMessage(
    "Thanks. Your Missed Revenue Audit request was received. Divini Growth will review the business flow and send 2-3 practical fixes from divinigroup@gmail.com. If you want the deeper breakdown, use the Deep Revenue Growth Audit link on divinigrowth.com."
  );
  freeForm.setCollectEmail(false);
  freeForm.setAllowResponseEdits(false);
  freeForm.setLimitOneResponsePerUser(false);
  freeForm.setDestination(FormApp.DestinationType.SPREADSHEET, DIVINI_ENGINE_SHEET_ID);

  addFreeAuditQuestions_(freeForm);

  var paidForm = FormApp.create("Deep Revenue Growth Audit Intake");
  paidForm.setDescription(
    "Paid intake for the $19 Deep Revenue Growth Audit. This reviews business operations only: lead response, booking flow, reactivation, reviews, and follow-up. Do not submit patient names, medical details, treatment information, appointment records, screenshots with patient data, or protected health information."
  );
  paidForm.setConfirmationMessage(
    "Thanks. Your Deep Revenue Growth Audit intake was received. Divini Growth will review the business flow and send the audit from divinigroup@gmail.com."
  );
  paidForm.setCollectEmail(false);
  paidForm.setAllowResponseEdits(false);
  paidForm.setLimitOneResponsePerUser(false);
  paidForm.setDestination(FormApp.DestinationType.SPREADSHEET, DIVINI_ENGINE_SHEET_ID);

  addPaidAuditQuestions_(paidForm);

  createTriggers_(freeForm, paidForm);
  writeSettings_(sheet, freeForm, paidForm);

  Logger.log("Free Missed Revenue Audit URL: " + freeForm.getPublishedUrl());
  Logger.log("Paid Deep Revenue Growth Audit intake URL: " + paidForm.getPublishedUrl());
  Logger.log("Free form edit URL: " + freeForm.getEditUrl());
  Logger.log("Paid form edit URL: " + paidForm.getEditUrl());
}

function addFreeAuditQuestions_(form) {
  var emailValidation = FormApp.createTextValidation().requireTextIsEmail().build();

  form.addTextItem().setTitle("Name").setRequired(true);
  form.addTextItem().setTitle("Email").setValidation(emailValidation).setRequired(true);
  form.addTextItem().setTitle("Phone").setHelpText("Optional. Only include this if you are okay with Divini Growth contacting you by text or call.").setRequired(false);
  form.addTextItem().setTitle("Business name").setRequired(true);
  form.addListItem()
    .setTitle("Business type")
    .setChoiceValues([
      "Medspa",
      "Aesthetic clinic",
      "Wellness clinic",
      "Functional or concierge clinic",
      "High-ticket salon",
      "Tanning salon",
      "Other consult-heavy business"
    ])
    .setRequired(true);
  form.addTextItem().setTitle("Website").setRequired(true);
  form.addTextItem().setTitle("Instagram or primary social link").setRequired(false);
  form.addCheckboxItem()
    .setTitle("Where do most new inquiries come from?")
    .setChoiceValues([
      "Website form",
      "Phone calls",
      "Texts",
      "Instagram DMs",
      "Facebook messages",
      "Booking app",
      "Email",
      "Walk-ins"
    ])
    .setRequired(false);
  form.addParagraphTextItem()
    .setTitle("What feels like the biggest missed revenue leak right now?")
    .setHelpText("Example: leads do not book, DMs get missed, no-shows are not followed up with, consults do not convert, past clients are not reactivated.")
    .setRequired(true);
  form.addTextItem().setTitle("Current booking tool, CRM, or scheduler").setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle("Can Divini Growth email you your audit notes?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(true);
  form.addMultipleChoiceItem()
    .setTitle("Can Divini Growth text you about this audit if you provided a phone number?")
    .setChoiceValues(["Yes", "No"])
    .setRequired(false);
  form.addCheckboxItem()
    .setTitle("Required privacy confirmation")
    .setChoiceValues([
      "I confirm I did not include patient names, medical details, treatment information, appointment records, screenshots with patient data, or protected health information."
    ])
    .setRequired(true);
}

function addPaidAuditQuestions_(form) {
  var emailValidation = FormApp.createTextValidation().requireTextIsEmail().build();

  form.addTextItem().setTitle("Name").setRequired(true);
  form.addTextItem().setTitle("Email used at checkout").setValidation(emailValidation).setRequired(true);
  form.addTextItem().setTitle("Phone").setRequired(false);
  form.addTextItem().setTitle("Business name").setRequired(true);
  form.addListItem()
    .setTitle("Business type")
    .setChoiceValues([
      "Medspa",
      "Aesthetic clinic",
      "Wellness clinic",
      "Functional or concierge clinic",
      "High-ticket salon",
      "Tanning salon",
      "Other consult-heavy business"
    ])
    .setRequired(true);
  form.addTextItem().setTitle("Website").setRequired(true);
  form.addTextItem().setTitle("Instagram or primary social link").setRequired(false);
  form.addTextItem().setTitle("Booking link").setRequired(false);
  form.addParagraphTextItem().setTitle("Describe the current path from inquiry to booked appointment").setRequired(true);
  form.addParagraphTextItem().setTitle("What usually happens when someone does not book after a consult or inquiry?").setRequired(true);
  form.addCheckboxItem()
    .setTitle("Which areas should the audit review?")
    .setChoiceValues([
      "Website form",
      "Booking link",
      "Missed calls",
      "Text follow-up",
      "Instagram DMs",
      "No-show follow-up",
      "Consults that do not book",
      "Past client reactivation",
      "Reviews",
      "Memberships or packages"
    ])
    .setRequired(true);
  form.addParagraphTextItem().setTitle("What services, packages, or memberships matter most for revenue?").setRequired(false);
  form.addParagraphTextItem().setTitle("What would make this audit valuable for you?").setRequired(false);
  form.addMultipleChoiceItem()
    .setTitle("If the audit finds a clear fix, are you open to setup help?")
    .setChoiceValues([
      "Yes, send setup options",
      "Maybe, send the recommendation first",
      "No, I only want the audit"
    ])
    .setRequired(true);
  form.addCheckboxItem()
    .setTitle("Required privacy confirmation")
    .setChoiceValues([
      "I confirm I did not include patient names, medical details, treatment information, appointment records, screenshots with patient data, or protected health information."
    ])
    .setRequired(true);
}

function createTriggers_(freeForm, paidForm) {
  ScriptApp.newTrigger("handleFreeAuditSubmit").forForm(freeForm).onFormSubmit().create();
  ScriptApp.newTrigger("handlePaidAuditSubmit").forForm(paidForm).onFormSubmit().create();
}

function handleFreeAuditSubmit(event) {
  var named = event.namedValues || {};
  var business = first_(named["Business name"]);
  var email = first_(named["Email"]);

  MailApp.sendEmail({
    to: DIVINI_ADMIN_EMAIL,
    subject: "New Missed Revenue Audit: " + business,
    body:
      "A new free Missed Revenue Audit was submitted.\n\n" +
      "Business: " + business + "\n" +
      "Email: " + email + "\n\n" +
      "Review the Funnel Engine OS Sheet, then send 2-3 practical fixes and invite them to the $19 Deep Revenue Growth Audit.\n\n" +
      "Sheet: https://docs.google.com/spreadsheets/d/" + DIVINI_ENGINE_SHEET_ID + "/edit"
  });
}

function handlePaidAuditSubmit(event) {
  var named = event.namedValues || {};
  var business = first_(named["Business name"]);
  var email = first_(named["Email used at checkout"]);

  MailApp.sendEmail({
    to: DIVINI_ADMIN_EMAIL,
    subject: "New $19 Deep Revenue Growth Audit: " + business,
    body:
      "A paid Deep Revenue Growth Audit intake was submitted.\n\n" +
      "Business: " + business + "\n" +
      "Email: " + email + "\n\n" +
      "Add this to Paid Audit Buyers and Fulfillment Board, then deliver the audit and offer setup options.\n\n" +
      "Sheet: https://docs.google.com/spreadsheets/d/" + DIVINI_ENGINE_SHEET_ID + "/edit"
  });
}

function writeSettings_(sheet, freeForm, paidForm) {
  var settings = sheet.getSheetByName("Settings") || sheet.insertSheet("Settings");
  var values = [
    ["Free Form URL", freeForm.getPublishedUrl(), "Paste into googleFormUrl in funnel/script.js"],
    ["Paid Intake Form URL", paidForm.getPublishedUrl(), "Use as Stripe success URL"],
    ["Stripe Deep Audit URL", STRIPE_DEEP_AUDIT_URL, "Paste live Stripe Payment Link here and in funnel/script.js"]
  ];
  settings.getRange(settings.getLastRow() + 1, 1, values.length, values[0].length).setValues(values);
}

function first_(value) {
  if (!value) return "";
  if (Object.prototype.toString.call(value) === "[object Array]") return value[0] || "";
  return value;
}

