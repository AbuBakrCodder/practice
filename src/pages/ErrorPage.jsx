import { use } from "react"
import { NavLink, useRouteError } from "react-router-dom"
import Video from "../../video/orqadan.mp4"

function ErrorPage() {
    let { statusText, status, message } = useRouteError()

    if (status === 404) {
        return (
            <div className="flex items-center justify-center h-[100vh] flex-col gap-3">
                <h1 className="text-4xl">Page not found <span className="font-black">404</span></h1>
                <NavLink to="/" className="btn text-2xl">Back to home</NavLink>
            </div>
        )
    }

    return (
        <div className="flex items-center justify-center flex-col gap-3 py-[5rem]">
            <h1 className="text-4xl font-black">Orqadan nimadur kelvotti</h1>
            <p className="text-2xl">{message}</p>
            <p className="text-4xl font-black">Please watch video</p>
            <video src={Video} controls className="w-80"></video>
            <NavLink to="/" className="btn text-2xl">Back to home</NavLink>
        </div>
    )
}

export default ErrorPage
