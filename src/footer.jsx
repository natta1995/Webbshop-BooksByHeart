import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center", marginTop: "100px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto"  }}>
        <h4>Kontaktinformation</h4>
        <p>Telefon: 123-456-789</p>
        <p>E-post: info@example.com</p>
        <p>Adress: 123 Street, City, Country</p>
      </div>
    </footer>
  );
}

export default Footer;