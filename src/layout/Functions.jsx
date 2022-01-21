import Device from "../assets/images/computer-chip-vector-icon-sign-symbol-filled-flat-solid-pictogram-isolated-white-logo-illustration-137439262.png";
import PWA from "../assets/images/pwa.png";
import Phone from "../assets/images/phone.png";
import House from "../assets/images/house.png";

const Functions = () => {
  return (
    <div className="bg-purple-light py-10 sm:py-32 px-8 mb-20 w-full flex flex-col sm:flex-row justify-center items-center text-white text-sm">
      <div className="flex flex-col items-center sm:my-0 my-2 mx-4">
        <img src={Device} alt="device" className="w-16" />
        <h3 className="font-bold text-lg my-2">The sweet device</h3>
        <p className="text-center">
        Incididunt anim excepteur voluptate  <br /> exercitation officia quis aute adipisicing
        </p>
      </div>
      <div className="flex flex-col items-center sm:my-0 my-2 mx-4">
        <img src={PWA} alt="device" className="w-16" />
        <h3 className="font-bold text-lg my-2">The sweet device</h3>
        <p className="text-center">
        Incididunt anim excepteur voluptate  <br /> exercitation officia quis aute adipisicing
        </p>
      </div>
      <div className="flex flex-col items-center sm:my-0 my-2 mx-4">
        <img src={Phone} alt="device" className="w-16" />
        <h3 className="font-bold text-lg my-2">The sweet device</h3>
        <p className="text-center">
        Incididunt anim excepteur voluptate  <br /> exercitation officia quis aute adipisicing
        </p>
      </div>
      <div className="flex flex-col items-center sm:my-0 my-2 mx-4">
        <img src={House} alt="device" className="w-16" />
        <h3 className="font-bold text-lg my-2">The sweet device</h3>
        <p className="text-center">
        Incididunt anim excepteur voluptate <br /> exercitation officia quis aute adipisicing
        </p>
      </div>

    </div>
  );
}

export default Functions;