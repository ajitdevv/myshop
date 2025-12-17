const products = [
  { id: 1, image: "https://imgs.search.brave.com/LRtlbTyb4GnVxGc_P7CCJToplU7XK3kFA0oVyEM3lTk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/Njk0LzEyNi9zbWFs/bC9oZWFkcGhvbmVz/LWlzb2xhdGVkLW9u/LXdoaXRlLWJhY2tn/cm91bmQtYWktZ2Vu/ZXJhdGl2ZS1waG90/by5qcGc", name: "Wireless Headphone", price: 2999 },
  { id: 2, image: "https://imgs.search.brave.com/E94H11H001XcDaMRQT_25HI0Nc7AvQHfDfnDsUIo02U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzMwMC8zMDAveGlm/MHEvc21hcnR3YXRj/aC9pL3IveS8tb3Jp/Z2luYWwtaW1haDI4/emN0N3p6c2hkZy5q/cGVnP3E9OTA", name: "Smart Watch", price: 4999 },
  { id: 3, image: "https://imgs.search.brave.com/klNR2v96bb7BcRC2MvVayRrcnyXPwJqrB83egXLFqZg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zYW5n/aHZpZW50ZXJwcmlz/ZS5pbi93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8wOS9BUlRJ/Uy1TUElDS0VSLTIw/MC53ZWJw", name: "Bluetooth Speaker", price: 1999 },
];
import { useDispatch } from "react-redux";
import { additem } from "../redux/slice";
export default function Product() {
    const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <h1 className="text-2xl font-bold text-center text-white mb-6">
        Simple Add To Cart
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img src={product.image} className="rounded-lg drop-shadow-lg" alt={product.name} />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
            <button onClick={()=>dispatch(additem(1))} className="mt-4 font-bold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
            <button onClick={()=>dispatch(additem(1))} className="ml-4 mt-4 font-bold bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Remove to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
