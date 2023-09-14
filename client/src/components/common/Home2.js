import Logo from "./components/Logo";
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import React from 'react';

function Home() {
return (
      <div>
        <Logo />
        <Login /> 
        <Register />
      </div>
    );
}

export default Home;