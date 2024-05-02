import { FaGoogle, FaLinkedin } from 'react-icons/fa6';
import logIn from '../../assets/images/login/login.svg';
import { FaFacebook } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../firebase/AuthProvider';
import toast from 'react-hot-toast';

function SignIn() {
  const { loginUser, setUser, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login Successfully!');
        navigate(from);
      })
      .catch(() => {
        setError('Wrong Email or Password');
        toast.error('Wrong Email or Password');
      });
  };
    const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success('SignIn with Google Successfully');
        navigate(from);
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:p-8">
      <div className="flex justify-center items-center h-full">
        <img src={logIn} alt="" />
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="text-center text-3xl font-bold lg:text-4xl">Log In</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <small className="text-red-700 -mb-3 animate__animated animate__shakeX">
            {error}
          </small>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center">Or Sign In With </p>
        <div className="flex justify-center items-center gap-4 mt-3 text-2xl lg:text-3xl">
          <FaFacebook className="text-blue-700" />
          <FaLinkedin className="text-blue-500" />
          <FaGoogle onClick={handleGoogleLogin} />
        </div>
        <p className="text-center mt-3">
          Haven&apos;t an Account?{' '}
          <Link to="/signUp" className="font-semibold">
            Create Account.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
