import { createContext } from 'react';

const ProductContext = createContext();
export const ProductConsumer = ProductContext.Consumer;
export const ProductProvider = ProductContext.Provider;
export default ProductContext;
