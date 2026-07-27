const thumbs = Array.from(document.querySelectorAll(".detail-thumb"));
const mainImage = document.getElementById("detail-main-image");
const prevBtn = document.querySelector(".detail-gallery__nav--prev");
const nextBtn = document.querySelector(".detail-gallery__nav--next");

function setActiveThumb(index) {
  if (!thumbs.length || !mainImage) return;
  const safeIndex = ((index % thumbs.length) + thumbs.length) % thumbs.length;
  const thumb = thumbs[safeIndex];
  const src = thumb.getAttribute("data-src");
  if (!src) return;

  mainImage.src = src;
  thumbs.forEach((item) => item.classList.remove("is-active"));
  thumb.classList.add("is-active");
}

function getActiveIndex() {
  return Math.max(
    0,
    thumbs.findIndex((thumb) => thumb.classList.contains("is-active")),
  );
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => setActiveThumb(index));
});

prevBtn?.addEventListener("click", () => setActiveThumb(getActiveIndex() - 1));
nextBtn?.addEventListener("click", () => setActiveThumb(getActiveIndex() + 1));
