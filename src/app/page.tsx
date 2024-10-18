'use client'

import { useState } from "react";
import product_list from "../app/data/product-list.json"; // Combined JSON
import AlertDialog from "./components/AlertDialog";
import ProductCard from "./components/ProductCard";
import ProductsProps from "./models/products.model";
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Image from "next/image";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const handleClickOpen = (id: number) => {
    setSelectedProductId(id); // Set the selected product ID
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProductId(null); // Reset the selected product ID when dialog is closed
  };

  const selectedProduct = product_list.find(product => product.id === selectedProductId);

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
            onClick={() => handleClickOpen(product.id)} // Pass the product ID when clicked
          />
        ))}
      </div>

      {selectedProduct && (
        <AlertDialog open={open} handleClose={handleClose}>
          <DialogTitle id="alert-dialog-title" className='!font-semibold !text-2xl'>
            {selectedProduct.name}
          </DialogTitle>

          <div className="h-[500px] w-auto items-center grid md:grid-cols-2 gap-4 p-4">
            <div className='!flex justify-center p-4'>
              <Image 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                width={600} 
                height={600} 
                unoptimized
                loading="lazy"
                className="h-auto w-[400px]"
              />  
            </div>
            <p className='p-4 text-lg'>
              {selectedProduct.desc}
            </p>
          </div>
          <DialogActions>
            <Button onClick={handleClose} >Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Add
            </Button>
          </DialogActions>
        </AlertDialog>
      )}
    </div>
  );
}
