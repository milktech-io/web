import axios from 'axios';
import Token from './token';
import interceptors from './interceptors';
export const clienteAxios = axios.create({
    baseURL : 'https://api.calacachida.com/api/',
});

const authAxios= axios.create({
    baseURL : 'https://api.calacachida.com/api/',
    headers: {
      'Access-Control-Allow-Origin':"*",
    }
});

authAxios.defaults.headers.common['Authorization'] ='Bearer '+ Token.get() ;


export default authAxios