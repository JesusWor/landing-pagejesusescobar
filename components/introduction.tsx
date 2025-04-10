"use client"

import Image from "next/image"
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation'

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="250" height="450" alt="Profile pic" className="m-auto" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text4xl md:mb-10">
                        If you can imagine it,
                        <TypeAnimation
                        sequence={[
                            "you can code it",
                            1000,
                            "you can build it",
                            1000,
                            "you can design it",
                            1000,
                            "you can make it real",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="block font-bold text-secondary"
                        />
                    </h1>


                    <p className="mx-auto mb-2 text-[18px] md:mx-0 md:mb-8 text-justify">
                        As a student of computer technology engineering at the Tecnológico de Monterrey, I am always looking to expand my capabilities and continue advancing on my own, taking on diverse subjects, researching and developing different projects to better develop my skills. I have also participated in different cultural and sporting events, being the captain of my high school's basketball team and the pianist for the Tec de Monterrey Sinaloa campus.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gab-10">
                        <Link 
                        href="/portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Projects
                        </Link>

                        <Link 
                        href="https://wa.me/+526671774365" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction