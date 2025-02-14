// // import React from 'react'
// // import Bg from '../Images/terrier.jpeg'
// // import { motion } from "framer-motion";
// // import flap from '../Images/Polygon_1.png'
// // import Form from '../components/form';

// // const Home = () => {
// //   return (
// //     <div className='flex flex-col items-center justify-center w-full h-screen'>
// //         <motion.div
// //         //   className="absolute top-0 left-0 right-0 w-0 h-0 mx-auto
// //         //             border-l-[350px] border-l-transparent 
// //         //             border-r-[350px] border-r-transparent 
// //         //             border-t-[80px] border-t-[#eeff41] z-10"
// //           className='w-[700px] h-[100px] absolute top-[27%] left-[27%]'
// //           animate={{ rotateX: [0, 180] }}
// //           transition={{
// //             duration: 2,
// //             ease: "easeIn",
// //           }}
// //           style={{ 
// //             transformOrigin: "top",
// //             perspective: "1000px",
// //             backgroundImage: `url(${flap})`, backgroundSize: 'cover', backgroundPosition: 'center'
// //           }}
// //         /> 
// //       <div className='relative flex flex-col w-[700px] h-[400px] bg-[#FE5151] overflow-hidden'>
// //         <motion.div
// //           className="absolute top-0 left-0 right-0 w-0 h-0 mx-auto
// //                     border-l-[350px] border-l-transparent 
// //                     border-r-[350px] border-r-transparent 
// //                     border-t-[80px] border-t-[#eeff41] z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
// //         animate={{ rotateX: [0, 180] }}
// //         transition={{
// //                       duration: 2,
// //                       ease: "easeIn",
// //                     }}
// //         style={{ 
// //                       transformOrigin: "top",
// //                       perspective: "1000px",
// //         }}
// //         />
// //         <div className='z-10 mt-[220px] px-8 relative'>
// //           <h1 className='text-5xl text-white absolute top-[-90px] left-[260px] dancing-script-text font-thin'>For,</h1>
// //           <h1 className='text-5xl text-[#eeff41] absolute top-[-45px] left-[335px] great-vibes-text font-thin text-shadow-lg shadow-gray-700'>You</h1>
// //         </div>
// //         <div 
// //           className='w-[100px] h-[100px] absolute top-[50px] left-[590px] border-2 border-[#bf38b2]'
// //           style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
// //         />
// //       </div>
// //       <div className='h-[400px] w-[400px]'>
// //         <Form />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Home

// import React, { useState } from 'react'
// import Bg from '../Images/terrier.jpeg'
// import { motion, AnimatePresence } from "framer-motion";
// import flap from '../Images/Polygon_1.png'
// import Form from '../components/form';

// const Home = () => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className='flex items-center justify-center w-full h-screen'>
//       <motion.div 
//         className='relative w-[700px]'
//         animate={showForm ? { opacity: 0 } : {}}
//         transition={{ duration: 1, delay: 1 }}
//       >
//         <motion.div
//           className='w-[700px] h-[100px] absolute top-0 left-0'
//           animate={{ rotateX: 180 }}
//           transition={{
//             duration: 2,
//             ease: "easeIn",
//           }}
//           style={{ 
//             transformOrigin: "top",
//             perspective: "1000px",
//             backgroundImage: `url(${flap})`, backgroundSize: 'cover', backgroundPosition: 'center'
//           }}
//           onAnimationComplete={() => {
//             setShowForm(true);
//           }}
//         /> 
//         <div className='relative flex flex-col w-[700px] h-[400px] bg-[#FE5151] overflow-hidden'
//         style={{ z: 1000 }}>
//           <motion.div
//             className="absolute top-0 left-0 right-0 w-0 h-0 mx-auto
//                       border-l-[350px] border-l-transparent 
//                       border-r-[350px] border-r-transparent 
//                       border-t-[80px] border-t-[#eeff41] z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
//             animate={{ rotateX: 180 }}
//             transition={{
//               duration: 2,
//               ease: "easeIn",
//             }}
//             style={{ 
//               transformOrigin: "top",
//               perspective: "1000px",
//               z: 100
//             }}
//           />
//           <div className='z-10 mt-[220px] px-8 relative z-1000'>
//             <h1 className='text-5xl text-white absolute top-[-90px] left-[260px] dancing-script-text font-thin'>For,</h1>
//             <h1 className='text-5xl text-[#eeff41] absolute top-[-45px] left-[335px] great-vibes-text font-thin text-shadow-lg shadow-gray-700'>You</h1>
//           </div>
//           <div 
//             className='w-[100px] h-[100px] absolute top-[50px] left-[590px] border-2 border-[#bf38b2]'
//             style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           />
//         </div>
//       </motion.div>
//       <AnimatePresence>
//         {showForm && (
//     <motion.div 
//       initial={{ opacity: 0,}}
//       animate={{ 
//         opacity: 1,
//       }}
//       transition={{ duration: 1 }}
//       className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
//     >
//       <Form />
//     </motion.div>
//   )}
// </AnimatePresence>
//     </div>
//   )
// }

// export default Home
// import React, { useState } from 'react'
// import Bg from '../Images/terrier.jpeg'
// import { motion, AnimatePresence } from "framer-motion";
// import flap from '../Images/Polygon_1.png'
// import Form from '../components/form';
// import sound from '../Images/cut.mp3'

