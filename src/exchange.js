export default class ExchangeService {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.AI_KEY}/latest/USD`)
      .then(function (response) {
        // console.log(response);
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}