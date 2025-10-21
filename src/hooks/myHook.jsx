import { useState, useEffect } from "react"

export default function useFetch(api) {
    let [data, setData] = useState(null)
    let [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(api)
                if(!res.ok){
                    throw new Error(res.statusText+ "" + res.status)
                }
                const data = await res.json()
                console.log(data);
                
                setData(data.products)
            } catch (err) {
                setError(err.message)
            }
        }
        getData()
    }, api)
    return { data, error }
}

export { useFetch }