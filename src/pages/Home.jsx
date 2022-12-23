import { Link } from "react-router-dom";
// Images
import HomePage1 from "../images/homePage1.png";
import HomePage2 from "../images/homePage2.png";

export default function Home() {
  return (
    <div className=" -z-10   flex flex-col md:flex-row">
      <Link to="/men">
        <aside className="  w-full ">
          <div className="relative md:w-full md:h-screen ">
            <img
              src={HomePage1}
              alt=""
              className=" md:h-full relative w-full h-96  mx-auto object-cover z-1 "
            />
            <div className=" hidden bg-[#00000047] absolute top-0 left-0 w-full h-full hover:cursor-pointer  backdrop-blur-sm md:flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 ">
              <p className=" font-bold my-12 object-fill text-white text-3xl md:text-5xl  ">
                Men!
              </p>
            </div>
            <div className=" md:hidden flex absolute top-0 left-0 w-full h-full justify-center items-end ">
              <button className=" mb-10 bg-[#000000a9] text-[#77FFBE] font-bold text-lg px-3 py-2 rounded-md backdrop-blur-lg">
                SHOP MEN
              </button>
            </div>
          </div>
        </aside>
      </Link>
      <Link to="/women">
        <aside className=" w-full">
          <div className="relative md:w-full md:h-screen ">
            <img
              src={HomePage2}
              alt=""
              className=" md:h-full relative  w-full h-96 mx-auto object-cover z-1  "
            />
            <div className=" hidden bg-[#00000047] absolute top-0 left-0 w-full h-full hover:cursor-pointer  backdrop-blur-sm md:flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className=" font-bold my-12 object-fill text-white text-3xl md:text-5xl ">
                Women ☕️
              </p>
            </div>
            <div className=" md:hidden flex absolute top-0 left-0 w-full h-full justify-center items-end ">
              <button className=" mb-10 bg-[#000000a9] text-[#77FFBE] font-bold text-lg px-3 py-2 rounded-md backdrop-blur-lg">
                SHOP WOMEN
              </button>
            </div>
          </div>
        </aside>
      </Link>
      <div className="h-[300vh]"></div>
    </div>
  );
}
