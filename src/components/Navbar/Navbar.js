import React from 'react';
import "./Navbar.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import movie from "../../images/movie.png";
// import { Link } from "react-router-dom";
import userpic from "../../images/userpic.png";
import { useState } from 'react';
import { useEffect } from 'react';
import {useAuth0} from "@auth0/auth0-react"

function Navbar({pr,logOut,show}) {

  const [dark, setdark] = useState(false);
 
  const { logout} = useAuth0();
const {user,loginWithRedirect} = useAuth0();
  


  const goToSignInPage = () => {
    // navigate("/sign-in");
    loginWithRedirect();
  };

const transitionNavbar= ()=> {
     if(window.scrollY > 100){
      setdark(true);
     }
     else{
      setdark(false);
     }
}

useEffect(() => {
  
    window.addEventListener("scroll",transitionNavbar);

    return()=>{
      window.removeEventListener("scroll",transitionNavbar);
    }
  
}, [])



  return (
   <div className={`navdiv ${show && 'navcolor'} ${dark && 'dc'}`}>
        
        <img src={movie} alt = '' className='logo'/>

      {
       pr ? (
          
                <button className="s" onClick={goToSignInPage}> SIGN-IN</button>
                
          ):(" ")
          
         
      }

      {
        logOut &&(<div className='userdiv'> <h1 className='userhello'> {user && ` Hi, ${user.name}`}</h1><img src={userpic} alt='' className="userimg" onClick={()=> logout({returnTo: window.location.origin,})}  />   </div>) 
        
      }

    </div>
  );
}

export default Navbar