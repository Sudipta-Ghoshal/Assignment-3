
import { toast } from "react-toastify";

export const CART_ACTIONS = {
    ADD_ITEM: "cart/add-item",
    REMOVE_ITEM: "cart/remove-item",
    UPDATE_QUANTITY: "cart/update-quantity",
};

export function cartReducer(cartData, action) {
    switch (action.type) {
        case CART_ACTIONS.ADD_ITEM: {
            const item = action.payload;
            const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

            if (!existingItem) {
                return [{ ...item, quantity: 1 }, ...cartData];
            }

            if (existingItem.quantity >= item.stock) {
                return cartData;
            }

            return cartData.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        }

        case CART_ACTIONS.REMOVE_ITEM:
            return cartData.filter((cartItem) => cartItem.id !== action.payload.id);

        case CART_ACTIONS.UPDATE_QUANTITY: {
            const { itemId, change, stock } = action.payload;

            return cartData.map((cartItem) => {
                if (cartItem.id !== itemId) {
                    return cartItem;
                }

                const nextQuantity = cartItem.quantity + change;

                if (nextQuantity < 1 || nextQuantity > stock) {
                    return cartItem;
                }

                return { ...cartItem, quantity: nextQuantity };
            });
        }

        default:
            return cartData;
    }
}

export function getCartQuantity(cartData, itemId) {
    const cartItem = cartData.find((item) => item.id === itemId);
    return cartItem?.quantity ?? 0;
}

export function getAvailableStock(item, cartData) {
    return item.stock - getCartQuantity(cartData, item.id);
}

export function addToCart(item, cartData, dispatchCart) {
    const currentQuantity = getCartQuantity(cartData, item.id);

    if (currentQuantity >= item.stock) {
        toast.error(`${item.title} is out of stock`);
        return;
    }

    dispatchCart({
        type: CART_ACTIONS.ADD_ITEM,
        payload: item,
    });

    if (currentQuantity === 0) {
        toast.success(`${item.title} added to the cart`);
        return;
    }

    toast.info(`Increased quantity of ${item.title}`);
}

export function removeFromCart(item, dispatchCart) {
    dispatchCart({
        type: CART_ACTIONS.REMOVE_ITEM,
        payload: item,
    });

    toast.error(`${item.title} removed from the cart`);
}

export function updateQuantity(item, change, dispatchCart) {
    const nextQuantity = item.quantity + change;

    if (nextQuantity < 1) {
        return;
    }

    if (nextQuantity > item.stock) {
        toast.error(`No more ${item.title} in stock`);
        return;
    }

    dispatchCart({
        type: CART_ACTIONS.UPDATE_QUANTITY,
        payload: {
            itemId: item.id,
            change,
            stock: item.stock,
        },
    });
}
