import './projects_component.css'
import { type ProjectItem } from './projects_component'
import { GithubIcon } from "@dev.icons/react"
import { skillIconMap } from '../../shared/skills'
import { IconArrowBigRightLines, IconArrowBigLeftLines, IconX, IconArrowUpRight } from '@tabler/icons-react';
import { useTranslation } from "react-i18next"

const projects_Dialog = ({ onClose, project, onPrev, onNext }: {
    onClose: () => void
    project: ProjectItem
    onPrev: () => void
    onNext: () => void
}) => {
    const { t } = useTranslation()

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/75 backdrop-blur-sm">
            <button onClick={onPrev} className="fixed left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <IconArrowBigLeftLines size={20} />
            </button>
            <button onClick={onNext} className="fixed right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                <IconArrowBigRightLines size={20} />
            </button>
            <div className="dialog-slide-up relative w-full max-w-2xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-2xl">
                <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-white/10 transition-colors">
                    <IconX size={18} />
                </button>
                <img className="w-full h-64 object-top object-cover" src={project.img} alt={project.name} />
                <div className="px-8 py-7 overflow-y-auto max-h-[60vh]">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full font-DM-Sans">
                            {project.category}
                        </span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3 font-Unbounded">{project.name}</h2>
                    <p className="text-sm text-white/50 leading-relaxed mb-6 font-DM-Sans">{t(project.description)}</p>
                    <div className="h-px bg-white/10 mb-6" />
                    <div className="flex flex-col gap-5 mb-7">
                        <div>
                            <h4 className="text-xs font-semibold  text-white/25 mb-2 font-DM-Sans">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.language.map((lang, i) => {
                                    const Icon = skillIconMap[lang]
                                    return (
                                        <span key={i} className={`flex items-center gap-1.5 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-md font-DM-Sans ${lang === 'HTML' ? 'text-orange-400' : ''}`}>
                                            {Icon && <Icon className="w-4 h-4" />}
                                            {lang}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        <a href={project.live} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors font-DM-Sans">
                            <IconArrowUpRight size={16} /> {t('PORTFOLIO.LIVE')}
                        </a>
                        <a href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-colors font-DM-Sans">
                            <GithubIcon size={16} className='text-white'/> GitHub
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default projects_Dialog
