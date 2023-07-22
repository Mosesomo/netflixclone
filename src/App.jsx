import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Account from "./Pages/Account"

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='account' element={<Account />} />
        </Routes>
    </div>
  )
}

export default App