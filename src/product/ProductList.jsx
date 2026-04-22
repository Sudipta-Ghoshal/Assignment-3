import { useContext, useState } from "react";
import { ProductContext, SearchContext } from "../context";
import ProductCard from "./ProductCard";
import Short from "./Sort";

export default function ProductList() {
  const { products } = useContext(ProductContext);
  const { searchTerm } = useContext(SearchContext);
  const [sort, setSort] = useState("MostPopular");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "newest":
        return Date.parse(b.mfd) - Date.parse(a.mfd);
      case "LowToHigh":
        return a.price - b.price;
      case "HighToLow":
        return b.price - a.price;
      default:
        return b.rating - a.rating;
    }
  });

  function handleSort(value) {
    setSort(value);
  }

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <label htmlFor="sortBy" className="text-sm">
            Sort by:
          </label>
          <Short onSort={handleSort} />
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.length === 0 ? (
          <h2 className="text-3xl font-bold text-center col-span-3 pt-28">
            No result found
          </h2>
        ) : (
          sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
