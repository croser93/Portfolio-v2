import './about_me_component.css'
import { useTranslation } from "react-i18next"

const about_me_component = () => {
    const { t } = useTranslation()

    type TimelineItem = {date: string, title: string, description: string }

    const timeline: TimelineItem[] = [
{ date: "08/2025", title: "Vollzeit Ausbildung", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?" },
{ date: "03/2026", title: "Frontend Zertifikat", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?" },
{ date: "03/2026", title: "Fullstack lernen", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?"},
{ date: "03/2026", title: "Erster Job", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?"},

]
    return (
        <section className="about-me bg-[#0f0a1e] border-t border-purple-500/20 px-10 py-16">
            <h2 className="text-4xl py-6 font-medium text-white/80">{t('ABOUT_ME.TITLE')}</h2>
            <div className="grid py-6 grid-cols-2 gap-14">
                <div> 
                    <h3 className="text-xl font-medium text-white/80">{t('ABOUT_ME.DESCRIPTION')}</h3>
                </div>
                <div>
                <div className="flex flex-col gap-6">
                    {timeline.map((item) => (
                        <div key={item.date} className="flex gap-4">
                        <span className="text-purple-400 font-mono">{item.date}</span>
                        <div>
                            <h4 className="text-white font-medium">{item.title}</h4>
                            <p className="text-white/50 text-sm">{item.description}</p>
                        </div>
                        </div>
                    ))}
                </div>                  
                    </div>
                </div>
            
        </section>
    )
}

export default about_me_component