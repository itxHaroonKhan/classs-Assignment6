import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";


import {Roboto} from 'next/font/google'
const roboto = Roboto({
    subsets: ["latin"],
    weight:["400","700"]
})

function TeamSection() {
  return (
    <div className={roboto.className}>
        
        {/* main div */}
       <div className='w-[1280px] h-[895px] pt-[112px] bt-[112px] pl-16 pr-16 bg-primary  max-sm:w-[428px] max-sm:h-auto'>
                  
                  {/* heading div */}
          <div className='w-[786px] h-[109px] gap-6  mx-auto text-center     max-sm:w-[363px] '>
            <h2 className='font-bold text-5xl    max-sm:text-[32px]'>
            Our team
            </h2>
             <p className='text-[18px] leading-[27px] mt-8'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             </p>
             </div>



                        {/* Our Team */}
             <div className='w-[1280px] h-[610px] gap-16 mt-20     max-sm:w-[380px] max-sm:h-auto'>
               
               {/*  1st Row */}
               <div className='w-[1280px] h-[273] gap-12  flex     max-sm:w-[380px]  max-sm:h-auto max-sm:flex-col'>
                                
                                {/* 1 James Nduku box */}
               <div className='w-[394px] h-[273px]  flex flex-col  items-center max-sm:w-[330px] '>
                    <Image src={"/james.png"} alt='james Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
                James Nduku
                </p>

                <p className='text-[18px] leading-[27px] '>
                Marketing Coordinator
                </p>

                <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                 <FaLinkedin />
                 <FaTwitter />
                 <FaDribbble />
                </div>
                 </div>


                                          
                                          {/*2 Joseph Munyambu box */}
                 <div className='w-[394px] h-[273px]   flex flex-col  items-center max-sm:w-[330px]'>
                    <Image src={"/jose-img.png"} alt='joseph Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
               Joseph Munyambu
                </p>

                <p className='text-[18px] leading-[27px] '>
                Nursing Assistant
                </p>

                <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                 <FaLinkedin/>
                 <FaTwitter />
                 <FaDribbble />
                </div>
                 </div>


                                                


                                                {/* 3 Joseph Ngumbau box */}
                 <div className='w-[394px] h-[273px]   flex flex-col  items-center max-sm:w-[330px]'>
                    <Image src={"/joseph-img.png"} alt=' Pic' width={80} height={80}/>
               <p className='text-[20px] leading-[30px] font-semibold  '>
               Joseph Ngumbau
                </p>

                <p className='text-[18px] leading-[27px] '>
                Medical Assistant
                </p>

                <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                 <FaLinkedin />
                 <FaTwitter/>
                 <FaDribbble />
                </div>
                 </div>


          </div>


         

                



                {/* 2nd row */}


                <div className='w-[1280px] h-[273] gap-12  flex mt-20  max-sm:w-[380px]     max-sm:h-auto max-sm:flex-col'>

                              {/* 4 Erick Kipkemboi box */}
<div className='w-[394px] h-[273px]   flex flex-col  items-center    max-sm:w-[330px]'>
     <Image src={"/erick-img.png"} alt='erick Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
Erick Kipkemboi
 </p>

 <p className='text-[18px] leading-[27px] '>
 Web Designer
 </p>


 <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                  <FaLinkedin />
                 <FaTwitter />
                 <FaDribbble />
                </div>

  </div>


                                 {/* Stephen Kerubo box */}
  <div className='w-[394px] h-[273px]   flex flex-col  items-center   max-sm:w-[330px]'>
     <Image src={"/stephen-img.png"} alt='stephen Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
Stephen Kerubo
 </p>

 <p className='text-[18px] leading-[27px] '>
 President of Sales
 </p>



 <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                 <FaLinkedin />
                 <FaTwitter />
                 <FaDribbble />
                </div>

  </div>



                              {/* John Leboo box */}
  <div className='w-[394px] h-[273px]   flex flex-col  items-center   max-sm:w-[330px]'>
     <Image src={"/john-img.png"} alt='john Pic' width={80} height={80}/>
<p className='text-[20px] leading-[30px] font-semibold  '>
John Leboo
 </p>

 <p className='text-[18px] leading-[27px] '>
 Dog Trainer
 </p>



 <div className='flex gap-[14px] mt-9 w-[18px] h-[18px]'>
                 <FaLinkedin/>
                 <FaTwitter />
                 <FaDribbble/>
                </div>

  </div>


</div>









          </div>


       </div>
    </div>
  )
}

export default TeamSection