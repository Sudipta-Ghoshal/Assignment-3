import { useContext, useState } from 'react';
import { ProductContext, SearchContext } from "../context";
import ProductCard from "./ProductCard";
import Short from './Sort';

export default function ProductList() {

    const { products } = useContext(ProductContext);
    const { searchTerm } = useContext(SearchContext);

    const [sort, setSort] = useState('');

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    switch (sort) {
        case 'newest':
            products.sort((a, b) => Date.parse(b.mfd) - Date.parse(a.mfd));
            break;
        case 'LowToHigh':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'HighToLow':
            products.sort((a, b) => b.price - a.price);
            break;
        default:
            products.sort((a, b) => b.rating - a.rating);
            break;
    }

    function handelSort(value) {
        setSort(value)
    }

    return (
        <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Your Products</h2>
                <div className="flex items-center space-x-2">
                    <span className="text-sm">Sort by:</span>
                    <Short onSort={handelSort} />
                </div>
            </div>


            <div className="product-grid">
                {
                    filteredProducts.length === 0 ?
                        (<h2 className="text-3xl font-bold text-center col-span-3 pt-28">No result found</h2>) :

                        (filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        )))
                }
            </div>
        </div>
    );
}