'use client';


import { TypewriterEffect } from './ui/Typewriter-effect';



export default function HeroSection() {
  const words = [
    {
      text: "BUILD",
    },
    {
      text: "AWESOME",
    },
    
    {
      text: "WITH",
    },
    
    {
      text: "POLLUX",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  const wordsA = [
    
    
    {
      text: "web",
      className: "text-green-500 dark:text-green-400",
    },
  ];


  return (
    <section className="h-screen flex flex-col items-center justify-center text-center space-y-6">

<TypewriterEffect words={words}/>
      {/* <h1 className="text-6xl font-extrabold text-white">




        <Typewriter text="POLLUXCHAIN" />
      </h1> */}
      <h2 className="text-2xl font-semibold text-[#fff]">
        Decentralize the
         
        
        <TypewriterEffect words={wordsA}/>
        
      </h2>
      <div className="flex gap-4 mt-4">
      <button className="border-2 border-[#fff] px-6 py-3 rounded-md bg-[#8af969] text-black hover:border-[#ff] hover:shadow-glow transition-all">
  START
</button>




        <button className="border-2 border-white px-6 py-3 rounded-md hover:bg-white hover:text-black">
          Documentation
        </button>
      </div>
    </section>
  );
}
// 8af969