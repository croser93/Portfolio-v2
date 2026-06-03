import './skills_component.css'
import { useTranslation } from "react-i18next"
import { _React, AngularIcon, ClaudeCode, Css3, DjangoIcon, DockerIcon, Figma, FirebaseIcon, GithubIcon, Javascript, N8nIcon, Python, Sass, SqliteIcon, SupabaseIcon, TailwindIcon, TypescriptIcon } from "@dev.icons/react"
import { Html5 } from "@dev.icons/react/mono";

type SkillItem = { name: string; Icon: React.ComponentType<{ size?: number }>; color?: string }

const Frontend: SkillItem[] = [
    { name: 'HTML', Icon: Html5, color: 'text-orange-500' },
    { name: 'CSS ', Icon: Css3  },
    { name: 'Javascript', Icon: Javascript },
    { name: 'Angular', Icon: AngularIcon },
    { name: 'Typescript', Icon: TypescriptIcon },
    { name: 'React', Icon: _React },
    { name: 'Tailwind', Icon: TailwindIcon },
    { name: 'SASS', Icon: Sass },
]

const Backend: SkillItem[] = [
    { name: 'Python', Icon: Python },
    { name: 'Django ', Icon: DjangoIcon  },
]

const Database: SkillItem[] = [
    { name: 'Supabase', Icon: SupabaseIcon },
    { name: 'Firebase ', Icon: FirebaseIcon  },
    { name: 'Sqlite ', Icon: SqliteIcon  },
]

const Tools: SkillItem[] = [
    { name: 'Figma', Icon: Figma },
    { name: 'Github ', Icon: GithubIcon  },
    { name: 'n8n ', Icon: N8nIcon  },
    { name: 'Docker ', Icon: DockerIcon  },
    { name: 'ClaudeCode ', Icon: ClaudeCode  },
]

const skills_component = () => {
    const { t } = useTranslation()

    return (
        <section className="skills border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('SKILLS.TITLE')}</h2>
            <div className="grid py-6 grid-cols-4 gap-14">
                <div className='bg-blue-100/10 border border-blue-500/40 rounded-4xl flex-col py-6'>
                    <div className='flex justify-center py-6'>
                        <h2 className='text-2xl text-white font-Unbounded'>Front - End</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {Frontend.map((item, index) => (
                            <div key={index} className={`flex gap-2 items-center flex-col ${item.color ?? ''}`}>
                                <item.Icon size={48} />
                                <span className="text-white font-DM-Sans">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                    
                <div className='bg-blue-100/10 border border-blue-500/40 rounded-4xl flex-col py-6'>
                    <div className='flex justify-center py-6'>
                        <h2 className='text-2xl text-white font-Unbounded'>Back - End</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {Backend.map((item, index) => (
                            <div key={index} className={`flex gap-2 items-center flex-col ${item.color ?? ''}`}>
                                <item.Icon size={48} />
                                <span className="text-white font-DM-Sans">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='bg-blue-100/10 border border-blue-500/40 rounded-4xl flex-col py-6'>
                    <div className='flex justify-center py-6'>
                        <h2 className='text-2xl text-white font-Unbounded'>Database</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {Database.map((item, index) => (
                            <div key={index} className={`flex gap-2 items-center flex-col ${item.color ?? ''}`}>
                                <item.Icon size={48} />
                                <span className="text-white font-DM-Sans">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='bg-blue-100/10 border border-blue-500/40 rounded-4xl flex-col py-6'>
                    <div className='flex justify-center py-6'>
                        <h2 className='text-2xl text-white font-Unbounded'>Tools</h2>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {Tools.map((item, index) => (
                            <div key={index} className={`flex gap-2 items-center flex-col ${item.color ?? ''}`}>
                                <item.Icon size={48} />
                                <span className="text-white font-DM-Sans">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default skills_component
