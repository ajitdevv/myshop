import SidemanuButton from "../SideManulayouts/Sidemanubutton.jsx";
import { useState } from "react";
import SideManuContent from "../SideManulayouts/manucontent.jsx";
const Sidemanu = () => {
  const [isopen, setisopen] = useState(true);
  return (
    <section className="z-100 absolute right-0 top-0 bg- w-full">
      <div className="">
        <SidemanuButton setisopen={setisopen} open={isopen} />
      <SideManuContent open={isopen} />
   </div> </section>
  );
};
export default Sidemanu;
