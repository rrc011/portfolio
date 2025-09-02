import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  showContactForm: (e: boolean) => void;
};

export const Header: FC<Props> = ({ showContactForm }) => {
  const { t } = useTranslation();

  const navItems = [
    {
      title: t('Menu.Experience'),
      url: 'experiencia',
    },
    {
      title: t('Menu.Projects'),
      url: 'proyectos',
    },
    {
      title: t('Menu.AboutMe'),
      url: 'sobre-mi',
    },
    {
      title: t('Menu.Contact'),
      callback: () => showContactForm(true),
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex">
      <header className="flex justify-center items-center mx-auto py-5 sticky top-0 w-full z-10">
        <nav className="border border-black rounded-full px-3 py-1 flex flex-row items-center bg-neutral-200 dark:bg-black/50 backdrop-blur-2xl shadow-lg">
          {navItems.map((link) => (
            <a
              className="hover:bg-white/10 rounded-full px-2 sm:px-3 transition text-sm sm:text-base cursor-pointer"
              key={link.title}
              onClick={() => (link.url ? scrollToSection(link.url) : link.callback && link.callback())}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </header>
    </div>
  );
};
