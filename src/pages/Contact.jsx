export default function Contact() {
    return (
        <div>
            <form className="my-5 flex flex-col items-center justify-center gap-3">
                <div className="flex flex-col items-center justify-center gap-3">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter your email" name="" id=""  className="input"/>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder="Enter your password" name="" id=""  className="input"/>
                    <label htmlFor="">Message</label>
                    <input type="text" placeholder="Enter your message" name="" id=""  className="input"/>
                </div>
                <button className="btn btn-info">Submit</button>
            </form>
            {for_test}
        </div>
    )
}
