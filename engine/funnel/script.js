const form = document.querySelector("#leadForm");
const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf8bl6uEPJnBS4zS-hV9ll24ua3uJFKPV2BPzNVswDcEk4VlQ/viewform";
const deepAuditPaymentUrl = "https://www.paypal.com/ncp/payment/UPW2A82RZCY6A";
const paidAuditLink = document.querySelector("#paidAuditLink");

function getExistingLeads() {
  try {
    return JSON.parse(localStorage.getItem("divini_audit_leads") || "[]");
  } catch {
    return [];
  }
}

function saveLead(lead) {
  const leads = getExistingLeads();
  leads.push(lead);
  localStorage.setItem("divini_audit_leads", JSON.stringify(leads));
}

function normalizeUrl(value) {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (googleFormUrl) {
      window.location.href = googleFormUrl;
      return;
    }

    const data = new FormData(form);
    const lead = {
      created_at: new Date().toISOString(),
      name: data.get("name")?.trim() || "",
      email: data.get("email")?.trim() || "",
      business: data.get("business")?.trim() || "",
      website: normalizeUrl(data.get("website")),
      business_type: data.get("business_type") || "",
      issue: data.get("issue")?.trim() || ""
    };

    saveLead(lead);
    sessionStorage.setItem("latest_divini_audit_lead", JSON.stringify(lead));
    window.location.href = "./thank-you.html";
  });
}

if (paidAuditLink) {
  if (deepAuditPaymentUrl) {
    paidAuditLink.href = deepAuditPaymentUrl;
  }

  paidAuditLink.addEventListener("click", (event) => {
    if (!deepAuditPaymentUrl) {
      event.preventDefault();
      alert("The $19 Deep Revenue Growth Audit checkout link is being connected. Please email divinigroup@gmail.com for access.");
    }
  });
}
