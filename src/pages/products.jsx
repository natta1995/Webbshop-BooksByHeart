import React from "react"
import { Link } from "react-router-dom";

const ProductPage = () => {
    
    const products = [
      { id: 1, name: "Produkt 1", image: "/bilder/produkt1.jpg" },
      { id: 2, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 3, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 4, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 5, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 6, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 7, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 8, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 9, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 10, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 11, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
      { id: 12, name: "Produkt 2", image: "/bilder/produkt2.jpg" },
    ];
  
    return (
      <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ width: "300px", height: "300px", margin: "10px", border: "1px solid #ccc", padding: "20px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "10px" }} />
              <p>{product.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  export default ProductPage