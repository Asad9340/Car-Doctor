import { useLoaderData } from "react-router-dom"
import image from '../../assets/images/checkout/checkout.png'
function Checkout() {
  const checkoutData = useLoaderData();
  console.log(checkoutData);
  return (
    <div className="my-10 md:my-12 lg:my-14">
      <div className="flex justify-center relative ">
        <img src={image} className="w-full" alt="" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151500]  h-full w-full rounded-xl">
          <h2 className="text-3xl md:text-4xl font-semibold lg:font-bold text-white flex  items-center h-full ml-14">
            CheckOut
          </h2>
        </div>
      </div>
      <div>
        <form className="card-body">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="Your First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile</span>
              </label>
              <input
                type="number"
                placeholder="Your Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn text-white hover:text-black bg-[#FF3811]">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout