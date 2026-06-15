import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import './pages_css/legal.css'


const legal_notice = () => {
const { t } = useTranslation()

return (
    <section className="contentContainer font-DM-Sans dark:text-white/70 light:text-black/70">
        <div className="content front-medium mx-auto content-beg ">
            <h2 className="font-Unbounded text-4xl dark:text-white/70 light:text-black/70">{t('IMPRINT.TITLE')}</h2>
            <div>
                <h4>{t('IMPRINT.IMPRINT')}</h4>
                <ul>
                    <li>Maik Groth</li>
                    <li>Lange Reihe 50 </li>
                    <li>23628 Krummesse</li>
                </ul>
            </div>

            <div>
            <h4>{t( 'IMPRINT.BOARD')}</h4>
            <span>Email: <a target="_blank" className="dark:text-white light:text-black font-bold" href="mailto:contact@maik-groth.com">contact@maik-groth.com</a></span>
            </div>

            <div>
            <h4>{t( 'IMPRINT.SECTION_1_TITLE')}</h4>
                <div>
                    <span>
                        {t('IMPRINT.SECTION_1_TEXT_1')} <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link> {t('IMPRINT.SECTION_1_TEXT_2')}
                    </span>
                </div>
            </div>

            <div>
            <h4>{t( 'IMPRINT.SECTION_2_TITLE')}</h4>
                <div className="indemnity">
                    <span>
                        <Link className="dark:text-white light:text-black font-bold" to="/">{t('IMPRINT.PORTFOLIO')}</Link>{t('IMPRINT.SECTION_2_TEXT_1')} <a target="_blank" className="dark:text-white light:text-black font-bold"  href="https://developerakademie.com">Developer Akademie GmbH</a>. 
                        {t('IMPRINT.SECTION_2_TEXT_2')}
                    </span>
                </div>
            </div>

            <div>
                <h4>{t( 'IMPRINT.SECTION_3_TITLE')}</h4>
                    <div>
                        <span>
                            {t('IMPRINT.SECTION_3_TEXT_2')}<Link to="/">{t('IMPRINT.PORTFOLIO')}</Link>{t('IMPRINT.SECTION_3_TEXT_3')}
                        </span>
                    </div>
                </div>

            <div>
                <h4>{t( 'IMPRINT.SECTION_4_TITLE')}</h4>
                    <div>
                        <span>
                            <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link> {t('IMPRINT.SECTION_4_TEXT_1')}<Link to="/">{t('IMPRINT.PORTFOLIO')}</Link> {t('IMPRINT.SECTION_4_TEXT_2')} <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link>.
                        </span>
                    </div>
                </div>

            <div>
                <h4>{t( 'IMPRINT.SECTION_5_TITLE')}</h4>
                    <div>
                        <span>
                            <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link> {t( 'IMPRINT.SECTION_5_TEXT_1')} <a target="_blank" className="dark:text-white light:text-black font-bold" href="https://developerakademie.com">Developer Akademie</a>{t('IMPRINT.SECTION_5_TEXT_2')} <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link>.
                        </span>
                    </div>
            </div>

        <div>
            <h4>{t( 'IMPRINT.SECTION_6_TITLE')}</h4>
                <div className="indemnity">
                    <span>
                        {t('IMPRINT.SECTION_6_TEXT_1')} <a target="_blank" className="dark:text-white light:text-black font-bold" href="https://developerakademie.com">Developer Akademie</a>{t('IMPRINT.SECTION_6_TEXT_2')} <Link to="/">{t( 'IMPRINT.PORTFOLIO')}</Link> {t('IMPRINT.SECTION_6_TEXT_3')}
                    </span>
                    <span>
                        {t('IMPRINT.CONTACT_TEXT')}<a target="_blank" className="dark:text-white light:text-black font-bold" href="mailto:contact@maik-groth.com">contact@maik-groth.com</a>
                    </span>
                    <span>
                        {t('IMPRINT.DATE')}
                    </span>
                </div>
            </div>
        </div>
    </section>
)
}

export default legal_notice