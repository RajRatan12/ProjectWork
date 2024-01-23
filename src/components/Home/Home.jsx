// import React from 'react'
import Landing_Page1 from '../../Assets/Landing_Page1.jpg'
import Landing_Page2 from '../../Assets/Landing_Page2.jpg'
import {data} from "../Data/Data"

const Home = () => {
  return (
    <div>
    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${Landing_Page1})`  }}>


      <div className=' ml-[3%]  p-10 text-black m-auto md:w-[700px] '>
          <p className='Rajdhani font-bold text-3xl'>Welcome to ThreatSenseAI</p>
          <p className='p-2 Rajdhani'>ahjkhsoiajsdjnasdlhlais dauby ak hxku asugxukxgasg b</p>
      </div>
    </div>


    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${Landing_Page2})`  }}>

<div className=" grid sm:grid-cols-2 md:grid-cols-4 m-auto gap-x-5 gap-y-5 mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="card md:w-90 sm:w-70 glass m-3"
          >
            <figure><img src={item.image} alt={item.name}/></figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className=' ml-[3%]  p-10 text-black m-auto md:w-[700px] '>
          <p className='Rajdhani font-bold text-5xl'>Welcome to ThreatSenseAI</p>
          <p className='p-2 Rajdhani'>ahjkhsoiajsdjnasdlhlais dasbx ak hxku asugxukxgasg b</p>
      </div> */}
    </div>
    </div>
  );
};
export default Home