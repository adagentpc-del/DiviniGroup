const result = JSON.parse(sessionStorage.getItem("divini_revenue_leak_result") || "null");
const paidIntakeUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeP-jDcwx3-KjyByEYuo00zrszhjFymiWyU3WToeIsz2eSM0A/viewform";

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value || 0);
}

function addItems(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

if (!result) {
  document.querySelector("#resultHeadline").textContent = "No score found yet";
  document.querySelector("#resultSummary").textContent = "Please take the Revenue Leak Score audit first.";
  document.querySelector("#diagnosisList").innerHTML = '<p><a href="./audit.html">Take the score audit</a></p>';
} else {
  document.querySelector("#scoreValue").textContent = result.score;
  document.querySelector("#scoreRing").style.setProperty("--score", `${result.score}%`);
  document.querySelector("#resultHeadline").textContent = `${result.label} for ${result.business}`;
  document.querySelector("#resultSummary").textContent = `Based on your answers, the biggest opportunity is tightening the path from inquiry to booked appointment, then using follow-up and reactivation to recover revenue already close to the business.`;
  document.querySelector("#revenueEstimate").textContent = `${money(result.estimatedMissedRevenue)} per month`;

  const diagnosisList = document.querySelector("#diagnosisList");
  diagnosisList.innerHTML = "";
  result.bottlenecks.forEach((text) => {
    const item = document.createElement("div");
    item.className = "check-item";
    item.innerHTML = `<span aria-hidden="true"></span><p>${text}</p>`;
    diagnosisList.appendChild(item);
  });

  addItems(document.querySelector("#fixList"), result.fixes);
}

for (const link of document.querySelectorAll('a[href*="paypal.com"]')) {
  link.addEventListener("click", () => {
    if (result) {
      sessionStorage.setItem("divini_paid_intake_after_paypal", paidIntakeUrl);
    }
  });
}
