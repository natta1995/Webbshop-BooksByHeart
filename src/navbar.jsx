
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function Navbar() {
    const [searchTerm, setSearchTerm] = useState(""); // Tillstånd för söktermen
    const navigate = useNavigate();
  
    // Hantera sökning och navigering till detaljsidan
    const handleSearch = () => {
      // Om söktermen är tom, gör ingenting
      if (!searchTerm.trim()) return;
  
      // Navigera till detaljsidan för den sökta boken med söktermen som sökväg
      navigate(`/product/${searchTerm}`);
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" sx={{marginBottom: "0px"}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">BooksByHeart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Hem</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Böcker</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Kontakt</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bookclub">Bokklubb</Link>
              </li>
            </ul>
            <div style={{ marginTop: "1px", textAlign: "center" }}>
      <Form style={{ marginTop: "20px" , marginLeft: "600px" }} onSubmit={handleSearch}>
        <InputGroup className="mb-3" style={{width: "400px"}}>
          <FormControl
            placeholder="Sök efter en bok..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Sök
          </Button>
        </InputGroup>
      </Form>
      </div>
          </div>
        </div>
      </nav>
    );
  }


export default Navbar