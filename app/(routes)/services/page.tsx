"use client"

import TransitionPage from "@/components/transition-page";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";

const ServicesPage = () => {
    const handleClick = () => {
        window.open("https://wa.me/+526671774365");
    };

    return (
        <>
            <TransitionPage />
            <CircleImage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-40 md:mt-0">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Mis{" "}
                        <span className="font-bold text-secondary">
                            servicios
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-250">
                        Ofrezco servicios de desarrollo Web frontend especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías, como HTML, CSS, JavaScript, TypeScript, React.JS y React.TS, diseño interfaces de usuarios intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.
                    </p>
                    <button 
                        onClick={handleClick} 
                        className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65"
                    >
                        Contacta conmigo
                    </button>
                </div>

                {/* Slider */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;