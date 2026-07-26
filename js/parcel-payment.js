function initParcelPayment() {
  const prepaid = document.getElementById("payment-prepaid");
  const cod = document.getElementById("payment-cod");
  const payBtn = document.getElementById("payment-submit");
  const summaryMethod = document.getElementById("summary-payment-method");

  if (!prepaid || !cod || !summaryMethod) return;

  const summaryCopy = summaryMethod.querySelector(".parcel-payment-option__copy");

  function updatePaymentCards() {
    document.querySelectorAll(".parcel-payment-option").forEach((card) => {
      const input = card.querySelector('input[type="radio"]');
      if (!input) return;
      card.classList.toggle("parcel-payment-option--active", input.checked);
    });

    const isPrepaid = prepaid.checked;

    summaryMethod.classList.toggle("parcel-payment-option--active", isPrepaid);
    summaryMethod.classList.toggle("parcel-payment-option--summary-cod", !isPrepaid);

    const icon = summaryMethod.querySelector(".parcel-payment-option__icon");
    if (icon) {
      icon.classList.toggle("parcel-payment-option__icon--prepaid", isPrepaid);
      icon.classList.toggle("parcel-payment-option__icon--cod", !isPrepaid);
    }

    if (summaryCopy) {
      summaryCopy.innerHTML = isPrepaid
        ? "<strong>SITUCKA Prepaid</strong><span class=\"parcel-payment-option__available\">XFA 1,250.00 Available</span>"
        : "<strong>Cash on Delivery</strong><span>Pay when you receive</span>";
    }

    if (payBtn) {
      payBtn.textContent = isPrepaid ? "Pay with Situcka Prepaid" : "Pay on Delivery";
    }
  }

  prepaid.addEventListener("change", updatePaymentCards);
  cod.addEventListener("change", updatePaymentCards);
  updatePaymentCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initParcelPayment);
} else {
  initParcelPayment();
}
