import React,{useRef,useEffect, useState} from 'react'
import { gsap } from 'gsap/gsap-core';



function ProjectCard({image,title,description,techIcons,link,index}) {
    const cardRef = useRef();
console.log(title==='Modern Music Player')
    useEffect(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, 
            x: title === 'Modern Music Player' ? 2000 : -2000,},
        {
          opacity: 1,
          y: 0,
          x:0,
          delay: index * 0.2,
          duration: 1.5,
          ease: 'back.out(1.7)',
        }
      );
    }, [index]);
    return (
        <div ref={cardRef} className=''>
 <div 
        
        className='bg-[#1a1a3a] p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 h-full '>
            <img src={image} alt={title} className='rounded-md mb-4 w-full h-58 object-cover' />
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-gray-400 text-sm mb-4'>{description}</p>
            <div className='flex gap-3 mb-4'>{techIcons.map((techIcons,index) =>(
                <img key={index} src={techIcons} alt='tech' className='w-6 h-6'/>
            ))}</div>
            <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 text-sm text-blue-400 hover:underline'
            >

                Check Live Site 
            </a>

        </div>
        </div>
       
      
    );
};

export default ProjectCard
