import { ImageDown } from "lucide-react";

const ImageLoading = () => {
  return (
    <div className="relative w-[95%] lg:w-[98.5%] lg:h-[770px] h-[482px] rounded-[20px] lg:rounded-[40px] overflow-hidden bg-gray-200 flex justify-center items-center">
      <ImageDown className="animate-bounce text-gray-300" size={150} />
    </div>
  );
};

export default ImageLoading;
