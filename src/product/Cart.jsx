import { useContext } from 'react';
import { CartContext } from '../context';
import CartList from './CartList';
import OrderSummary from "./OrderSummary";

export default function Cart() {

    const { cartData } = useContext(CartContext);

    return (
        <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

                {
                    cartData.length > 0 ?
                        (cartData.map((item) => (<CartList key={item.id} item={item} />))) :
                        (<p className="text-2xl font-bold">Your Cart is Empty</p>)
                }

                <OrderSummary />
            </div>
        </div>
    );
}