import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange.js';

// Business Logic

function getExchange(amount, selection) {
  ExchangeService.getExchange(amount, selection)
    .then(function (response) {
      if (response) {
        printElements(response, amount, selection);
      } else {
        // printError(response, amount, selection);
      }
    });
}

// UI Logic

function printElements(response, amount, selection) {
  const exchangeObject = response.conversion_rates;
  const exchangeArray = Object.keys(response.conversion_rates);
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.append(p);
  for (let i=0; i < exchangeArray.length; i++) {
    if (exchangeArray[i] === selection) {
      const numberToConvert = exchangeObject[exchangeArray[i]];
      const resultNumber = amount*numberToConvert;
      p.append(`${amount} US Dollar(s) is equal to ${resultNumber} ${selection}(s)`);
    } 
  }
}

// function printError(response, amount, selection) {
//   const responsea = response;
//   const amounta = amount;
//   const selectiona = selection;
//   console.log(responsea, amounta, selectiona);
// }


function handleFormSubmission(event) {
  event.preventDefault();
  const amount = document.querySelector("#dollar-amount").value;
  const selection = document.querySelector("#exchange-select").value;
  document.querySelector("#dollar-amount").value = null;
  getExchange(amount, selection);
}


document.querySelector('form').addEventListener("submit", handleFormSubmission);