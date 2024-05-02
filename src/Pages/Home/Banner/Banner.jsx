import image1 from '../../../assets/images/banner/1.jpg';
import image2 from '../../../assets/images/banner/2.jpg';
import image3 from '../../../assets/images/banner/3.jpg';
import image4 from '../../../assets/images/banner/4.jpg';
import image5 from '../../../assets/images/banner/5.jpg';
import image6 from '../../../assets/images/banner/6.jpg';
function Banner() {
  return (
    <div className='mt-8 md:mt-12'>
      <div className="carousel w-full h-[650px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={image5}
            className="w-full object-cover object-bottom rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide6" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={image2}
            className="w-full object-cover object-top rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={image3}
            className="w-full object-cover object-top rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={image4}
            className="w-full object-cover object-bottom rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img
            src={image1}
            className="w-full object-cover object-center rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src={image6}
            className="w-full object-cover object-bottom rounded-xl"
          />
          <div className="absolute rounded-xl w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]">
            <div className="absolute flex justify-center items-center flex-col h-full px-6 w-96 text-white space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold">
                Affordable Price For Car Servicing
              </h2>
              <p>
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-6 items-center">
                <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
                  Discover More
                </button>
                <button className="px-5 py-3 border text-white rounded-md text-sm md:text-lg hover:bg-gray-900 duration-300 active:bg-gray-700 ">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex gap-6 transform  bottom-5 right-5">
            <a href="#slide5" className="btn btn-circle bg-[#FF3811]">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
