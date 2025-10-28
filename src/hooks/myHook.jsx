import { useState, useEffect } from "react"

export default function useFetch(api) {
    let [data, setData] = useState(null)
    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    // get data
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
    useEffect(() => {
        getData()
    }, [api])

    // create new user

    const createUser = async (newUser)=>{
        try {
            setLoading(true)
            const res = fetch(api, {
                "method": "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            })

            if(!res.ok){
                throw new Error(`${res.statusText} ${res.status}`)
            }
            const data = await res.json()
            setData((prev)=>{prev ? [...prev, data]: [data]})
            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }finally{
            setLoading(false)
        }
    }

    const formData = (form) => {
        const formData = new FormData(form)
        const newUsr = {};
        for (let [key, value] of formData.entries()) newUsr[key] = value;
        setData((prev) => (prev ? [...prev, newUsr] : [newUsr]))

    }
    return { data, error, loading, formData, createUser}
}

// export { useFetch }