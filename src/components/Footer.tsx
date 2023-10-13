import Logo from "./Logo";
import RegisteredFooter from "./RegisteredFooter";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div
        style={{ background: " linear-gradient(to right, #0076CE, #9400D3)" }}
        className="w-full h-auto"
      >
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between items-baseline text-white font-semibold text-xs tracking-wide py-6 ">
            <div className="w-[300px]">
              <Logo />
              <p className="font-normal mt-4">
                India's first platform dedicated to simplifying partner search
              </p>
            </div>
            <div className="flex w-full justify-around">
              <button>COMPANY</button>
              <button>SOLUTIONS</button>
              <button>RESOURCES</button>
              <button>SUPPORT</button>
              <button>LEGAL</button>
            </div>
          </div>

          <div className="text-white border-t border-white mt-16 ">
            <div className="py-7  flex justify-between">
              <p className="text-xs">
                Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
                Maharashtra
              </p>
              <div className="flex space-x-4 text-[18x] cursor-pointer">
                <BsFacebook />
                <BsInstagram />
                <BsLinkedin />
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegisteredFooter />
    </>
  );
};
export default Footer;
