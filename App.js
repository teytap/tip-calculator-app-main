const billAmount = document.getElementById("bill-amount");
const peopleNumber = document.getElementById("people-number");
const tip = document.getElementById("tip");
const tipTotal = document.getElementById("tip-total");
const message = document.getElementById("message");
const resetBtn = document.getElementById("reset-btn");
const btn5 = document.getElementById("btn-5");
const btn10 = document.getElementById("btn-10");
const btn15 = document.getElementById("btn-15");
const btn25 = document.getElementById("btn-25");
const btn50 = document.getElementById("btn-50");
const btnCustom = document.getElementById("btn-custom");
let percentage;
function calculateTip() {
  let num = Number(billAmount.value);
  let person = Number(peopleNumber.value);
  if (person > 0) {
    tipTotal.innerHTML = `$ ${(num * percentage).toFixed(2)}`;
    tip.innerHTML = `$ ${((num * percentage) / person).toFixed(2)}`;
    peopleNumber.style.border = "2px solid var(--very-light-grayish-cyan)";
    message.innerHTML = "";
  } else {
    message.innerHTML = "can't be zero";
    peopleNumber.style.border = "2px solid orange";
  }
}

btn5.addEventListener("click", function () {
  percentage = 0.05;
  calculateTip();
});
btn10.addEventListener("click", function () {
  percentage = 0.1;
  calculateTip();
});
btn15.addEventListener("click", function () {
  percentage = 0.15;
  calculateTip();
});
btn25.addEventListener("click", function () {
  percentage = 0.25;
  calculateTip();
});
btn50.addEventListener("click", function () {
  percentage = 0.5;
  calculateTip();
});
btnCustom.addEventListener("click", function () {
  percentage = Number(btnCustom.value) / 100;
  console.log(percentage);
  calculateTip();
});

resetBtn.addEventListener("click", function () {
  tipTotal.innerHTML = "$ 0.00";
  tip.innerHTML = "$ 0.00";
  billAmount.value = "";
  peopleNumber.value = "";
});
