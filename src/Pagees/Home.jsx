import React from 'react'
import { ArrowUpRight,Sparkles } from "lucide-react";
import GsapEffect from '../Components/GsapEff';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);
function Home() {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from bg-gray-900 to-black text-white pb-82 px-4 text-center'>
            <p1 className='text-sm tracking-widest mb-4 mt-12'>DYNAMIC WEB MAGIC WITH REACT.JS</p1>
            <h1 className='text-5xl font-bold mb-6'>Transforming Concepts into
                <br/>Seamless <span className='text-purple-400 font-semibold'>User Experiences</span></h1>
            <p className='text-lg mb-6'>Hi! I'm Rishabh Awasthi, a React.js Developer</p>
            <a 
            href = '/Projects'
            className='flex flex-row px-6 py-3 bg-gray-900 hover:bg-black rounded-lg font-medium shadow-lg transition-all duration-300'>See my work<ArrowUpRight className='w-6 h-6 '/></a>
            {/*till see my works vala button */}
            {/* Boxes start*/}
            {/*Laptop vaali image */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-12 flex flex-col '>
                <div className='relative'>
                    <img src='/Laptop.png' alt='Laptop' className='rounded-md mb-4 w-full md:w-[500px] h-auto rounded-md mb-4'/>
                    {/*Overlayed buttons yellow and Purple */}
                    <img
                    src='/Button.png'
                    alt='Button'
                    className='absolute top-10 left-32 w-22'/>
                    <img
                    src='/Group.png'
                    alt='Group'
                    className='absolute bottom-50 right-12 w-22'/>
                    <p className='font-bold text-lg'>
                        I prioritize client collaboration, Fostering open communication
                    </p>
                </div>
                   {/* My tech stack section */}
           <div className='flex flex-col gap-6 '>
           <div className='bg-[#0f0f2d] rounded-xl p-6 flex flex-row md:flex-row items-center justify-between gap-6 shadow-lg h-auto h-[400px] '>
                <div className='flex flex-col items-start'> 
                    <p className='text-sm  text-gray-400 mb-1 md:text-base md:mb-2  font-semibold ml-4'>I Constantly try to improve</p>
                   
                    <h2 className='text-4xl font-bold md:mr:8' >My Tech Stack</h2>
                    </div>
                    {/* Map for all the tech boxes */ }
                    <div className='grid grid-cols-2 gap-7'>
                        {["React","JavaScript","Tailwind","HTML","CSS","GSAP","C++"].map((tech,index) =>(
                             <GsapEffect effect="shake" trigger="hover">
                             <div className="bg-[#1c1c3a] hover:bg-[#6c5ce7]  text-center py-2 px-4 rounded-lg whitespace-nowrap overflow-hidden  text-sm font-medium transition-all duration-500 hover:scale-130 cursor-pointer hover:cursor-pointer">
                               {tech}
                             </div>
                           </GsapEffect>
                        ))}
                    </div>
            </div>
            {/* Tech enhusiast vala box */}
            <div className='bg-[#1a1a3a] rounded-xl p-6 flex flex-row gap-10 my-auto shadow-lg  items-center justify-center'>
                <img src='/Programming-amico.png' className='w-24 h-24 rounded-full '/>
                        <div>
                        <p className='text-lg text-center font-semibold'>Tech enthusiast with a</p>
                        <p className='text-lg text-center font-semibold'>passion for development</p>
                        <p className='text-italic text-sm text-gray-400 mt-2'>Code. Create. Conquer</p>
                        </div>
                    </div>
           </div>
            </div>
        </div>
    )
}

export default Home;
