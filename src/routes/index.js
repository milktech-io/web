import React from 'react'
import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import App from '../App'
import {guest} from './guest';
import {admin} from './admin';

const RoutesComponent = () =>  {

  const login = false;

  return(   
       <BrowserRouter basename={`/`}>
                   <App>

        <Routes>
        {
          login ?admin.map( ({path, _Component}) => (
                <Route key={path}  exact  path={`/admin/${path}`} />         
              ))
          :
          guest.map(({path, Component})=>{
            return(

                <Route  key={path} path={path} component={Component} element={<Component />}/>
              )
          })
        }
        <Route  path="/" element={<Navigate to="invite" replace />} />

        <Route  path="/:id" element={<Navigate to="/404" replace />} />
        </Routes>
        </App>

         </BrowserRouter>
    )
}

export default RoutesComponent;