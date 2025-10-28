import useFetch from "../hooks/myHook"
import { useState } from "react"

function User() {
    // api https://jsonplaceholder.typicode.com/users
    const [api, setApi] = useState("https://jsonplaceholder.typicode.com/users")
    const { data: users, error, loading, formData, createUser} = useFetch(api)
    const [modal, setModal] = useState(false)

    return (
        <>
            {error && <h1>Error: {error}</h1>}
            {loading && <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>}
            {users &&
                <button onClick={() => { setModal(true) }} className="fixed right-0 btn bg-white text-black text-2xl font-bold">Create+</button>
            }


            {modal && <form onSubmit={(e) => {
                e.preventDefault()
                let newUser = formData(e.target)
                createUser(newUser)
                setModal(false)
            }} className="w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] flex items-center justify-center gap-3 flex-col">
                <div className="flex items-center justify-center gap-3 flex-col bg-white w-[50%] h-[40%] rounded-4xl text-black">
                    <label className="text-2xl font-bold" htmlFor="">Name</label>
                    <input type="text" className="input placeholder:text-white text-white" placeholder="Enter your name" required name="name" id="" />
                    <label className="text-2xl font-bold" htmlFor="">Email</label>
                    <input type="email" className="input placeholder:text-white text-white" placeholder="Enter your email" required name="email" id="" />
                    <button type="submit" className="btn bg-white text-black text-2xl font-bold">Add</button>
                    <button type="button" onClick={() => { setModal(false) }} className="btn bg-white text-black text-2xl font-bold">Close</button>
                </div>
            </form>}

            <div className="flex items-center justify-center gap-5 flex-wrap my-5">
                {users && users.map((user) => {
                    return (
                        <div key={user.id} className="bg-white text-black flex items-center justify-center flex-col p-5 gap-3 w-[300px] h-[150px] rounded-4xl">
                            <h1 className="text-3xl font-bold text-center">{user.name}</h1>
                            <p className="text-xl font-medium">{user.email}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default User
