import React, {useState, useEffect, useRef} from 'react'
import { useParams, Navigate } from 'react-router-dom'
import {authApi} from '../../../api';

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
export const  ChangePassword=()=>{
    const { token } = useParams()
    const [status, setStatus] = useState('loading');
    const [data, setData] = useState({});
    const opened = useRef(false);

    useEffect(()=>{
        const checkId = ()=>{
            authApi.checkTokenPassword(token).then(response=>{
                setStatus('success');
                setData(response.data.data);

                if(!opened.current) {
                    window.open(response.data.data.btn_url);
                    opened.current=true;
                }
            }).catch(error=>{
                console.log(error);
                  setData({
                    msg:error?.data.msg
                })
                setStatus('error');
            })
        }
        token && checkId();
    }, [token])

    if(!token )
       return <Navigate to="/404" />

    return  (
        <div>
        {status==='loading' ?
        <h2>Validando</h2>
        :
        status==='success' ?
        <div style={{textAlign: 'center'}}>
            <p>{data?.message}</p>
             <a rel="noreferrer" target="_blank" href={data?.url} style={btnCool}>
                {data?.btn_text}
            </a>
        </div>
        :
        <h2>{data?.msg}</h2>


        }
        </div>

    )
}
