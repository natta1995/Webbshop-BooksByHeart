import React from "react"
import { Link } from "react-router-dom";
import products from "../database"
import {Button} from "react-bootstrap"

const ProductPage = () => {
    
  
    return (
      <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit", border: "1px, solid, black",  width: "400px", margin: "10px" }}>
            <div style={{ width: "320px", height: "400px", margin: "10px", padding: "0px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ maxWidth: "100%", maxHeight: "100%", marginBottom: "10px" }} />
            
            </div>
            <p>{product.name}</p>
            <p>{product.cost}</p>
            <Button style={{backgroundColor: "red", borderColor: "red", justifyContent: "right"}}>Köp</Button>
          </Link>
    
        ))}
          
      </div>
    );
  }

  export default ProductPage