import React from "react"
import { Link } from "react-router-dom";
import products from "../database"

const ProductPage = () => {
    
  
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