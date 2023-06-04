import jwt from "jsonwebtoken";

class Token {

	get = ()=>{
		return localStorage.getItem('token');
	}

	getPublic(){
		return  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcm9udGVuZCI6ImJhY2tvZmZpY2UifQ.gK-_QiSRdja5n8d9cQv4aOjThQhSK3dq7fZiclSyQIo";
	}

	json = ()=>{
		return this.decode(localStorage.getItem('token')||'');
	}
	decode = (token)=>{
		try{
		   return jwt.decode(token);
		}
		catch(e){
			console.log(e);
			return false;
		}
	}

	set = (token)=>{
		return localStorage.setItem('token', token);
	}

	check = ()=>{
		let token = this.get();

		if(!token)
			return false;

		let response = this.decode(token);

		if(!response){
			this.destroy();
			return false;
		}

	    if (response.exp <= (new Date().getTime() ) / 1000) 
	    {
			this.destroy();
	    	return false;
	    }	

	    return response;

	}

	destroy = ()=>{
		return localStorage.removeItem('token')
	}


}

export default  (new Token()) ;
