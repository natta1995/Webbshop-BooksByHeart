import { useParams } from "react-router-dom";
import { getProductById } from "../database";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 20px;
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

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    padding: 20px;
  }

  h1, h2, h6 {
    padding-bottom: 0%;
  }

  h6 {
    padding-top: 0%;
  }
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = getProductById(id);

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
            <Button style={{ backgroundColor: "red", borderColor: "red", marginTop: "2%" }}>Köp</Button>
          </div>
        </ProductInfo>
      )}
    </Container>
  );
};

export default ProductDetailPage;


