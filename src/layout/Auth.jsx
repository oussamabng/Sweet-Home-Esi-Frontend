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
    <div className="sweet-auth flex justify-start items-center relative">
      <div className="flex flex-col my-40 mx-48 justify-end">
        <h1 className="text-5xl my-10 font-sans text-black font-extrabold leading-tight">
          The sweetest way to
          <br />
           control your home!
        </h1>
        <div className="sweet-form w-100">
          <div className="flex">
            <p onClick={handleActiveItem} className={active ? activeStyle : secondaryStyle}>Login</p>
            <p onClick={handleActiveItem} className={!active ? activeStyle : secondaryStyle}>Register</p>
          </div>
        { active ? <Login /> : <Register /> }
        </div>
      </div>
      <img src={SweetImage} alt="Sweet-Home" className="absolute right-0" style={{
        width:"51%",
        top:"-8%"
      }} />
    </div>
  );
};

export default Auth;