import React from 'react'

 const NotFoundComp = ({ image,caption }) => {
  
   return (
     <div className="wraper flex flex-col justify-center items-center  mt-[35vh] sm:mt-[30vh] md:mt-[20vh]  device-screen">
       <img src={image} alt="not found" className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]" />
       <figcaption className='text-[25px] font-medium Lora '>{caption}</figcaption>
     </div>
   );
 };

export default NotFoundComp
