import React from 'react'
import { Roboto } from 'next/font/google'
const roboto=Roboto({
  subsets:["latin"],
  weight:["400","700"]
})

function Achivement() {
  return (
    <div className={roboto.className}>
      <div className='w-[1280px] h-[488px] pt-[112px] pr-16 pl-16 pb-[112px] max-sm:w-[428px]  max-sm:py-12 max-sm:px-6 max-sm:h-auto'>
        <div className='w-[1152px] h-[136px] gap-6 max-sm:w-[380px] max-sm:h-auto'>
        <h3 className='text-5xl font-bold text-center mb-8 max-sm:text-[32px] '>Our Achivements</h3>
        <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

       <div className='w-[1256px] h-[96px]  mt-8  flex max-sm:w-[380px] max-sm:grid grid-cols-2'>
         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>+200</h3>
           <p className='leading-6'>Courses</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>50K</h3>
           <p className='leading-6'>Mentors</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>370k</h3>
           <p className='leading-6'>Students</p>
         </div>

         <div className='w-[296px] h-20  text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>100+</h3>
           <p className='leading-6'>Recognition</p>
         </div>
       </div>

       </div>






                          {/* 2nd Achievement */}






       <div className='w-[1280px] h-[488px] pt-[112px] pr-16 pl-16 pb-[112px] max-sm:w-[428px]  max-sm:py-12 max-sm:px-6 max-sm:h-auto'>
        <div className='w-[1152px] h-[136px] gap-6 max-sm:w-[380px] max-sm:h-auto'>
        <h3 className='text-5xl font-bold text-center mb-8 max-sm:text-[32px] '>Our Achivements</h3>
        <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>

       <div className='w-[1256px] h-[96px]  mt-8  flex max-sm:w-[380px] max-sm:grid grid-cols-2'>
         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>+200</h3>
           <p className='leading-6'>Courses</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>50K</h3>
           <p className='leading-6'>Mentors</p>
         </div>

         <div className='w-[296px] h-20 gap-2 text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>370k</h3>
           <p className='leading-6'>Students</p>
         </div>

         <div className='w-[296px] h-20  text-center max-sm:w-[182px]'>
           <h3 className='font-bold text-[40px] leading-[48px] max-sm:text-[20px]'>100+</h3>
           <p className='leading-6'>Recognition</p>
         </div>
       </div>

       </div>







    </div>
  )
}

export default Achivement;