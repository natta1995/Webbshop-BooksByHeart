import React from "react"
import { Link } from "react-router-dom";
import products from "../database"
import {Button} from "react-bootstrap"

const ProductPage = () => {
    
    return (
      <div style={{ marginTop: "100px", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit",  width: "400px", margin: "10px" }}>
            <div style={{ width: "320px", height: "400px", margin: "10px", padding: "0px", textAlign: "center" }}>
              <img src={product.image} alt={product.name} style={{ width: "300px", height: "400px", marginBottom: "10px", border: "3px solid black" }} />
            
            </div>
            <h4>{product.name}</h4>
            <h6>{product.by}</h6>
            <h6>{product.sort}</h6>
            <h5>{product.cost}</h5>
            <Button style={{backgroundColor: "red", borderColor: "red", justifyContent: "center", width: "90%"}}>Köp</Button>
          </Link>
          
        ))}
          
      </div>
    );
  }

  export default ProductPage