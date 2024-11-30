import React from 'react'
import Image from "next/image";

import  {Roboto} from 'next/font/google'
const roboto=Roboto({
  subsets:["latin"],
  weight:["400","700"]
})  



function Courses() {
  return (
    <div className={roboto.className}>
        {/* main container*/}
        <div className='w-[1280px] h-[1742px] pt-[112px] pb-[112px]    max-sm:w-[428px] max-sm:h-auto max-sm:py-12 max-sm:px-6'>
           
           <div className='w-[786px] h-[118px]  mx-auto     max-sm:w-[249px]  '>
           <h1 className='font-bold text-[56px] leading-[67.2px] text-center   max-sm:text-[32px]'> Courses</h1>
           <p className='text-[18px] leading-[27px] text-center mt-5'>Your Ultimate Guide to learning</p>
           </div>
                
                         {/* 2nd main container */}
           <div className='w-[1152px] h-[1340px]  mt-10   max-sm:w-[380px] max-sm:h-auto '>
                                     
                  <ul className='w-[336px] h-[40px] flex mx-auto'>
                    <li className='w-[87px]  border-b border-[#676767] pt-2 pb-2 pr-4 pl-4 '>
                    Popular
                    </li>
                     <li className="w-[140px] pt-2 pb-2 pr-4 pl-4">
                     Recommended
                     </li>
                     <li className="w-[109px] pt-2 pb-2 pr-4 pl-4">
                     Best  Price
                     </li>
                  </ul>
            

                  


            {/* courses Images and details */}
              <div className='w-[1280px] h-[534px]  grid grid-cols-3 mt-11 gap-8   max-sm:grid-cols-1  max-sm:w-[380px] max-sm:h-auto'>
                    {/*1 Ui/UX Design ourse Detail */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Design.png"} alt='uiux design' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Design</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>

                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>UX/UI Design 201</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 '>$400</p>
                      </div>
                  </div>




           
                    {/*2 Introduction to Python */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Programmimg.png"} alt='python image' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Programmimg</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2 '>5.0</p>
                      </div>

                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Introduction to Python</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2 '>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 '>$400</p>
                      </div>
                  </div>
              





           
                    {/*3 Data Analysis for Beginners*/}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Besins.png"} alt='Data Analysis' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Business</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2 '>5.0</p>
                      </div>

                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Data Analysis for Beginners</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
              
                

                        

                      

            {/*4 Art Specialization */}
          
              
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary  max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Art.png"} alt='art' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Art</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Art Specialization</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2 ml-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5 ml-2'>$400</p>
                      </div>
                  </div>




           
                    {/*5 Rule of Law */}
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Law.png"} alt='law' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Law</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Rule of Law</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
              




                    {/*6 Introduction to webflow*/}

           
                  <div className='w-[416px] h-[534px] rounded-[5px]  bg-primary max-sm:w-[380px]'>
                              <Image className='max-sm:w-[380px]' src={"/Tech.png"} alt='webflow' width={416} height={300}/>
                      <div className='flex mt-5'>
                      <p className='font-[600px] text-[14px] w-[326px] h-[21px] ml-2'>Tech</p>
                      <Image src={"/Star 1.png"} alt="star" height={24} width={24} />
                      <p className='w-5 h-6 font-semibold text-[14px] ml-2'>5.0</p>
                      </div>


                        
                      <h5 className='font-bold text-2xl leading-[33.6px] ml-2'>Introduction to webflow</h5>
                      <p className='leading-6 ml-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                      <div className='w-[382px] h-[40px] gap-4 flex mt-5 ml-2'>
                            <button type='button' className='w-[117px] h-10 rounded-[5px] border border-black pt-2 pb-2 pr-3 pl-3 gap-2'>Enroll Now</button>
                            <p className='w-[77px] h-[40px] rounded-[5px] pt-2 pb-2 pr-5 pl-5'>$400</p>
                      </div>
                  </div>
                  </div>
              
                 
               

                </div>
                <div className='  flex justify-center items-center '>
                <button className='w-[170px] h-10 border border-black rounded-[5xl] pt-2 pb-2 pr-4 pl-4  ' >View All Courses</button>
                </div>
               

               
        </div>
    </div>
  )
}

export default Courses