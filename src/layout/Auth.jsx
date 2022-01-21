import React,{useState} from "react";
import SweetImage from "../assets/images/flat_design_house__disney_up__by_therealmrme_dah9b89.png";
import Login from "../components/Login";
import Register from "../components/Register";

const Auth = () => {
  const [active,setActive] = useState(true);
  const activeStyle = "bg-blue cursor-pointer  p-3 rounded-t-xs rounded-b-0 text-white font-medium";
  const secondaryStyle = "bg-white cursor-pointer p-3 hover:bg-blue hover:text-white  rounded-t-xs rounded-b-0 text-gray-500 font-medium";

  const handleActiveItem = (e)=>{
    setActive(prevState=>!prevState);
  }

  return (
    <div className="sweet-auth flex justify-center xl:justify-between xl:items-end md:items-end  relative">
      <div className="flex flex-col m-0 xl:my-20 xl:mx-16 lg:mx-16 lg:my-0  justify-end">
        <h1 className="xl:text-5xl text-3xl  md:text-4xl  my-10 font-sans text-black font-extrabold leading-tight">
          The sweetest way to
          <br />
           control your home!
        </h1>
        <div className="sweet-form w-100 mb-8">
          <div className="flex">
            <p onClick={handleActiveItem} className={active ? activeStyle : secondaryStyle}>Login</p>
            <p onClick={handleActiveItem} className={!active ? activeStyle : secondaryStyle}>Register</p>
          </div>
        { active ? <Login /> : <Register /> }
        </div>
      </div>
      <img src={SweetImage} alt="Sweet-Home" className="img-fluid xl:block w-1/2 lg:w-3/6 md:h-2/6" />
    </div>
  );
};

export default Auth;