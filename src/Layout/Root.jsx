import { Outlet } from "react-router-dom"
import NavBar from "../Pages/Shared/NavBar/NavBar"
import Footer from "../Pages/Shared/Footer/Footer"
import { Toaster } from "react-hot-toast";

function Root() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Root