import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    navigate('/signin');
  };

  const handleGoogleSignInResponse = (response) => {
    console.log('Google Sign-In Response', response);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_CLIENT_ID_HERE',
        callback: handleGoogleSignInResponse,
      });
    };
  }, []);

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="logo">
          <img
            src="https://www.connectbycnes.fr/sites/default/files/client/images/company/bit%20logo.png"
            alt="Bannari Amman Institute of Technology"
          />
        </div>
        <h1>Training Performance Tracker</h1>
        <br></br>
        <button onClick={handleGoogleSignIn} className="google-signin-button">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
            alt="Google Icon"
          />
          Sign in with Google
        </button>
        <p className="login-note">Please sign in with your BIT account to continue</p>
      </div>

      <style>
        {`
          .login-page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #B9B6FD;
            font-family: Arial, sans-serif;
          }

          .login-box {
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 400px;
            height: 300px;
            max-width: 90%;
          }

          .logo img {
            width: 120px;
            margin-bottom: 20px;
          }

          h1 {
            font-size: 22px;
            margin-bottom: 20px;
            color: #333;
          }

          .google-signin-button {
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #B9B6FD;
            color: white;
            border: none;
            padding: 10px;
            border-radius: 5px;
            width: 100%;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
          }

          .google-signin-button:hover {
            background-color: black;
          }

          .google-signin-button img {
            width: 20px;
            margin-right: 10px;
          }

          .login-note {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
          }
        `}
      </style>
    </div>
  );
};

export default LoginPage;
