import { BiLeftArrow } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const BackBtn = ({path}) => {
  return (
    <Link to={path}>
      <div className=" bg-gray-200 rounded-full flex justify-center items-center p-2">
        <IoArrowBackOutline />
      </div>
    </Link>
  );
};

export default BackBtn;
