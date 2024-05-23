import { Parallax } from "react-scroll-parallax";
import TypeAnimation from "react-type-animation";
import useBreakpoints from "../../hooks/useBreakpoint";
import Waving from "../3dComponents/Waving";
import Head from 'next/head'

import { Link as Scroll } from "react-scroll"
export default function Home({ setLoading }) {
    const { isXs, isSm, isMd, isLg, active } = useBreakpoints();
    const textChange = "hover:text-sky-700 bold dark:hover:text-white duration-300 transform ease-out  "
    return (<>
        <Head>
            <title>Kumar Aryan</title>
            <link rel="icon" href="/logo.png" />
            <meta
                name="description"
                content="Portfolio | Kumar Aryan | Freelance Web Developer"
            />

            <meta
                name="keywords"
                content="Kumar Aryan Portfolio website"
            />
            <meta property="og:site_name" content="swasthikshetty.vercel.app" />
            <meta property="og:title" content="Kumar Aryan" />
            <meta
                property="og:description"
                content="Portfolio | Kumar Aryan | Freelance Web Developer"
            />
        </Head>
        <section id="home" className={`h-[100vh] select-none  cursor-pointer flex flex-col-reverse  md:flex-row overflow-hidden justify-center `}>
            <div className="border-t-2 border-slate-200 dark:border-slate-800 md:border-none  z-10   pt-20 h-lg sm:h-auto  text-center sm:text-start sm:pt-40 sm:pl-10 md:pl-20 md:pt-40 flex flex-col gap-1 md:gap-5   ">
                <Parallax speed={0}>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold ">Hello, </h1>
                </Parallax>
                <Parallax speed={isXs || isSm ? 0 : -10}>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold whitespace-nowrap   ">I&apos;m <span className={textChange}>
                        
                        K</span>
                        <span className={textChange}>U</span>
                        <span className={textChange}>M</span>
                        <span className={textChange}>A</span>
                        <span className={textChange}>R<br></br></span>
                        <span className={textChange}>A</span>
                        <span className={textChange}>R</span>
                        <span className={textChange}>Y</span>
                        <span className={textChange}>A</span>
                        <span className={textChange}>N</span>
                        {/* <span className={textChange}></span>
                        <span className={textChange}></span>
                        <span className={textChange}></span> */}
                    </h1>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Web Developer',
                            3000,
                            'CSE student',
                            3000,
                            'Freelancer',
                            3000
                        ]}
                        wrapper="h2"
                        className="text-3xl sm:text-3xl  lg:text-4xl xl:text-5xl 2xl:text-6xl  font-semibold "
                        repeat={Infinity}
                    />
                    <div className="py-6 md:py-10">
                        <Scroll to="contact" activeClass="active" smooth={true} spy={true} offset={-50} duration={1000} className="rounded-2xl md:rounded-3xl p-3 sm:p-5 border-2 md:border-4 cursor-pointer select-none text-xl sm:text-2xl font-semibold border-sky-600 hover:bg-gradient-to-l from-cyan-200/50 to-pink-100/50 dark:from-slate-900/50 dark:to-blue-900/50  transform ease-in-out duration-500 dark:border-slate-500 hover:text-2xl  sm:hover:text-3xl">Contact Me</Scroll>
                    </div>
                </Parallax>
            </div>
            <div className="z-5 w-full md:w-[50vw] ">
                <Waving setLoading={setLoading} />
            </div>
        </section >
    </>
    );
}