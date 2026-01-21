import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
function Poster({ slides }) {
  const [move, setMove] = useState(0);
  const prevSlide = () => {
    setMove((move) => (move === 0 ? slides.length - 1 : move - 1));
  };
  const nextSlide = () => {
    setMove((move) => (move === slides.length - 1 ? 0 : move + 1));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setMove((move) => (move === slides.length - 1 ? 0 : move + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="mt-21 flex flex-col justify-center items-center">
      <div className="border-foreground relative h-76 md:h-96 lg:h-110 w-[90%] border-2 overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${move * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full shrink-0">
              <img
                src={slide}
                className=" object-center object-cover"
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-accent"
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-accent"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Poster;
