# Week 6 Independent Code Review - Currency Exchanger (with API)

#### This program is a currency exchange calculator that uses an exchange rate API to give real-time results of differences in currency value.

#### By Thomas McDowell

## Technologies Used

JavaScript
HTML
CSS
Jest
webpack
npm
ES Linter

## Description
A user should be able to enter an amount in USD, then specify another currency and submit a form. The user should then see the total amount entered in the converted currency. Users should be able to convert USD into at least 5 other types of currency.
If the API call results in an error, the app should return a notification to the user that states what the error is (401, 404, etc.).
If a query response doesn't include the inputted currency, the application should return a notification that states the currency in question doesn't exist.

INSTRUCTIONS:
Enter a whole integer into the box labeled "Enter an amount:", then select a world currency from the drop-down menu labeled as such. When you have an amount entered and a currecny selected, press the submit button. A message should appear, saying that however many dollars (the inputted number) is equal to however many bills of the selected world currency type. If a non-integer, or non-number are typed into the box, an error message will appear instead.

## Setup/Installation Req's

*Install all packages with: $ npm install.
*Build the project using webpack with: $ npm run build.
*Start a new Dev server with: $ npm run start.
*Lint JS files in the src folder with: $ npm run lint.
*Run tests with: $ npm run test.

If you don't have one already, get an API key from https://www.exchangerate-api.com/ by signing up for their free option. Save the key in the .env folder and set it equal to API_KEY (eg. API_KEY=####). 

_Remember to rename the relevant title tags in webpack and package.json with the title of current project._

## Known Bugs

As far as I can tell, exchangerate-api.com doesn't have CORS, so a generic error message will pop up instead of specifically naming a 400-etc. error code. This could be because I wasn't using Chrome on my home computer- there are some ways Chrome can handle that issue, or so I'm told. Also the network error handling message does double-duty with the typo handling, resulting in some odd [object Object] text.

UPDATE: Above bug seems to be fixed, but the specific error codes still won't show up in the DOM. They will, however apper in the browser console.

## License