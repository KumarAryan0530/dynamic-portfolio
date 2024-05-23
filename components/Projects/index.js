import Link from 'next/link'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Parallax } from 'react-scroll-parallax'
import useBreakpoints from '../../hooks/useBreakpoint'
import Image from 'next/image'

function Projects() {
    return (
        <section id="work" className='text-center space-y-8 p-5 md:p-10 justify-center items-center bg-gradient-to-tr from-teal-50 via-sky-100 to-sky-50 dark:from-slate-900/95 dark:via-slate-900 dark:to-black bg-gray-300 w-full'>
            <div className="md:py-4">
                <a className="
            animated-underline  md:after:bg-sky-700 md:dark:after:bg-slate-300 
            tracking-wide hover:tracking-widest duration-300 transform ease-in-out
            md:after:h-1   text-center text-5xl font-bold link-glow">
                    My Works
                </a>
                <p className='mt-3 md:text-lg'>
                    Here are somethings I&#39;ve built recently
                </p>
            </div>


            <ProjectsCard
                name={<>Eco Track<span className="text-base ml-1 capitalize">Web App </span></>}
                tech={["React Js", "Tailwind Css", "Blockchain", "Solditiy", "AI"]}
                src="/projects/ecotrack.png"
                description={`Developed an utility tool during competition at IIT Kanpur named "Techkriti Innovation Challenge" comprising a React Native mobile app and ReactJs web apps on the ReactJs framework. Integrates blockchain on XDC networks for security. Utilizes LSTM models for 88 percent accurate AI predictions on emissions. Calculates emissions across categories, offers a carbon budget diary, and includes a marketplace and trading platform for industries.
                `}
                link="https://ecotrack.in"
                github="https://github.com/kumararyan0530"
            />
            <ProjectsCard
                name={<span className='capitalize'>eTaskMaster.ai,<span className="text-base ml-1 capitalize">AI powered Task Manager </span></span>}
                tech={["React.js", "OpenAI", "HTML", "CSS", "JavaScript", "Machine Learning"]}
                src="/projects/taskmaster.png"
                description={`The React-based task manager is designed to revolutionize productivity through intelligent task prioritization and scheduling. Leveraging OpenAI's machine learning capabilities, it dynamically categorizes and schedules tasks based on various factors, ensuring an efficient and streamlined workflow. The application is built with HTML, CSS, and JavaScript, providing a seamless and intuitive user experience. By analyzing and organizing tasks intelligently, this task manager enhances productivity and optimizes time management, making it an indispensable tool for users seeking to maximize their efficiency.`}
                link="https://e-task-master-ai.vercel.app/"
                github="https://github.com/KumarAryan0530/eTaskMaster.ai"
                reverse={true}
            />
         
            <ProjectsCard
                reverse={true}
                name={<>CU Feast<span className="text-base ml-1 capitalize"> Canteen Management System </span></>}
                tech={["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]}
                src="/projects/cufeast.png"
                description={`TThis web application, developed with PHP and MySQL, offers a robust solution for managing inventory, orders, and transactions. Designed to streamline operations, it significantly enhances convenience for both students and staff by ensuring timely service and accurate billing. Its user-friendly interfaces simplify order placement and payment processes, thereby improving the overall dining experience on campus. This system not only boosts operational efficiency but also fosters a seamless and enjoyable dining environment within the university.
                `}
                github="https://github.com/KumarAryan0530/CU-FEAST-CANTEEN-MANAGEMENT-SYSTEM"
                link="https://github.com/KumarAryan0530/CU-FEAST-CANTEEN-MANAGEMENT-SYSTEM"
            />

            {/* <ProjectsCard

                name={<>Farmoid Robotech<span className="text-base ml-1 capitalize"> </span></>}
                tech={["Next JS", "Tailwind Css", "Prisma(ORM)", "Postgresql"]}
                src="/projects/farmoid.png"
                description={`Designed and built full website for Farmoid Robotech Pvt. Ltd.(an agritech startup), ensuring a seamless user experience.  
                `}
                link="https://farmoidrobotech.com"
            /> */}

            {/* < ProjectsCard
                reverse={true}
                name={<> TechlifeJournal <span span className="text-base ml-1 capitalize" > blog website</span ></>}
                tech={["Next JS", "Tailwind Css", "Django(DRF)", "Postgresql"]}
                src="/projects/techlifejournal.png"
                description={`Website for posting blogs, user can register and post blogs using markdown language, built using Django rest framework and NextJS 
                `}
                github="https://github.com/techlifejournal/techlifejournal"
                link="https://techlifejournal.netlify.app/"
            /> */}
            <ProjectsCard
                name={<>Portfolio<span className="text-base ml-1 capitalize">(This website)</span></>}
                tech={["Next JS", "TailwindCss", "Three JS", "Javascript"]}
                src="/projects/portfolio.png"
                description={`I really had fun time creating this website, used react-three-fiber to render 3d model and along the way learnt some new stuffs related to 3d modeling in blender,this website is built using Next JS and Tailwind Css framework.
                `}
                link="/"
                github="https://github.com/kumararyan0530/portfolio"
            />
            <Link href="https://github.com/kumararyan0530">
                <a target="_blank" className='text-xl '>To see more, head over to my <span className="inline-flex gap-2 items-center font-semibold italic cursor-pointer ease-in-out duration-300 hover:text-sky-800 hover:dark:text-sky-300">
                    Github profile!
                    <FaGithub />
                </span></a>
            </Link>
        </ section>
    )
}

export default Projects

function ProjectsCard(props) {
    const { isXs, isSm, isMd } = useBreakpoints();
    return (<div className="text-start  md:text-lg md:px-5 group space-y-6 md:space-y-8 md:p-10">
        <div className='flex  flex-col  gap-5 md:gap-0 md:max-w-sm md:px-10  lg:max-w-md xl:max-w-xl group  mx-auto md:flex-row items-center justify-center
                    border-2 border-sky-500/50 bg-gradient-to-tl text-base from-cyan-100/40 to-gray-100/50 dark:from-slate-900/50 dark:to-gray-900/50   ease-in-out  dark:border-slate-500/50
                     transform-color ease-liner   p-3 md:p-5 rounded-xl  backdrop-blur  
                    md:border-none md:bg-none
                '>
            <div className={` flex-auto  ${props.reverse ? "md:-translate-x-10" : "md:translate-x-10"} -z-10 w-auto  md:p-0`}>
                <img src={props.src} alt={props.name}
                    className="md:max-w-lg md:grayscale transition-colors transform duration-100 ease-in-out group-hover:grayscale-0 "
                />
            </div>
            <div className={`min-w-fit order-first   ${props.reverse ? "md:order-first md:translate-x-10" : " md:text-end md:order-2 md:-translate-x-10"}`}>
                <Parallax speed={isXs || isSm ? 0 : 10} className="space-y-2">
                    <Link href={props.link ? props.link : props.github}>
                        <a target="_blank" className="hover:text-sky-800 dark:hover:text-sky-300 cursor-pointer font-semibold text-2xl uppercase  tracking-wider md:order-2">{props.name}</a>
                    </Link>
                    <div className='gap-3  md:tracking-wide inline-flex  justify-start  flex-wrap  text-sm '>
                        {props.tech.map((ele, i) => <a className='whitespace-nowrap dark:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]' key={i}>{ele}</a>)}
                    </div>
                    <div className={`${props.reverse ? "md:-mr-28 lg:-mr-26 xl:-mr-10" : "md:-ml-28 lg:-ml-26 xl:-ml-10"}
                md:border-2 border-sky-700 /20 md:bg-gradient-to-tl md:text-sm from-cyan-200/40 to-gray-100/90 dark:from-slate-900/70 dark:to-gray-900/70   ease-in-out  dark:border-slate-500/50
                    transform ease-liner text-justify    md:p-5  rounded-xl  mx-auto md:backdrop-blur-md `}>
                        {props.description}
                    </div>
                    <div className="inline-flex gap-3 pt-3 text-2xl ">
                        {props.github &&
                            <Link href={props.github}>
                                <a target="_blank">
                                    <FaGithub className="hover:text-sky-800 dark:hover:text-sky-300  " />
                                </a>
                            </Link>
                        }
                        {
                            props.link &&
                            <Link href={props.link}>
                                <a target="_blank">
                                    <FaExternalLinkAlt className="hover:text-sky-800 dark:hover:text-sky-300 " />
                                </a>
                            </Link>
                        }
                    </div>
                </Parallax>
            </div >
        </div >
    </div >)
}