import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import {motion} from 'framer-motion';

function Header(){
    return(
        <div
        className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
            style={{backgroundImage:"url('/src/assets/header_img.png')"}} id='header'>
                <Navbar/>
                <motion.div
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:1.5, delay:0.3}}
                viewport={{once:true}}
                className="flex flex-col justify-center items-center mx-auto md:px-20 lg:px-32">
                    <h2 className="container text-white font-semibold text-5xl text-center mb-10 sm:text-6xl md:text-[82px] max-w-3xl mt-18">Explore homes that fit your dreams</h2>
                    <div className="flex gap-4">
                        <a href="#project" className="text-white py-3 px-8 border border-white rounded">Projects</a>
                        <a href="#contact" className="text-white bg-blue-500 py-3 px-8 rounded">Contact Us</a>
                    </div>
                </motion.div>
        </div>
    )
}

export default Header;