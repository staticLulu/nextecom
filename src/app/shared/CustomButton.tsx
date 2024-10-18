import { MouseEventHandler } from "react";

const CustomButton = ({
  onClick, 
  name
}:{
  onClick: MouseEventHandler<HTMLButtonElement>; 
  name: string;
}) => {
  return (
    <button 
      className="
        bg-[#8E98F5] 
        hover:bg-[#8E98F5]/80 
        py-2 
        px-4 
        rounded-lg 
        text-white 
        w-fit
      " 
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default CustomButton;