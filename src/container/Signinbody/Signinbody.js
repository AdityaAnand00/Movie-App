import React from 'react';
import"./Signinbody.css";
import Navbar from '../../components/Navbar/Navbar';
import {useAuth0} from "@auth0/auth0-react"
function Signinbody() {
const {loginWithRedirect} = useAuth0();
  return (
    <div className='signbody'>
      
         <Navbar/>
        {/* <Signform/> */}
        <button className='loginbutton' onClick={()=>{loginWithRedirect()} } >  LOGIN </button>
    </div>
  )
}

export default Signinbody;