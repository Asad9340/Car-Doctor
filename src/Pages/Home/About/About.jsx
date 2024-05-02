import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
function About() {
  return (
    <div className="mt-8 md:mt-16 mb-16 lg:grid gap-6 flex flex-col-reverse lg:grid-cols-12 ">
      <div className="relative col-span-5">
        <img src={person} className="rounded-xl" alt="" />
        <img
          src={parts}
          className="absolute w-48 lg:w-[400px] right-0 lg:-right-16 border-8 border-white rounded-lg -bottom-12 lg:-bottom-16 object-cover"
          alt=""
        />
      </div>
      <div className="col-span-7 lg:ml-20 px-4 lg:px-0 text-center lg:text-start space-y-4">
        <h4 className="text-[#FF3811] font-semibold ">About Us</h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold lg:font-bold text-[#151515]">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{' '}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.{' '}
        </p>
        <button className="px-5 py-3 bg-[#FF3811] text-white rounded-md text-sm md:text-lg hover:bg-[#dc492c] active:bg-orange-800">
          Get More Info
        </button>
      </div>
    </div>
  );
}

export default About;
