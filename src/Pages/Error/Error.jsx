import { Link } from 'react-router-dom'
import errorImg from '../../assets/icons/error.jpg'
function Error() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <img src={errorImg} alt="" />
        <div className="text-center text-xl">
          <Link className=" px-6 py-2 bg-[#FF3811] rounded-md text-white" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error