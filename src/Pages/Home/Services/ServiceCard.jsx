import { FaArrowRight } from 'react-icons/fa';
function ServiceCard({ service }) {
  console.log(service);
  const { img, title, price } = service;
  return (
    <div className="space-y-3 border p-4 rounded-lg">
      <img src={img} className=" h-[250px] w-full rounded-xl " alt="" />
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex justify-between gap-3 px-4 text-[#FF3811] font-semibold">
        <p>Price: ${price}</p>
        <button className='border p-4 rounded-full'>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
