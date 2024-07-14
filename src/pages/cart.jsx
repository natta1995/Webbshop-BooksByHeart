import React from 'react';
import { useCart } from '../cartContext';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: flex;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
  z-index: 1000;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const CancelButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;


const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const exitButton = () => {
    window.location.reload()
  }

  return (
    <CartContainer>
      <h2>Varukorg</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        cart.map(product => (
          <CartItem key={product.id}>
            <span>{product.name} {product.cost}</span>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(product)}>
            </Button>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
      <ButtonContainer>
        <Button style={{backgroundColor: "green", borderColor: "green"}} variant="primary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Slutför köp</Button>
      </ButtonContainer>
      )}
      <CancelButtonContainer>
      <Button onClick={exitButton}>Avbryt</Button>
      </CancelButtonContainer>
    </CartContainer>
  );
};

export default Cart;
