import { useState } from 'react'
import './App.css'
import logo from './assets/instagram.png'

function App() {
 const [login, setLogin] = useState(true);

 const loginSwitch = ()=>{
  setLogin(!login)
 }

  return (
    <div className='container'>
     <div className='user-form'>
       <img src={logo} alt="" />
       <input hidden={login} type="text" name='' placeholder='Mobile Number or Email' id="" />
       <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
       <input hidden={login} type="text" name="" placeholder='Phone Number, Username, or email' id="" />
       <input hidden={login} type="text" name="" placeholder='Password' id="" />
       <button>{login? "Sign in":"Sign up"}</button>
       <div id='footer'>
        {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}
        >{login?"Sign up":"Log in"}</span>
       </div>
     </div>
    </div>
  );
}

export default App;
