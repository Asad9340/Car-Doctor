import { useContext } from 'react';
import logo from '../../../../src/assets/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { SlHandbag } from 'react-icons/sl';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../firebase/AuthProvider';
function NavBar() {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/services'>Service</Link>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      <h2>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                {navItem}
              </ul>
            </div>
            <a className=" text-xl">
              <img className="w-20" src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3 font-semibold">
              {navItem}
            </ul>
          </div>
          <div className="navbar-end flex gap-6 text-xl items-center">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL
                          ? user.photoURL
                          : 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                      }
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a onClick={handleLogOut}>Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signIn">
                <button className="border px-4 py-2 rounded-md text-white font-semibold bg-[#FF3811]">
                  Sign In
                </button>
              </Link>
            )}
            <p className="hidden md:block">
              <CiSearch />
            </p>
            <a className="btn btn-outline border duration-300 border-[#FF3811] text-[#FF3811] ">
              Appointment
            </a>
          </div>
        </div>
      </h2>
    </div>
  );
}

export default NavBar;
