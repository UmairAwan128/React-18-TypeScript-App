//React-Icon library npm installed first, This contains so many icons like calendar, like
//You can see them below, Also the good thing is you find all the icon packs like FontAwesom, Bootstrap, and many more in this library,
//https://react-icons.github.io/react-icons/search/#q=heart
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  //Such component status is never hard coded instead its passed as prop to it, depending on data in DB.
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
  };

  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
