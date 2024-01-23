import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),)
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    
  };
  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="login">
          <div className="loginWrapper">
            <div className="loginLeft">
              <h3 className="loginLogo">Rahulsocial</h3>
              <span className="loginDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
                ratione!
              </span>
            </div>
            <div className="loginRight">
              <div className="RegisterBox">
                <input
                  placeholder="UserName"
                  className="loginInput"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                />
                <input
                  placeholder="Email"
                  className="loginInput"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                />
                <input
                  placeholder="password"
                  className="loginInput"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                />
                <input
                  placeholder="address"
                  className="loginInput"
                  name="geolocation"
                  value={credentials.geolocation}
                  onChange={onChange}
                />
                <button className="loginButton">Sign Up</button>
                <Link to="/login" className="loginRegisterButton">
                 
                  Log into Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
