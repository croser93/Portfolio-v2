import './about_me_component.css'
import { useTranslation } from "react-i18next"
import {IconRocket, IconCertificate, IconCode, IconBriefcase, IconTool, IconBook2 } from "@tabler/icons-react"

const about_me_component = () => {
    const { t } = useTranslation()
    type TimelineItem = {date: string, title: string, description: string, icon: React.ReactNode, status: "done" | "active" | "upcoming" }

    const timeline: TimelineItem[] = [
        { date: "2026", title: "ABOUT_ME.FIRST_JOB", description: "ABOUT_ME.FIRST_JOB_TEXT", icon: <IconRocket size={16} />, status: "upcoming",},
        { date: "03/2026", title: "ABOUT_ME.LEARNING_FULLSTACK", description: "ABOUT_ME.LEARNING_FULLSTACK_TEXT", icon: <IconCode size={16} />, status: "active",},
        { date: "03/2026", title: "ABOUT_ME.FRONT_CERTIFICATE", description: "ABOUT_ME.FRONT_CERTIFICATE_TEXT", icon: <IconCertificate size={16} />, status: "done",},
        { date: "08/2025", title: "ABOUT_ME.FULL_TIME", description: "ABOUT_ME.FULL_TIME_TEXT", icon: <IconBriefcase size={16} />, status: "done",},
        { date: "10/2023", title: "ABOUT_ME.SERVICE_TECHNICIAN", description: "ABOUT_ME.SERVICE_TECHNICIAN_TEXT", icon: <IconTool size={16} />, status: "done",},
        { date: "09/2021", title: "ABOUT_ME.MASTER_AUTOMOTIVE", description: "ABOUT_ME.MASTER_AUTOMOTIVE_TEXT", icon: <IconBook2  size={16} />, status: "done",},
]

const dotStyles: Record<TimelineItem["status"], string> = {
    done:     "bg-blue-500/20 border dark:border-blue-500/40 text-blue-400 dark:bg-blue-500/20 dark:border-blue-500/40 dark:text-blue-400 light:text-blue-800",
    active:   "bg-green-500/20 border dark:border-green-500/40 text-green-500 dark:bg-green-500/20 dark:border-green-500/40 dark:text-green-500 light:text-green-700",
    upcoming: "bg-gray-200/50 border dark:border-gray-400/40 text-gray-400 dark:bg-white/5 dark:border-white/10 dark:text-white/25 light:text-grey-800",
}

const lineStyles: Record<TimelineItem["status"], string> = {
    done:     "bg-blue-500/25 dark:bg-blue-500/25 light:bg-blue-800",
    active:   "bg-green-500/20 dark:bg-green-500/20 light:bg-green-700",
    upcoming: "bg-gray-300/50 dark:bg-white/10 light:bg-gray-800/50",
}

    return (
        <section id="about" className="about-me border-t-4 border-white/20 px-4 navbar:px-24 py-10 navbar:py-18">
            <div className='mx-auto content-beg'>
                <h2 className="text-3xl navbar:text-4xl py-6 font-Unbounded font-medium dark:text-white text-center navbar:text-left">{t('ABOUT_ME.TITLE')}</h2>
                <div className="grid py-6 grid-cols-1 gap-8 navbar:grid-cols-2 navbar:gap-14">
                    <div> 
                        <h3 className="text-xl font-DM-Sans dark:text-white/70 light:text-gray-800">{t('ABOUT_ME.DESCRIPTION')}</h3>
                    </div>
                    <div className="flex flex-col">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="flex flex-col items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${dotStyles[item.status]} ${index === 0 ? 'pulse-line' : ''}`}>{item.icon}</div>
                                    {index < timeline.length - 1 && (
                                        <div className={`w-1 flex-1 my-1 rounded-4xl ${lineStyles[item.status]} ${index === 0 ? 'pulse-line' : ''}`} />
                                    )}
                                </div>
                                <div className="pb-6">
                                    <span className="text-s dark:text-blue-400 light:text-blue-800 light:font-medium font-DM-Sans">{item.date}</span>
                                    <h4 className="dark:text-white light:text-black font-Unbounded font-medium mt-1">{t(item.title)}</h4>
                                    <p className="dark:text-white/70 light:text-gray-800 font-DM-Sans leading-none">{t(item.description)}</p>
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