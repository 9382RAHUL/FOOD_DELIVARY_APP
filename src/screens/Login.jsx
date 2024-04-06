// import React,{useState} from 'react'
// import "./login.css"
// import { Link ,useNavigate} from 'react-router-dom';
// const Login = () => {
//   const [credentials, setcredentials] = useState({
   
//     email: "",
//     password: "",
//   });
//   let navigate=useNavigate();
//   // let navigate=Navigate();
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({
        
//         email: credentials.email,
//         password: credentials.password,
        
//       }))
//     const response = await fetch("http://localhost:3000/api/loginuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
        
//         email: credentials.email,
//         password: credentials.password,
        
//       })
//     });
//     const json = await response.json();
//     console.log(json);
//     if(!json.success){
//       alert("Enter valid credentials");
//     }
//     if(json.success){
//       localStorage.setItem('userEmail',credentials.email)
//       localStorage.setItem('authtoken',json.authtoken);
//       console.log(localStorage.getItem("authtoken"));
//       alert("logged in succesfully");
//       navigate("/");
//     }
//   };
//   // const handlesubmit=()=>{
//   //   navigate("/")

//   // }
//   const onchange = (event) => {
//     setcredentials({
//       ...credentials,
//       [event.target.name]: event.target.value,
//     });
//   };
//   return (
//     <>
//     <form action="" onSubmit={handleSubmit}>

//        <div className="login">
//             <div className="loginWrapper">
//                 <div className="loginLeft">
//                     <h3 className="loginLogo">Rahulsocial</h3>
//                     <span className="loginDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ratione!</span>
//                 </div>
//                 <div className="loginRight">
//                     <div className="loginBox">
//                         <input placeholder="Email" className='loginInput' name="email" value={credentials.email} onChange={onchange}/>
//                         <input placeholder="password" className='loginInput' name="password" value={credentials.password} onChange={onchange} />
//                         <button className='loginButton'>Log In</button>
                       
//                         <Link to="/createuser" className='loginRegisterButton'> Create a New Account</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </form>
//     </>
//   )
// }

// export default Login


import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/loginuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

    //   const textResponse = await response.text(); // Get the text response from the server
    // console.log('Server response:', textResponse);

      const json = await response.json();

      if (!json.success) {
        throw new Error('Invalid credentials');
      }

      localStorage.setItem('userEmail', credentials.email);
      localStorage.setItem('authtoken', json.authtoken);
      alert('Logged in successfully');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error.message);
      alert('Login failed. Please try again.');
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Rahul Food Delivery App</h3>
            <span className="loginDesc">
            Delivering lip-smacking food is our passion.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                placeholder="Email"
                className="loginInput"
                name="email"
                value={credentials.email}
                onChange={onChange}
              />
              <input
                placeholder="Password"
                className="loginInput"
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
              />
              <button type="submit" className="loginButton">
                Log In
              </button>
              <Link to="/createuser" className="loginRegisterButton">
                Create a New Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
