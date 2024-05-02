import React from "react"
import { Link } from "react-router-dom";
import BookImg from "../img/book.webp"

const ProductPage = () => {
    
    const products = [
      { id: 1, name: "Mannen som lekte med elden", image: BookImg, cost: "69:-" },
      { id: 2, name: "Molly, den lilla musen", image: BookImg, cost: "129:-" },
      { id: 3, name: " 2 + 7 = 19 ?", image: BookImg, cost: "247:-" },
      { id: 4, name: "Sandra Larsson - en livshistoria", image: BookImg, cost: "59:-" },
      { id: 5, name: "Självkänsla, självförtroende och självförståelse", image: BookImg, cost: "99:-" },
      { id: 6, name: "Sagan om de två sandslotten", image: BookImg, cost: "349:-"},
      { id: 7, name: "Mellan jord och himmel", image: BookImg, cost: "126:-"},
      { id: 8, name: "På liv och död", image: BookImg , cost: "89:-"},
      { id: 9, name: "En polis memoarer", image: BookImg , cost: "169:-"},
      { id: 10, name: "Kalle och Emma", image: BookImg , cost: "149:-"},
      { id: 11, name: "Första tiden som förälder", image: BookImg , cost: "269:-"},
      { id: 12, name: "Allt om trädgård", image: BookImg , cost: "179:-"},
    ];
  
    return (
      <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "300px", height: "300px", margin: "10px", border: "1px solid #ccc", padding: "20px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "10px" }} />
              <p>{product.name}</p>
              <p>{product.cost}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  export default ProductPage