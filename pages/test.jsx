import { useState } from "react";

export default function Test(){
    const [emotion, setEmotion] = useState("😀");
   
   return (
      <>
         <div className="w-full h-screen bg-primary flex flex-col items-center justify-center ">
            
            {/* Emoji Box */}
            <div className="w-[300px] h-[300px] bg-accent rounded-2xl flex items-center justify-center text-6xl">
               {emotion}
            </div>

            {/* Buttons Box */}
            <div className="w-[300px] flex flex-row justify-center  ">
               <button onClick={
                ()=>{
                    setEmotion("😢");
                }
               } className="bg-secondary w-[70px] h-[30px] text-white border border-secondary">Sad</button>
               <button onClick={
                ()=>{
                    setEmotion("😄");
                }
               } className="bg-secondary w-[70px] h-[30px] text-white border border-secondary">Happy</button>
               <button onClick={
                ()=>{
                    setEmotion("😠");
                }
               } className="bg-secondary w-[70px] h-[30px] text-white border border-secondary">Angry</button>
            </div>

         </div>
      </>
   );
}