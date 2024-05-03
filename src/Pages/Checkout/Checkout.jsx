import { useLoaderData } from "react-router-dom"
import image from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
function Checkout() {
  const checkoutData = useLoaderData();
  const {_id, price,title,img } = checkoutData;
  const { user } = useContext(AuthContext);
  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const due = form.due.value;
    const description = form.description.value;
    const bookService = {
      customerName: name,
      date,
      image: img,
      customerEmail: email,
      price: due,
      service_id: _id,
      service:title,
      description,

    };
    console.log(bookService);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookService),
    })
      .then(res => res.json())
      .then(data => console.log(data));

  }
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
        <form onSubmit={handleBookService} className="card-body">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Date"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                name="email"
                defaultValue={user?.email}
                placeholder="Your Email Address"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="due"
                defaultValue={`$${price}`}
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
              name="description"
              placeholder="Bio"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white hover:text-black bg-[#FF3811]"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout