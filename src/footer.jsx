import React from "react";

const Footer = () => {
  return (
  <footer style={{ backgroundColor: "#f0f0f0", padding: "20px", textAlign: "center", marginTop: "100px" }}>
    <div style={{ display: "flex", justifyContent: "space-around", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ maxWidth: "400px", margin: "0 20px" }}>
        <h5>Kontaktinformation</h5>
        <p>Telefon: 123-456-789</p>
        <p>E-post: info@example.com</p>
        <p>Adress: 123 Street, City, Country</p>
      </div>
      <div style={{ maxWidth: "400px", margin: "0 20px" }}>
        <h5>Om oss</h5>
        <p>Jobba hos oss</p>
        <p>Community</p>
        <p>Vanliga frågor</p>
      </div>
      <div>
        <h5>Säkerhet</h5>
        <p>Våra riktlinjer</p>
        <p>Reklamation</p>
        <p>Cookies</p>
        </div>
    </div>
  </footer>
  )
}

export default Footer;