// import React, { useState } from 'react'
// import Bg from '../Images/giphy.gif'
// import { useNavigate } from 'react-router-dom'

// const Form = () => {
//     const [noButtonSize, setNoButtonSize] = useState(150)
//     const [yesButtonSize, setYesButtonSize] = useState(50) // Start with a small, visible size

//     const navigate = useNavigate()

//     const handleNoClick = () => {
//       setNoButtonSize(prevSize => {
//         const newSize = prevSize - 60
//         return Math.max(newSize, 0)
//       })
//       setYesButtonSize(prevSize => Math.min(prevSize + 60, 150))
//     }

//     const handleYesClick = () => {
//         setYesButtonSize(prevSize => {
//             const newSize = Math.min(prevSize + 60, 150)
//             if (newSize === 150) {
//               navigate('/last')
//             }
//             return newSize
//           })
//         }

//   return (
//     <div className='flex h-screen items-center justify-center'>
//       <div className='flex-col flex w-[600px] h-[660px] bg-[#ffc0cb] rochester-regular pt-[30px]'>
//         <div className='w-full h-[150px] flex items-center justify-center pr-[45px]'>
//           <h1 className='text-[#ff0000] text-[75px]'>Will you be my</h1>
//         </div>
//         <div className= 'w-full h-[100px] flex items-center justify-end pr-[45px]'>
//           <h1 className='text-[#ff0000] text-[75px] pr-[30px] pb-[60px]'>valentine? </h1>
//         </div>
//         <div className='flex flex-row w-full h-full'>
//           <div className='w-[50%] h-full flex items-center justify-center pb-[100px]'>
//             <div 
//               className='w-[210px] h-[270px]'
//               style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//             />
//           </div>
//           <div className='flex flex-col items-center justify-center w-[50%] gap-10 pb-[100px]'>
//             <button 
//               className='bg-[#ff0000] rounded-md text-white text-3xl kaushan-script-text'
//               style={{
//                 width: `${yesButtonSize}px`,
//                 height: `${yesButtonSize * 0.625}px`,
//                 fontSize: `${yesButtonSize * 0.25}px`,
//                 transition: 'all 0.3s ease-in-out'
//               }}
//               onClick={handleYesClick}
//             >
//               Yes !
//             </button>
//             {noButtonSize > 0 && (
//               <button 
//                 className='bg-white text-[#ff0000] rounded-md text-3xl kaushan-script-text'
//                 style={{
//                   width: `${noButtonSize}px`,
//                   height: `${noButtonSize * 0.625}px`,
//                   fontSize: `${noButtonSize * 0.25}px`,
//                   transition: 'all 0.3s ease-in-out'
//                 }}
//                 onClick={handleNoClick}
//               >
//                 No
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Form

// import React, { useState } from 'react'
// import Bg from '../Images/giphy.gif'
// import Last from '../components/last'  // Import the Last component

// const Form = () => {
//     const [noButtonSize, setNoButtonSize] = useState(150)
//     const [yesButtonSize, setYesButtonSize] = useState(50) // Start with a small, visible size
//     const [showLast, setShowLast] = useState(false)

//     const handleNoClick = () => {
//       setNoButtonSize(prevSize => {
//         const newSize = prevSize - 60
//         return Math.max(newSize, 0)
//       })
//       setYesButtonSize(prevSize => Math.min(prevSize + 60, 150))
//     }

//     const handleYesClick = () => {
//         setYesButtonSize(prevSize => {
//             const newSize = Math.min(prevSize + 60, 150)
//             if (newSize === 150) {
//                 setShowLast(true)  // Show the Last component when button is at max size
//             }
//             return newSize
//         })
//     }

