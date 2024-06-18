import { useParams } from "react-router-dom";
import { getProductById } from "../database";
import { Button } from "react-bootstrap"

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);


  return (
    <div style={{ marginTop: "20px", marginLeft: "20px", display: "flex" }}>
      {product && (
        <div style={{ flex: 1 }}>
          <img src={product.image} alt={product.name} style={{ width: "400px", height: "500px", border: "3px solid black" }} />
        </div>
      )}
      <div style={{ flex: 1, marginLeft: "-35%"}}>
        <h1>{product.name}</h1>
        <h2>{product.by}</h2>
        <h6>{product.age}</h6>
        <h6>{product.sort}</h6>
        <h6>{product.des}</h6>
        {product && (
          <div>
            <h3>Pris: {product.cost}</h3>
            <Button style={{backgroundColor: "red", borderColor: "red"}}> Köp </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;


