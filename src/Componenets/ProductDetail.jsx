import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddItemButton, RemoveItemButton } from "../Componenets/Button.jsx";
import { additem, removeitem } from "../redux/slice.js";
const ProductDetail = () => {
  const { id } = useParams();
  const numericId = parseInt(id, 10);
  const productDetails = useSelector((state) => state.products.items);
  const product = productDetails.find((p) => p.id === numericId);
  const cartproduct = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <section className="min-h-screen mt-25 bg-background mx-2 lg:mx-10 p-6">
      {product ? (
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-start lg:flex-row gap-6 ">
            <div className="relative rounded-xl shadow-(--shadow) w-full lg:w-[50%] h-96 bg-card ">
              <div className="w-auto absolute px-4 top-0 right-0 bottom-0  inset-0 m-auto">
                <img src={product.images?.[0]} alt={product.title} />
              </div>
              <div className="absolute bottom-0 left-0 size-12 m-2">
                <img src={product.meta.qrCode} alt={product.meta.barcode} />
              </div>
            </div>
            <div className=" w-full flex flex-col items-start lg:w-[50%]">
              <h1 className="text-2xl text-accent font-bold">
                {product.title}
              </h1>
              <div className="flex flex-row gap-4 my-4 items-center">
                <h2>₹{product.price}</h2>
                <h3 className="text-lg bg-danger rounded-sm text-muted-foreground px-2">
                  {product.discountPercentage}% OFF
                </h3>
              </div>
              <h3>Rating : {product.rating}</h3>
              <hr />
              <p className="text-justify my-2 text-foreground">
                {product.description}
              </p>
              <div className="text-foreground flex flex-col items-start gap-1">
                <h3>
                  {" "}
                  <span className="font-semibold">Brand: </span>
                  {product.brand}
                </h3>
                <h3>Weight : {product.weight}gm</h3>
                <h3>
                  width*height*depth : {product.dimensions.width}*{" "}
                  {product.dimensions.height}* {product.dimensions.depth}
                </h3>
                <br />
                <h3>Available : In Stock ({product.stock})</h3>
                <h3>Warranty : {product.warrantyInformation}</h3>
                <h3>Shipping Time : {product.shippingInformation}</h3>
                <h3 className="bg-inner-card px-2 py-1 rounded-2xl">
                  Return Policy : {product.returnPolicy}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col-reverse gap-6 lg:flex-row">
            <div className="w-[50%] ">
              {product.reviews
                ? product.reviews.map((review) => {
                    return (
                      <div
                        key={review.rating}
                        className="my-2 flex flex-col gap-3 items-start p-2 border-2 border-muted rounded-lg"
                      >
                        <h1 className="font-bold">
                          {review.reviewerName}{" "}
                          <span className="font-normal">
                            {" "}
                            {review.date.slice(0, 10)}
                          </span>
                        </h1>
                        <p className="text-justify italic ml-5 font-semibold">
                          "{review.comment}"
                        </p>
                        <span className="text-sm text-mutted">
                          - {review.reviewerEmail}
                        </span>
                      </div>
                    );
                  })
                : "No reviews yet."}
            </div>
            <div className="w-[50%] flex flex-col gap-10">
              <div>
                {cartproduct.find((cartitem) => cartitem.id === product.id) ? (
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
              <div className="flex flex-col text-foreground items-start pl-3">
                <h1 className="text-2xl font-bold mb-5">
                  {" "}
                  Meta Information :-
                </h1>
                <h2>Product ID : {product.id}</h2>
                <h2>Created AT : {product.meta.createdAt.slice(0, 10)}</h2>
                <h2>Updated AT : {product.meta.updatedAt.slice(0, 10)}</h2>
                <h2>Barcode : {product.meta.barcode}</h2>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default ProductDetail;