//   return (
//     <div className='flex h-screen items-center justify-center'>
//       {!showLast ? (
//         <div className='flex-col flex w-[600px] h-[660px] bg-[#ffc0cb] rochester-regular pt-[30px] rounded-xl'>
//           <div className='w-full h-[150px] flex items-center justify-center pr-[45px]'>
//             <h1 className='text-[#ff0000] text-[75px]'>Will you be my</h1>
//           </div>
//           <div className= 'w-full h-[100px] flex items-center justify-end pr-[45px]'>
//             <h1 className='text-[#ff0000] text-[75px] pr-[30px] pb-[60px]'>valentine? </h1>
//           </div>
//           <div className='flex flex-row w-full h-full'>
//             <div className='w-[50%] h-full flex items-center justify-center pb-[100px]'>
//               <div 
//                 className='w-[210px] h-[270px]'
//                 style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
//               />
//             </div>
//             <div className='flex flex-col items-center justify-center w-[50%] gap-10 pb-[100px]'>
//               <button 
//                 className='bg-[#ff0000] rounded-md text-white text-3xl kaushan-script-text'
//                 style={{
//                   width: `${yesButtonSize}px`,
//                   height: `${yesButtonSize * 0.625}px`,
//                   fontSize: `${yesButtonSize * 0.25}px`,
//                   transition: 'all 0.3s ease-in-out'
//                 }}
//                 onClick={handleYesClick}
//               >
//                 Yes !
//               </button>
//               {noButtonSize > 0 && (
//                 <button 
//                   className='bg-white text-[#ff0000] rounded-md text-3xl kaushan-script-text'
//                   style={{
//                     width: `${noButtonSize}px`,
//                     height: `${noButtonSize * 0.625}px`,
//                     fontSize: `${noButtonSize * 0.25}px`,
//                     transition: 'all 0.3s ease-in-out'
//                   }}
//                   onClick={handleNoClick}
//                 >
//                   No
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Last />  // Render the Last component when showLast is true
//       )}
//     </div>
//   )
// }

// export default Form

// src/components/Form.js
import React, { useState } from 'react';
import Bg from '../../Images/giphy.gif';
import Last from '../last/last'; // Corrected import path

const Form = () => {
    const [noButtonSize, setNoButtonSize] = useState(150);
    const [yesButtonSize, setYesButtonSize] = useState(50);
    const [showLast, setShowLast] = useState(false);

    const handleNoClick = () => {
        setNoButtonSize(prevSize => {
            const newSize = prevSize - 60;
            return Math.max(newSize, 0);
        });
        setYesButtonSize(prevSize => Math.min(prevSize + 60, 150));
    };

    const handleYesClick = () => {
        setYesButtonSize(prevSize => {
            const newSize = Math.min(prevSize + 60, 150);
            if (newSize === 150) {
                setShowLast(true);
            }
            return newSize;
        });
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            {!showLast ? (
                <div className='flex-col flex w-[600px] h-[660px] bg-[#ffc0cb] rochester-regular pt-[30px] rounded-xl'>
                    <div className='w-full h-[150px] flex items-center justify-center pr-[45px]'>
                        <h1 className='text-[#ff0000] text-[75px]'>Will you be my</h1>
                    </div>
                    <div className='w-full h-[100px] flex items-center justify-end pr-[45px]'>
                        <h1 className='text-[#ff0000] text-[75px] pr-[30px] pb-[60px]'>valentine? </h1>
                    </div>
                    <div className='flex flex-row w-full h-full'>
                        <div className='w-[50%] h-full flex items-center justify-center pb-[100px]'>
                            <div
                                className='w-[210px] h-[270px]'
                                style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center w-[50%] gap-10 pb-[100px]'>
                            <button
                                className='bg-[#ff0000] rounded-md text-white text-3xl kaushan-script-text'
                                style={{
                                    width: `${yesButtonSize}px`,
                                    height: `${yesButtonSize * 0.625}px`,
                                    fontSize: `${yesButtonSize * 0.25}px`,
                                    transition: 'all 0.3s ease-in-out'
                                }}
                                onClick={handleYesClick}
                            >
                                Yes !
                            </button>
                            {noButtonSize > 0 && (
                                <button
                                    className='bg-white text-[#ff0000] rounded-md text-3xl kaushan-script-text'
                                    style={{
                                        width: `${noButtonSize}px`,
                                        height: `${noButtonSize * 0.625}px`,
                                        fontSize: `${noButtonSize * 0.25}px`,
                                        transition: 'all 0.3s ease-in-out'
                                    }}
                                    onClick={handleNoClick}
                                >
                                    No
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <Last />
            )}
        </div>
    );
};

export default Form;
