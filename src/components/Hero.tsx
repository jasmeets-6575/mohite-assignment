import pic1 from "../assets/Picture.png";
import pic2 from "../assets/picture2.png";
import pic3 from "../assets/picture3.png";

const Hero = () => {
  return (
    <div className="bg-gradient">
      <div className=" mx-auto w-[90%] grid grid-cols-2">
        <div className="py-32 px-3">
          <h1 className="font-bold text-7xl mb-2">
            Find{" "}
            <span className="text-gradient-to-r from-[#0076ce] to-[#9400d3]">
              Partners
            </span>{" "}
            (CAs) available online
          </h1>
          <p className="text-[#616161] text-xl mt-6">
            <span className="font-bold">CONNECT</span> with us where your
            services are listed and visible to a myriad of businesses seeking
            CA’s for compliance support
          </p>
          <div className=" rounded-lg my-10">
            <input
              type="text"
              placeholder="Search by name"
              className="py-3 px-4 w-[70%] outline-none rounded-l-lg border border-[#BFBFBF]"
            />
            <button
              type="submit"
              className="bg-[#0076CE] border border-[#0076CE] text-white py-3 px-6 w-[30%] rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Image div */}
        <div className="py-32 pl-12 grid grid-cols-3">
          <img src={pic1} alt="" className=" mt-12" />
          <img src={pic3} alt="" className=" -mt-10" />
          <img src={pic2} alt="" className="-mt-8" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
