import './skills_component.css'
import { useTranslation } from "react-i18next"
import { _React, AngularIcon,  Css3, DjangoIcon, DockerIcon, Figma, FirebaseIcon, GithubIcon, Javascript, N8nIcon, PostmanIcon, Python, Sass, SqliteIcon, SupabaseIcon, TailwindIcon, TypescriptIcon, GitIcon } from "@dev.icons/react"
import { Html5 } from "@dev.icons/react/mono";

type SkillItem = { name: string; Icon: React.ComponentType<{ size?: number }>; color?: string; hoverColor: string }

const Frontend: SkillItem[] = [
    { name: 'HTML',       Icon: Html5, color: 'text-orange-500', hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'CSS',        Icon: Css3, hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
    { name: 'Javascript', Icon: Javascript, hoverColor: 'hover:bg-yellow-400/20 hover:border-yellow-400/40' },
    { name: 'Angular',    Icon: AngularIcon, hoverColor: 'hover:bg-red-500/20 hover:border-red-500/40' },
    { name: 'Typescript', Icon: TypescriptIcon, hoverColor: 'hover:bg-blue-600/20 hover:border-blue-600/40' },
    { name: 'React',      Icon: _React, hoverColor: 'hover:bg-cyan-400/20 hover:border-cyan-400/40' },
    { name: 'SASS',       Icon: Sass, hoverColor: 'hover:bg-pink-400/20 hover:border-pink-400/40' },
    { name: 'Tailwind',   Icon: TailwindIcon, hoverColor: 'hover:bg-teal-400/20 hover:border-teal-400/40' },
]

const Backend: SkillItem[] = [
    { name: 'Python', Icon: Python, hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
    { name: 'Django ', Icon: DjangoIcon, hoverColor: 'hover:bg-green-400/20 hover:green-pink-400/40'  },
]

const Database: SkillItem[] = [
    { name: 'Supabase', Icon: SupabaseIcon, hoverColor: 'hover:bg-green-400/20 hover:green-pink-400/40' },
    { name: 'Firebase ', Icon: FirebaseIcon, hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'Sqlite ', Icon: SqliteIcon, hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40'  },
]

const Tools: SkillItem[] = [
    { name: 'Figma', Icon: Figma, hoverColor: 'hover:bg-white/50 hover:border-white'},
    { name: 'Github ', Icon: GithubIcon, hoverColor: 'hover:bg-gray-200/20 hover:border-gray-200/40'  },
    { name: 'Git ', Icon: GitIcon, hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40'},
    { name: 'Postman ', Icon: PostmanIcon, hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40'  },
    { name: 'n8n ', Icon: N8nIcon, hoverColor: 'hover:bg-pink-400/20 hover:border-pink-400/40'  },
    { name: 'Docker ', Icon: DockerIcon, hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40'  },
]

const skills_component = () => {
    const { t } = useTranslation()

    const SkillRow = ({ items, label }: { items: SkillItem[], label: string }) => (
        <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center gap-4">
                <span className="text-l font-semibold font-Unbounded text-white/40 whitespace-nowrap">{label}</span>
                <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                {items.map((item, index) => (
                    <div key={index} className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 transition-colors cursor-default ${item.color ?? ''} ${item.hoverColor}`}>
                        <item.Icon size={40} />
                        <span className="text-white font-DM-Sans text-sm">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <section className="skills border-t border-white/10 px-24 py-16">
            <h2 className="text-4xl py-8 font-Unbounded font-medium text-white">{t('SKILLS.TITLE')}</h2>
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
