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
        <h1>Produktinformation</h1>
        <p>Detaljer för produkt med ID {id}</p>
        {product && (
          <div>
            <p>Namn: {product.name}</p>
            <p>Kostnad: {product.cost}</p>
            <Button style={{backgroundColor: "red", borderColor: "red"}}> Köp </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;


