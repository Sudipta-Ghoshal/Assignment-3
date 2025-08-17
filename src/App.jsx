import { useState } from 'react'
import Announcement from "./Announcement"

import { CartContext, ProductContext } from './context'
import { getAllProducts } from './data/products'
import Footer from "./Footer"
import Header from "./Header"
import NewsLetter from "./NewsLetter"
import Cart from "./product/Cart"
import ProductList from "./product/ProductList"


function App() {

  const initialData = getAllProducts();

  const [cartData, setCartData] = useState([]);
  const [products, setProducts] = useState(initialData);


  return (
    <>
      <CartContext.Provider value={{ cartData, setCartData }}>
        <ProductContext.Provider value={{ products, setProducts }}>
          <Announcement />
          <Header />
          <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ProductList />
              <Cart />
            </div>
          </main>
          <NewsLetter />
          <Footer />
        </ProductContext.Provider>
      </CartContext.Provider>
    </>
  )
}

export default App
