import { assets, projectsData } from "../assets/assets";
import { useEffect, useState } from "react";
import {motion} from 'framer-motion';

import Title from "./Title";
function Projects(){
    const [currentIndex, setShowIndex] = useState(0);
    const [cardsToShow, setCardToShow] = useState(1);

    useEffect(()=>{
        const updateCardsToShow = () =>{
            if(window.innerWidth >= 1024){
                setCardToShow(projectsData.length);
            }
            else{
                setCardToShow(1);
            }
        }
        updateCardsToShow();
        window.addEventListener('resize',updateCardsToShow);
        return ()=> window.removeEventListener('resize',updateCardsToShow);
    },[])

    function nextProject (){
        setShowIndex(prevIndex => (prevIndex+1)%projectsData.length);
    }
    function prevProject(){
        setShowIndex(prevIndex => prevIndex === 0 ? projectsData.length-1: prevIndex-1);
    }
    return(
        <motion.div
        initial={{opacity:0, x:-200}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        id="projects" className="mx-auto py-4 pt-20 md:px-20 px-6 lg:px-32 my-20">
            <Title title='Projects' titleSpan='Completed' desc='Crafting Spaces, Building Legacies—Explore Our Portfolio'/>
            <div className="flex justify-end items-center mb-8">
                <button onClick={prevProject} className="bg-gray-200 rounded mr-2 p-3 cursor-pointer"><img src={assets.left_arrow} alt="" /></button>
                <button onClick={nextProject} className="bg-gray-200 rounded mr-2 p-3 cursor-pointer"><img src={assets.right_arrow} alt="" /></button>
            </div>
            <div className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${(currentIndex*100)/cardsToShow}%)`}}>
                    {projectsData.map((project,index)=>(
                        <div key={index} className="relative w-full flex-shrink-0 sm:w-1/4">
                            <img className="w-full h-auto mb-14" src={project.image}/>
                            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                    <p className="text-xl font-semibold">{project.title}</p>
                                    <p className="text-gray-500 text-small">
                                        {project.price}
                                        <span className="px-1">| {project.location}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
export default Projects;