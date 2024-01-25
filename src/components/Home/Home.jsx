// import React from 'react'
import {useState,useRef,useEffect} from "react"
import Landing_Page1 from '../../Assets/Landing_Page1.jpg'
// import Landing_Page2 from '../../Assets/Landing_Page2.jpg'
import pexels from "../../Assets/pexels-eberhard-grossgasteiger-1292115.jpg"
import {data} from "../Data/Data"
import {IoCloseCircleSharp} from "../../Assets/Icons"
// import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
    } 
    );
    
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function Home() {
  const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

  const [fade, setFade] = useState(false);

  const onBringGlassInfront=()=>{
    if(fade==false){
      setFade(true)
    }else{
      setFade(false)
    }
  }
  return (
    <div>
    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${Landing_Page1})`  }}>


      <div className=' ml-[3%]  p-10 text-black m-auto md:w-[700px] '>
          <p className='Rajdhani font-bold text-3xl'>Welcome to ThreatSenseAI</p>
          <p className='p-2 Rajdhani'>ahjkhsoiajsdjnasdlhlais dauby ak hxku asugxukxgasg b</p>
      </div>
    </div>


    <div className=" w-[100%] h-screen flex-col flex justify-center mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg" 
      style={{ backgroundImage: `url(${pexels})`  }}>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 m-auto gap-x-5 gap-y-5 mt-8">
        {data.map((item, index) => (
          <div
            ref={ref1} className={` transition-opacity ease-in duration-700 card md:w-90 sm:w-70 glass m-3 ${isVisible1 ? "opacity-100" : "opacity-0"}`}
            key={index}
          >
            <figure><img src={item.image} alt={item.name}/></figure>
            <div className={` card-body`}>
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-110 duration-250" onClick={onBringGlassInfront}>Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    <div>
    <div className="flex justify-center mb-[4%]">
        <div className={`${fade==true? "":"hidden"} card w-[65%] glass`}>
          <div className="card-body">
          <div className="flex justify-end">
          <button type="button" className="glass rounded-2xl  inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none " onClick={onBringGlassInfront} >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Home