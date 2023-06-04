import axios from './../../config/axios';
import Token from '../../config/token';

class Auth{
	
	prerregister=(data)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('/auth/register',data);
	}

	checkEmail=(data)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('/auth/check-email',{email:data});
	}

	checkUsername=(data)=>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post('/auth/check-username',{username:data});
	}
	checkId=(id) =>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post(`/auth/invite/${id}`);		
	}
	verify=(token) =>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post(`/auth/verify/${token}`);		
	}
	checkTokenPassword=(token) =>{
		axios.defaults.headers.common['Authorization']= 'Bearer '+Token.getPublic();
		return axios.post(`/auth/change-password/${token}`);		
	}
}



export default (new Auth());
