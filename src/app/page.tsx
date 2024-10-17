'use client'

import { useState } from "react";
import product_list from "../app/data/product-list.json";
import AlertDialog from "./components/AlertDialog";
import ProductCard from "./components/ProductCard";
import ProductsProps from "./models/products.model";

export default function Home() {
  
  const [open, setOpen] = useState<boolean>(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClick = async () => {
    // alert("This is a message!");
    await setOpen(true);
  };
  
  return (
    <div className="flex flex-wrap max-w-screen-2xl mx-auto mt-[80px] mb-5">
      <div className="w-full flex justify-center my-5">
        <h2 className="text-slate-400">Experience quality and innovation with our collection.</h2>
      </div>

      <h4 className="font-semibold text-[#7874F2]">All products</h4>

      <div className="grid grid-cols-4 gap-4 mt-3">
        {product_list.map((product: ProductsProps, idx: number) => (
          <ProductCard 
          key={idx} 
          image={product.image} 
          name={product.name} 
          price={product.price} 
          onClick={handleClick}
          />
        ))}
      </div>
      <AlertDialog open={open} handleClose={handleClose}  />
    </div>
  );
}


