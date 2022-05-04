"use strict";

const div = document.querySelector("div");
let number = document.querySelector(".number1");
let number2 = document.querySelector(".number2");
let number3 = document.querySelector(".number3");

function count() {
  let num = 0;
  setInterval(() => {
    num += 2;
    if (num <= 500) {
      number.textContent = `${num}+`;
      number2.textContent = `${num}+`;
      number3.textContent = `${num}+`;
    } else if (num <= 1140) {
      number2.textContent = `${num}+`;
      number3.textContent = `${num}+`;
    } else if (num <= 1500) {
      number3.textContent = `${num}+`;
    }
  }, 1);
}
count();
