import { useContext, useState } from 'react';
import logIn from '../../assets/images/login/login.svg';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider';
import toast from 'react-hot-toast';

function SignUp() {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    setError('');
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain Uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain Lowercase letter');
      return;
    }
    createUser(email, password)
      .then(result => {
        updateUserProfile(name)
          .then(() => {
            setUser(result.user);
            toast.success('Successfully Created Account!');
            navigate('/');
          })
          .catch(err => console.log(err));
      })
      .catch(error => console.log(error.message));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:p-8">
      <div className="flex justify-center items-center h-full">
        <img src={logIn} alt="" />
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="text-center text-3xl font-bold lg:text-4xl -mt-2">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="card-body -mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="input input-bordered"
              required
            />
          </div>
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
          <p className="text-red-700">
            <small>{error ? error : ''}</small>
          </p>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-center mt-3">
          Already have an account?
          <Link to="/signIn" className="font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
