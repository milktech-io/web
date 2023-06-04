import { toast } from 'react-toastify';

class Interceptors {

	error=(error) => {
		error = error.response; 
		console.log(error);
		switch(error.status){

			case 422:
    			for(let key in error.data.errors){
    				error.data.errors[key].map((message)=>{
    					toast.error(message);
    					return message;
    				})
    			}
    			break;
    		case 400:
    		case 401:
    		case 402:
    		case 403:
    			toast.error(error.data.msg, {theme: "dark"});
    			break;
    		case 404:
    			break;
    		case 419:
    			toast.error(error.data.msg, {theme: "dark"});
    			break;
			case 500:
			default: 
			    break;
		}
		throw error;

	}
}

export default (new Interceptors());
