import { useNavigate } from "react-router-dom";
import {Buttonn} from "./Button";
const FilterCard = ({ h1, h2, h3, bgphoto }) => {
    const navigation = useNavigate()
    const HandilImageClick = (name)=>{
        navigation(`/products/Category/${name}`)

    }
  return (
    <div className="bg-card grid grid-cols-2 w-[70%] gap-4 text-foreground border-(--border) rounded-lg p-4 shadow-md">
      {bgphoto.map((photo, index) => {
        return (
          <div key={index} className="border-(--border) h-100  ">
            <div className=" rounded-2xl object-cover h-100 overflow-hidden ">
              <Buttonn onClick={() => HandilImageClick(photo.name)}>
                <img
                  src={photo.photo}
                  className="w-full object-cover  rounded-2xl"
                  alt={`photo-${index}`}
                />
              </Buttonn>
            </div>

            <h1 className="">{h1}</h1>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default FilterCard;
