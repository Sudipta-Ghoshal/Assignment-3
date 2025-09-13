import { useContext } from 'react';
import { CartContext, ProductContext } from "../context";
import { updateQuantity } from '../reducers/CartReducer';

export default function Counter({ item }) {
    const { products, setProducts } = useContext(ProductContext);
    const { cartData, setCartData } = useContext(CartContext);

    console.log(item.left);



    return (
        <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={() => updateQuantity(item, -1, cartData, setCartData, products, setProducts)}>−</button>
            <span className="text-sm">{item.quantity}</span>
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={() => updateQuantity(item, +1, cartData, setCartData, products, setProducts)}>+</button>
        </div>
    );
}