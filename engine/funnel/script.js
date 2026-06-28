const form = document.querySelector("#leadForm");
const googleFormUrl = "";
const stripeDeepAuditUrl = "";
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
      website: data.get("website")?.trim() || "",
      business_type: data.get("business_type") || "",
      issue: data.get("issue")?.trim() || ""
    };

    saveLead(lead);
    sessionStorage.setItem("latest_divini_audit_lead", JSON.stringify(lead));
    window.location.href = "./thank-you.html";
  });
}

if (paidAuditLink) {
  paidAuditLink.addEventListener("click", (event) => {
    if (!stripeDeepAuditUrl) {
      event.preventDefault();
      alert("The $19 Deep Revenue Growth Audit checkout link is being connected. Please email divinigroup@gmail.com for access.");
      return;
    }

    paidAuditLink.href = stripeDeepAuditUrl;
  });
}
