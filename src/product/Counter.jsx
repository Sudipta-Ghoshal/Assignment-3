import { useContext } from 'react';
import { CartContext, ProductContext } from "../context";

export default function Counter({ item }) {


    const { products, setProducts } = useContext(ProductContext);
    const { cartData, setCartData } = useContext(CartContext);



    function handelAddQuentity(item) {
        if (item.stock > item.quentity) {
            const nextProduct = products.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        stock: i.stock - 1,
                    }
                } else {
                    return i
                }
            })
            setProducts(nextProduct)

            const nextCartData = cartData.map((data) => {
                if (data.id === item.id) {
                    return {
                        ...data,
                        quentity: data.quentity + 1
                    }
                } else {
                    return data
                }
            })

            setCartData(nextCartData)
        }
    }

    function handelRemoveQuentity(item) {
        if (item.quentity > 1) {
            const nextProduct = products.map((i) => {
                if (i.id === item.id) {
                    return {
                        ...i,
                        stock: i.stock + 1,
                        quentity: item.quentity - 1
                    }
                } else {
                    return i
                }
            })
            setProducts(nextProduct)

            const nextCartData = cartData.map((data) => {
                if (data.id === item.id) {
                    return {
                        ...data,
                        quentity: data.quentity - 1
                    }
                } else {
                    return data
                }
            })

            setCartData(nextCartData)
        }
    }

    return (
        <div className="flex items-center space-x-2">
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={() => handelRemoveQuentity(item)}>−</button>
            <span className="text-sm">{item.quentity}</span>
            <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center" onClick={() => handelAddQuentity(item)}>+</button>
        </div>
    );
}