import React from "react";
import Image from "next/image";


import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});







import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className={roboto.className}>
      <header>
        <div className="w-[1280px] border  border-b-black h-[54px]      max-sm:hidden">
          <div className="flex  w-[1154px] pt-3 pb-3">
            <div className="flex  gap-3 pl-16">
              <div>
                <p className="text-[14px]">Phone Number: 956 742 455 678 </p>
              </div>
              <div className="text-[#676767] ">|</div>
              <div>
                <p className="text-[14px]"> Email:info@ddsgnr.com</p>
              </div>
            </div>

            <div className="flex  gap-3 ml-auto">
              <FaFacebookF className=" w-6 h-6"/>
              <FaInstagram className=" w-6 h-6"/>
              <FaTwitter className=" w-6 h-6"/>
              <FaLinkedin className=" w-6 h-6"/>


            </div>
          </div>
        </div>

        <nav className="w-[1280px] bg-primary border border-b-[#676767] h-[72px] pl-16 pr16 mt-5 max-sm:w-[428px]">
          <div className="w-[1152px] h-[44px] flex pt-[18px]   max-sm:w-[428px]">
            <div>
              <Image
                src={"/Ddsgnr Library.png"}
                alt="design logo"
                height={30}
                width={130}
                />
                
            </div>
    
               
            <div className="w-[900px] h-[44px] bg-white flex ml-24    max-sm:hidden">
              <ul className="flex gap-9">
                <li className=" p-[10px] ">
                  Home
                </li>
                <li className=" p-[10px] ">
                  Courses
                </li>
                <li className=" p-[10px] ">
                  Services
                </li>
                <li className=" p-[10px] ">
                  Achievement
                </li>
                <li className=" p-[10px] ">
                  About Us
                </li>
                <li className=" p-[10px] ">
                  Testimonial
                </li>
              </ul>
              <div>
                  <button type="button" className="w-20 h-10 rounded-[5px] border border-black pt-2 pr-5 pb-2 pl-5 mr-4">Login</button>
                  <button type="button" className="w-[95px] h-10 text-white bg-black rounded-[5px]  pt-2 pr-5 pb-2 pl-5">Sign Up</button>
              </div>

            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;