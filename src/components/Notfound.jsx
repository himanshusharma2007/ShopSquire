import React from 'react'

 const NotFoundComp = ({ image,caption }) => {
  
   return (
     <div className="wraper flex flex-col justify-center items-center mt-[20vh] device-screen">
       <img src={image} alt="not found" className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]" />
       <figcaption className='text-[25px] font-medium Lora text-center mx-3'>{caption}</figcaption>
     </div>
   );
 };

export default NotFoundComp
