import { useTranslation } from "react-i18next"
import { Link } from 'react-router-dom'
import './legal.css'


const legal_notice = () => {
const { t } = useTranslation()

return (
    <section className="font-DM-Sans text-white/70">
    <div className="content">
    <h2 className="font-Unbounded text-4xl">{t('IMPRINT.TITLE')}</h2>
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
        <span>Email: <a href="mailto:contact@maik-groth.com">contact@Maik-Groth.com</a></span>
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
                    <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link>{t('IMPRINT.SECTION_2_TEXT_1')} <a href="https://developerakademie.com">Developer Akademie GmbH</a>. 
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
                        <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link> {t( 'IMPRINT.SECTION_5_TEXT_1')} <a href="https://developerakademie.com">Developer Akademie</a>{t('IMPRINT.SECTION_5_TEXT_2')} <Link to="/">{t('IMPRINT.PORTFOLIO')}</Link>.
                    </span>
                </div>
        </div>

        <div>
            <h4>{t( 'IMPRINT.SECTION_6_TITLE')}</h4>
                <div className="indemnity">
                    <span>
                        {t('IMPRINT.SECTION_6_TEXT_1')} <a href="https://developerakademie.com">Developer Akademie</a>{t('IMPRINT.SECTION_6_TEXT_2')} <Link to="/">{t( 'IMPRINT.PORTFOLIO')}</Link> {t('IMPRINT.SECTION_6_TEXT_3')}
                    </span>
                    <span>
                        {t('IMPRINT.CONTACT_TEXT')}<a href="mailto:contact@maik-groth.com">contact@Maik-Groth.com</a>
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