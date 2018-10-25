import HttpFetch from './http.fetch';

export default class HttpService {

    static get(url) {
      return new Promise(
        (resolve, reject) => {
          HttpFetch.get(url).then(
            (response) => {
              resolve(response.json());
            }
          ).catch(
            (error) => {
              console.log(error);
              reject(error);
            }
          );
        }
      )
    }

    static post(url, modelo) {
      return new Promise(
        (resolve, reject) => {
          HttpFetch.post(url, modelo).then(
            (response) => {
              resolve(response.json());
            }
          ).catch(
            (error) => {
              console.log(error);
              reject(error);
            }
          );
        }
      );
    }

}