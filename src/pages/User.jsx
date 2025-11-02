import useFetch from "../hooks/myHook"
import { use, useState } from "react"

function User() {
    // api https://jsonplaceholder.typicode.com/users
    const [api, setApi] = useState("https://jsonplaceholder.typicode.com/users")
    const { data: users, error, loading, formData, createUser, deleteUser, editUser } = useFetch(api)
    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    let [editMUser, setEditMUser] = useState(null)

    return (
        <>
            {error && <h1 className="text-2xl font-bold text-center my-5">Error: {error}</h1>}
            {loading && <div className="flex items-center justify-center w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] ">
                <h1 className="text-4xl text-center font-bold my-5">Loading <span className="loading loading-dots loading-xl"></span></h1>
            </div>}
            {users &&
                <button onClick={() => { setModal(true) }} className="fixed right-0 btn bg-white text-black text-2xl font-bold">Create+</button>
            }
            {users?.length === 0 && !loading && !error && <h1 className="text-center text-2xl font-bold my-5">Please create new user!</h1>}



            {modal && <form onSubmit={(e) => {
                e.preventDefault()
                let newUser = formData(e.target)
                createUser(newUser)
                setModal(false)
            }} className="w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] flex items-center justify-center gap-3 flex-col" onClick={() => { setModal(false) }}>
                <div className="flex items-center justify-center gap-3 flex-col bg-white w-[50%] h-[40%] rounded-4xl text-black" onClick={(e) => { e.stopPropagation() }}>
                    <label className="text-2xl font-bold" htmlFor="">Name</label>
                    <input type="text" className="input placeholder:text-white text-white" placeholder="Enter your name" required name="name" id="" />
                    <label className="text-2xl font-bold" htmlFor="">Email</label>
                    <input type="email" className="input placeholder:text-white text-white" placeholder="Enter your email" required name="email" id="" />
                    <button type="submit" className="btn bg-white text-black text-2xl font-bold">Add</button>
                    <button type="button" onClick={() => { setModal(false) }} className="btn bg-white text-black text-2xl font-bold">Close</button>
                </div>
            </form>}

            {editModal && <form className="w-full h-full absolute top-0 bottom-0 z-15 bg-[#00000094] flex items-center justify-center gap-3 flex-col" onSubmit={(e)=>{
                e.preventDefault()
                let form = formData(e.target)
                editUser(editMUser.id, form)
                setEditModal(false)
            }} onClick={() => { setEditModal(false) }}>
                <div className="flex items-center justify-center gap-3 flex-col bg-white w-[50%] h-[40%] rounded-4xl text-black" onClick={(e) => { e.stopPropagation() }}>
                    <label className="text-2xl font-bold" htmlFor="">Name</label>
                    <input type="text" className="input placeholder:text-white text-white" placeholder="Enter your name" required name="name" id="" />
                    <label className="text-2xl font-bold" htmlFor="">Email</label>
                    <input type="email" className="input placeholder:text-white text-white" placeholder="Enter your email" required name="email" id="" />
                    <button type="submit" className="btn bg-white text-black text-2xl font-bold">Edit</button>
                    <button type="button" onClick={() => { setModal(false) }} className="btn bg-white text-black text-2xl font-bold">Close</button>
                </div>
            </form>}

            <div className="flex items-center justify-center gap-5 flex-wrap my-5">
                {users && users.map((user) => {
                    return (
                        <div key={user.id} className="bg-white text-black flex items-center justify-center flex-col p-5 gap-3 w-[300px] h-[200px] rounded-4xl relative">
                            <h1 className="text-3xl font-bold text-center">{user.name}</h1>
                            <p className="text-xl font-medium">{user.email}</p>
                            <button onClick={() => { deleteUser(user.id) }} className="text-red-600 border border-red-600 px-9 py-3 rounded-2xl hover:bg-red-600 hover:text-white hover:scale-110 transition-all cursor-pointer"><i class="fa-solid fa-trash"></i></button>
                            <button className="absolute top-2 right-5 cursor-pointer" onClick={()=>{setEditModal(true); setEditMUser(user)}}><i class="fa-solid fa-user-pen"></i></button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default User
