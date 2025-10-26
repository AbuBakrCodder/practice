import { useState, useEffect } from "react"

export default function useFetch(api) {
    let [data, setData] = useState(null)
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true)
                const res = await fetch(api)
                if (!res.ok) {
                    throw new Error(res.statusText + "" + res.status)
                }
                const data = await res.json()
                console.log(data);
                setData(data)
                setLoading(false)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [api])

    const formData = (form)=>{
        const formData = new FormData(form)
        const newUsr = {};
        for(let[key,value] of formData.entries())newUsr[key] = value;
        setData((prev)=>(prev ? [...prev, newUsr]: [newUsr]))

    }
    return { data, error, loading, formData}
}

// export { useFetch }