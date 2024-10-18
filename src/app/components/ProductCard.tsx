'use client'

import Image from "next/image";
import { MouseEventHandler } from "react";
import CustomButton from "../shared/CustomButton";

const ProductCard = ({
  image, 
  name, 
  price, 
  onClick,
  buttonName
}:{
  image: string; 
  name: string; 
  price: number; 
  onClick: MouseEventHandler<HTMLButtonElement>
  buttonName: string;
}) => {
  return (
    <div className="grid gap-4 rounded-2xl bg-white shadow-[0px_1px_6px_0px_rgba(0,0,0,0.08)]">
      <div 
        className="
          py-4 
          px-8 
          h-[350px] 
          w-auto 
          flex 
          items-center 
          justify-center 
          hover:scale-110 
          hover:duration-200 
          ease-linear 
          cursor-pointer
        "
      >
        <Image 
          src={image} 
          alt="products" 
          width={250} 
          height={192} 
          unoptimized
          loading="lazy"
          className="h-auto w-[250px]"
        />  
      </div>
      <div className="border-t border-slate-100 p-4 grid gap-1">
        <h4>{name}</h4>
        <h5 className="text-sky-500 font-semibold">{`$${price}`}</h5>

        <CustomButton name={buttonName} onClick={onClick} />
      </div>
    </div>
  )
}

export default ProductCard;