import { subtle } from "crypto";
import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Rss, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github, Palette } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/JesusWor",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jesus-escobar-123572344/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    /*{
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials"
    }*/
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Egresado del CBTis #244",
        subtitle: "",
        description: "Egresado de la preparatoria técnica de CBTis #244 en la generación 2020-2023 de la carrera técnica de Programación.",
        date: "Ago 2020 - Jun 2023",
    },
    {
        id: 2,
        title: "Estudiante de ITC en el Tecnológico de Monterrey",
        subtitle: "",
        description: "Actualmente estoy cursando la carrera de Ingeniería en Tecnologías Computacionales en el Tecnológico de Monterrey. Enfocado en el desarrollo web y software.",
        date: "Ago 2023 - Presente",
    },
    {
        id: 3,
        title: "Desarrollador Web - Proyecto escolar 'Pagina web con diseño responsive para invernadero'",
        subtitle:"",
        description:"Creé una pagina web con un diseño responsive el cual permitia a los usuarios que usan diferentes dispositivos entrar en la pagina y ver la información de manera clara, además de que mostraba los datos en el momento del invernadero y podra usar los diferentes actuadores como un ventilador, una lamapara, y un sistema de riego, ademas de que hacia consultas en una base de datos y se utilizaron tecnologías como PHP, HTML, CSS, JS, Python y Flask",
        date:"Sep 2024 - Nov 2024"
    },
    {
        id: 4,
        title: "Desarrollador Web - Proyecto 'Aplicación de listas de tareas'",
        subtitle: "",
        description: "Desarrollé una aplicación de listas de tareas usando React.JS, TailwindCSS. Implementé funciones de CRUD y mejoré la experiencia de usuario con animaciones e interactividad.",
        date: "Dec 2025",
    },
    {
        id: 5,
        title: "Desarrollo de una pagina de juegos",
        subtitle: "",
        description: "Desarrolle una pagina que contiene diversos juegos clasiscos de mesa como el Tic-Tac-Toe, conecta4, Wordle, etc. Esta pagina esta diseñada con el framework React.JS ademas de cuenta con un diseño responsive.",
        date: "Ene 2025 - Presente"
    }
];

export const dataCounter = [
    /*{
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },*/
    {
        id: 0,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    /*{
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },*/
];

export const serviceData = [
    {
        icon: <Pencil />,
        title: "Diseño de paginas web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo de paginas web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Métodos responsivos",
        description: "Adapto tu sitio web para que funcione perfectamente en dispositivos móviles, tablets y computadoras.",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Formulario",
        image: "/image-1.jpg",
        urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/Form",
        urlDemo: "https://quiet-fudge-bfc7c4.netlify.app",
    },
    {
        id: 2,
        title: "Tetris",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/Tetris",
        urlDemo: "https://glistening-naiad-d4fdc3.netlify.app",
    },
    {
        id: 3,
        title: "Sitio de juegos",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/juegos",
        urlDemo: "https://juegosde1-2jugadores.pages.dev/",
    },
    {
        id: 4,
        title: "Agenda de tareas",
        image: "/image-4.jpg",
        urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/task-assignaments",
        urlDemo: "https://task-assignament.pages.dev/",
    }
]

// export const dataTestimonials = [
//     {
//         id: 1,
//         name: "George Snow",
//         description:
//             "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
//         imageUrl: "/profile1.png",
//     },
//     {
//         id: 2,
//         name: "Juan Pérez",
//         description:
//             "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
//         imageUrl: "/profile2.png",
//     },
//     {
//         id: 3,
//         name: "María García",
//         description:
//             "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
//         imageUrl: "/profile3.png",
//     },
//     {
//         id: 4,
//         name: "Laura Snow",
//         description:
//             "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
//         imageUrl: "/profile4.png",
//     },
//     {
//         id: 5,
//         name: "Carlos Sánchez",
//         description:
//             "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
//         imageUrl: "/profile5.png",
//     },
//     {
//         id: 6,
//         name: "Antonio Martínez",
//         description:
//             "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
//         imageUrl: "/profile6.png",
//     },
// ];