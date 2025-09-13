

import Announcement from "./Announcement";
import Footer from "./Footer";
import Header from "./Header";
import NewsLetter from "./NewsLetter";
import Cart from "./product/Cart";
import ProductList from "./product/ProductList";



export default function Page() {
    return (
        <>
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
        </>
    );
}