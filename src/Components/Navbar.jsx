import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-full absolute flex justify-between items-center py-4 px-3 cursor-pointer z-[100]">
      <Link to='/'>
        <h1 className="text-2xl md:text-6xl sm:text-5xl text-red-600 cursor-pointer font-bold">NetFlix</h1>
      </Link>
      <div className="text-white">
        <Link to='/login'>
          <button className="font-bold rounded border-[2px] py-1 lg:px-4 md:px-3 px-2">Sign In</button>
        </Link>
        <Link to='/signup'>
          <button className="bg-red-600 lg:px-3 md:px-3 px-2 py-1 lg:ml-4 md:ml-4 ml-2 rounded cursor-pointer hover:scale-105 duration-300">Sign Up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
