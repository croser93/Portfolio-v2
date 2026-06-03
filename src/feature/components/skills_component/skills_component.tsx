import './skills_component.css'
import { useTranslation } from "react-i18next"
import { _React, AngularIcon, Css3, Django, Javascript, Python, TypescriptIcon } from "@dev.icons/react"
import { Html5 } from "@dev.icons/react/mono";


type SkillItem = { name: string; Icon: React.ComponentType<{ size?: number }>; color?: string }

const Frontend: SkillItem[] = [
    { name: 'HTML', Icon: Html5, color: 'text-orange-500' },
    { name: 'CSS ', Icon: Css3  },
    { name: 'Javascript', Icon: Javascript },
    { name: 'Angular', Icon: AngularIcon },
    { name: 'Typescript', Icon: TypescriptIcon },
    { name: 'React', Icon: _React },
]


const Backend: SkillItem[] = [
    { name: 'Python', Icon: Python },
    { name: 'Django ', Icon: Django  },
]

const skills_component = () => {
    const { t } = useTranslation()

    return (
        <section className="skills border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('SKILLS.TITLE')}</h2>
            <div className="grid py-6 grid-cols-2 gap-14">
                <div className="grid grid-cols-2 gap-4 bg-blue-500/50 border border-blue-500/40 py-18 rounded-4xl">
                    {Frontend.map((item, index) => (
                        <div key={index} className={`flex gap-4 items-center flex-col ${item.color ?? ''}`}>
                            <item.Icon size={48} />
                            <span className="text-white font-DM-Sans">{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 bg-blue-500/50 border border-blue-500/40 py-18 rounded-4xl">
                    {Backend.map((item, index) => (
                        <div key={index} className="flex gap-4 items-center flex-col">
                            <item.Icon size={64} />
                            <span className="text-white">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default skills_component
