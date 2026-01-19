import { AlignRightIcon, X } from "lucide-react";
import { Buttonn } from "../Components/Button";
const SidemanuButton = ({ setisopen, open }) => {
  return (
    <section className="mt-4 -ml-4 absolute right-0 top-0  z-20">
      {open ? (
        <Buttonn
          onClick={() => {
            setisopen((prev) => !prev);
          }}
        >
          <X />
        </Buttonn>
      ) : (
        <Buttonn
          onClick={() => {
            setisopen((prev) => !prev);
          }}
        >
          <AlignRightIcon />
        </Buttonn>
      )}
    </section>
  );
};
export default SidemanuButton;
