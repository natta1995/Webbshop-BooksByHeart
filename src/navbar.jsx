import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, InputGroup,  Navbar as BootstrapNavbar, Nav, Container, Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import booksData from "./database"

function Navbar() {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredBooks, setFilteredBooks] = useState([]);
    const navigate = useNavigate();
  
    const handleSearch = (e) => {
      e.preventDefault();
     
      if (!searchTerm.trim()) return;
  
      const book = booksData.find((book) => 
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

      if (book) {
        navigate(`/product/${book.id}`);
      } else {
        alert("Ingen bok hittades med den söktermen.");
      }
    };

    // Hantera dynamisk filtrering av böcker baserat på söktermen
    const handleInputChange = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      if (term.trim()) {
        const filtered = booksData.filter((book) =>
          book.name.toLowerCase().startsWith(term.toLowerCase())
        );
        setFilteredBooks(filtered);
      } else {
        setFilteredBooks([]);
      }
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
                    onChange={handleInputChange}
                  />
                  <Button variant="primary" type="submit">
                    Sök
                  </Button>
                </InputGroup>
                {filteredBooks.length > 0 && (
                  <Dropdown.Menu show>
                    {filteredBooks.map((book) => (
                      <Dropdown.Item
                        as={Link}
                        to={`/product/${book.id}`}
                        key={book.id}
                        onClick={() => setSearchTerm(book.name)}
                      >
                        {book.name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                )}
              </Form>
            </BootstrapNavbar.Collapse>
          </Container>
        </BootstrapNavbar>
      );
  }


export default Navbar