import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import SpotlightCard from '../Components/Spotlight'

function About() {
    return (
        <div className='bg-gradient-to-b from bg-gray-900 to-black'>
           
            <section className='flex flex-col  items-center justify-center gap-8 p-8  '>
                <img
                src='/Anime-boy.png'
                alt="Anime Rishabh"
                className='w-48 h-48 rounded-full border-4 border-purple-500 shadow-lg hover:scale-110 transition-transform duration-300'/>
                {/* Intro Text */}
               <div className='text-center  space-y-4'>
                <h2 className='text-2xl font-bold'>
                    I'm Rishabh Awasthi
                </h2>
                <p className='text-2xl font-bold'>A Computer Science undergrad passionate about building interactive and responsive web applications. I enjoy creating websites using <span className='text-purple-500 font-medium'>React</span> and <span className='text-purple-500 font-medium'>Tailwind CSS</span></p>
                <p className='text-gray-300 font-sans'>I enjoy solving real world problems and beyond building responsive UIs, I consistently work on improving my problem solving skills.I enjoy solving real world problems and beyond building responsive UIs, I consistently work on improving my problem solving skills.<span>By doing this I've solved over <span className='text-green-400 font-semibold'>450+ DSA problems</span> on leetcode, covering a wide range of Data Structures and Algorithms - from arrays to binary trees.  </span></p>  
               </div>
            </section>
            {/* Internship Section */}
            <section className='p-8'>
                <h2 className='text-3xl font-bold text-center mb-10'>
                    My <span className='text-purple-400'>Work Experience</span>
                </h2>
                <div className='grid md:grid-cols-2 gap-25 max-w-4xl mx-auto '>
                    <div className=' p-6 rounded-xl bg-[#1a1a2e] shadow-lg hover:scale-105 transition-transform duration-300  '>
                    <div className='flex item-center gap-4 mb-4  '>
                    <img
                        src='InternShip.png'
                        alt='React Icon'
                        className='w-12 h-12'/>
                        <strong className='text-xl font-semibold '> Frontend Intern - Unified Mentor</strong>
                    </div>
                    <p className='text-gray-300'>
                        Developed Projects like a <strong> Weather App</strong>, <strong>Music Player</strong>, <strong>Image Slider</strong> using React.js and Tailwind CSS during my internship. Improved my design and logic building through real world experience.
                    </p>     
              </div>
              <div className='bg-[#1a1a2e] p-6 rounded-xl border-2 text-center shadow-lg hover:scale-105 transition-transform duration-300 text-gray-400'>
                    <p>More Coming Soon</p>
                </div>
                 
                </div>
                </section> 
                {/* Contact me vala button */}
                <section className='text-center my-12 px-6'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                      Ready to take <span className='text-purple-400'>your</span> digital <br/> presence to the next level?
                    </h2>
                    <p className='text-gray-400 mb-6 max-w-2xl mx-auto font-serif'>
                      Reach out to me and let's make something innovative together
                    </p>
                    <a
                    href='/Contact'
                    className='inline-flex items-center gap-2 px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition duration-300 backdrop-blur'>
                        Contact Me Now
                        <ArrowUpRight size={18}/>

                    </a>
                </section>
            {/* Gym vaali image */}
             <section className='flex flex-col md:flex-row justify-center items-start gap-29 p-8 '>
               <SpotlightCard>
               <div className='flex flex-col max-w-sm'>
                <img
                src='Gym.jpg'
                alt='Gym-Pic'
                className='w-full h-auto rounded-md shadow-md hover:scale-105 transition-transform duration-300 '
                />
                <h2 className='text-2xl font-semibold text-pink-500 text-center mb-2 mt-4'>Fitness Enthusiast 🏋️‍♂️</h2>
                <p className='text-gray-300 font-serif text-left'> When I'm not coding, you'll often find me lifting weigths in the gym. I believe that physical strength fuels mental sharpness and going gym daily keeps me disciplined and energized to take on coding challenges</p>
                </div>
               </SpotlightCard>
                {/* Gym vaali image ends here */}
                {/** Pokemon unite vaali video starts here */}
              <SpotlightCard>
              <div className=' mt-19 justify-center text-center'>
                    
                    <video
                    src='/UniteGameplay.mp4'
                    autoPlay
                    loop
                    muted
                    className=' w-180 mt-13 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'/>
                    <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-2xl  text-yellow-400 mt-15 '>Pokémon Unite Player 🎮</h2>
                    <p className='text-gray-300  max-w-lg font-serif mt-3 '>
                        I'm a regional-level player in pokemon Unite, known for teamwork and competitve Skills.
                        Playing competitvely has sharpened my reaction time and communication skills - qualities that also reflect in my coding and collaboration on projects.
                    </p>
                    </div>
                </div>
              </SpotlightCard>
                </section>           
            
        </div>
    )
}

export default About
