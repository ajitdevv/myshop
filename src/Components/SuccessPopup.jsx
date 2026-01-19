import voicepop from "../assets/sounds/Congratulationspopup.mp3";
const SuccessPopup = ({h2,p1,p2}) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-card p-6 rounded-2xl text-center w-[90%] max-w-sm">
        <h2 className="text-2xl font-bold text-green-500">{h2}</h2>
        <p className="mt-2 text-foreground">{p1}</p>
        <p className="text-sm text-muted-foreground mt-1">{p2}</p>
        <audio src={voicepop} autoPlay />
      </div>
    </div>
  );
};

export default SuccessPopup;
