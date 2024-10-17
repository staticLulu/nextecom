'use client'

import { ChangeEventHandler } from "react";

const CustomInput = ({
  type, 
  value, 
  onChange, 
  placeholder
}:{
  type: string; 
  value: string | number | readonly string[] | undefined ; 
  onChange: ChangeEventHandler<HTMLInputElement> | undefined; 
  placeholder: string;
}) => {
  return (
    <input 
      type={type} 
      value={value} 
      onChange={onChange}
      className="!border border-slate-200 h-12 rounded-lg pl-4"
      placeholder={`Enter your ${placeholder}`}
    />
  )
}

export default CustomInput;