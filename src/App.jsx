import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { CartContext, ProductContext, SearchContext } from "./context";
import { getAllProducts } from "./data/products";
import Page from "./Page";
import { cartReducer } from "./reducers/CartReducer";

function App() {
  const [products] = useState(() => getAllProducts());
  const [cartData, dispatchCart] = useReducer(cartReducer, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <CartContext.Provider value={{ cartData, dispatchCart }}>
        <ProductContext.Provider value={{ products }}>
          <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <Page />
            <ToastContainer
              position="bottom-right"
              newestOnTop
              autoClose={2000}
            />
          </SearchContext.Provider>
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;
