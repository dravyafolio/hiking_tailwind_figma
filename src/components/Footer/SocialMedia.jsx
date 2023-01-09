import fb from "../../assets/f.png";
import tw from "../../assets/t.png";
import ig from "../../assets/i.png";

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <img
        src={fb}
        alt="facebook"
        className="h-8 cursor-pointer hover:scale-110 duration-300 "
      />
      <img
        src={tw}
        alt="facebook"
        className="h-8 cursor-pointer hover:scale-110 duration-300 "
      />
      <img
        src={ig}
        alt="facebook"
        className="h-8 cursor-pointer hover:scale-110 duration-300 "
      />
    </div>
  );
};

export default SocialMedia;
