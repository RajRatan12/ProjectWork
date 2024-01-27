// import {useState,useRef,useEffect} from "react";
import { FaMapSigns } from "react-icons/fa";
import { BsFillTelephoneFill, BsGlobeAmericas } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

function FooterContact  () {
  const formTab = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }];
  const contactTab = [
    {
      icon: <FaMapSigns className="text-4xl" />,
      title: "Address",
      desription: `198 West 21th Street, Suite 721 New York NY 10016`,
    },
    {
      icon: <BsFillTelephoneFill className="text-4xl" />,
      title: "Contact Number",
      desription: `+ 1235 2355 98`,
    },
    {
      icon: <FaPaperPlane className="text-4xl" />,
      title: "Email Address",
      desription: `info@yoursite.com`,
    },
    {
      icon: <BsGlobeAmericas className="text-4xl" />,
      title: "Website",
      desription: "yoursite.com",
    },
  ];
  return (
    <>
      <div>
        <div className=" w-[100%] flex-col flex  mx-auto max-w-full bg-cover  bg-center bg-no-repeat " >
          <div className="flex justify-center sm:mt-[10%] md:mt-[8%] xs:mt-[20%]">
            <p className="font-Rajdhani text-3xl font-bold">Contact Me</p>
          </div>
      {/* Cards */}
        <div className="container mx-auto mt-[10%]">
          <div className="flex gap-5 justify-center flex-wrap h-auto lg:flex-nowrap ">
            {contactTab.map((x, index) => {
              return (
                <div key={index} className="card w-full  shadow-xl h-auto  ">
                  <div className="card-body items-center flex-grow-0  text-center">
                    <h2 className="card-title">{x.icon}</h2>
                    <p className="text-lg font-bold my-3">{x.title}</p>
                    <div className="">
                      <p className=" text-lg font-semibold">{x.desription}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>
        <div className={` w-[100%] h-screen flex-col flex  mx-auto max-w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg`} >
      <div className=" container mx-auto  flex flex-wrap shadow-2xl my-20 rounded-md p-5">
        <div className="lg:w-1/2 w-full p-4">
          <form className="  shadow-md rounded-lg px-2 pt-6 pb-8 mb-4">
            <div className="flex  flex-col">
              {formTab.map((x, index) => {
                return (
                  <div key={index} className="mx-auto form-control w-full">
                    <label className="label">
                      <span className="label-text">What is your name?</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full  "
                    />
                  </div>
                );
              })}
              <div className="w-full my-4 flex justify-end ">
                <button className="btn rounded-full w-full">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full   p-4">
          <div className="relative aspect-w-16 h-[50vw] lg:h-full aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.google.com/maps/place/Kalinga+Institute+of+Medical+Sciences+(KIMS)/@20.3555968,85.8042593,15z/data=!4m6!3m5!1s0x3a19092289cbfcef:0x26d133989a910e1a!8m2!3d20.3519291!4d85.8133651!16s%2Fm%2F02vrfb2?entry=ttu"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      </div>
      </div> 
    </>
  )
}

export default FooterContact;