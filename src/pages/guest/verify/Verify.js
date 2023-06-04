import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {authApi} from '../../../api';
import Token from '../../../config/token';
import { toast } from 'react-toastify';

let urlImage ='https://global-uploads.webflow.com/';
urlImage+='61ed0aee3c612f185db2698d/62041b0ba0d17383d9d24537_615b29a11aa455948180682e_grain.gif';

const btnCool={
    fontWeight: '700',
    letterSpacing: '3px',
    fontSize: '16px',
    display: 'block',
    margin: '50px auto 50px auto',
    color:'white',
    paddingBottom:'13px',
    paddingTop:'13px',
    textDecoration:'none',
    width:'300px',
    borderWidth:'3px',
    borderRadius:'10px',
    borderStyle:'solid',
    borderColor:'white',
    backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,.22), rgba(0,0,0,.22)), url('+urlImage+')',
}
export const  Verify=()=>{
    const { token } = useParams()
    const [status, setStatus] = useState('loading');
    const [data, setData] = useState({});
    const tokenDecode = Token.decode(token);

    useEffect(()=>{
        const checkId = ()=>{
            authApi.verify(token).then(response=>{
                setStatus('success');
                setData(response.data.data);
            }).catch(error=>{
                toast.error('Ha ocurrido un error', {theme: "dark"});
                console.log(error);
                setStatus('error');
            })
        }
        tokenDecode && checkId();
    }, [tokenDecode, token])

    console.log(token);
    if(!tokenDecode)
       return <h2>El Email ha expirado</h2>


    return  (
        <div>
        {status==='loading' ?
        <h2>Validando</h2>
        :
        <div style={{textAlign: 'center'}}>
            <p>{data?.message}</p>
             <a rel="noreferrer" target="_blank" href={data?.url} style={btnCool}>
                {data?.btn_text}
            </a>
        </div>
        }
        </div>

    )
}
