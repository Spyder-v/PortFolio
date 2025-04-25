import React from 'react'
import ProjectCard from '../Components/ProjectCard'

const projects = [
    {
        image: '/Weather-App.png',
        title: 'Real-time Weather App',
        description: 'A sleek weather forecasting app that displays real-time weather , temperature and conditions using real-time data from a weather API',
        techIcons: ['/ReactLogo.png','/TailwindLogo.jpg','JavaScript.png'],
        link:'',
    },
    {
        image: '/MusicPlayer.png',
        title: 'Modern Music Player',
        description: 'A responsive music player with a pause/play button,track-switching, and dynamic UI animations',
        techIcons: ['/ReactLogo.png','/TailwindLogo.jpg','JavaScript.png'],
        link:'',
    },
    {
        image: 'Expense-Tracker.png',
        title: 'Smart Expense Tracker',
        description: 'A budget tracking app to manage income and expenses with a user-friendly dashboard',
        techIcons: ['/ReactLogo.png','/TailwindLogo.jpg','JavaScript.png'],
        link:'',
    },
];
function Projects() {
    return (
      <div className='bg-gradient-to-b from bg-gray-900 to-black'>
        <h3 className='flex items-center justify-center font-bold pt-9 text-4xl'>A Small Collection of  
            <span className='text-purple-300 font-bold ml-2' > Recent Projects</span></h3>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-6 px-8 py-9 '>
           
           {projects.map((proj,idx) => (
               <ProjectCard key={idx} index={idx} {...proj}/>  
           ))}
           
       </div>
      </div>
    )
}
{/* Spread operator to passing the props to the Project card component from projects array */}

export default Projects
