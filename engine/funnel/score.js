const scoreForm = document.querySelector("#revenueLeakForm");

function numberValue(data, key) {
  return Number(data.get(key) || 0);
}

function labelFor(score) {
  if (score >= 78) return "High leak risk";
  if (score >= 52) return "Moderate leak risk";
  return "Low to moderate leak risk";
}

function calculateResult(formData) {
  const avgValue = numberValue(formData, "avg_value");
  const monthlyLeads = numberValue(formData, "monthly_leads");
  const leakInputs = [
    "response_time",
    "missed_leads",
    "follow_up",
    "no_show",
    "reactivation"
  ];

  const rawLeakScore = leakInputs.reduce((total, key) => total + numberValue(formData, key), 0);
  const score = Math.min(100, Math.max(5, Math.round(rawLeakScore * 0.83)));
  const leakageRate = Math.min(0.32, 0.06 + score / 420);
  const conservativeCloseRate = 0.18;
  const estimatedMissedRevenue = Math.round(monthlyLeads * leakageRate * conservativeCloseRate * avgValue);

  const bottlenecks = [];
  if (numberValue(formData, "response_time") >= 16) bottlenecks.push("Response speed is likely costing consult opportunities. Fast replies are often the easiest revenue recovery point.");
  if (numberValue(formData, "missed_leads") >= 20) bottlenecks.push("Leads may be entering too many places without one clean owner, tracker, or alert process.");
  if (numberValue(formData, "follow_up") >= 18) bottlenecks.push("Follow-up after no reply is inconsistent, which usually leaves warm leads unconverted.");
  if (numberValue(formData, "no_show") >= 18) bottlenecks.push("No-show or no-book consults may not have a recovery sequence.");
  if (numberValue(formData, "reactivation") >= 18) bottlenecks.push("Past clients are probably not being reactivated consistently, which can be faster than finding brand-new leads.");
  if (!bottlenecks.length) bottlenecks.push("Your basics look stronger than most. The next opportunity is tightening measurement and finding the highest-value conversion point.");

  const fixes = [];
  fixes.push("Create one lead command center for forms, calls, DMs, booking requests, and email inquiries.");
  if (numberValue(formData, "response_time") >= 8) fixes.push("Install a 5-minute first-response standard with templates for common inquiries.");
  if (numberValue(formData, "follow_up") >= 8) fixes.push("Add a 3-touch follow-up sequence for leads that do not reply or book.");
  if (numberValue(formData, "no_show") >= 8) fixes.push("Create a no-show and no-book recovery message set.");
  if (numberValue(formData, "reactivation") >= 8) fixes.push("Run a past-client reactivation campaign for services, packages, or memberships.");

  return {
    created_at: new Date().toISOString(),
    name: formData.get("name")?.trim() || "",
    email: formData.get("email")?.trim() || "",
    business: formData.get("business")?.trim() || "",
    website: formData.get("website")?.trim() || "",
    business_type: formData.get("business_type") || "",
    issue: formData.get("issue")?.trim() || "",
    score,
    label: labelFor(score),
    estimatedMissedRevenue,
    bottlenecks,
    fixes
  };
}

if (scoreForm) {
  scoreForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(scoreForm);
    const result = calculateResult(formData);
    sessionStorage.setItem("divini_revenue_leak_result", JSON.stringify(result));
    window.location.href = "./results.html";
  });
}
