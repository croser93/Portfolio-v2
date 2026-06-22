import './projects_component.css'
import { type ProjectItem } from './projects_component'
import { GithubIcon } from "@dev.icons/react"
import { skillIconMap } from '../../shared/skills'
import { IconArrowBigRightLines, IconArrowBigLeftLines, IconX, IconArrowUpRight } from '@tabler/icons-react';
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"

const projects_Dialog = ({ onClose, project, onPrev, onNext }: {
    onClose: () => void
    project: ProjectItem
    onPrev: () => void
    onNext: () => void
}) => {
    const { t } = useTranslation()
    const touchStartX = useRef(0)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 50) delta < 0 ? onNext() : onPrev()
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/75 backdrop-blur-sm">
            <button aria-label='back-button' onClick={onPrev} className="hidden navbar:flex fixed left-24 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500/25 transition-colors">
                <IconArrowBigLeftLines size={20} />
            </button>
            <button aria-label='next-button' onClick={onNext} className="hidden navbar:flex fixed right-24 top-1/2 -translate-y-1/2 w-11 h-11 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-blue-500/25 transition-colors">
                <IconArrowBigRightLines size={20} />
            </button>
            <div
                className="dialog-slide-up relative w-full max-w-2xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl shadow-2xl"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <button aria-label='close-button' onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white hover:bg-blue-500/25 transition-colors">
                    <IconX size={18} />
                </button>
                <div className="overflow-y-auto max-h-[80vh]">
                <img className="w-full object-cover object-top-left rounded-2xl" src={project.img} alt={project.name} />
                <div className="px-6 navbar:px-8 py-5 ">
                    <div className="card_head flex items-center gap-3 mb-2">
                        <h2 className="text-xl navbar:text-2xl font-bold text-white items-center font-Unbounded">{project.name}</h2>
                        <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full font-DM-Sans">{project.category}</span>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mb-4 font-DM-Sans">{t(project.dialog_text)}</p>
                    <div className="h-px bg-white/10 mb-6" />
                    <div className="flex flex-col gap-5 mb-7">
                        <div>
                            <h4 className="text-xs font-semibold text-white/25 mb-2 font-DM-Sans">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.language.map((lang, i) => {
                                    const Icon = skillIconMap[lang]
                                    return (
                                        <span key={i} className="flex items-center gap-1.5 text-xs text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-md font-DM-Sans">
                                            {Icon && <Icon className={`w-5 h-5 ${lang === 'HTML' ? 'text-orange-400' : ''}`} />}
                                            {lang}
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        <a href={project.live} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors font-DM-Sans">
                            <IconArrowUpRight size={24} /> {t('PORTFOLIO.LIVE')}
                        </a>
                        <a href={project.github} target="_blank" className="flex items-center gap-2 px-5 py-2.5 bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/30 text-white/70 hover:text-white text-sm font-medium rounded-lg transition-colors font-DM-Sans">
                            <span className="brightness-0 invert"><GithubIcon size={24} /></span> GitHub
                        </a>
                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default projects_Dialog
