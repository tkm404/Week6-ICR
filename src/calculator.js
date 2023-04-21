export default class Calculator {
  constructor(ammount, selection) {
    this.ammount = ammount
    this.selection = selection
  }
 static exchangeResult(ammount, selection) {
 const result = ammount*selection
 return result
 }
}