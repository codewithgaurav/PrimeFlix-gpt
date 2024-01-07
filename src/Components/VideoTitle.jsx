import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video w-[100%]  px-[5%] pt-[18%] text-white">
      <h1 className="my-4 text-3xl font-bold">{title}</h1>
      <p className="w-1/4 ">{overview}</p>
      <div className="my-2">
        <button className="m-2 rounded-[5%] bg-white p-1 align-middle text-2xl text-black hover:opacity-80">
          <div className="flex w-[4em] items-center justify-around p-1">
            <FaPlay /> Play
          </div>
        </button>
        <button className="relative top-1 rounded-[5%] bg-gray-500 p-1 text-2xl text-white opacity-90 hover:opacity-50">
          <div className="flex w-[6em] justify-around p-1">
            <IoMdInformationCircleOutline /> More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
