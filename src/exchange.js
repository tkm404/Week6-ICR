export default class ExchangeService {
  static getExchange(ammount, selection) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function (response) {
        if (!response.ok) {
          return response.json()
            .then(function (apiErrorMessage) {
              const errorMessage = `There was an issue calculating this ammount. Please try again.
              ${response.status} ${response.statusText}
          receiving ${apiErrorMessage.message} from the database`;
              throw new Error(errorMessage);
            });
        } else {
          console.log(ammount, selection);
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}