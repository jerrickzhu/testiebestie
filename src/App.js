import "./App.css";
import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    if (response.accessToken) {
      setLogin(true);
      setEmail(response.email);
    } else {
      setLogin(false);
    }
  };

  return (
    <div className="App">
      <h1>Hello, this is my app. Welcome, friend.</h1>
      {!login && (
        <FacebookLogin
          appId="49102200679461"
          autoLoad={false}
          fields="name, email, picture"
          callback={responseFacebook}
        />
      )}
      {login && <h2>huzzah! it worked! this is your email: {email}</h2>}
    </div>
  );
}

export default App;
