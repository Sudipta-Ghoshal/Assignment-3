
import { useContext } from 'react';
import { CartContext, ProductContext } from "../context";
import { getImgUrl } from "../utils/img-utility";
import Counter from './Counter';

export default function CartList({ item }) {

    const { products, setProducts } = useContext(ProductContext);
    const { cartData, setCartData } = useContext(CartContext);



    function handelAddQuentity() {
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

    function handelRemoveQuentity() {
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


    function handelRemoveProduct(item) {
        const nextProduct = products.map((product) => {
            if (product.id === item.id) {
                return {
                    ...product,
                    stock: item.stock
                }
            } else {
                return product;
            }
        })

        setProducts(nextProduct)

        const nextCartData = cartData.filter((data) => {
            return data.id !== item.id;
        })

        setCartData(nextCartData)
    }



    return (
        <>
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
                <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                    <img src={getImgUrl(item.thumbnail)} alt={item.title}
                        className="h-full w-auto object-cover"></img>
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between">
                        <h3 className="font-medium">{item.title}</h3>
                        <a href="#" className="text-red-500 text-sm" onClick={() => handelRemoveProduct(item)}>×</a>
                    </div>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                    <div className="flex justify-between items-center mt-2">
                        <p className="font-bold">${item.price}</p>
                        <p>stock{item.stock}</p>
                        <p>quentity{item.quentity}</p>

                        <Counter item={item} onAdd={handelAddQuentity} onRemove={handelRemoveQuentity} />
                    </div>
                </div>
            </div>
        </>
    );
}