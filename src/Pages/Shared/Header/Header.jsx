import Logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center mt-12 mb-3">
      <img className="mx-auto mb-5" src={Logo} alt="" />
      <p className="text-lg mb-[10px]">Journalism Without Fear or Favour</p>
      <p className="text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
