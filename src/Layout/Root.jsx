import { Outlet } from "react-router-dom"
import NavBar from "../Pages/Shared/NavBar/NavBar"
import Footer from "../Pages/Shared/Footer/Footer"

function Root() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
      <NavBar/>
      <Outlet />
      </div>
      <Footer/>
    </div>
  )
}

export default Root