import S from "../assets/designs/s.png";
import W from "../assets/designs/w.png";
import E from "../assets/designs/e.png";
import EE from "../assets/designs/e+.png";
import T from "../assets/designs/t.png";

const Logo = () => {
    return(
      <div className="sweet-header h-14  flex flex-row ">
        <img  src={S} alt="S" />
        <img src={W} alt="W" />
        <img src={E} alt="E" />
        <img src={EE} alt="EE" />
        <img src={T} alt="T" />
      </div>
    );
}

export default Logo;