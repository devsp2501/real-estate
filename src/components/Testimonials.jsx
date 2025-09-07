import { assets, testimonialsData } from "../assets/assets";
import {motion} from 'framer-motion';

import Title from "./Title";
function Testimonials(){
    return(
        <motion.div
        initial={{opacity:0, x:200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        id="testimonial" className="mx-auto pt-1 md:px-10 px-6 lg:px-32 my-2">
            <Title title='Customer' titleSpan='Testimonials' desc='Real Stories from Those Who Found Home with Us'/>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-4 lg:gap-8">
                {testimonialsData.map((testimonial,index)=>(
                    <div className="flex flex-col justify-center items-center max-w-80 px-8 py-12 m-5 shadow-lg">
                        <img className="rounded-full mb-3" src={testimonial.image}/>
                        <h2 className="font-medium text-gray-700 text-xl">{testimonial.name}</h2>
                        <p className="text-gray-500 text-sm">{testimonial.title}</p>
                        <div className="flex my-4">
                            {Array.from({length:testimonial.rating},(item,index)=>(
                                <img key={index} src={assets.star_icon}/>
                            ))}
                        </div>
                        <p className="text-center text-gray-600">{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials;