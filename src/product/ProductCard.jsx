
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { CartContext, ProductContext } from "../context";
import { getAllProducts } from '../data/products';
import { getImgUrl } from "../utils/img-utility";
import Rating from './Rating';

export default function ProductCard({ product }) {

    const { cartData, setCartData } = useContext(CartContext);
    const { products, setProducts } = useContext(ProductContext);

    const found = cartData.find((data) => data.id === product.id)

    function handelAddToCart(item) {
        if (!found) {
            const nextProduct = products.map((product) => {
                if (product.id === item.id) {
                    return {
                        ...product,
                        stock: product.stock - 1
                    }
                } else {
                    return product
                }
            })
            setProducts(nextProduct)

            setCartData(
                [
                    ...cartData,
                    { ...item, quentity: 1 }
                ]
            )
            toast.success(`${item.title} added to the cart`);
        } else {
            console.error(`${item.title} has already added to the cart`)
        }

    }

    function handelRemoveProduct(item) {
        const initialData = getAllProducts();
        const nextProduct = initialData.map((data) => {
            if (data.id === item.id) {
                return {
                    ...data,
                    stock: data.stock
                }
            } else {
                return data;
            }
        })

        setProducts(nextProduct)

        const nextCartData = cartData.filter((data) => {
            return data.id !== item.id;
        })

        setCartData(nextCartData)
        toast.error(`${item.title} removed to the cart`);
    }

    let button;

    if (!found && product.stock === 0) {
        button = <button type="button" className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 py-1 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900" disabled>Add to Cart</button>
    } else if (found) {
        button = <button type="button" onClick={() => handelRemoveProduct(product)
        } className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"> Remove from Cart</button >
    } else {
        button = <button type="button" onClick={() => handelAddToCart(product)} className="w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1
         transition-all active:bg-gray-900">Add to Cart</button>
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