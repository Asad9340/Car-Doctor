import logo from '../../../../src/assets/logo.svg';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { FaGoogle } from 'react-icons/fa';
function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-[#151515] text-white ">
        <aside>
          <img src={logo} alt="" />
          <p className="w-80">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex gap-2 text-2xl">
            <FaFacebook className="p-2 text-4xl rounded-full bg-gray-700" />
            <FaGoogle className="p-2 text-4xl rounded-full bg-gray-700" />
            <FaLinkedin className="p-2 text-4xl rounded-full bg-gray-700" />
            <FaTwitter className="p-2 text-4xl rounded-full bg-gray-700" />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title">About</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Why Car Doctor</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Support Center</a>
          <a className="link link-hover">Feedback</a>
          <a className="link link-hover">Accesbility</a>
        </nav>
      </footer>
    </div>
  );
}

export default Footer;
