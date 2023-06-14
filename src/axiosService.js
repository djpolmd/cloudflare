import axios from "axios";
const worker_url = import.meta.env.DB_URL ? import.meta.env.DB_URL : 'https://api.djpolmd.workers.dev' ;
const api_token = import.meta.env.DB_TOKEN ?  import.meta.env.DB_TOKEN : 'x2MfNEn7jt09F5zliAfMZDflz68qq6jyZ2be7KOtpnQqyNxlaagcxDmDunHkeADe';
const HTTP = axios.create({
    baseURL: import.meta.env,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Vary': 'Origin',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Origin, Accept',
        'Access-Control-Allow-Credentials': 'true',
         'Content-type': 'application/json',
        "upgrade-insecure-requests": "1",
        authorization: api_token,
    }
})
export default class axiosService {
    axiosGet(url, options = {}) {
        return axios.get(url, options)
            .catch((error) => {
                if (error.hasOwnProperty('response')) {
                    this.redirectLoginPage(error);
                }
            });
    }

    redirectLoginPage(error) {
        let st = error.response.status;
        if ((st === 419) || (st === 401)) {
            window.alert('Sesiunea Dmvs. a expirat, p/a a continua vă rugăm să vă autentificați.');
            window.location.href = '/auth/login'
        } else
        if (((st === 403) || (st === 500))  && (!!error.response.data.hasOwnProperty('uuid'))){
            window.user_code_error = error.response.data.uuid;
            const event = new Event('errorhandle');
            window.dispatchEvent(event);
        }
    }

    static setUserParams(data){
        console.log(worker_url + '/api/users', api_token);
        return HTTP.post(worker_url + '/api/users', data).then( (response) => { console.log(response.data) });
    }

    static getByEmail(email){
        return HTTP.get(worker_url + '/api/users?email=' + email);
    }
    // Authentificate
    static getUser(email, password){
        return HTTP.get(worker_url + '/api/authenticate?email=' + email + '&password=' + password);
            // alert(error.response.status)
    }

    static getUserList(){
        return HTTP.get(worker_url + '/api/users');
    }
}