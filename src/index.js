import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange.js';

// Business Logic

function getExchange() {
  ExchangeService.getExchange()
    .then(function (response) {
      const amountCache = document.querySelector("#dollar-amount").value;
      const amount = parseInt(amountCache);
      const selection = document.querySelector("#exchange-select").value;
      document.querySelector("#dollar-amount").value = null;
      if (response) {
        if (isNaN(amount)) {
          return printError(selection);
        } else if (amount != "" && amount != null);
        printElements(response, amount, selection);
      } else {
        printError(selection);
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
  for (let i = 0; i < exchangeArray.length; i++) {
    if (exchangeArray[i] === selection) {
      const numberToConvert = exchangeObject[exchangeArray[i]];
      const resultNumber = amount * numberToConvert;
      p.append(`${amount} US Dollar(s) is equal to ${resultNumber} ${selection}(s)`);
    }
  }
}

function printError(selection) {
  const results = document.getElementById("results");
  const p = document.createElement("p");
  results.append(p);
  p.append(`It seems you entered something  unexpected when I'm sure you meant to enter a whole number.
  I'm sure you could probably buy that with ${selection}, though.`);
}


function handleFormSubmission(event) {
  event.preventDefault();
  getExchange();
}


document.querySelector('form').addEventListener("submit", handleFormSubmission);