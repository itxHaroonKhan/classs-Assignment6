import React from 'react'
import { FaStar } from "react-icons/fa";

import Image from 'next/image';

import {Roboto} from 'next/font/google'
const roboto = Roboto({
    subsets: ["latin"],
    weight:["400","700"]
})

function CustomerSection() {
  return (
    <div className={roboto.className}>
         {/* main div */}
         <div className='w-[1280px] h-[830px] pt-[112px] bt-[112px] pl-16 pr-16 bg-primary max-sm:w-[428px] max-sm:h-auto  max-sm:py-12 max-sm:px-6'>
                                 
                                 {/* Heading container */}
                 <div className='w-[560px] h-[109px]    max-sm:w-[361px]'>
                       <h2 className='font-bold text-5xl leading-[57.6px]   max-sm:text-[32px]'>Customer testimonials</h2>
                       <p className='text-[18px] leading-[27px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>
                        

                        {/* main box containr */}
                 <div className='w-[1152px] h-[321px] mt-20 flex gap-8 max-sm:flex-col max-sm:h-auto max-sm:w-[380px]'>
                     
                     {/* 1st box */}

                     <div className='w-[362px] h-[321px] border border-black p-8 gap-6 '>
                      <div className='flex'>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                      </div>

                      <div className='w-[298px] h-[215px] '>
                        <p className='text-[18px] mt-9'>
                        &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&nbsp;
                        </p>

                       <div className='w-[215px] h-[56px] flex'>
                          <div>
                         <Image src={"/Avatar-img.png"} alt='pic' width={56} height={56}/>
                         </div>
                         <div className='ml-4'>
                         <p className='font-semibold'>James Nduku</p>
                         <p>Software Developer</p>
                         </div>
                      </div>
                      </div>
                     </div>







   {/* 2nd box */}

   <div className='w-[362px] h-[321px] border border-black p-8 gap-6'>
                      <div className='flex'>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                      </div>

                      <div className='w-[298px] h-[215px] '>
                        <p className='text-[18px] mt-9'>
                        &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&nbsp;
                        </p>

                       <div className='w-[215px] h-[56px] flex'>
                          <div>
                         <Image src={"/Avatar2.png"} alt='pic' width={56} height={56}/>
                         </div>
                         <div className='ml-4'>
                         <p className='font-semibold'>Erick Kipkemboi</p>
                         <p>Scrum Master</p>
                         </div>
                      </div>
                      </div>
                     </div>





   {/* 3rd box */}

   <div className='w-[362px] h-[321px] border border-black p-8 gap-6'>
                      <div className='flex'>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                       <FaStar/>
                      </div>

                      <div className='w-[298px] h-[215px] '>
                        <p className='text-[18px] mt-9'>
                        &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&nbsp;
                        </p>

                       <div className='w-[215px] h-[56px] flex'>
                          <div>
                         <Image src={"/Avatar3.png"} alt='pic' width={56} height={56}/>
                         </div>
                         <div className='ml-4'>
                         <p className='font-semibold'>Stephen Kerubo</p>
                         <p>UI/UX Designer</p>
                         </div>
                      </div>
                      </div>
                     </div>


            </div>



           <div className='w-[1152px] mt-11 h-12 flex justify-between max-sm:w-[380px]'>
            <div>
            <Image src={"/Slider Dots.png"} alt='dot' height={8} width={72}/>
            </div>
            
            <Image src={"/Slider Buttons.png"} alt='buttons' height={48} width={111}/>
           </div>








         </div>
    </div>
  )
}

export default CustomerSection