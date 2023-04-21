export default class ExchangeService {
  static getExchange(ammount, selection) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          const ammountc = ammount;
          const selectc = selection;
          console.log(ammountc, selectc);
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}