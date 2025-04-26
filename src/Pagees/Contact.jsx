import React from 'react'
import {Github, Linkedin, Mail} from 'lucide-react'

function Conatct() {
    return (
        <div className='bg-gradient-to-b from bg-gray-900 to-black overflow-hidden'>
            <section className='0e0e1a py-16 px-6'>
                <div className='max-w-2xl mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-2 text-pink-500'>Let's Connect 🤝</h2>
                    <p className='text-gray-400 mb-8'>Whether you have a question, want to work together or just want to say hi, my inbox is always open.</p>

                    <form className='flex flex-col gap-4'>
                        <input
                        type='text'
                        placeholder='Your Name'
                        className='p-3 rounded-lg bg-[#1a1a3a] outline-none border border-gray-600 focus:border-purple-500 '
                        required/>
                        <input
                        type='email'
                        placeholder='Your Email'
                        className='p-3 rounded bg-[#1a1a3a] outline-none border border-gray-600 focus:border-purple-500'
                        required/>
                        <textarea
                        rows={5}
                        placeholder='Your Message'
                        className='p-3 rounded bg-[#1a1a3a] outline-none border border-gray-600 focus:border-purple-500'/>
                        <button
                        type='submit'
                        className='mt-4 px-6 py-3 border border-white rounded-lg hover:bg-white/10 transition duration-300'>
                            Send Message
                        </button>


                    </form>
                </div>

            </section>
            <div className='flex justify-center gap-6 mt-8'>
                <a href='https://github.com/Spyder-v' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500 transition duration-300'>
                    <Github size={28}/>
                </a>
                <a href='https://www.linkedin.com/in/rishabh-awasthi-0b1635255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer' className='hover:text-pink-500 transition duration-300'>
                    <Linkedin size={28}/>
                </a>
                <a href='https://mail.google.com/mail/u/0/#inbox' target='_blank' rel='noopener norederrer' className='hover:text-pink-500 transition duration-300'>
                    <Mail size={28}/>
                </a>
            </div>
        </div>
    )
}

export default Conatct
