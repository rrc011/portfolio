import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ContactForm } from '@/components/ContactForm';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className="relative text-black dark:text-white">
        <div className="top-0 bottom-0 z-[-2] min-h-screen w-full bg-neutral-100 dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5), rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <Header showContactForm={() => setShowModal(true)} />
          {children}
          <Footer showContactForm={() => setShowModal(true)} />
        </div>
      </div>
      {showModal && <ContactForm setShowModal={setShowModal} />}
    </>
  );
};
