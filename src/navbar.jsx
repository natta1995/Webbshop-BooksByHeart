import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, InputGroup,  Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
    
        <BootstrapNavbar bg="light" expand="lg">
          <Container>
            <BootstrapNavbar.Brand as={Link} to="/">BooksByHeart</BootstrapNavbar.Brand>
            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BootstrapNavbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Hem</Nav.Link>
                <Nav.Link as={Link} to="/products">Böcker</Nav.Link>
                <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                <Nav.Link as={Link} to="/bookclub">Bokklubb</Nav.Link>
              </Nav>
              <Form className="d-flex" onSubmit={handleSearch}>
                <InputGroup>
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
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      );
  }


export default Navbar