const banner = document.getElementById("banner");
const bannerButton = document.getElementById("banner-button")

function showBanner() {
    const today = new Date();
  const day = today.getDay();

  if (day === 1 || day === 2 || day === 3) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }
}

showBanner();

bannerButton.addEventListener("click", function() {
    banner.style.display = "none";
  });