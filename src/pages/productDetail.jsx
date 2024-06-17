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
          <img src={product.image} alt={product.name} style={{ maxWidth: "100%" }} />
        </div>
      )}
      <div style={{ flex: 1 }}>
        <h1>{product.name}</h1>
        <p>{product.des}</p>
        {product && (
          <div>
            <p>Pris: {product.cost}</p>
            <Button style={{backgroundColor: "red", borderColor: "red"}}> Köp </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;


