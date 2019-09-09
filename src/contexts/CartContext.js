import { createContext } from 'react';

const CartContext = createContext();
export const CartConsumer = CartContext.Consumer;
export const CartProvider = CartContext.Provider;
export default CartContext;
