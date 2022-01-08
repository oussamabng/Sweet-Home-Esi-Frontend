const Register = () => {
  return (
    <form className=" bg-blue px-4 py-12 rounded-r-md rounded-b-md rounded-l-md rounded-t-none flex flex-col items-centre">
    <input type="text" className="bg-white text-sm m-3 text-black px-4 py-2 rounded-sm border-0 outline-0 w-90 font-medium" placeholder="Email" />
    <input type="text" className="bg-white text-sm m-3 text-black px-4 py-2 rounded-sm border-0 outline-0 w-90 font-medium" placeholder="Username" />
    <input type="password" className="bg-white text-sm m-3 text-black px-4 py-2 rounded-sm border-0 outline-0 w-90 font-medium" placeholder="Password" />
    <input type="password" className="bg-white text-sm m-3 text-black px-4 py-2 rounded-sm border-0 outline-0 w-90 font-medium" placeholder="Repeat password" />
    <button className="bg-purple text-white text-sm rounded-sm w-90 m-3 px-4 py-2 font-bold">
      Register
    </button>
  </form>
  );
}

export default Register;