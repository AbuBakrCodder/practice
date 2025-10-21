import { useState } from "react"
import useFetch from "../hooks/myHook"

export default function Products() {
    let [api, setApi] = useState("https://dummyjson.com/products")
    const { data: products, error } = useFetch(api)

    return (
        <>
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
                {products && products.map((p) => {
                    return (
                        <div className="card bg-base-300 rounded-4xl w-96 shadow-sm h-[550px]">
                            <figure>
                                <img src={p.images} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {p.title}
                                    <div className="badge badge-secondary">{p.category}</div>
                                </h2>
                                <p>{p.description}</p>
                                <p className="text-2xl font-bold">{p.price}$</p>
                                <p className="text-xl font-bold">Discount Percentage: {p.discountPercentage}%</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
