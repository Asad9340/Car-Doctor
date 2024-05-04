import { BounceLoader } from "react-spinners";

function Loader() {
  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <BounceLoader color="#36d7b7" />
    </div>
  );
}

export default Loader;
