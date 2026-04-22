export default function Short({ onSort }) {
  return (
    <select
      id="sortBy"
      className="border rounded-md px-2 py-1 text-sm"
      onChange={(e) => onSort(e.target.value)}
    >
      <option value="MostPopular">Most Popular</option>
      <option value="newest">Newest</option>
      <option value="LowToHigh">Price: Low to High</option>
      <option value="HighToLow">Price: High to Low</option>
    </select>
  );
}
