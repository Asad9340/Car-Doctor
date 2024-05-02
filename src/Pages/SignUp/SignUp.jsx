
import logIn from '../../assets/images/login/login.svg';
import { Link } from 'react-router-dom';

function SignUp() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name,email, password };
    console.log(user);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:p-8">
      <div className="flex justify-center items-center h-full">
        <img src={logIn} alt="" />
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="text-center text-3xl font-bold lg:text-4xl -mt-2">Sign Up</h2>
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


export default SignUp