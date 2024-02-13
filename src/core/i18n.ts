import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          Welcome: {
            AvailableWork: 'Available to work',
            Hey: "Hey, I'm Rafael Rodriguez",
          },
          Menu: {
            Experience: 'Work Experience',
            Projects: 'Projects',
            AboutMe: 'About me',
            Contact: 'Contact',
          },
          Resume: {
            Years: '+5 years of experience.',
            Position: 'Full Stack Developer.',
            Location: 'From Santo Domingo, Dominican Republic.',
            Description: 'Specialized in creating unique applications.',
          },
          Footer: {
            text: 'Almost all rights reserved.',
          },
          ExperienceItem: {
            Achievements: 'Key Achievements:',
            Responsibilities: 'Key Responsibilities:',
          },
          ContactForm: {
            Title: 'Contact me',
            Name: 'Name',
            Email: 'Email',
            Message: 'Message',
            Send: 'Send',
            Close: 'Close',
          },
        },
      },
      es: {
        translation: {
          Welcome: {
            AvailableWork: 'Disponible para trabajar',
            Hey: 'Hey, soy Rafael Rodriguez',
          },
          Menu: {
            Experience: 'Experiencia laboral',
            Projects: 'Proyectos',
            AboutMe: 'Sobre mi',
            Contact: 'Contacto',
          },
          Resume: {
            Years: '+5 Años de experiencia.',
            Position: 'Desarrollador Full Stack.',
            Location: 'De Santo Domingo, Republica Dominicana.',
            Description: 'Especializado en crear aplicaciones únicas.',
          },
          Footer: {
            text: 'Casi todos los derechos reservados.',
          },
          ExperienceItem: {
            Achievements: 'Logros clave:',
            Responsibilities: 'Responsabilidades clave:',
          },
          ContactForm: {
            Title: 'Contactame',
            Name: 'Nombre',
            Email: 'Correo',
            Message: 'Mensaje',
            Send: 'Enviar',
            Close: 'Cerrar',
          },
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
