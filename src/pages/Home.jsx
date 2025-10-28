import Logo from "../../logo.jfif"

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 my-5">
            <img src={Logo} alt="" />
            <h1 className="text-center text-4xl font-bold ">UzumCopy</h1>
            <p className="w-[80%] text-center">Welcome to the UzumCopy website. You can see the prices of various items by going to the products section on this site. You can create as many users as you want by going to the users section.</p>
        </div>
    )
}
