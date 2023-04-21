import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './exchange.js';

// Business Logic

function getExchange(ammount, selection) {
  ExchangeService.getExchange(ammount, selection)
    .then(function (response) {
      if (response) {
        console.log(response.conversion_rates.AED);
        printElements(response, ammount, selection);
      } else {
        printError(response, ammount, selection);
      }
    });
}

// UI Logic

function printElements(response, ammount, selection) {
  // const results = document.getElementById("results")
  const totalb = response;
  console.log(totalb);
  const ammountb = ammount;
  console.log(ammountb);
  const selectb = selection;
  console.log(selectb);
}

function printError(response, ammount, selection) {
  const responsea = response;
  const ammounta = ammount;
  const selectiona = selection;
  console.log(responsea, ammounta, selectiona);
}


function handleFormSubmission(event) {
  event.preventDefault();
  const ammount = document.querySelector("#dollar-ammount").value;
  const selection = document.querySelector("#exchange-select").value;
  document.querySelector("#dollar-ammount").value = null;
  getExchange(ammount, selection);
}


document.querySelector('form').addEventListener("submit", handleFormSubmission);

// import Triangle from './js/triangle.js';
// import Rectangle from './js/rectangle.js';


// function handleTriangleForm() {
//   event.preventDefault();
//   document.querySelector('#response').innerText = null;
//   const length2 = parseInt(document.querySelector('#length2').value);
//   const length1 = parseInt(document.querySelector('#length1').value);
//   const length3 = parseInt(document.querySelector('#length3').value);
//   const triangle = new Triangle(length1, length2, length3);
//   const response = triangle.checkType();
//   const pTag = document.createElement("p");
//   pTag.append(response);
//   document.querySelector('#response').append(pTag);
// }

// function handleRectangleForm() {
//   event.preventDefault();
//   document.querySelector('#response2').innerText = null;
//   const length1 = parseInt(document.querySelector('#rect-length1').value);
//   const length2 = parseInt(document.querySelector('#rect-length2').value);
//   const rectangle = new Rectangle(length1, length2);
//   const response = rectangle.getArea();
//   const pTag = document.createElement("p");
//   pTag.append(`The area of the rectangle is ${response}.`);
//   document.querySelector('#response2').append(pTag);
// }

// window.addEventListener("load", function() {
//   document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
//   document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
// });