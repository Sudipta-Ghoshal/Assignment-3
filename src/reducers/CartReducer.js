
import { toast } from "react-toastify";

/** Add an item to cart */
export function addToCart(item, cartData, setCartData, products, setProducts) {

    const found = cartData.find((p) => p.id === item.id);

    if (!found) {
        // reduce stock
        setProducts(products.map(p =>
            p.id === item.id ? { ...p, stock: p.stock - 1 } : p
        ));

        // add item with quantity 1
        setCartData([{ ...item, quantity: 1 }, ...cartData]);
        toast.success(`${item.title} added to the cart`);
    } else {
        // increase quantity
        updateQuantity(item, +1, cartData, setCartData, products, setProducts);
        toast.info(`Increased quantity of ${item.title}`);
    }
}

/** Remove item completely from cart */
export function removeFromCart(item, cartData, setCartData, products, setProducts) {
    // restore stock
    setProducts(products.map(p =>
        p.id === item.id ? { ...p, stock: p.stock + item.quantity } : p
    ));

    // remove from cart
    setCartData(cartData.filter(p => p.id !== item.id));
    toast.error(`${item.title} removed from the cart`);
}

/** Update item quantity*/
export function updateQuantity(item, change, cartData, setCartData, products, setProducts) {
    const product = products.find((p) => p.id === item.id);
    if (!product) return;

    if (change === +1 && product.stock === 0) return; // no stock
    if (change === -1 && item.quantity <= 1) return; // prevent 0

    // update stock
    setProducts(products.map(p =>
        p.id === item.id ? { ...p, stock: p.stock - change } : p
    ));

    // update cart
    setCartData(cartData.map(c =>
        c.id === item.id ? { ...c, quantity: c.quantity + change } : c
    ));
}
