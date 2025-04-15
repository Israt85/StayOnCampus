import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <div className="w-full min-h-screen py-32 bg-slate-100">
            <div className="w-2/3 mx-auto bg-white shadow-2xl h-96 gap-6 border flex justify-between">
            {/* left side */}
            <div className="w-96 text-black p-8 relative bg-[#2ecc71] [clip-path:polygon(100%_0%,0%_100%,0%_0%)]">
                 <h2 className="text-3xl">Welcome!</h2>
                 <p className="py-3">Create your account for free</p>
                <Link to='/signup'> <button className="btn rounded-md  btn-outline">Sign up</button></Link>
            </div>
        {/* right side */}
        <div className="w-72">
            <h2 className="text-3xl mt-6 mb-2">Login</h2>
            <form action="">
           <div className="flex-col">
           <p className="px-2">Username / Email Address <span className="text-red-600">*</span></p>
           <input className="border py-2 w-60 rounded-full" type="text" required />
           </div>
           <div className="flex-col my-6">
           <p className="px-2">Password <span className="text-red-600">*</span></p>
           <input className="border py-2 w-60 rounded-full" type="text" required />
           </div>
           <div className="border border-[#2ecc71] py-2 text-[#2ecc71] flex justify-center items-center w-60 rounded-full" >Sign In </div>
           <p className="text-[#2ecc71]">Forget password?</p>

            </form>
        </div>
        </div>
        </div>
    )
}
export default Login;