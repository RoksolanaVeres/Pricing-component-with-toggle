// DOM elements
const toggleButton = document.querySelector(".toggle-button");
const basicPriceContainer = document.querySelector(
  ".pricing-card__price--basic"
);
const proPriceContainer = document.querySelector(".pricing-card__price--pro");
const masterPriceContainer = document.querySelector(
  ".pricing-card__price--master"
);
const annuallyPlanLabel = document.querySelector(".annually-plan_label");
const monthlyPlanLabel = document.querySelector(".monthly-plan_label");

// functions
function highlightPlanLabel(activeLabel, passiveLabel) {
  activeLabel.style.color = "hsl(232, 13%, 33%)";
  passiveLabel.style.color = "hsl(234, 14%, 74%)";
}

function showPrice(event) {
  if (event.target.checked) {
    basicPriceContainer.textContent = "19.99";
    proPriceContainer.textContent = "24.99";
    masterPriceContainer.textContent = "39.99";
    highlightPlanLabel(monthlyPlanLabel, annuallyPlanLabel);
  } else {
    basicPriceContainer.textContent = "199.99";
    proPriceContainer.textContent = "249.99";
    masterPriceContainer.textContent = "399.99";
    highlightPlanLabel(annuallyPlanLabel, monthlyPlanLabel);
  }
}

// event listeners
toggleButton.addEventListener("click", showPrice);

// init
highlightPlanLabel(monthlyPlanLabel, annuallyPlanLabel);
