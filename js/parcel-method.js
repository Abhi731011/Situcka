function initParcelMethod() {
  const modal = document.getElementById("schedule-modal");
  if (!modal) return;

  const overlay = modal.querySelector(".parcel-schedule-modal__overlay");
  const closeBtn = modal.querySelector(".parcel-schedule-modal__close");
  const confirmBtn = modal.querySelector(".parcel-schedule-modal__confirm");
  const scheduleOption = document.getElementById("method-schedule");
  const instantOption = document.getElementById("method-instant");
  const pickDateLink = document.getElementById("pick-date-time");
  const deliveryBadge = document.getElementById("summary-delivery-badge");
  const confirmLabel = confirmBtn?.querySelector("[data-confirm-label]");

  let selectedSlot = "14:00 - 14:30";

  function openModal() {
    modal.hidden = false;
    document.body.classList.add("parcel-modal-open");
    scheduleOption.checked = true;
    updateMethodCards();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove("parcel-modal-open");
  }

  function updateMethodCards() {
    document.querySelectorAll(".parcel-method-option").forEach((card) => {
      const input = card.querySelector('input[type="radio"]');
      card.classList.toggle("parcel-method-option--active", input?.checked);
    });

    if (deliveryBadge) {
      if (scheduleOption.checked) {
        deliveryBadge.textContent = "SCHEDULED DELIVERY";
        deliveryBadge.classList.add("parcel-summary-badge--scheduled");
      } else {
        deliveryBadge.textContent = "INSTANT DELIVERY";
        deliveryBadge.classList.remove("parcel-summary-badge--scheduled");
      }
    }
  }

  function updateConfirmLabel() {
    if (confirmLabel) {
      confirmLabel.textContent = `Confirm Time ${selectedSlot}`;
    }
  }

  scheduleOption?.addEventListener("change", () => {
    updateMethodCards();
    openModal();
  });

  scheduleOption?.closest(".parcel-method-option")?.addEventListener("click", (event) => {
    if (event.target instanceof HTMLInputElement) return;
    scheduleOption.checked = true;
    updateMethodCards();
    openModal();
  });

  instantOption?.addEventListener("change", updateMethodCards);

  pickDateLink?.addEventListener("click", (event) => {
    event.preventDefault();
    scheduleOption.checked = true;
    updateMethodCards();
    openModal();
  });

  closeBtn?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  modal.querySelectorAll(".parcel-schedule-period__toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const period = toggle.closest(".parcel-schedule-period");
      const isOpen = period?.classList.contains("parcel-schedule-period--open");
      modal.querySelectorAll(".parcel-schedule-period").forEach((item) => {
        item.classList.remove("parcel-schedule-period--open");
      });
      if (!isOpen) period?.classList.add("parcel-schedule-period--open");
    });
  });

  modal.querySelectorAll(".parcel-schedule-slot").forEach((slotBtn) => {
    slotBtn.addEventListener("click", () => {
      modal.querySelectorAll(".parcel-schedule-slot").forEach((btn) => {
        btn.classList.remove("parcel-schedule-slot--active");
      });
      slotBtn.classList.add("parcel-schedule-slot--active");
      selectedSlot = slotBtn.dataset.slot || selectedSlot;
      updateConfirmLabel();
    });
  });

  modal.querySelectorAll(".parcel-schedule-day").forEach((dayBtn) => {
    dayBtn.addEventListener("click", () => {
      modal.querySelectorAll(".parcel-schedule-day").forEach((btn) => {
        btn.classList.remove("parcel-schedule-day--active");
      });
      dayBtn.classList.add("parcel-schedule-day--active");
    });
  });

  confirmBtn?.addEventListener("click", () => {
    scheduleOption.checked = true;
    updateMethodCards();
    closeModal();
  });

  updateMethodCards();
  updateConfirmLabel();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initParcelMethod);
} else {
  initParcelMethod();
}
