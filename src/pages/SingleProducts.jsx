import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/myHook";

function SingleProducts() {
  // const [product, setProduct] = useState(null);
  const api = "https://dummyjson.com/products";
  const { id } = useParams();
  const { data, error, loading } = useFetch(api);

  console.log("data:", data);
  console.log("id:", id);
  const filtered = data && data.products.find((item) => item.id == id);

  // setProduct(filtered && filtered)

  return (
    <div className="flex items-center justify-center flex-col">
      {error && <h1>Error: {error}</h1>}
      {loading && <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>}
      {filtered && <div className="flex items-center flex-col gap-3 bg-white w-[60%] rounded-4xl my-5 ">
        <img
          src={filtered.thumbnail}
          alt=""
          className="aspect-square rounded-sm object-cover"
        />

        <div className="flex flex-col gap-3 mt-3 w-full p-15">
          <div className="badge badge-secondary">{filtered.category}</div>
          <h3 className="text-4xl font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {filtered.title}
          </h3>
          <p className="text-2xl text-black">{filtered.description}</p>
          <p className="mt-1 text-gray-700 text-2xl">Price: {filtered.price}$</p>
          <p className="mt-1 text-gray-700 text-2xl">Discount percentage
            : {filtered.discountPercentage
            }$</p>
        </div>
      </div>
      }

    </div>
  );
}

export default SingleProducts;
