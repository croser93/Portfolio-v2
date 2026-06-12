import {IconBrandGithub, IconBrandLinkedin, IconMail  } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './navbar_footer.css'
import { useTranslation } from "react-i18next"
import { HashLink } from 'react-router-hash-link';



const footer = () => {
    const { t } = useTranslation()
    return (
    <section className='footer border-t  bg-white/10'>
        <div className='mx-auto flex justify-between items-center px-16 py-4 content-beg'>
            <div className='flex flex-col items-center'>
            <HashLink to="/#home">
                <img className="block dark:hidden w-10 h-10" src="/public/assets/svg/logo_dark.svg" alt="" />
                <img className="hidden dark:block w-10 h-10" src="/public/assets/svg/logo_light.svg" alt="" />
            </HashLink>
            <span className='dark:text-white light:text-black font-semibold'>© 2026 Maik Groth</span>
            </div>
            <div>
                <div className='flex gap-5 '>
                    <Link to="/legal-notice" className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('IMPRINT.IMPRINT')}</span></Link>
                    <Link to="/privacy-policy" className="block aUnderline py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"><span className='light:text-black font-DM-Sans font-medium'>{t('CONTACT.PRIVACY_POLICY')}</span></Link>

                </div>

            </div>
            <div>
                <div className="flex  gap-4"> 
                    <a href="https://github.com/croser93" target='_blank'><div className='iconsize icon-github light:text-black hover:text-blue-400'><IconBrandGithub className="w-8 h-8 md:w-10 md:h-10"/></div></a>
                    <a href="https://in/maik-groth" target='_blank'><div className='icon-linkedin light:text-black hover:text-blue-400'><IconBrandLinkedin className="w-8 h-8 md:w-10 md:h-10"/></div></a>
                    <a href="mailto:contact@maik-groth.com" target='_blank'><div className='icon-mail light:text-black hover:text-blue-400'><IconMail className="w-8 h-8 md:w-10 md:h-10"/></div></a>

                </div>
            </div>
        </div>
    </section>
    )
}

export default footer