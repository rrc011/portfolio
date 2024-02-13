import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  showContactForm: (e: Boolean) => void;
};

export const Footer: FC<Props> = ({ showContactForm }) => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const handleShowContactForm = () => {
    showContactForm(true);
  };

  return (
    <footer className="rounded-lg shadow m-4 bg-black/5 dark:bg-black/20 backdrop-blur-lg w-full xl:w-[1120px] mx-auto mb-10">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm sm:text-center text-yellow-800/90 dark:text-yellow-200/90">
          © {currentYear}. {t('Footer.text')}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0">
          <li>
            <a href="/#sobre-mi" className="hover:underline me-4 md:me-6">
              {t('Menu.AboutMe')}
            </a>
          </li>
          <li>
            <a onClick={handleShowContactForm} className="hover:underline cursor-pointer">
              {t('Menu.Contact')}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
