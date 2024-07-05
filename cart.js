import React from 'react';
import { useCart } from './CartContext';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
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

const Cart = () => {
  const { cart, dispatch } = useCart();

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <CartContainer>
      <h2>Varukorg</h2>
      {cart.length === 0 ? (
        <p>Din varukorg är tom.</p>
      ) : (
        cart.map(product => (
          <CartItem key={product.id}>
            <span>{product.name}</span>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(product)}>Ta bort</Button>
          </CartItem>
        ))
      )}
      {cart.length > 0 && (
        <Button variant="primary" onClick={() => dispatch({ type: 'CLEAR_CART' })}>Töm varukorg</Button>
      )}
    </CartContainer>
  );
};

export default Cart;
