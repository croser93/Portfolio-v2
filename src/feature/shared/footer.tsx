import {IconBrandGithub, IconBrandLinkedin, IconMail  } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import './navbar_footer.css'
import { useTranslation } from "react-i18next"


const footer = () => {
    const { t } = useTranslation()
    return (
    <section className='footer border-t bg-white/10'>
        <div className='mx-auto flex flex-col items-center gap-6 px-4 py-6 navbar:px-16 navbar:flex-row navbar:justify-between navbar:py-4 content-beg'>

            <div className='flex flex-col items-center'>
                <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    <img className="block dark:hidden w-10 h-10" src="/assets/svg/logo_dark.svg" alt="" />
                    <img className="hidden dark:block w-10 h-10" src="/assets/svg/logo_light.svg" alt="" />
                </a>
                <span className='dark:text-white light:text-black font-semibold'>© 2026 Maik Groth</span>
            </div>

            <div className='flex gap-5'>
                <Link to="/legal-notice" className="block aUnderline py-2 text-heading hover:text-fg-brand"><span className='light:text-black font-DM-Sans font-medium'>{t('IMPRINT.IMPRINT')}</span></Link>
                <Link to="/privacy-policy" className="block aUnderline py-2 text-heading hover:text-fg-brand"><span className='light:text-black font-DM-Sans font-medium'>{t('CONTACT.PRIVACY_POLICY')}</span></Link>
            </div>

            <div className="flex gap-4">
                <a href="https://github.com/croser93" target='_blank'><div className='icon-github light:text-black hover:text-blue-400'><IconBrandGithub className="w-8 h-8"/></div></a>
                <a href="https://linkedin.com/in/maik-groth" target='_blank'><div className='icon-linkedin light:text-black hover:text-blue-400'><IconBrandLinkedin className="w-8 h-8"/></div></a>
                <a href="mailto:contact@maik-groth.com" target='_blank'><div className='icon-mail light:text-black hover:text-blue-400'><IconMail className="w-8 h-8"/></div></a>
            </div>

        </div>
    </section>
    )
}

export default footer