import { useEffect, useState } from 'react';
import {assets} from '../assets/assets'
import {motion} from 'framer-motion';
function Navbar(){
    const [showMobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden';
        }
        else{
            document.body.style.overflow = 'auto'
        }
        return ()=>{
            document.body.style.overflow = 'auto'
        }
    },[showMobileMenu])
    return(
        <motion.div
        initial={{opacity:0, y:-50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6, ease:"easeOut"}}
        className="absolute top-0 left-0 w-full z-10">
            <div className='container flex mx-auto justify-between items-center px-6 py-4 bg-transparent md:px-20 lg:px-32'>
                <img className='' src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white'>
                    <li onClick={()=>setMobileMenu(false)} className='cursor:pointer hover:text-gray-400'><a href="#header">Home</a></li>
                    <li onClick={()=>setMobileMenu(false)} className='cursor:pointer hover:text-gray-400'><a href="#about">About</a></li>
                    <li onClick={()=>setMobileMenu(false)} className='cursor:pointer hover:text-gray-400'><a href="#projects">Project</a></li>
                    <li onClick={()=>setMobileMenu(false)} className='cursor:pointer hover:text-gray-400'><a href="#testimonial">Testimonials</a></li>
                </ul>
                <a href="#contact">
                    <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'>
                        Sign up
                    </button>
                </a>
                <img onClick={()=>setMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
            </div>
            <div className={`${!showMobileMenu ? "h-0 w-0" :"fixed w-full"} md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className="flex justify-end p-6 cursor-pointer">
                    <img onClick={()=>setMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="" />
                </div>
                <ul className="flex flex-col justify-center items-center md:hidden text-lg font-medium">
                    <a onClick={()=>setMobileMenu(false)} href="#" className="px-4 py-2 rounded-full inline-block ">Home</a>
                    <a onClick={()=>setMobileMenu(false)} href="#projects" className="px-4 py-2 rounded-full inline-block">Project</a>
                    <a onClick={()=>setMobileMenu(false)} href="#testimonial" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
                    <a onClick={()=>setMobileMenu(false)} href="#about" className="px-4 py-2 rounded-full inline-block">About</a>
                </ul>
            </div>
        </motion.div>
    )
}

export default Navbar;