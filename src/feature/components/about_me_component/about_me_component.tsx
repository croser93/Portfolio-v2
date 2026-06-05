import './about_me_component.css'
import { useTranslation } from "react-i18next"
import {IconRocket, IconCertificate, IconCode, IconBriefcase,} from "@tabler/icons-react"

const about_me_component = () => {
    const { t } = useTranslation()
    type TimelineItem = {date: string, title: string, description: string, icon: React.ReactNode, status: "done" | "active" | "upcoming" }

    const timeline: TimelineItem[] = [
        { date: "2026", title: "First Job", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?", icon: <IconRocket size={16} />, status: "upcoming",},
        { date: "03/2026", title: "Learning Fullstack", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?", icon: <IconCode size={16} />, status: "active",},
        { date: "03/2026", title: "Front-End Certificate", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?", icon: <IconCertificate size={16} />, status: "done",},
        { date: "08/2025", title: "Full-time Training Development", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic cum odit expedita, reiciendis, eos cupiditate necessitatibus culpa sed sequi quam harum repudiandae aliquam, maiores ullam consequuntur officia atque incidunt?", icon: <IconBriefcase size={16} />, status: "done",},
]

const dotStyles: Record<TimelineItem["status"], string> = {
    done:     "bg-blue-500/20 border border-blue-500/40 text-blue-400",
    active:   "bg-green-500/20 border border-green-500/40 text-green-500",
    upcoming: "bg-white/5 border border-white/10 text-white/25",
}

const lineStyles: Record<TimelineItem["status"], string> = {
    done:     "bg-blue-500/25",
    active:   "bg-green-500/20",
    upcoming: "bg-white/10",
}

    return (
        <section className="about-me border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('ABOUT_ME.TITLE')}</h2>
            <div className="grid py-6 grid-cols-2 gap-14">
                <div> 
                    <h3 className="text-xl font-DM-Sans text-white/70">{t('ABOUT_ME.DESCRIPTION')}</h3>
                </div>
                <div className="flex flex-col">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex gap-4">
                            <div className="flex flex-col items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${dotStyles[item.status]}`}>{item.icon}</div>
                                {index < timeline.length - 1 && (
                                    <div className={`w-px flex-1 my-1 ${lineStyles[item.status]}`} />
                                )}
                            </div>
                            <div className="pb-8">
                                <span className="text-s text-blue-400 font-DM-Sans">{item.date}</span>
                                <h4 className="text-white font-Unbounded font-medium mt-1">{item.title}</h4>
                                <p className="text-white/70 font-DM-Sans leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>                  
            </div>   
        </section>
    )
}

export default about_me_component