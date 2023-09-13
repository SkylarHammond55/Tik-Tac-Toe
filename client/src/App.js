import "./App.css";
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { useState } from "react";
import JoinGame from "./components/JoinGame";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Logo from "./components/Logo"; // Import the Logo component
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  const api_key = "ufys48qg5naw";
  const cookies = new Cookies();
  const token = cookies.get("token");
  const client = StreamChat.getInstance(api_key);
  const [isAuth, setIsAuth] = useState(false);

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userId");
    cookies.remove("firstName");
    cookies.remove("lastName");
    cookies.remove("hashedPassword");
    cookies.remove("channelName");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  };

  if (token) {
    client
      .connectUser(
        {
          id: cookies.get("userId"),
          name: cookies.get("username"),
          firstName: cookies.get("firstName"),
          lastName: cookies.get("lastName"),
          hashedPassword: cookies.get("hashedPassword"),
        },
        token
      )
      .then((user) => {
        setIsAuth(true);
      });
  }

  
  const particlesInit = useCallback(async engine => {      
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
  await console.log(container);
  }, []);

  return (
    <BrowserRouter>
          <Switch>
    <div>
      <div className="backg">
    <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{ "fullScreen": false, "background":{ "image":" linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)" }, "particles":{ "number":{ "value":10, "density":{ "enable":true, "value_area":600 } }, "color":{ "value":"#ffffff" }, "shape": { "type": "square", "stroke":{ "width":0, "color":"#000000" }, "polygon":{ "nb_sides":5 } }, "opacity":{ "value":0.25, "random":true, "anim":{ "enable":false, "speed":1, "opacity_min":0.1, "sync":false } }, "size":{ "value":29, "random":true, "anim":{ "enable":false, "speed":2, "size_min":0.1, "sync":false } }, "line_linked":{ "enable":false, "distance":300, "color":"#ffffff", "opacity":0, "width":0 }, "move":{ "enable":true, "speed":0.5, "direction":"top", "straight":true, "out_mode":"out", "bounce":false, "attract":{ "enable":false, "rotateX":600, "rotateY":1200 } } }, "interactivity":{ "detect_on":"canvas", "events":{ "onhover":{ "enable":false, "mode":"repulse" }, "onclick":{ "enable":false, "mode":"push" }, "resize":true }, "modes":{ "grab":{ "distance":800, "line_linked":{ "opacity":1 } }, "bubble":{ "distance":790, "size":79, "duration":2, "opacity":0.8, "speed":3 }, "repulse":{ "distance":400, "duration":0.4 }, "push":{ "particles_nb":4 }, "remove":{ "particles_nb":2 } } }, "retina_detect":true}}
      /></div>

<div className="wrapperhome">
        <div className="App">
          <div className="logoc">
            <Logo />
          </div>


      {isAuth ? (
        <Chat client={client}>
          <JoinGame />
          <div className="logoutb">
          <button class="btn btn-error" onClick={logOut}> Log Out</button>
          </div>
        </Chat>
      ) : (
        <> 
          <div className="flex justify-center">
          
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          </div>
        </>
        
      )}
      </div>
  </div>



  </div>
  </Switch>
  </BrowserRouter>
  
  );
}


export default App;
