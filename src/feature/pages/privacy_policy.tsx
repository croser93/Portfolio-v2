import { useTranslation } from "react-i18next"
import './pages_css/legal.css'

const privacy_policy = () => { 
const { t } = useTranslation()
    return (
        <section className="contentContainer font-DM-Sans dark:text-white/70 light:text-black/70">
            <div className="content">
                <div className="privacy_header">
                <h2 className="font-Unbounded text-4xl dark:text-white/70 light:text-black/70">{t( "PRIVACY.HEADLINE")}</h2>
                </div>

            <div className="privacy_content font-medium">
                <div className="privacy_section py-12">
                    <h3>{t( "PRIVACY.SECTION_1.TITLE")}</h3>
                    
                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_1.SUB_1")}</h4>
                    <p>{t( "PRIVACY.SECTION_1.P_1")}</p>
                    </div>

                    <div className="privacy_subsection_DataCollection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_1.SUB_2")}</h4>
                    
                    <div className="privacy_item">
                        <h5 className="py-2">{t( "PRIVACY.SECTION_1.Q_1")}</h5>
                        <p>{t( "PRIVACY.SECTION_1.A_1")}</p>
                    </div>

                    <div className="privacy_item py-4">
                        <h5 className="py-2">{t( "PRIVACY.SECTION_1.Q_2")}</h5>
                        <p>{t( "PRIVACY.SECTION_1.A_2_1")}</p>
                        <p>{t( "PRIVACY.SECTION_1.A_2_2")}</p>
                    </div>

                    <div className="privacy_item py-4">
                        <h5 className="py-2">{t( "PRIVACY.SECTION_1.Q_3")}</h5>
                        <p>{t( "PRIVACY.SECTION_1.A_3")}</p>
                    </div>

                    <div className="privacy_item py-4">
                        <h5 className="py-2">{t( "PRIVACY.SECTION_1.Q_4")}</h5>
                        <p>{t( "PRIVACY.SECTION_1.A_4_1")}</p>
                        <p>{t( "PRIVACY.SECTION_1.A_4_2")}</p>
                    </div>
                    </div>
                </div>

                <div className="privacy_section py-12">
                    <h3>{t( "PRIVACY.SECTION_2.TITLE")}</h3>
                    <p>{t( "PRIVACY.SECTION_2.P_1")}</p>
                    
                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_2.SUB_1")}</h4>
                    <p>{t( "PRIVACY.SECTION_2.P_2")}</p>
                    <p>{t( "PRIVACY.SECTION_2.P_3")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_2.SUB_2")}</h4>
                    <p>{t( "PRIVACY.SECTION_2.P_4")}</p>
                    <p>{t( "PRIVACY.SECTION_2.P_5")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_2.SUB_3")}</h4>
                    <p>{t( "PRIVACY.SECTION_2.P_6")}</p>
                    </div>
                </div>

                <div className="privacy_section py-12">
                    <h3>{t( "PRIVACY.SECTION_3.TITLE")}</h3>
                    
                    <div className="privacy_subsection py-4">
                    <h4 className="py-2" text-white>{t( "PRIVACY.SECTION_3.SUB_1")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_1")}</p>
                    <p>{t( "PRIVACY.SECTION_3.P_2")}</p>
                    <p>{t( "PRIVACY.SECTION_3.P_3")}</p>
                    </div>

                    <div className="privacy_subsection py4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_2")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_4")}</p>

                    <ul>
                        <li>Maik Groth</li>
                        <li>Lange Reihe 50</li>
                        <li>23628 Krumesse</li>
                        <li>E-Mail: <a href="mailto:contact@maik-groth.com">contact@maik-groth.com</a></li>
                    </ul>

                    <p>{t( "PRIVACY.SECTION_3.P_7")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_3")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_8")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_4")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_9")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_5")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_10")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_6")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_11")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_7")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_12")}</p>
                    <p>{t( "PRIVACY.SECTION_3.P_13")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_8")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_14")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_9")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_15")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_10")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_16")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_11")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_17")}</p>
                    <ul>
                        <li>{t( "PRIVACY.SECTION_3.LI_1")}</li>
                        <li>{t( "PRIVACY.SECTION_3.LI_2")}</li>
                        <li>{t( "PRIVACY.SECTION_3.LI_3")}</li>
                        <li>{t( "PRIVACY.SECTION_3.LI_4")}</li>
                    </ul>
                    <p>{t( "PRIVACY.SECTION_3.P_18")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_12")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_19")}</p>
                    <p>{t( "PRIVACY.SECTION_3.P_20")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="">{t( "PRIVACY.SECTION_3.SUB_13")}</h4>
                    <p>{t( "PRIVACY.SECTION_3.P_21")}</p>
                    </div>
                </div>

                <div className="privacy_section py-12">
                    <h3>{t( "PRIVACY.SECTION_4.TITLE")}</h3>
                    
                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_4.SUB_1")}</h4>
                    <p>{t( "PRIVACY.SECTION_4.P_1")}</p>
                    <ul>
                        <li>{t( "PRIVACY.SECTION_4.LI_1")}</li>
                        <li>{t( "PRIVACY.SECTION_4.LI_2")}</li>
                        <li>{t( "PRIVACY.SECTION_4.LI_3")}</li>
                        <li>{t( "PRIVACY.SECTION_4.LI_4")}</li>
                        <li>{t( "PRIVACY.SECTION_4.LI_5")}</li>
                        <li>{t( "PRIVACY.SECTION_4.LI_6")}</li>
                    </ul>
                    <p>{t( "PRIVACY.SECTION_4.P_2")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_4.SUB_2")}</h4>
                    <p>{t( "PRIVACY.SECTION_4.P_3")}</p>
                    <p>{t( "PRIVACY.SECTION_4.P_4")}</p>
                    <p>{t( "PRIVACY.SECTION_4.P_5")}</p>
                    </div>

                    <div className="privacy_subsection py-4">
                    <h4 className="py-2">{t( "PRIVACY.SECTION_4.SUB_3")}</h4>
                    <p>{t( "PRIVACY.SECTION_4.P_6")}</p>
                    <p>{t( "PRIVACY.SECTION_4.P_7")}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default privacy_policy