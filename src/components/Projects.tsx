import { LinkButton } from './LinkButton';
import { GitHub } from './icons/GitHub';

import { SiAxios, SiMicrosoftazure, SiNestjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiDotnet, DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaAngular, FaBootstrap, FaGit, FaReact, FaSass, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { useDetectLanguage } from '@/core/hooks/useDetectLanguage';

export const Projects = () => {
  const language = useDetectLanguage();

  const TAGS = {
    TAILWIND: {
      name: 'Tailwind CSS',
      class: 'bg-[#003159] text-white',
      icon: SiTailwindcss,
    },
    DOTNET: {
      name: '.NET',
      class: 'bg-[#512BD4] text-white',
      icon: DiDotnet,
    },
    SQLSERVER: {
      name: 'SQL Server',
      class: 'bg-[#CC2927] text-white',
      icon: DiMsqlServer,
    },
    GIT: {
      name: 'Git',
      class: 'bg-[#F05032] text-white',
      icon: FaGit,
    },
    AZURE: {
      name: 'Azure',
      class: 'bg-blue-600 text-white',
      icon: SiMicrosoftazure,
    },
    VUE: {
      name: 'VueJs',
      class: 'bg-[#42b883] text-white',
      icon: FaVuejs,
    },
    ANGULAR: {
      name: 'Angular',
      class: 'bg-red-600 text-white',
      icon: FaAngular,
    },
    SASS: {
      name: 'Sass',
      class: 'bg-pink-500 text-white',
      icon: FaSass,
    },
    SCRUM: {
      name: 'Scrum',
      class: 'bg-white text-black',
    },
    TYPESCRIPT: {
      name: 'TypeScript',
      class: 'bg-[#007ACC] text-white',
      icon: SiTypescript,
    },
    AXIOS: {
      name: 'Axios',
      class: 'bg-[#007ACC] text-white',
      icon: SiAxios,
    },
    REACT: {
      name: 'React',
      class: 'bg-[#23272f] text-white pr-3',
      icon: FaReact,
      iconColor: '#61DAFB',
    },
    JAVASCRIPT: {
      name: 'JavaScript',
      class: 'bg-yellow-400 text-black',
      icon: IoLogoJavascript,
      iconColor: '#FFF',
    },
    BOOTSTRAP: {
      name: 'Bootstrap',
      class: 'bg-purple-800 text-white',
      icon: FaBootstrap,
    },
    MONGODB: {
      name: 'MongoDB',
      class: 'bg-[#47A248] text-white',
      icon: DiMongodb,
    },
    NESTJS: {
      name: 'NestJS',
      class: 'bg-[#E0234E] text-white',
      icon: SiNestjs,
    },
  };

  const PROJECTS_ES = [
    {
      title: 'Tu Empleo Ideal - Pagina para buscar empleo',
      description:
        'Tu Empleo Ideal es una plataforma integral diseñada para facilitar la búsqueda y aplicación de empleo. Con una interfaz intuitiva y atractiva, los usuarios pueden explorar diversas ofertas laborales, filtrar por categorías, y aplicar a los puestos de trabajo de su interés. La plataforma está respaldada por tecnologías modernas como NestJS y React, asegurando un rendimiento eficiente y una experiencia de usuario fluida. Además, se integra con MongoDB para almacenar y gestionar la información de los usuarios y las ofertas laborales. El diseño responsivo y la implementación de estilos con SASS y Bootstrap garantizan una experiencia consistente en diferentes dispositivos. Axios se utiliza para gestionar las solicitudes HTTP, y el control de versiones se realiza mediante Git. ¡Explora Tu Empleo Ideal y da un paso más cerca hacia tu carrera soñada!',
      link: 'https://tuempleoideal.com.do',
      image: './src/assets/projects/tei.png',
      github: '',
      tags: [TAGS.NESTJS, TAGS.REACT, TAGS.SASS, TAGS.AXIOS, TAGS.BOOTSTRAP, TAGS.GIT, TAGS.MONGODB],
    },
  ];

  const PROJECTS_EN = [
    {
      title: 'Tu Empleo Ideal - Job Search Website',
      description:
        'Tu Empleo Ideal is a comprehensive platform designed to streamline the job search and application process. With an intuitive and appealing interface, users can explore various job listings, filter by categories, and apply to their preferred positions. The platform is backed by modern technologies such as NestJS and React, ensuring efficient performance and a seamless user experience. Additionally, it integrates with MongoDB to store and manage user and job listing information. Responsive design and style implementation using SASS and Bootstrap guarantee a consistent experience across different devices. Axios is used for handling HTTP requests, and version control is managed through Git. Explore Your Ideal Job and take a step closer to your dream career!',
      link: 'https://tuempleoideal.com.do',
      image: './src/assets/projects/tei.png',
      github: '', // Include the link to your GitHub repository here if it's public
      tags: [TAGS.NESTJS, TAGS.REACT, TAGS.SASS, TAGS.AXIOS, TAGS.BOOTSTRAP, TAGS.GIT, TAGS.MONGODB],
    },
  ];

  return (
    <section className="flex flex-col gap-y-16">
      {language === 'es'
        ? PROJECTS_ES.map(({ image, title, description, tags, link, github }, idx) => (
            <article key={idx}>
              <h3 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">{title}</h3>
              <p className="text-lg mb-4 text-pretty">{description}</p>
              <ul className="flex gap-x-2 flex-row mb-2">
                {tags.map((tag: any, idx) => (
                  <li key={`${tag.name}-${idx}`}>
                    <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 whitespace-nowrap`}>
                      {tag.icon && <tag.icon style={{ width: '1rem', height: '1rem', color: tag.iconColor }} />}
                      <span>{tag.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <img
                loading="lazy"
                className="rounded shadow-2xl shadow-white/10 aspect-video"
                src={image}
                alt={`Captura de pantalla del proyecto ${image}`}
              />
              <footer className="flex gap-x-4 items-end justify-start mt-4">
                {github && (
                  <LinkButton href={github}>
                    <GitHub className="size-6" />
                    Ver código fuente
                  </LinkButton>
                )}
                <LinkButton href={link}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </>
                  </svg>
                  Ir al sitio web
                </LinkButton>
              </footer>
            </article>
          ))
        : PROJECTS_EN.map(({ image, title, description, tags, link, github }, idx) => (
            <article key={idx}>
              <h3 className="text-2xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">{title}</h3>
              <p className="text-lg mb-4 text-pretty">{description}</p>
              <ul className="flex gap-x-2 flex-row mb-2">
                {tags.map((tag: any, idx) => (
                  <li key={`${tag.name}-${idx}`}>
                    <span className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 whitespace-nowrap`}>
                      {tag.icon && <tag.icon style={{ width: '1rem', height: '1rem', color: tag.iconColor }} />}
                      <span>{tag.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <img
                loading="lazy"
                className="rounded shadow-2xl shadow-white/10 aspect-video"
                src={image}
                alt={`Captura de pantalla del proyecto ${image}`}
              />
              <footer className="flex gap-x-4 items-end justify-start mt-4">
                {github && (
                  <LinkButton href={github}>
                    <GitHub className="size-6" />
                    Ver código fuente
                  </LinkButton>
                )}
                <LinkButton href={link}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <>
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                      <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                      <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                      <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                      <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                      <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                      <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" />
                      <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" />
                    </>
                  </svg>
                  Ir al sitio web
                </LinkButton>
              </footer>
            </article>
          ))}
    </section>
  );
};
