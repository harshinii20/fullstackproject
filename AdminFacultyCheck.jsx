import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminFacultyCheck = () => {
  const [adminID, setAdminID] = useState("");
  const [adminPasskey, setAdminPasskey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (e) => {
    e.preventDefault();
    setError("");

    // Validate Admin credentials (this is a mock validation for demonstration purposes)
    if (adminID === "admin123" && adminPasskey === "adminpass") {
      navigate("/admin"); // Redirect to admin dashboard
    } else {
      setError("Invalid Admin ID or Passkey. Please try again.");
    }
  };

  const handleFacultyLogin = () => {
    navigate("/teacherdashboard"); // Redirect to teacher dashboard
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
          <h2 style={styles.title}>Welcome Admin!</h2>
          {error && <div style={styles.errorMessage}>{error}</div>}
          {/* Admin Login Form */}
          <form onSubmit={handleAdminLogin}>
            <input
              type="id"
              placeholder="Enter Admin Id"
              style={styles.inputField}
              value={adminID}
              onChange={(e) => setAdminID(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Admin PassKey"
              style={styles.inputField}
              value={adminPasskey}
              onChange={(e) => setAdminPasskey(e.target.value)}
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
              Sign in
            </button>
          </form>
          {/* Faculty Login Button */}
          <button
            type="button"
            onClick={handleFacultyLogin}
            style={styles.button}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                styles.buttonHover.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = styles.button.backgroundColor)
            }
          >
            Continue as Faculty
          </button>
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

export default AdminFacultyCheck;
