import { BsSearch } from "react-icons/bs";
import { MdOutlineSchool } from "react-icons/md";
import { SiHandshake } from "react-icons/si";
import { RiNewspaperLine } from "react-icons/ri";
import chat1 from "../assets/DesignChallenge/chat1.png";
import chat2 from "../assets/DesignChallenge/chat2.png";
import chat3 from "../assets/DesignChallenge/chat3.png";
import chat4 from "../assets/DesignChallenge/chat4.png";
import chat5 from "../assets/DesignChallenge/chat5.png";
import student from "../assets/Student.png";
import teacher from "../assets/Teacher.png";

const InfoPage = () => {
  return (
    <div className="w-[85%] flex mx-auto min-h-screen py-20 ">
      <div className="w-[53%] h-auto ">
        <h1 className="text-7xl font-bold leading-[90px]">
          <span>All-in-One</span> platform that Makes Easier
        </h1>
        <p className="text-[25px] w-[85%] my-7 tracking-wider font-semibold">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>

        <div className="grid grid-cols-2 w-[90%] pt-12 gap-6">
          <div className="flex items-start justify-between space-x-4 tracking-wide font-semibold h-auto  ">
            <BsSearch className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold ">SEARCH</span> for vital company
              information
            </p>
          </div>
          <div className="flex justify-between items-start space-x-4 tracking-wide font-semibold h-auto ">
            <SiHandshake className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">CONNECT</span> with the resources to
              meet your business needs
            </p>
          </div>
          <div className="flex justify-between space-x-4 tracking-wide font-semibold h-auto">
            <RiNewspaperLine className="text-6xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">RESEARCH</span> and generate reports
              that drive growth
            </p>
          </div>
          <div className="flex items-start justify-between space-x-4 tracking-wide font-semibold h-auto ">
            <MdOutlineSchool className="text-7xl text-[#0076CE]" />
            <p className="text-xl w-[65%]">
              <span className="font-bold">ACADEMY</span> to give you the skills
              for success in your career
            </p>
          </div>
        </div>
      </div>

      {/* Image div */}
      <div className="w-[47%] h-[700px] relative">
        <img src={teacher} alt="" className="absolute bottom-14 left-0" />
        <img src={student} alt="" className="absolute top-0 right-0" />
        <img src={chat1} alt="" className="absolute top-20 right-64" />
        <img src={chat2} alt="" className="absolute top-32 right-64" />
        <img src={chat3} alt="" className="absolute top-44 right-64" />
        <img src={chat4} alt="" className="absolute top-60 right-60" />
        <img src={chat5} alt="" className="absolute top-72 right-60" />
      </div>
    </div>
  );
};
export default InfoPage;
