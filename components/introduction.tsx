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
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text4xl md:mb-10">Si puedes imaginarlo,
                        <TypeAnimation
                        sequence={[
                            "puedes codificarlo",
                            1000,
                            "puedes construirlo",
                            1000,
                            "puedes diseñarlo",
                            1000,
                            "puedes hacerlo realidad",
                            1000
                        ]} 
                       wrapper="span"
                       speed={50}
                       repeat={Infinity}
                       className="block font-bold text-secondary" 
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-40px md:mx-0 md:mb-8 text-justify">
                        Como estudiante de ingenieria en tecnologias computacionales del tecnologico de monterrey siempre estoy buscando como expandir mis capacidades y seguir avanzando por cuenta propia tomando diversoso, investigando y elaborando distintos proyectos para desarrollar mejor mis habilidades, ademas he participado en distintos eventos culturales y deportivos siendo el capitan del equipo de basquet de mi preparatoria y el pianista del Tec de Monterrey en campus Sinaloa
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gab-10">
                        <Link 
                        href="/portfolio" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </Link>

                        <Link 
                        href="https://wa.me/+526671774365" 
                        className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contacta conmigo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction