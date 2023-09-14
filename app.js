// DOM elements
const toggleButton = document.querySelector(".toggle-button");
const basicPriceContainer = document.querySelector(
  ".pricing-card__price--basic"
);
const proPriceContainer = document.querySelector(".pricing-card__price--pro");
const masterPriceContainer = document.querySelector(
  ".pricing-card__price--master"
);

function showPrice(event) {
  if (event.target.checked) {
    basicPriceContainer.textContent = "19.99";
    proPriceContainer.textContent = "24.99";
    masterPriceContainer.textContent = "39.99";
  } else {
    basicPriceContainer.textContent = "199.99";
    proPriceContainer.textContent = "249.99";
    masterPriceContainer.textContent = "399.99";
  }
}

// event listeners
toggleButton.addEventListener("click", showPrice);
