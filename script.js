const form = document.querySelector("#calculator-form");
const errorMessage = document.querySelector("#form-error");

function setCalories(id, value) {
  document.querySelector(id).textContent = Math.round(value).toLocaleString();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const age = Number(document.querySelector("#age").value);
  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);
  const gender = document.querySelector("#gender").value;
  const activity = Number(document.querySelector("#activity").value);

  if (!age || !height || !weight || age < 15 || age > 120 || height < 100 || height > 250 || weight < 30 || weight > 350) {
    errorMessage.textContent = "Please enter realistic values: age 15–120, height 100–250 cm, and weight 30–350 kg.";
    return;
  }

  errorMessage.textContent = "";
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === "male" ? 5 : -161);
  const maintenance = bmr * activity;
  setCalories("#maintenance-total", maintenance);
  setCalories("#maintain-card-total", maintenance);
  setCalories("#loss-total", Math.max(1200, maintenance - 400));
  setCalories("#gain-total", maintenance + 300);
  document.querySelector("#results").scrollIntoView({ behavior: "smooth", block: "nearest" });
});
