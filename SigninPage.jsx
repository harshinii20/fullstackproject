import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Determine the next step based on the email domain
    const emailDomain = email.split("@")[1];
    if (emailDomain === "gmail.com") {
      navigate("/studentdashboard");
    } else {
      navigate("/admin-faculty-check"); // Redirect to admin/faculty page
    }
  };

  const styles = {
    container: {
      display: "flex",
      height: "100vh",
      width: "100%",
      fontFamily: "Arial, sans-serif",
    },
    leftContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#B9B6FD",
    },
    rightContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      flex: 1,
    },
    box: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "400px",
    },
    logoSection: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    },
    logo: {
      height: "70px",
      margin: "0 10px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "5px",
    },
    inputField: {
      width: "350px",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "14px",
    },
    button: {
      width: "350px",
      padding: "10px",
      backgroundColor: "#B9B6FD",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      margin: "10px 0",
    },
    buttonHover: {
      backgroundColor: "black",
    },
    footerText: {
      fontSize: "12px",
      color: "#666",
    },
    link: {
      color: "black",
      textDecoration: "none",
    },
    errorMessage: {
      color: "red",
      fontSize: "12px",
      marginBottom: "10px",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <div style={styles.box}>
          <div style={styles.logoSection}>
            <img
              src="https://www.connectbycnes.fr/sites/default/files/client/images/company/bit%20logo.png"
              alt="Bit Logo"
              style={styles.logo}
            />
          </div>
          <h2 style={styles.title}>Welcome Back!</h2>
          {error && <div style={styles.errorMessage}>{error}</div>}
          <form onSubmit={handleSignIn}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.inputField}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              style={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = styles.button.backgroundColor)
              }
            >
              Sign In
            </button>
          </form>
          <p style={styles.footerText}>
            Don't have an account?{" "}
            <a href="/signup" style={styles.link}>
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div style={styles.rightContainer}>
        <img
          src="https://img.freepik.com/premium-vector/sign-page-flat-style-illustration-design_538610-806.jpg"
          alt="Sign In Illustration"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default SignInPage;
