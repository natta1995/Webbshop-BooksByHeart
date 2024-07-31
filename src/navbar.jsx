import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, InputGroup,  Navbar as BootstrapNavbar, Nav, Container, Dropdown } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components";
import booksData from "./books"
import { useCart } from "./cartContext"; 
import Cart from "./pages/cart"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



function Navbar() {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [showCart, setShowCart] = useState(false); 
    const { cart } = useCart(); 

    const navigate = useNavigate();
    const searchRef = useRef();


    const DropdownMenu = styled(Dropdown.Menu)`
    position: absolute;
    margin-left: 67%;
    margin-right: 0%;
    padding: 0%;
    width: 23%;
    max-height: 300px;
    overflow-y: auto;
    z-index: 1000;
  `;

  const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  margin-left: 1rem;
  display: flex;
  align-items: center;

  span {
  position: absolute;
  top: -5px;
  right: -10px;
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
}
`;



  
    const handleSearch = (e) => {
      e.preventDefault();
     
      if (!searchTerm.trim()) return;
  
      const book = booksData.find((book) => 
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

      if (book) {
        navigate(`/product/${book.id}`);
        setFilteredBooks([]);
        setSearchTerm("");
      } else {
        alert("Ingen bok hittades med den söktermen.");
      }
    };

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

    const handleBookSelect = (book) => {
      setSearchTerm(book.name);
      setFilteredBooks([]); 
      navigate(`/product/${book.id}`);
      setSearchTerm("");
    };

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setFilteredBooks([]);
        }
      };
    
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    

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
                <Nav.Link as={Link} to="/bookclub/apply">Ansökan</Nav.Link>
              </Nav>
              <Form className="d-flex" onSubmit={handleSearch} ref={searchRef}>
                <InputGroup>
                  <FormControl
                    placeholder="Sök efter en bok..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    style={{width: "300px", color: "black", boxShadow: "none"}}
                  />
                  <Button variant="primary" type="submit">
                    Sök
                  </Button>
                </InputGroup>
                {filteredBooks.length > 0 && (
                  <DropdownMenu show>
                    {filteredBooks.map((book) => (
                      <Dropdown.Item
                        as={Link}
                        to={`/product/${book.id}`}
                        key={book.id}
                        onClick={() => handleBookSelect(book)}
                      >
                        <img src={book.image} alt={book.name} style={{ width: "40px", height: "50px", border: "3px solid black", marginRight: "20px" }} />
                         {book.name}
                      </Dropdown.Item>
                    ))}
                  </DropdownMenu>
                )}
              </Form>
              <CartIcon onClick={() => setShowCart(!showCart)}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {cart.length > 0 && <span>{cart.length}</span>}
          </CartIcon>
            </BootstrapNavbar.Collapse>
          </Container>
          {showCart && <Cart />}
        </BootstrapNavbar>
      );
  }


export default Navbar