import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async() => {
      const res = await fetch('./services.json');
      const data = await res.json();
      setServices(data);
    })()
  },[])
  return (
    <div className="mt-24 md:mt-32">
      <div className="space-y-3">
        <h4 className="text-[#FF3811] font-semibold text-center">Services</h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold lg:font-bold text-[#151515]">
          Our Service Area
        </h2>
        <p className="mx-auto text-center px-5 lg:w-[700px]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.
        </p>
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-8">
        {
          services.map(service=><ServiceCard key={service._id} service={service} />)
        }
      </div>
    </div>
  );
}

export default Services