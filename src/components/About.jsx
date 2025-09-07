import { assets } from "../assets/assets";
import Title from "./Title";
import {motion} from 'framer-motion';
function About(){
    const experience = [
        {
            number:"10+",
            desc:"Years of Excellence",
        },
        {
            number:"12+",
            desc:"Projects Completed",
        },
        {
            number:"20+",
            desc:"Mn. Sq. Ft. Delivered",
        },
        {
            number:"25+",
            desc:"Ongoing Projects",
        },
    ]
    return(
    <motion.div
    initial={{opacity:0, x:200}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1}}
    viewport={{once:true}}
    id="about">
        <Title title='About' titleSpan='Our Brand' desc='Passionate About Properties, Dedicated to Your Vision'/>
        <div className="flex flex-col mx-auto w-full bg-white pt-5 p-14 md:px-20 lg:px-32 md:flex-row items-center md:gap-20 md:justify-center">
            <img className="w-full sm:w-1/2 md:max-w-lg " src={assets.brand_img} alt="" />
            <div className="md:max-w-55 lg:max-w-80 flex flex-col">
                <div className="grid grid-cols-2 grid-row-2 gap-6 md:gap-10 mt-10">
                    {experience.map (exp =>(
                        <div>
                            <p className="text-left text-4xl font-medium mb-1 text-gray-800">{exp.number}</p>
                            <p className="text-left text-md text-gray-600">{exp.desc}</p>
                        </div>
                    ))}
                </div>
                <p className="my-10 text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <button className="bg-blue-600 text-white px-8 py-2 mx-auto rounded w-40">Learn More</button>
            </div>
        </div>
    </motion.div>)
}
export default About;