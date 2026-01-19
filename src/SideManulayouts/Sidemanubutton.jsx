import { AlignRightIcon, Link, X } from "lucide-react";
import { Buttonn } from "../Components/Button";
const SidemanuButton = ({ setisopen, open }) => {
  return (
    <section className="mt-6 absolute right-0 top-0  z-20 size-10">
      {open ? (
        <a
          onClick={() => {
            setisopen((prev) => !prev);
          }}
        >
          <X />
        </a>
      ) : (
        <a
          onClick={() => {
            setisopen((prev) => !prev);
          }}
        >
          <AlignRightIcon />
        </a>
      )}
    </section>
  );
};
export default SidemanuButton;
