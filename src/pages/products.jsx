import React, {useState} from "react"
import { Link } from "react-router-dom";
import products from "../books"
import {Button} from "react-bootstrap"

const ProductPage = () => { 
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = products.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
      <>
      <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {currentBooks.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit",  width: "400px", margin: "10px" }}>
            <div style={{ position: "relative", width: "320px", height: "400px", margin: "10px", padding: "0px", textAlign: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "300px", height: "400px", marginBottom: "10px", border: "3px solid black" }} />
            <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.0)", color: "white", padding: "10px" }}>
              <h4 style={{ margin: "0" , color: "black" }}>{product.name}</h4>
              <h6 style={{ margin: "0" ,  color: "black" }}>{product.by}</h6>
            </div>
          </div>
            <h4>{product.name}</h4>
            <h6>{product.by}</h6>
            <h6>{product.sort}</h6> 
            <h5>{product.cost}</h5>
          </Link>
          
        ))}
          
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} style={{ marginRight: '10px' }}>Föregående</button>
        )}
        {indexOfLastBook < products.length && (
          <button onClick={() => paginate(currentPage + 1)}>Nästa</button>
        )}
      </div>
      </>
    );
  }

  export default ProductPage