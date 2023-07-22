import { Link } from "react-router-dom"


const Login = () => {
  return (
    <>
        <div className="w-full h-screen">
            <img className="w-full h-full object-cover absolute" src="https://www.whats-on-netflix.com/wp-content/uploads/2022/08/netflix-logos-cancelations-renewals.webp" alt="" />
            <div className="fixed w-full h-screen top-0 left-0 bg-black/70"></div>
            <div className="w-[100%] fixed flex justify-center py-24 mt-12">
                <div className="lg:w-[450px] md:w-[400px] h-[480px] bg-black/75 py-16 lg:px-9 md:px-8">
                    <h1 className="text-bold text-3xl text-center">Sign In</h1>
                    <form className="flex flex-col p-7">
                        <input className="mb-5 p-3 bg-gray-700 outline-none rounded" type="Email" name="" id="" placeholder="Enter Email Address" />
                        <input className="p-3 bg-gray-700 outline-none rounded" type="password" placeholder="password" />
                        <button className="bg-red-600 mt-7 py-3 rounded font-bold hover:scale-105 duration-300 cursor-not-allowed">Sign In</button>
                        <div className="flex justify-between items-center text-sm text-gray-500 py-5">
                            <p className=""><input className="mr-2" type="checkbox" name="" id="" />Remember me</p>
                            <p>Need help?</p>
                        </div>
                        <p><span className="text-gray-500">Not a Netflix Member?</span>{' '}
                        <Link to='/signup'>Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
