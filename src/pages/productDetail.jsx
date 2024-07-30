import { useParams } from "react-router-dom";
import { getProductById } from "../books";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { useCart } from "../cartContext";

const Container = styled.div`
  margin-top: 80px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 0;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;

  img {
    width: 400px;
    height: 500px;
    border: 3px solid black;

    @media (max-width: 768px) {
      width: 90%;
      height: auto;
    }
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.0);
    color: white;
    padding: 5%;
    

    h4, h6 {
      margin: -20;
      color: black;
    }
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  margin-left: -35%;
  margin-right: 5%;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }

  h1, h2, h6 {
    padding-bottom: 0%;
  }

  h6 {
    padding-top: 0%;
  }
`;

const AddToCartButton = styled(Button)`
  background-color: red;
  border-color: red;
  margin-top: 2%;
  position: relative;
  z-index: 2; 

  
    &:hover {
    background-color: green;
    border-color: green;
  }
`;


const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Container>
      {product && (
        <ImageContainer>
          <img src={product.image} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <h6>{product.by}</h6>
          </div>
        </ImageContainer>
      )}
      {product && (
        <ProductInfo>
          <h1>{product.name}</h1>
          <h2>Av: {product.by}</h2>
          <h6 style={{paddingTop: "2%"}}>Ålder: {product.age}</h6>
          <h6>Produkt: Bok</h6>
          <h6>Typ: {product.sort}</h6>
          <h6 style={{paddingTop: "2%"}}>Beskrivning:</h6>
          <h6>{product.des}</h6>
          <div>
            <h3>Pris: {product.cost}</h3>
            <AddToCartButton  onClick={addToCart}>Köp</AddToCartButton>
          </div>
        </ProductInfo>
      )}
    </Container>
  );
};

export default ProductDetailPage;


