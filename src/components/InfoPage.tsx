import { BsSearch } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { SiHandshake } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";

const InfoPage = () => {
  return (
    <div className="w-[85%] mx-auto min-h-screen py-12">
      <div className="w-[53%]">
        <h1 className="text-7xl font-bold leading-[90px]">
          <span>All-in-One</span> platform that Makes Easier
        </h1>
        <p className="text-[25px] w-[85%] my-7 tracking-wider font-semibold">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>

        <div className="grid grid-cols-2 w-[90%] mt-12">
          <div className="flex items-start justify-between space-x-4 tracking-wide font-semibold h-24 mb-10 ">
            <BsSearch className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold ">SEARCH</span> for vital company
              information
            </p>
          </div>
          <div className="flex justify-between items-start space-x-4 tracking-wide font-semibold h-24 ">
            <SiHandshake className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs
            </p>
          </div>
          <div className="flex justify-between space-x-4 tracking-wide font-semibold h-24">
            <RiNewspaperLine className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth
            </p>
          </div>
          <div className="flex items-start justify-between space-x-4 tracking-wide font-semibold h-24 ">
            <MdOutlineSchool className="text-7xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">ACADEMY</span> to give you the skills
              for success in your career
            </p>
          </div>
        </div>
      </div>

      {/* Image div */}
      <div className="w-[47%]">
        <img src="Pexels Photo by Charlotte May" alt="" />
      </div>
    </div>
  );
};
export default InfoPage;
