import React from 'react'
import Image from 'next/image'

import {Roboto} from 'next/font/google'
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

function HeroSection() {
  return (
    <div className={`${roboto.className} flex w-[1280px] max-sm:flex-col `}>
      <div className='w-[640px] h-[300px] ml-20  mt-[200px] max-sm:pl-6 pr-6 max-sm:h-[390px] max-sm:mt-16 max-sm:ml-0'>
        <div className='w-[500px] max-sm:w-[380px] '>
         <h1 className='font-bold text-[56px] max-sm:text-[40px] '>
         Learn new skills online with ease
         </h1>
         <p className='text-[18px]'>
         Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
         </p>
         </div>

        <div className='mt-4'>
            <button type='button' className='w-[178px] h-[48px] border border-black bg-black text-white rounded-[5px] mr-2'>Start learning now</button>
            <button type='button' className='w-[164px] h-[48px] border border-black rounded-[5px] ml-2'>Explore Courses</button>
            
        </div>
      </div>


      <div className='max-sm:w-[428px] '>
       <Image src={"/img.png"} alt='girlPicture' width={640} height={900}/>


      </div>




    </div>
  )
}

export default HeroSection