import SidemanuButton from "../SideManulayouts/Sidemanubutton.jsx";
import { useState } from "react";
import SideManuContent from "../SideManulayouts/manucontent.jsx";
const Sidemanu = () => {
  const [isopen, setisopen] = useState(false);
  return (
    <section className="z-25 absolute right-0 top-0">
      <div className="">
        <SidemanuButton setisopen={setisopen} open={isopen} />
      <SideManuContent open={isopen} setisopen={setisopen}/>
   </div> </section>
  );
};
export default Sidemanu;
