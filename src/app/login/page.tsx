'use client'

import { FormEvent, useState } from "react";
import CustomInput from "../components/CustomInput";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState<string>("helloworld@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if(result?.error) {
        toast.error(result?.error);
        setLoading(false);
      } else {
        toast.success("Logged in successfully");
        router.push(callbackUrl);
      }
    } catch (err) {
      console.log(err);
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
            <h2 className="text-2xl font-semibold text-center">Login</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
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
                disabled={ loading || !email || !password }
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