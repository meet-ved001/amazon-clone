import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home.js"
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
// import defaultExport from 'module';
import { auth } from "./firebase";
function App() {
  const[{user},dispatch]=useStateValue();
//useEffect is powerful
useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged((authUser)=>{
  if(authUser){
dispatch({
  type:"SET_USER",
  user:authUser
})
  }else{
    dispatch({
      type:"SET_USER",
      user:null
    });
  }
});
return()=>{
  unsubscribe();
}
},[]);
console.log(user);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
            {/* <h1>Login</h1> */}
          </Route>
          <Route path="/">
            {/* Last one is default route */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