// const Home = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
//   const audio = new Audio(sound);


//   const handleEnvelopeClick = () => {
//     if (!isEnvelopeOpen) {
//       setIsEnvelopeOpen(true);
//       setTimeout(() => setShowForm(true), 2000);
//       audio.play().catch(error => console.log("Audio play failed:", error));
//     }
//   };

//   return (
//     <div className='flex items-center justify-center w-full h-screen'>
//       <motion.div 
//         className='relative w-[700px] cursor-pointer'
//         animate={showForm ? { opacity: 0 } : {}}
//         transition={{ duration: 1, delay: 1 }}
//         onClick={handleEnvelopeClick}
//       >
//         <motion.div
//           className='w-[700px] h-[100px] absolute top-0 left-0'
//           animate={isEnvelopeOpen ? { rotateX: 180 } : {}}
//           transition={{
//             duration: 2,
//             ease: "easeIn",
//           }}
//           style={{ 
//             transformOrigin: "top",
//             perspective: "1000px",
//             backgroundImage: `url(${flap})`, backgroundSize: 'cover', backgroundPosition: 'center'
//           }}
//         /> 
//         <div className='relative flex flex-col w-[700px] h-[400px] bg-[#FE5151] overflow-hidden'
//         style={{ z: 1000 }}>
//           <motion.div
//             className="absolute top-0 left-0 right-0 w-0 h-0 mx-auto
//                       border-l-[350px] border-l-transparent 
//                       border-r-[350px] border-r-transparent 
//                       border-t-[80px] border-t-[#eeff41] z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
//             animate={isEnvelopeOpen ? { rotateX: 180 } : {}}
//             transition={{
//               duration: 2,
//               ease: "easeIn",
//             }}
//             style={{ 
//               transformOrigin: "top",
//               perspective: "1000px",
//               z: 100
//             }}
//           />
//           <div className='z-10 mt-[220px] px-8 relative z-1000'>
//             <h1 className='text-5xl text-white absolute top-[-90px] left-[260px] dancing-script-text font-thin'>For,</h1>
//             <h1 className='text-5xl text-[#eeff41] absolute top-[-45px] left-[335px] great-vibes-text font-thin text-shadow-lg shadow-gray-700'>Placeholder</h1>
//           </div>
//           <div 
//             className='w-[100px] h-[100px] absolute top-[50px] left-[590px] border-2 border-[#bf38b2]'
//             style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//           />
//         </div>
//       </motion.div>
//       <AnimatePresence>
//         {showForm && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
//           >
//             <Form />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Form from '../../components/form/form';
import sound from '../../Images/cut.mp3';
import flap from '../../Images/Polygon_1.png';
import Bg from '../../Images/terrier.jpeg'; // Fixed: import Bg
const audio = new Audio(sound);

const Home = () => {
    const [showForm, setShowForm] = useState(false);
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

    const handleEnvelopeClick = () => {
        if (!isEnvelopeOpen) {
            setIsEnvelopeOpen(true);
            audio.play().catch(error => console.log("Audio play failed:", error));
            setTimeout(() => setShowForm(true), 2000);
        }
    };

    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <motion.div
                className='relative w-[700px] cursor-pointer'
                animate={showForm ? { opacity: 0 } : {}}
                transition={{ duration: 1, delay: 1 }}
                onClick={handleEnvelopeClick}
            >
                <motion.div
                    className='w-[700px] h-[100px] absolute top-0 left-0'
                    animate={isEnvelopeOpen ? { rotateX: 180 } : { rotateX: 0 }}
                    transition={{
                        duration: 2,
                        ease: "easeIn",
                    }}
                    style={{
                        transformOrigin: "top",
                        perspective: "1000px",
                        backgroundImage: `url(${flap})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <div
                    className='relative flex flex-col w-[700px] h-[400px] bg-[#FE5151] overflow-hidden'
                    style={{ zIndex: 1000 }}>
                    <motion.div
                        className="absolute top-0 left-0 right-0 w-0 h-0 mx-auto
                      border-l-[350px] border-l-transparent 
                      border-r-[350px] border-r-transparent 
                      border-t-[80px] border-t-[#eeff41] z-10 filter drop-shadow-[0_5px_5px_rgba(0,0,0,0.6)]"
                        animate={isEnvelopeOpen ? { rotateX: 180 } : { rotateX: 0 }}
                        transition={{
                            duration: 2,
                            ease: "easeIn",
                        }}
                        style={{
                            transformOrigin: "top",
                            perspective: "1000px",
                            zIndex: 100
                        }}
                    />
                    <div className='z-10 mt-[220px] px-8 relative z-1000'>
                        <h1 className='text-5xl text-white absolute top-[-90px] left-[260px] dancing-script-text font-thin'>For,</h1>
                        <h1 className='text-5xl text-[#eeff41] absolute top-[-45px] left-[335px] great-vibes-text font-thin text-shadow-lg shadow-gray-700'>
                            You
                        </h1>
                    </div>
                    <div
                        className='w-[100px] h-[100px] absolute top-[50px] left-[590px] border-2 border-[#bf38b2]'
                        style={{
                            backgroundImage: `url(${Bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                </div>
            </motion.div>
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                    >
                        <Form />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Home
