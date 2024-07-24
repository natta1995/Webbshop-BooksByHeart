import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const footerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    marginTop: "10%"
  };

  const containerStyle = {
    display: "flex",
    justifyContent: isMobile ? "center" : "space-between",
    flexDirection: isMobile ? "column" : "row",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: isMobile ? "center" : "left",
    gap: isMobile ? "20px" : "60px",
  };

  const sectionStyle = {
    marginBottom: isMobile ? "20px" : "0",
    
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h5>Kontaktinformation</h5>
          <p>Telefon: 123-456-789</p>
          <p>E-post: info@example.com</p>
          <p>Adress: 123 Street, City, Country</p>
        </div>
        <div style={sectionStyle}>
          <h5>Om oss</h5>
          <p>Jobba hos oss</p>
          <p>Community</p>
          <p>Vanliga frågor</p>
        </div>
        <div style={sectionStyle}>
          <h5>Säkerhet</h5>
          <p>Våra riktlinjer</p>
          <p>Reklamation</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
