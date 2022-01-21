import React,{useState} from "react";
import RoutineImage from "../assets/images/beforesleep.png";
import RoutineSleepImage from "../assets/images/sleep.png";

const Features = ()=>{
  const [sleep,setSleep] = useState(true);
  const handleToggle = ()=>{
    setSleep(prevState=>!prevState);
  }
  return(
    <div className="sweet-features">
      <h1 className="text-center text-3xl font-roboto text-black font-bold leading-tight">
        What can you control with Sweet ?
      </h1>
      <div className="sweet-routine sm:flex-row flex-col flex items-center sm:justify-around justify-end pb-8 sm:pb-0 my-20  relative" style={{
        backgroundImage:`url(${!sleep?RoutineSleepImage:RoutineImage})`,
      }}>
        <div className="flex flex-col items-center px-2 py-4 bg-white drop-shadow-md max-w-xs md:max-w-md sm:max-w-xl">
          <h3 className="text-2xl my-2 text-center ">Never repeat the same actions again!</h3>
          <p className="text-grey text-sm text-center my-2">
            Create routines that will apply different changes on multiple devices of your choice ; for example you can create a sleeping routine that turn off the light and activate motion sensors
          </p>
          <span className="text-sm font-bold text-purple my-2">Try it</span>
          <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
            <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" onChange={handleToggle}  checked={sleep}/>
            <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Features;