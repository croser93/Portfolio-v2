import {IconBrandGithub, IconBrandLinkedin, IconMail  } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './navbar.css'
import { useTranslation } from "react-i18next"
import { HashLink } from 'react-router-hash-link';



const footer = () => {
    const { t } = useTranslation()
    return (
    <section className='footer border-t flex justify-between items-center px-16 py-4 bg-white/10'>
        <div>
        <HashLink to="/#home">
            <img className="block dark:hidden w-10 h-10" src="/public/assets/svg/logo_dark.svg" alt="" />
            <img className="hidden dark:block w-10 h-10" src="/public/assets/svg/logo_light.svg" alt="" />
        </HashLink>

        </div>
        <div>
            <div className='flex gap-5'>
                <Link to="/legal-notice" className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('IMPRINT.IMPRINT')}</span></Link>
                <Link to="/privacy-policy" className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('CONTACT.PRIVACY_POLICY')}</span></Link>

            </div>

        </div>
        <div>
            <div className="flex gap-4"> 
                <a href="https://github.com/croser93" target='_blank'><div className='icon-github light:text-black hover:text-blue-400'><IconBrandGithub size={42}/></div></a>
                <a href="https://in/maik-groth" target='_blank'><div className='icon-linkedin light:text-black hover:text-blue-400'><IconBrandLinkedin size={42}/></div></a>
                <a href="https://in/maik-groth" target='_blank'><div className='icon-mail light:text-black hover:text-blue-400'><IconMail size={42}/></div></a>

            </div>
        </div>
    </section>
    )
}

export default footer