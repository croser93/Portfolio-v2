import './skills_component.css'
import { useTranslation } from "react-i18next"
import { type SkillItem, Frontend, Backend, Database, Tools } from '../../shared/skills'


const skills_component = () => {
    const { t } = useTranslation()

    const SkillRow = ({ items, label }: { items: SkillItem[], label: string }) => (
        <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-4">
                <span className="text-l font-semibold font-Unbounded light:text-black dark:text-white/40 whitespace-nowrap">{label}</span>
                <div className="flex-1 h-px light:bg-black/20 dark:bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {items.map((item, index) => (
                    <div key={index} className={`flex items-center gap-2 px-4 py-2 light:border-black/20 light:bg-dark/20 rounded-lg border dark:border-white/10 dark:bg-white/5 transition-colors cursor-default ${item.color ?? ''} ${item.hoverColor}`}>
                        <item.Icon size={40} />
                        <span className="light:text-black font-medium dark:text-white font-DM-Sans text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <section id="skills" className="skills border-t-4 border-white/20 px-24 py-16">
            <h2 className="text-4xl py-8 font-Unbounded font-medium dark:text-white">{t('SKILLS.TITLE')}</h2>
            <div className="flex flex-col gap-10 py-6">
                <SkillRow items={Frontend} label="Front - End" />
                <SkillRow items={Backend} label="Back - End" />
                <SkillRow items={Database} label="Database" />
                <SkillRow items={Tools} label="Tools" />
            </div>
        </section>
    )
}

export default skills_component
