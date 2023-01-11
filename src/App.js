// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from './container/Landingpage/Landingpage';
// import Signinbody from './container/Signinbody/Signinbody';
import Homepage from './container/Homepage/Homepage';
import {useAuth0} from "@auth0/auth0-react";
// import userEvent from '@testing-library/user-event';

function App() {

 const {user,isAuthenticated,isLoading} = useAuth0();
 console.log(user , isLoading); 

  return (
    <BrowserRouter>
     <Routes>
          <Route path="/" element = {isAuthenticated ?  <Homepage /> : <Landingpage/>}/>
          {/* <Route path = "/" element = {isLoading && isAuthenticated ? <Homepage/> : <Landingpage/>}/> */}
          {/* <Route path="/sign-in" element={<Signinbody />} /> */}
          {/* <Route path = "/" element = {<Homepage />}/> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;