import { useParams } from "react-router-dom";
import { getProductById } from "../database";

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>Produktinformation</h1>
      <p>Detaljer för produkt med ID {id}</p>
      {product && (
        <div>
          <p>Namn: {product.name}</p>
          <p>Kostnad: {product.cost}</p>
          <img src={product.image} alt={product.name} />
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;


