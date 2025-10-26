import { useState } from "react"
import useFetch from "../hooks/myHook"
import { useNavigate } from "react-router-dom"

export default function Products() {
    let [api, setApi] = useState("https://dummyjson.com/products")
    const { data: products, error, loading } = useFetch(api)
    const navigate = useNavigate()

    console.log(products);


    const handleInfo = (id) => {
        navigate(`/products/${id}`)
    }

    return (
        <>
            {error && <h1>Error: {error}</h1>}
            {loading && <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>}
            <div className="flex flex-wrap items-center justify-center gap-5 my-5">
                {products && products.products.map((p) => {
                    return (
                        <div className="card bg-base-300 rounded-4xl w-96 shadow-sm h-[550px]" key={p.id}>
                            <figure>
                                <img src={p.thumbnail} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {p.title}
                                    <div className="badge badge-secondary">{p.category}</div>
                                </h2>
                                <p className="text-2xl font-bold">{p.price}$</p>
                                <p className="text-xl font-bold">Discount Percentage: {p.discountPercentage}%</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                                <button onClick={() => { handleInfo(p.id) }} className="bnt bg-yellow-300 my-5 py-3 px-5 w-[100%] text-2xl font-bold rounded-2xl">More Info</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
