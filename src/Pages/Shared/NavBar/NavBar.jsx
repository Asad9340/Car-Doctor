import logo from '../../../../src/assets/logo.svg';
import { CiSearch } from 'react-icons/ci';
import { SlHandbag } from 'react-icons/sl';
function NavBar() {
  const navItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Service</a>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <a className=" text-xl">
              <img className='w-20' src={logo} alt="" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItem}</ul>
          </div>
          <div className="navbar-end flex gap-6 text-xl items-center">
            <p className="hidden md:block">
              <SlHandbag />
            </p>
            <p className="hidden md:block">
              <CiSearch />
            </p>
            <a className="btn btn-outline border border-[#FF3811] text-[#FF3811] ">
              Appointment
            </a>
          </div>
        </div>
      </h2>
    </div>
  );
}

export default NavBar;
