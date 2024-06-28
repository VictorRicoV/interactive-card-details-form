// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

const formElement = document.getElementById("form");

const checkForm = (event) => {
  event.preventDefault();
};

formElement.addEventListener("submit", checkForm);

const inputNameElement = document.getElementById("name");
const inputNumberElement = document.getElementById("number");
const inputDateElement = document.getElementById("date");
const inputYearElement = document.getElementById("year");
const inputCvcElement = document.getElementById("cvc");
const buttonElement = document.getElementById("button");
