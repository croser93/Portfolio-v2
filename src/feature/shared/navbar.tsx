import { useState } from 'react'
import { useTranslation } from "react-i18next"
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { HashLink } from 'react-router-hash-link';
import './navbar_footer.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
const { t, i18n } = useTranslation()
const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'))

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
            localStorage.setItem('color-theme', 'light')
        } else {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
        setIsDark(!isDark)
    }
    const scrollWithOffset = (el: HTMLElement) => {
      const navbarHeight = 90
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top })
  }
  return (

    
    
<nav className="p-4 sticky top-0 z-50 border-b border-default backdrop-blur-md bg-black/70 light:bg-white/70">
  <div className="flex items-center justify-between px-10 mx-auto content-beg">
    <a href="/">
      <img className="block dark:hidden w-10 h-10" src="/public/assets/svg/logo_dark.svg" alt="" />
      <img className="hidden dark:block w-10 h-10" src="/public/assets/svg/logo_light.svg" alt="" />
    </a>

    <div className="hidden md:block" id="navbar-default">
      <ul className="font-medium flex items-center gap-8">
        <li>
          <HashLink to="/#home" scroll={scrollWithOffset} className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.HOME')}</span></HashLink>
        </li>
        <li>
          <HashLink to="/#about" scroll={scrollWithOffset} className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.ABOUT')}</span></HashLink>
        </li>
        <li>
          <HashLink to="/#skills" scroll={scrollWithOffset} className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.SKILLS')}</span></HashLink>
        </li>
        <li>
          <HashLink to="/#projects" scroll={scrollWithOffset} className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.PROJECTS')}</span></HashLink>
        </li>
        {/* <li>
          <HashLink to="/#references" scroll={scrollWithOffset} className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.REFERENCES')}</span></HashLink>
        </li> */}
        <li>
          <Link to="contact" className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('HEADER.NAV.CONTACT')}</span></Link>
        </li>
      </ul>
    </div>

    <div className="flex items-center gap-4">

        <div className="relative flex items-center dark:bg-gray-900 light:bg-gray-300 rounded-full cursor-pointer overflow-hidden" onClick={toggleTheme}>
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${isDark ? 'translate-x-full' : 'translate-x-0'}`} />
            <span className={`relative z-10 px-1 py-2 transition-opacity duration-300 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-4 h-2 scale-150 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" clipRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
            </span>
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
                <svg className="w-3 h-2 scale-150 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
            </span>
        </div>

        <div className="relative flex items-center dark:bg-gray-900 light:bg-gray-300 rounded-full cursor-pointer overflow-hidden" onClick={() => i18n.changeLanguage(i18n.language === 'de' ? 'en' : 'de')}>
            <div className={`absolute top-0 left-0 w-1/2 h-full bg-gray-500 rounded-full transition-transform duration-300 ease-in-out ${i18n.language === 'en' ? 'translate-x-full' : 'translate-x-0'}`} />
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${i18n.language === 'de' ? 'opacity-100' : 'opacity-0'}`}>
                <img className="flag" src="public/assets/svg/german_flag.svg" alt="DE" />
            </span>
            <span className={`relative z-10 px-1 transition-opacity duration-300 ${i18n.language === 'en' ? 'opacity-100' : 'opacity-0'}`}>
                <img className="flag" src="public/assets/svg/kingdom_flag.svg" alt="EN" />
            </span>
        </div>

          <div className="flex gap-2"> 
            <a href="https://github.com/croser93" target='_blank'><div className='icon-github light:text-black hover:text-blue-400'><IconBrandGithub size={32}/></div></a>
            <a href="https://in/maik-groth" target='_blank'><div className='icon-linkedin light:text-black hover:text-blue-400'><IconBrandLinkedin size={32}/></div></a>
          </div>

    </div>

  </div>
</nav>

  )
}

export default Navbar