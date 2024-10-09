'use client'

import { useState } from "react";
import CustomInput from "../components/CustomInput";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try{
      setLoading(true);
      console.log(name, email, password);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="container mx-auto">
        <div className="row flex justify-center pt-[100px]">
          <div 
            className="
              shadow-[0px_1px_6px_0px_rgba(0,0,0,0.2)] 
              bg-blend-lighten 
              p-8
              w-[500px] 
              grid 
              gap-5 
              rounded-lg
            "
          >
            <h2 className="text-2xl font-semibold text-center">Register</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
              <CustomInput 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
              />

              <CustomInput 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
              />

              <CustomInput 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />

              <button 
                className="
                  bg-emerald-700 
                  py-2 
                  px-6 
                  rounded-lg 
                  text-white 
                  cursor-pointer
                  hover:bg-emerald-700/80
                " 
                disabled={ loading || !name || !email || !password }
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}