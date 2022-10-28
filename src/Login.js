import React,{useState} from 'react'
import './Login.css';
import { Link,useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
// import {useHistory}from "react-router-dom";
import { email, password } from '@mui/icons-material';
function Login() {
  const history=useHistory();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
    const [{ }, dispatch] = useStateValue();
    const addUser = (event) => {
        dispatch({
            type: "ADD_USER",
            user: event.target.value
        })
        console.log(event.target.value);
    }
    const login = event => {
        event.preventDefault();
        //this stops the refresh
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
//logged in , redirect to homepage
history.push("/");
        })
        .catch((e) => alert(e.message));

    }
    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
         console.log(auth); 
//created a user and logged in
        })
        .catch((e) => alert(e.message));


    };
    const setUserName = (event) => {
        addUser(event);
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="login__logo"
                    alt="Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" onChange={event=>setEmail(event.target.value)} value={email} />
                    <h5>Password</h5>
                    <input type="password"onChange={event=>setPassword(event.target.value)}value={password} />
                    <Link to="/">
                        <button 
                            className="login__signInButton"
                           onClick={login} type="submit"
                        >Sign in</button>
                    </Link>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button
                    className="login__registerButton"
                    onClick={register}
                >Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login;
