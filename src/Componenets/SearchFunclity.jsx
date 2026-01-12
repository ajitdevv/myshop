import { LucideSearch } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Buttonn, RemoveItemButton, AddItemButton } from "./Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../redux/dummyproducts";
import { additem, removeitem } from "../redux/slice";
const SearchFunclity = () => {
  const [search, setSearch] = useState("");
  const [uisearch, setUisearch] = useState("");
  const [searchresult, setsearchresult] = useState(false);
  const [finalproducts, setfinalproducts] = useState([]);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartproduct = useSelector((state) => state.cart.items);
  const handleItemDetails = (id) => {
    if (!id) {
      return;
    }

    navigation(`/products/${id}`);
  };
  const HeandlSearch = () => {
    setsearchresult(true);
    setUisearch(search);
    const filterproduct = products.filter((e) =>
      e.tags?.some((tag) => tag.toLowerCase() === search.toLowerCase())
    );
    setfinalproducts(filterproduct);
    setSearch(search);
  };
  return (
    <section className="w-full flex flex-col justify-center">
      <div className="flex gap-2 justify-center">
        <div className="w-1/2">
          <input
            className="bg-inner-card w-full h-10 px-3 py-2 border-2  border-accent rounded-2xl "
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search products ...."
          />
        </div>
        <div className="">
          <button
            onClick={HeandlSearch}
            className="size-10 rounded-full flex items-center p-0 m-0 justify-center hover:scale-105 active:bg-inner-card border border-accent"
          >
            <LucideSearch size={20} />
          </button>
        </div>
      </div>
      <div className="w-full">
        {searchresult &&
          (finalproducts.length > 0 ? (
            <div className="flex flex-col gap-3">
              <div className="flex flex-col mt-2 items-start">
                <h1 className="lg:text-2xl">
                  Result According to :{" "}
                  <span className="bold ">{uisearch}</span>
                </h1>
              </div>
              <div className="grid grid-cols-3 max-sm:grid-cols-1 mt-3  gap-6">
                {finalproducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col bg-card p-4 w-fit rounded-lg shadow-md"
                  >
                    <div>
                      <Buttonn
                        onClick={() => handleItemDetails(product.id)}
                        className="cursor-pointer"
                      >
                        <img
                          src={product.thumbnail}
                          className="rounded-lg drop-shadow-lg hover:scale-105 transition-all duration-300"
                          alt={product.name}
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/300";
                          }}
                        />
                      </Buttonn>
                    </div>
                    <hr />
                    <div className="flex flex-col items-start  my-2">
                      <h2 className="text-xl text-foreground font-semibold">
                        {product.title}
                      </h2>
                      <h1 className="font-bold text-foreground">
                        Rating : {product.rating}
                      </h1>
                      <h3 className=" text-justify text-foreground">
                        Click on image to view more details
                      </h3>
                      <p className="text-nuted bg-inner-card py-1 mt-1 px-2 rounded-lg">
                        ₹ {product.price}
                      </p>
                    </div>
                    <hr />
                    <div>
                      {cartproduct.find(
                        (cartitem) => cartitem.id === product.id
                      ) ? (
                        <RemoveItemButton
                          onClick={() => dispatch(removeitem(product))}
                          className="w-[95%]"
                          text="Remove item"
                        />
                      ) : (
                        <AddItemButton
                          onClick={() => dispatch(additem(product))}
                          className="w-[95%]"
                          text="Add to cart"
                        />
                      )}
                    </div>
                  </div>
                ))}{" "}
                <hr className="mt-5" />
                <hr />
              </div>
            </div>
          ) : (
            <h1 className="flex items-start">
              Product not found: <span className="font-bold">"{uisearch}"</span>{" "}
              <hr className="mt-5" />
              <hr />
            </h1>
          ))}
      </div>
    </section>
  );
};
export default SearchFunclity;
