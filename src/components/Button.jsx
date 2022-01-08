const Button = (props) => {
  const defaultStyle = "sweet-btn text-sm uppercase font-bold w-80  py-2 px-4 rounded-full";
  const BtnStyle = " bg-purple text-white border-0";
  const BtnInvertedStyle = "bg-white-light text-purple border border-purple hover:bg-purple hover:text-white";
  return (
    <button className={`${defaultStyle}  ${props.inverted ? BtnInvertedStyle : BtnStyle}`}>
      {props.children}
    </button>
  );
}

export default Button;