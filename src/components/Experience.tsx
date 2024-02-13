import { useDetectLanguage } from '@/core/hooks/useDetectLanguage';
import { ExperienceItem } from './ExperienceItem';
import { SiAxios, SiMicrosoftazure, SiTailwindcss, SiTypescript } from "react-icons/si";
import { DiDotnet, DiMsqlServer } from 'react-icons/di';
import { FaAngular, FaBootstrap, FaGit, FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

export const Experience = () => {
    const language = useDetectLanguage();

    const TAGS = {
        TAILWIND: {
            name: "Tailwind CSS",
            class: "bg-[#003159] text-white",
            icon: SiTailwindcss,
        },
        DOTNET: {
            name: ".NET",
            class: "bg-[#512BD4] text-white",
            icon: DiDotnet,
        },
        SQLSERVER: {
            name: "SQL Server",
            class: "bg-[#CC2927] text-white",
            icon: DiMsqlServer,
        },
        GIT: {
            name: "Git",
            class: "bg-[#F05032] text-white",
            icon: FaGit,
        },
        AZURE: {
            name: "Azure",
            class: "bg-blue-600 text-white",
            icon: SiMicrosoftazure
        },
        VUE: {
            name: "VueJs",
            class: "bg-[#42b883] text-white",
            icon: FaVuejs
        },
        ANGULAR: {
            name: "Angular",
            class: "bg-red-600 text-white",
            icon: FaAngular
        },
        SASS: {
            name: "Sass",
            class: "bg-pink-500 text-white",
            icon: FaSass
        },
        SCRUM: {
            name: "Scrum",
            class: "bg-white text-black",
        },
        TYPESCRIPT: {
            name: "TypeScript",
            class: "bg-[#007ACC] text-white",
            icon: SiTypescript
        },
        AXIOS: {
            name: "Axios",
            class: "bg-[#007ACC] text-white",
            icon: SiAxios
        },
        REACT: {
            name: "React",
            class: "bg-[#23272f] text-white pr-3",
            icon: FaReact,
            iconColor: "#61DAFB"
        },
        JAVASCRIPT: {
            name: "JavaScript",
            class: "bg-yellow-400 text-black",
            icon: IoLogoJavascript,
            iconColor: "#FFF"
        },
        BOOTSTRAP: {
            name: "Bootstrap",
            class: "bg-purple-800 text-white",
            icon: FaBootstrap
        }
    }

    const EXPERIENCIE_ES = [
        {
            date: "Marzo 2022 - Actualmente...",
            title: "DESARROLLADOR SENIOR FULLSTACK − KHENSYS CORPORATION",
            description:
                "En mi rol como Desarrollador de Software Senior en Khenssys, he liderado la implementación exitosa de soluciones tecnológicas avanzadas, destacándome por mi compromiso con la excelencia técnica y mi capacidad para traducir las necesidades de los clientes en productos de software funcionales y eficientes.",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Formé parte del equipo de desarrollo de la aplicación MiPE Académica, supervisando la administración de estudiantes y docentes.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Implemente funciones como registro de estudiantes, reinscripción, publicación de calificaciones académicas y gestión de horarios y disciplinas docentes.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Contribuí activamente al desarrollo y mejora de MiPE Finanzas para la gestión de pagos y cobros de docentes y personal.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Trabajé en Mipe Reportes, creando informes informativos, dashboards y más.
                    </p>
                </>
            ),
            responsabilities: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Colaboración estratégica: trabajó en estrecha colaboración con los propietarios de productos,
                        Interpretar y traducir sus requisitos en características específicas.
                        y funciones, asegurando la alineación con los objetivos de negocio.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Garantía de calidad: adoptó un enfoque proactivo en la creación de pruebas unitarias,
                        asegurando la estabilidad y confiabilidad de las aplicaciones desarrolladas.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Tutoría y apoyo: brindó apoyo continuo a colegas,
                        compartiendo conocimientos y experiencias para fortalecer el equipo y
                        acelerar el aprendizaje interno.
                    </p>
                </>
            ),
            technologies: [TAGS.REACT, TAGS.VUE, TAGS.TAILWIND, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT, TAGS.AZURE, TAGS.SCRUM, TAGS.AXIOS]
        },
        {
            date: "Octubre 2019 - Marzo 2022",
            title: "DESARROLLADOR SENIOR FULLSTACK  − Marítima Dominicana (MARDOM)",
            technologies: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.SASS, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT, TAGS.AZURE, TAGS.SCRUM],
            description:
                "Durante mi mandato como desarrollador de software senior en Mardom, desempeñé un papel fundamental en la creación de soluciones tecnológicas avanzadas. Mi atención se centró en utilizar diversas tecnologías para ofrecer aplicaciones sólidas y eficientes.",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Forme parte del equipo de desarrollo que creó la aplicación Tally.
                        Donde diseñé e implementé funcionalidades para un control eficiente de la carga y descarga de productos.
                        Desarrolle funcionalidades para generar informes y rastrear movimientos de contenedores.
                        Creacion de un sistema de alertas para notificar a los usuarios sobre eventos importantes.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Contribuí al equipo de desarrollo que creó la aplicación TalleresMardom.
                        Donde diseñe e implemente modulos para una gestión eficiente de solicitudes de mantenimiento, seguimiento de piezas, registro de garantía,
                        solicitudes de almacén, cotizaciones de piezas y facturación de servicios.
                    </p>
                </>
            )
        },
        {
            date: "Enero 2018 - Octubre 2019",
            title: "DESARROLLADOR DE SOFTWARE JUNIOR  − LIONBRIDGE CAPITAL",
            technologies: [TAGS.JAVASCRIPT, TAGS.BOOTSTRAP, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT],
            description:
                "Durante mi función como desarrollador de software junior en Lionbridge Capital, participé activamente en el desarrollo y mantenimiento de aplicaciones de software, utilizando un conjunto diverso de lenguajes y herramientas para satisfacer las necesidades dinámicas de la organización. Las responsabilidades y contribuciones clave incluyen:",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Lideré la creación e implementación de un software de gestión cooperativas, entre sus funciones estaban el seguimiento de aportes,
                        retiros, afiliaciones de nuevos socios, informes y manejo de caja chica.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Contribuí a la mejora continua de la aplicación interna de recursos humanos.
                        Rectifiqué errores en el módulo de descuentos y participé en la creación del módulo de Gestión de Beneficios y Compensaciones.
                    </p>
                </>
            ),
            responsabilities: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Desarrollo de funciones según las solicitudes de los clientes: colaboré estrechamente con los clientes internos para comprender sus requisitos e implementé funciones para satisfacer sus necesidades específicas.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Mantenimiento de Aplicaciones Existentes: Proporcioné mantenimiento y soporte continuo para las aplicaciones existentes, asegurando su estabilidad y rendimiento óptimo.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Production Support: Offered support for applications in production, addressing issuespromptly and ensuring the smooth operation of critical systems.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Soporte de producción: Ofrecí soporte para aplicaciones en producción, abordando problemas con prontitud y garantizando el buen funcionamiento de los sistemas críticos.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Mejoras de aplicaciones: contribuyó a la mejora continua de las aplicaciones mediante la implementación de mejoras basadas en los comentarios de los usuarios y los requisitos comerciales en evolución.
                    </p>
                </>
            )
        },
    ];

    const EXPERIENCIE_EN = [
        {
            date: "March 2022 - Currently...",
            title: "SENIOR FULLSTACK DEVELOPER − KHENSYS CORPORATION",
            description:
                "In my role as a Senior Software Developer at Khenssys, I have spearheaded the successful implementation of advanced technological solutions, standing out for my commitment to technical excellence and my ability to translate client needs into functional and efficient software products.",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        I was part of the MiPE Academic application development team, supervising the administration of students and teachers. Implemented features such as student registration, re-enrollment, publication of academic grades, and management of teacher schedules and disciplines.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Implemented features such as student registration, re-enrollment, publication of academic grades, and management of teacher schedules and disciplines.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Worked on Mipe reports, creating informative reports, dashboards and more.
                    </p>
                </>
            ),
            responsabilities: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Strategic Collaboration: Worked closely with Product Owners,
                        interpreting and translating their requirements into specific features
                        and functions, ensuring alignment with business objectives.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Quality Assurance: Took a proactive approach in creating unit tests,
                        ensuring the stability and reliability of the developed applications.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Mentorship and Support: Provided ongoing support to colleagues,
                        sharing knowledge and experiences to strengthen the team and
                        expedite internal learning.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        My contribution has been instrumental to Khenssys' success, and I am
                        poised to continue leading initiatives that drive innovation and
                        excellence in software development.
                    </p>
                </>
            ),
            technologies: [TAGS.REACT, TAGS.VUE, TAGS.TAILWIND, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT, TAGS.AZURE, TAGS.SCRUM, TAGS.AXIOS]
        },
        {
            date: "October 2019 - March 2022",
            title: "SENIOR FULLSTACK DEVELOPER  − Marítima Dominicana (MARDOM)",
            technologies: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.SASS, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT, TAGS.AZURE, TAGS.SCRUM],
            description:
                "During my tenure as a Senior Software Developer at Mardom, I played a pivotal role in crafting advanced technological solutions. My focus was on utilizing various technologies to deliver robust and efficient applications.",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Development of Advanced Applications:
                        Led the development of advanced applications
                        using C# with .NET Core, ensuring the delivery of high-performance and scalable solutions.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Effective Database Management:
                        Implemented efficient strategies in SQL Server to
                        optimize database management, enhancing security and performance.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Front-End Expertise with Angular:
                        Directed the implementation of dynamic and engaging
                        user interfaces using Angular, significantly improving the overall user experience.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Version Control with Git and Gitflow:
                        Implemented and managed robust version control
                        systems with Git and Gitflow, facilitating collaborative and organized development.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Work within Scrum Methodology:
                        Actively contributed to iterative and adaptive
                        development within the Scrum framework, participating in meetings and ensuring
                        alignment with business objectives.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Team Mentorship and Support:
                        Provided support to colleagues, offering technical
                        assistance and participating in the mentorship of junior developers to foster their
                        professional growth.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        CI/CD Implementation with Azure DevOps:
                        Established Continuous Integration (CI) and
                        Continuous Deployment (CD) processes through Azure DevOps, ensuring efficient and
                        automated software delivery.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Production Deployment Oversight:
                        Led the production deployment process, ensuring a
                        seamless transition for the developed applications.
                    </p>
                </>
            )
        },
        {
            date: "january 2018 - Obtober 2019",
            title: "JUNIOR SOFTWARE DEVELOPER  − LIONBRIDGE CAPITAL",
            technologies: [TAGS.JAVASCRIPT, TAGS.BOOTSTRAP, TAGS.DOTNET, TAGS.SQLSERVER, TAGS.GIT],
            description:
                "During my role as a Junior Software Developer at Lionbridge Capital, I actively engaged inthe development and maintenance of software applications, utilizing a diverse set oflanguages and tools to meet the dynamic needs of the organization. Key responsibilitiesand contributions include:",
            achievements: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        C#: Developed and maintained software components using C#, ensuring efficient andreliable functionality.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        SQL Server: Utilized SQL Server for database management, ensuring secure and optimizeddata handling within applications.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        JavaScript: Applied JavaScript to enhance the interactivity and responsiveness of web-based applications.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Git: Implemented version control with Git to manage codebase changes efficiently andcollaboratively.
                    </p>
                </>
            ),
            responsabilities: (
                <>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Feature Development on Client Requests: Collaborated closely with internal clients tounderstand their requirements and implemented features to meet their specific needs.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Maintenance of Existing Applications: Provided ongoing maintenance and support forexisting applications, ensuring their stability and optimal performance.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Production Support: Offered support for applications in production, addressing issuespromptly and ensuring the smooth operation of critical systems.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Bug Resolution: Investigated and resolved bugs reported by users, employing debuggingtechniques and implementing fixes to improve application reliability.
                    </p>
                    <p className="mb-4 text-base font-normal dark:text-gray-200 text-pretty">
                        Application Enhancements: Contributed to the continuous improvement of applications by implementing enhancements based on user feedback and evolving business requirements.
                    </p>
                </>
            )
        },
    ];

    return (
        <ol className="relative border-s border-gray-200 ml-3">
            {language == "es" ?
                EXPERIENCIE_ES.map((experiencie, idx) => (
                    <li className="mb-10 ms-4" key={idx}>
                        <ExperienceItem {...experiencie} />
                    </li>
                )) : EXPERIENCIE_EN.map((experiencie, idx) => (
                    <li className="mb-10 ms-4" key={idx}>
                        <ExperienceItem {...experiencie} />
                    </li>
                ))
            }
        </ol>
    )
}
