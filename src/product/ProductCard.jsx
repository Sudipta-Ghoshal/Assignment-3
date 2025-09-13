
import { useContext } from 'react';
import { CartContext, ProductContext } from "../context";
import { addToCart, removeFromCart } from '../reducers/CartReducer';
import { getImgUrl } from "../utils/img-utility";
import Rating from './Rating';

export default function ProductCard({ product }) {

    const { cartData, setCartData } = useContext(CartContext);
    const { products, setProducts } = useContext(ProductContext);

    const found = cartData.find((data) => data.id === product.id)

    let button;

    if (!found) {
        button = <button type="button" className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed  w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1
         transition-all active:bg-gray-900" onClick={() => addToCart(product, cartData, setCartData, products, setProducts)} disabled={product.stock <= 0} >Add to Cart</button>
    } else {
        button = <button type="button" onClick={() => removeFromCart(product, cartData, setCartData, products, setProducts)} className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"> Remove from Cart</button >
    }




    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img src={getImgUrl(product.thumbnail)}
                    className="h-full w-auto object-cover"></img>
            </div>

            <div className="p-4">
                <h3 className="font-medium">{product.title}</h3>
                <div className="flex items-center justify-between">
                    <Rating rating={product.rating} />
                    <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
                </div>
                <p className="font-bold">${product.price}</p>
                {
                    button
                }
            </div>
        </div>
    );
}