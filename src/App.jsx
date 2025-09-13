import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { CartContext, ProductContext, SearchContext } from './context';
import { getAllProducts } from './data/products';
import Page from './Page';



function App() {

  const initialData = getAllProducts();

  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');


  return (
    <>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            <Page />
            <ToastContainer position="bottom-right" newestOnTop autoClose={2000} />
          </SearchContext.Provider>
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  )
}

export default App
