const Hero = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-32 px-3">
        <h1 className="font-bold text-7xl mb-2">
          Find <span>Partners</span> (CAs) available online
        </h1>
        <p className="text-[#616161] text-xl mt-6">
          <span className="font-bold">CONNECT</span> with us where your services
          are listed and visible to a myriad of businesses seeking CA’s for
          compliance support
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
      <div></div>
    </div>
  );
};
export default Hero;
