import { useNavigate } from "react-router-dom";
import {Buttonn} from "./Button";
const FilterCard = ({ h1, h2, h3, bgphoto }) => {
    const navigation = useNavigate()
    const HandilImageClick = (name)=>{
        navigation(`/products/Category/${name}`)

    }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 text-foreground  p-4 ">
      {bgphoto.map((photo, index) => {
        return (
          <div key={index} className=" h-100  ">
            <div className=" rounded-2xl bg-card shadow object-cover hover:scale-110 transition duration-300 h-100 overflow-hidden ">
              <Buttonn onClick={() => HandilImageClick(photo.name)}>
                <img
                  src={photo.photo}
                  className="object-cover  rounded-2xl"
                  alt={`photo-${index}`}
                />
              </Buttonn>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FilterCard;
