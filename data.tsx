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
        title: "Graduated of CBTis #244",
        subtitle: "",
        description: "Graduate of the CBTis #244 technical high school in the 2020-2023 generation of the technical career in Programming.",
        date: "Agu 2020 - Jun 2023",
    },
    {
        id: 2,
        title: "Student of B.S. in Computer Science and Technology in Tecnológico de Monterrey",
        subtitle: "",
        description: "I'm currently studying Computer Engineering at the Monterrey Institute of Technology. I'm focused on web and software development.",
        date: "Agu 2023 - Presente",
    },
    {
        id: 3,
        title: "Web Developer - School Project 'Pagina web con diseño responsive para invernadero'",
        subtitle:"",
        description:"I created a website with a responsive design which allowed users using different devices to enter the page and see the information clearly, in addition to showing the data at the time of the greenhouse and being able to use the different actuators such as a fan, a lamp, and an irrigation system, in addition to making queries in a database and using technologies such as PHP, HTML, CSS, JS, Python and Flask",
        date:"Sep 2024 - Nov 2024"
    },
    {
        id: 4,
        title: "Web Developer - Project 'Aplicación de listas de tareas'",
        subtitle: "",
        description: "I developed a to-do list app using React.JS and Tailwind CSS. I implemented CRUD features and enhanced the user experience with animations and interactivity.",
        date: "Dec 2025",
    },
    {
        id: 5,
        title: "Development of a games page",
        subtitle: "",
        description: "I developed a page that contains various classic board games such as Tic-Tac-Toe, Connect4, Wordle, etc. This page is designed with the React.JS framework and also has a responsive design.",
        date: "Ene 2025 - Present"
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
        title: "Web page design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Computer />,
        title: "Web page development",
        description: "Custom website design and development tailored to your needs",
    },
    {
        icon: <Book />,
        title: "Responsive methods",
        description: "Adapt your website to work perfectly on mobile devices, tablets, and computers.",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Form",
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
        title: "Video games Webpage",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/JesusWor/Proyectos/tree/main/juegos",
        urlDemo: "https://juegosde1-2jugadores.pages.dev/",
    },
    {
        id: 4,
        title: "Task manager",
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