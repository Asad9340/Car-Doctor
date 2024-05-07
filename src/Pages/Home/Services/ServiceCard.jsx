import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ServiceCard({ service }) {
  const { _id,img, title, price } = service;
  return (
    <div className="space-y-3 border p-3 md:p-4 rounded-xl">
      <img src={img} className=" h-[250px] w-full rounded-xl " alt="" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-between gap-3 px-4 text-[#FF3811] font-semibold">
        <p>Price: ${price}</p>
        <Link to={`/service/${_id}`}>
          <button className="border p-4 rounded-full hover:bg-gray-200 duration-300">
            <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
