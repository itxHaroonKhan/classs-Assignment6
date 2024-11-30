import React from "react";
import Image from "next/image";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ExploreCoursesSection = () => {
  return (
    <div className={roboto.className}>
                    {/* main container */}
      <div className="w-[1280px] h-[1049px] pt-[112px]  pb-[112px] pr-[64px] max-sm:w-[428px] max-sm:py-[48px] max-sm:px-[24px] max-sm:mt-40 max-sm:h-auto">
                     {/* Heading container */}
      <div className="w-[768px] h-[109px]  mx-auto mb-16 max-sm:w-[385px] ">
        <h2 className="font-bold text-5xl leading-[57.6px] max-sm:text-[32px] max-sm:text-center ">Explore Courses By Category</h2>
        <p className="text-[18px] mt-4 leading-5">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>

      
        
          {/* main box  */}
        <div className="w-[1280px] h-[636px] gap-6 grid grid-cols-3 max-sm:grid-cols-1 max-sm:w-[380px]  max-sm:mt-28 max-sm:pr-4 max-sm:h-auto">
          

          {/*  1st box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] max-sm:w-[380px] flex gap-8">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/pen-tool-2.png"}
                alt="pentool"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">
                Design & Development
              </h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>


          {/*  2nd box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/volume-high.png"}
                alt="volume"
                width={30}
                height={30}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Marketing</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  3rd box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/group.png"} alt="group" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Development</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  4rth box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/microphone.png"}
                alt="microphone"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Communication</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  5th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/link.png"} alt="link" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Digital Marketing</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  6th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/arrow-2.png"} alt="arrow" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Self Development</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>



          {/*  7th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image
                src={"/briefcase.png"}
                alt="briefcase"
                width={32}
                height={32}
              />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Business</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  8th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/book.png"} alt="book" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Finance</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>




          {/*  9th box */}
          <div className="bg-primary p-4 rounded-[5px] w-[410px] flex gap-6 max-sm:w-[380px]">
            <div className="w-[100px] h-[100px] p-[34px] rounded-[5px] bg-white ">
              <Image src={"/book-2.png"} alt="book-2" width={32} height={32} />
            </div>
            <div className="w-[246px] h-[57] mt-4">
              <h5 className="font-semibold text-[20px]">Consulting</h5>
              <p className="text-[18px]">50+ Courses Available</p>
            </div>
          </div>
        


        



      

      </div>


         <div className="flex justify-center items-center">
            <button type="button" className="w-[155px] h-12 rounded-[5px] p-3  border border-black mt-10">
            View All Courses
            </button>
         </div>
     
      </div>

    </div>
  );
};

export default ExploreCoursesSection;