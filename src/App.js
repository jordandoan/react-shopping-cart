import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Context
import { ProductProvider } from './contexts/ProductContext';
import { CartProvider } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = index => {
		let newCart = cart.filter((item,idx) => idx != index);
		setCart(newCart);
	}

	return (
		<ProductProvider value={{ products, addItem }}>
			<CartProvider value={{ cart, removeItem }}>
				<div className="App">
					<Navigation/>

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}/>}
					/>
				</div>
			</CartProvider>
		</ProductProvider>
	);
}

export default App;
