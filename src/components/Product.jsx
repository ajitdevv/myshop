import { useDispatch } from "react-redux";
import { additem, removeitem } from "../redux/slice";
import { useEffect } from "react";
// import fetchproducts from "../redux/dummyproducts";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 1",
    price: 199,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 2",
    price: 299,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 3",
    price: 399,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 4",
    price: 499,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 5",
    price: 599,
  },
  {
    id: 6,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 6",
    price: 699,
  },
  {
    id: 7,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 7",
    price: 799,
  },
  {
    id: 8,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 8",
    price: 899,
  },
  {
    id: 9,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 9",
    price: 999,
  },
  {
    id: 10,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 10",
    price: 1099,
  },

  {
    id: 11,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 11",
    price: 1199,
  },
  {
    id: 12,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 12",
    price: 1299,
  },
  {
    id: 13,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 13",
    price: 1399,
  },
  {
    id: 14,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 14",
    price: 1499,
  },
  {
    id: 15,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 15",
    price: 1599,
  },
  {
    id: 16,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 16",
    price: 1699,
  },
  {
    id: 17,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 17",
    price: 1799,
  },
  {
    id: 18,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 18",
    price: 1899,
  },
  {
    id: 19,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 19",
    price: 1999,
  },
  {
    id: 20,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 20",
    price: 2099,
  },

  {
    id: 21,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 21",
    price: 2199,
  },
  {
    id: 22,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 22",
    price: 2299,
  },
  {
    id: 23,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 23",
    price: 2399,
  },
  {
    id: 24,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 24",
    price: 2499,
  },
  {
    id: 25,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 25",
    price: 2599,
  },
  {
    id: 26,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 26",
    price: 2699,
  },
  {
    id: 27,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 27",
    price: 2799,
  },
  {
    id: 28,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 28",
    price: 2899,
  },
  {
    id: 29,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 29",
    price: 2999,
  },
  {
    id: 30,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 30",
    price: 3099,
  },

  {
    id: 31,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 31",
    price: 3199,
  },
  {
    id: 32,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 32",
    price: 3299,
  },
  {
    id: 33,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 33",
    price: 3399,
  },
  {
    id: 34,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 34",
    price: 3499,
  },
  {
    id: 35,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 35",
    price: 3599,
  },
  {
    id: 36,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 36",
    price: 3699,
  },
  {
    id: 37,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 37",
    price: 3799,
  },
  {
    id: 38,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 38",
    price: 3899,
  },
  {
    id: 39,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 39",
    price: 3999,
  },
  {
    id: 40,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 40",
    price: 4099,
  },

  {
    id: 41,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 41",
    price: 4199,
  },
  {
    id: 42,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 42",
    price: 4299,
  },
  {
    id: 43,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 43",
    price: 4399,
  },
  {
    id: 44,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 44",
    price: 4499,
  },
  {
    id: 45,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 45",
    price: 4599,
  },
  {
    id: 46,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 46",
    price: 4699,
  },
  {
    id: 47,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 47",
    price: 4799,
  },
  {
    id: 48,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 48",
    price: 4899,
  },
  {
    id: 49,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 49",
    price: 4999,
  },
  {
    id: 50,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 50",
    price: 5099,
  },

  {
    id: 51,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 51",
    price: 5199,
  },
  {
    id: 52,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 52",
    price: 5299,
  },
  {
    id: 53,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 53",
    price: 5399,
  },
  {
    id: 54,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 54",
    price: 5499,
  },
  {
    id: 55,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 55",
    price: 5599,
  },
  {
    id: 56,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 56",
    price: 5699,
  },
  {
    id: 57,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 57",
    price: 5799,
  },
  {
    id: 58,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 58",
    price: 5899,
  },
  {
    id: 59,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 59",
    price: 5999,
  },
  {
    id: 60,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 60",
    price: 6099,
  },

  {
    id: 61,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 61",
    price: 6199,
  },
  {
    id: 62,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 62",
    price: 6299,
  },
  {
    id: 63,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 63",
    price: 6399,
  },
  {
    id: 64,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 64",
    price: 6499,
  },
  {
    id: 65,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 65",
    price: 6599,
  },
  {
    id: 66,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 66",
    price: 6699,
  },
  {
    id: 67,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 67",
    price: 6799,
  },
  {
    id: 68,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 68",
    price: 6899,
  },
  {
    id: 69,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 69",
    price: 6999,
  },
  {
    id: 70,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 70",
    price: 7099,
  },

  {
    id: 71,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 71",
    price: 7199,
  },
  {
    id: 72,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 72",
    price: 7299,
  },
  {
    id: 73,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 73",
    price: 7399,
  },
  {
    id: 74,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 74",
    price: 7499,
  },
  {
    id: 75,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 75",
    price: 7599,
  },
  {
    id: 76,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 76",
    price: 7699,
  },
  {
    id: 77,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 77",
    price: 7799,
  },
  {
    id: 78,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 78",
    price: 7899,
  },
  {
    id: 79,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 79",
    price: 7999,
  },
  {
    id: 80,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 80",
    price: 8099,
  },

  {
    id: 81,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 81",
    price: 8199,
  },
  {
    id: 82,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 82",
    price: 8299,
  },
  {
    id: 83,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 83",
    price: 8399,
  },
  {
    id: 84,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 84",
    price: 8499,
  },
  {
    id: 85,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 85",
    price: 8599,
  },
  {
    id: 86,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 86",
    price: 8699,
  },
  {
    id: 87,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 87",
    price: 8799,
  },
  {
    id: 88,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 88",
    price: 8899,
  },
  {
    id: 89,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 89",
    price: 8999,
  },
  {
    id: 90,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 90",
    price: 9099,
  },

  {
    id: 91,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 91",
    price: 9199,
  },
  {
    id: 92,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 92",
    price: 9299,
  },
  {
    id: 93,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 93",
    price: 9399,
  },
  {
    id: 94,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 94",
    price: 9499,
  },
  {
    id: 95,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 95",
    price: 9599,
  },
  {
    id: 96,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 96",
    price: 9699,
  },
  {
    id: 97,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 97",
    price: 9799,
  },
  {
    id: 98,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 98",
    price: 9899,
  },
  {
    id: 99,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 99",
    price: 9999,
  },
  {
    id: 100,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
    name: "Product 100",
    price: 10099,
  },
];
export default function Product() {
  const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchproducts());
//   }, []); 
  return (
    <div className="min-h-screen bg-gray-800 p-6">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 w-fit rounded-lg shadow-md"
          >
            <img
              src="{product.image}"
              className="rounded-lg drop-shadow-lg"
              alt={product.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300";
              }}
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">₹{product.price}</p>
            <button
              onClick={() => dispatch(additem(1))}
              className="mt-4 font-bold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeitem(1))}
              className="ml-4 mt-4 font-bold bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Remove to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
