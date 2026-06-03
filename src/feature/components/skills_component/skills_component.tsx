import './skills_component.css'
import { useTranslation } from "react-i18next"

const skills_component = () => {

    const { t } = useTranslation()

    return (
        <section className="about-me border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('SKILLS.TITLE')}</h2>
            <div className="grid py-6 grid-cols-2 gap-14">
                <div> 

                </div>
                <div className="flex flex-col">
                    
                </div>                  
            </div>   
        </section>
    )
}

export default skills_component