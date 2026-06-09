import { useState } from 'react'
import { useTranslation } from "react-i18next"
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import './navbar.css'

const Navbar = () => {
const { t, i18n } = useTranslation()
const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
        setIsDark(!isDark)
    }
  return (
    
<nav className="bg-neutral-primary p-4 z-20 top-0 start-0 border-b border-default">
  <div className="flex flex-wrap items-center justify-between px-10">
    <a href="/">
      <img className="block dark:hidden w-10 h-10" src="/public/assets/svg/logo_dark.svg" alt="" />
      <img className="hidden dark:block w-10 h-10" src="/public/assets/svg/logo_light.svg" alt="" />
    </a>

    <div className="hidden bg-white/40 rounded-4xl w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <a href="#" className=" font-DM-Sans dark:text-white block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#" className=" font-DM-Sans dark:text-white block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">{t('HEADER.NAV.ABOUT')}</a>
        </li>
        <li>
          <a href="#" className=" font-DM-Sans dark:text-white block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">{t('HEADER.NAV.SKILLS')}</a>
        </li>
        <li>
          <a href="#" className=" font-DM-Sans dark:text-white block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">{t('HEADER.NAV.PROJECTS')}</a>
        </li>
        <li>
          <a href="#" className=" font-DM-Sans dark:text-white block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">{t('HEADER.NAV.HELLO')}</a>
        </li>

      </ul>
    </div>

    <div className="flex items-center gap-4">

        <div className="relative flex items-center bg-gray-900 rounded-full cursor-pointer overflow-hidden" onClick={toggleTheme}>
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${isDark ? 'translate-x-full' : 'translate-x-0'}`} />
            <span className={`relative z-10 px-1 py-2 transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-4 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            </span>
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-4 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            </span>
        </div>

        <div className="relative flex items-center bg-gray-900 rounded-full cursor-pointer overflow-hidden" onClick={() => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')}>
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${i18n.language === 'en' ? 'translate-x-full' : 'translate-x-0'}`} />
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${i18n.language === 'de' ? 'opacity-100' : 'opacity-0'}`}>
                <img className="flag" src="public/assets/svg/german_flag.svg" alt="DE" />
            </span>
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${i18n.language === 'en' ? 'opacity-100' : 'opacity-0'}`}>
                <img className="flag" src="public/assets/svg/kingdom_flag.svg" alt="EN" />
            </span>
        </div>

          <div className="flex gap-2"> 
            <a href="/" className="hover:text-blue-400"><IconBrandGithub size={32}/></a>
            <a href="/" className="hover:text-blue-400"><IconBrandLinkedin size={32}/></a>
          </div>

    </div>

  </div>
</nav>

  )
}

export default Navbar