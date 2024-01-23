// import React from 'react'
import Landing_Page1 from '../../Assets/Landing_Page1.jpg'
import istock from '../../Assets/istockphoto-875534110-1024x1024.jpg'
const Home = () => {
  return (
    <div>
    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${Landing_Page1})`  }}>


      <div className=' ml-[3%]  p-10 text-black m-auto md:w-[700px] '>
          <p className='Rajdhani font-bold text-3xl'>Welcome to ThreatSenseAI</p>
          <p className='p-2 Rajdhani'>ahjkhsoiajsdjnasdlhlais dasbx ak hxku asugxukxgasg b</p>
      </div>
    </div>
    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${istock})`  }}>


      <div className=' ml-[3%]  p-10 text-black m-auto md:w-[700px] '>
          <p className='Rajdhani font-bold text-5xl'>Welcome to ThreatSenseAI</p>
          <p className='p-2 Rajdhani'>ahjkhsoiajsdjnasdlhlais dasbx ak hxku asugxukxgasg b</p>
      </div>
    </div>
    </div>
  );
};
export default Home