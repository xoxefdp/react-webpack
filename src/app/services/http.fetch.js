/**
 * @description
 * Mediante esta clase se encapsula las peticiones Rest. Para ello se establecen
 * dos metodos para cada uno de los tipos de llamadas, get y post. Se establecen
 * controles básicos sobre las respuestas para discriminar como errores aquellas
 * respuestas con status diferente al 200 ya que fetch por si solo no los recon-
 * noce como errores.
 * Los metodos son estaticos por lo que no se necesita instanciar la clase.
 *
 * @type {string}
 */

const accept = 'application/json';

export default class HttpFetch {
    static get(url){
        let status;
        return fetch(url, {
            method: 'GET',
            headers: {
                'Accept': accept
            }
        }).then(
          (response) => {
            status = response.status;
            return response.json();
          }
        ).then(
          (data) => {
            if (status === 200 && data)
                return data;
            return Promise.reject(data ? data : '');
          }
        );
    }

    static post(url, bodyData){
        let status;
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(bodyData),
            headers: {
                'Accept': accept,
                'Content-type': accept
            }
        }).then(
          (response) => {
            status = response.status;
            return (status === 500 || status < 400) ? response : Promise.reject(response.status + ' : ' + response.statusText);
          }
        ).then(
          (data) => {
            if (status === 200 && data){
                return data;
            }else{
                return Promise.reject(data ? data : '');
            }
          }
        );
    }
}