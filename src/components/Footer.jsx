import { assets } from "../assets/assets";
import {motion} from 'framer-motion';

function Footer(){
    return(
        <motion.div
         initial={{opacity:0, y:50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.8}}
            viewport={{once:true}}
        className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <motion.div
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:0.2}}
                viewport={{once:true}}
                className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img className="mb-4" src={assets.logo_dark} alt="" />
                    <p className="text-gray-400 mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </motion.div>

                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5, delay:0.4}}
                viewport={{once:true}}
                className="w-full md:w-1/5 mb-8 md:mb-0">
                    <p className="font-bold text-white text-lg mb-4">Company</p>
                    <ul className="flex flex-col text-gray-400 gap-2">
                        <a href="#" className="hover:text-white">Home</a>
                        <a href="#about" className="hover:text-white">About Us</a>
                        <a href="#contact" className="hover:text-white">Contact Us </a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </ul>
                </motion.div>
                <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay:0.3}}
                viewport={{once:true}}
                className="w-full md:w-1/3">
                    <p className="font-bold text-white text-lg mb-4">Subscribe to our newsletter</p>
                    <p className="max-w-80 mb-4 text-gray-400">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className="flex gap-2">
                        <input type="email" name="" id="" className=" bg-gray-800 p-2 text-gray-400 rounded" placeholder="Enter your email"/>
                        <button className="text-white bg-blue-500 py-2 p-4 rounded">Subscribe</button>
                    </div>
                </motion.div>
            </div>
            <motion.div
            initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.5, delay:0.4}}
                viewport={{once:true}}
            className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2025 © Dev Panpaliya. All Right Reserved.
            </motion.div>
        </motion.div>
    )
}
export default Footer;