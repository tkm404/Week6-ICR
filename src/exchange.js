export default class ExchangeService {
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          const errorMessage = `${response.result} ${response.error_type}`;
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