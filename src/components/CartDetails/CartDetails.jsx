import cartImage from '../../assets/images/checkout/checkout.png'
function CartDetails() {
  return (
    <div className='my-10 md:my-16'>
      <div className="flex justify-center relative ">
        <img src={cartImage} className="w-full" alt="" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[#15151500]  h-full w-full rounded-xl">
          <h2 className="text-3xl md:text-4xl font-semibold lg:font-bold text-white flex  items-center h-full ml-16">
            CheckOut
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CartDetails