import './projects_component.css'
import { useTranslation } from "react-i18next"
const projects_component = () => {

const { t } = useTranslation()
    return (
        <section className="projects border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('PORTFOLIO.TITLE')}</h2>
        </section>
    )
}

export default projects_component