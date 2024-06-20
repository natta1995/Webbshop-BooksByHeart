import { useParams } from "react-router-dom";
import { getProductById } from "../database";
import { Button } from "react-bootstrap"

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);


  return (
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
      {product && (
        
        <div style={{ flex: 1, position: "relative" }}>
        <img src={product.image} alt={product.name} style={{ width: "400px", height: "500px", border: "3px solid black" }} />
        <div style={{ position: "absolute", bottom: "0", left: "0", width: "100%", backgroundColor: "rgba(0, 0, 0, 0.0)", color: "white" , padding: "5%" }}>
          <h4 style={{ margin: "0", color: "black" }}>{product.name}</h4>
          <h6 style={{ margin: "0", color: "black" }}>{product.by}</h6>
        </div>
      </div>
      )}
      <div style={{ flex: 1, marginLeft: "-35%"}}>
        <h1>{product.name}</h1>
        <h2 style={{paddingBottom: "2%"}}>Av: {product.by}</h2>
        <h6>Ålder: {product.age}</h6>
        <h6>Produkt: Bok</h6>
        <h6>Typ: {product.sort}</h6>
        <h6 style={{paddingTop: "2%"}}>Beskrivning:</h6>
        <h6>{product.des}</h6>
        {product && (
          <div>
            <h3>Pris: {product.cost}</h3>
            <Button style={{backgroundColor: "red", borderColor: "red", marginTop: "2%"}}> Köp </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;


