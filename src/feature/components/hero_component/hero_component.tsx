import FloatingLines from './FloatingLines';
import './hero_component.css'
import { IconMessageCircle } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom';

const GRADIENT_DARK  = ["#f8f8f8", "#3B82F6", "#5a07eb"];
const GRADIENT_LIGHT = ["#1e1e1e", "#1d4ed8", "#4c0fad"];

const hero_component = () => {
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative dark:bg-[#0e0e0e] light:bg-[#ebe8e8]">
      <div className="absolute inset-0">
        <FloatingLines
          enabledWaves={["bottom", "top"]}
          lineCount={5}
          lineDistance={99.5}
          bendRadius={14}
          bendStrength={-2}
          interactive={false}
          parallax={true}
          animationSpeed={0.5}
          linesGradient={isDark ? GRADIENT_DARK : GRADIENT_LIGHT}
          mixBlendMode="normal"
        />

      </div>
      <section id="home" className="hero flex items-center relative z-10">
        <div className="flex flex-col navbar:flex-row items-center px-6 navbar:px-14 py-8 navbar:py-16 mx-auto gap-10 content-beg">
          <div className="flex-1 text-center navbar:text-left">
            <h4 className="font-DM-Sans mb-4 text-xl font-extrabold tracking-tight leading-none navbar:text-2xl xl:text-4xl dark:text-white">
              {t('HERO.INTRODUCTION')}
            </h4>
            <h1 className="font-Unbounded mb-4 text-3xl font-extrabold tracking-tight leading-none navbar:text-4xl xl:text-6xl dark:text-white">
              {t('HERO.TITLE')} {t('HERO.TITLE1')}
            </h1>
            <p className="font-DM-Sans mb-6 font-medium text-gray-500 navbar:mb-8 navbar:text-xl xl:text-2xl">
              {t('HERO.DESCRIPTION')}
            </p>
            <div className='flex justify-center navbar:justify-start'>
              <Link to="contact" className="w-32 no-underline">
                <div className='contactBtn light:text-black hover:bg-blue-500/25 hover:text-blue-400 w-32 flex text-white/50 border-2 rounded-lg items-center gap-2 p-2'>
                  <IconMessageCircle size={32}/>
                  <span className='font-DM-Sans'>{t('HERO.BUTTON')}</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center shrink-0">
            <div className="avatar-wrapper">
              <img className="hero-avatar" src="/assets/img/profile_img/Profilimg.png" alt="profil-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default hero_component;
