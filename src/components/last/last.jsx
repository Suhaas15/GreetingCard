import React from 'react'
import { motion } from "framer-motion";
import Bg from '../../Images/luigi_simp.png'

const Last = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='flex flex-col items-center w-[600px] h-[660px] bg-[#ffc0cb] pt-[50px] rounded-2xl'>
            <div className='w-full h-[270px] items-center flex justify-center'>
            <div 
              className='w-[265px] h-[240px] rounded-2xl'
              style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            </div>
            <div className='w-full h-[200px] items-center flex justify-center pb-[90px]'>
                <h1 className='text-[#ff0000] italianno-regular text-[90px]'>Yayy!!</h1>
            </div>
            <h1 className='italianno-regular text-[#ff0000] text-[24px] pb-[50px]'>P.S - Call me when you see this?🙃</h1>
        </div>
    </motion.div>
  )
}

export default Last
