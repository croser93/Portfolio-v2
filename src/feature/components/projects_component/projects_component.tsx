import './projects_component.css'
import { useTranslation } from "react-i18next"
import { skillIconMap } from '../../shared/skills'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import  ProjectsDialog  from './projects_Dialog'


export type ProjectItem = { name: string; img: string; description: string; language: string[]; github:string; live:string }

const Projects: ProjectItem[] = [
    { name: 'Join', img: 'public/assets/img/projects_img/Join.jpg', description: 'PORTFOLIO.1', language: ['HTML', 'CSS', 'Javascript', 'Firebase'], github: 'https://github.com/croser93/Join_Kanban_Manager.git', live: 'https://join.maik-groth.com' },
    { name: 'Hellgate Shadowfall', img: '/public/assets/img/projects_img/Hellgate Shadowfall.jpg', description: 'PORTFOLIO.2' , language: ['HTML', 'CSS', 'Javascript'], github: 'https://github.com/croser93/2d-Game.git', live: 'https://hellgate-shadowfall.maik-groth.com' },
    { name: 'Code à Cuisine', img: 'public/assets/img/projects_img/CodeaCuisine.jpg', description: 'PORTFOLIO.3', language: ['Angular', 'SASS', 'Typescript', 'n8n', 'Supabase'], github: 'https://github.com/croser93/Code-a-Cuisine.git', live: 'https://code-a-cuisine.maik-groth.com' },
]

const Card = ({ item, t, onClick }: { item: ProjectItem; t: (key: string)=> string ; onClick: () => void }) => (
    <div className="singleCard w-full rounded-lg border border-white/10 light:bg-black/80 dark:bg-white/5 overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
        <img className="w-full img_size object-cover navbar:object-top" src={item.img} alt={item.name} />
        <div className="px-6 py-4">
            <div className="text-white font-medium font-DM-Sans text-xl mb-2">{item.name}</div>
            <p className="text-gray-400 font-DM-Sans text-sm">{t(item.description)}</p>
        </div>
        <div className="px-6 pt-2 pb-4 flex justify-center navbar:justify-end gap-3 flex-wrap">
            {item.language.map((lang, i) => {
                const Icon = skillIconMap[lang]
                return Icon
                    ? <div key={i} className={lang === 'HTML' ? 'text-orange-500' : ''}><Icon className="w-6 h-6 navbar:w-9 navbar:h-9" /></div>
                    : <div key={i} className="text-white/50 text-sm">#{lang}</div>
            })}
        </div>
    </div>
)

const projects_component = () => {
    const { t } = useTranslation()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi || dialogOpen) return
        const interval = setInterval(() => emblaApi.scrollNext(), 5000)
        return () => clearInterval(interval)
    }, [emblaApi, dialogOpen])

    useEffect(() => {
        if(dialogOpen)
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [dialogOpen])

    return (
        <section id="projects" className="projects border-t-4 border-white/20 px-4 navbar:px-24 py-10 navbar:py-16 overflow-x-hidden">
            <div className='mx-auto content-beg'>
                <h2 className="text-3xl navbar:text-4xl py-6 font-Unbounded font-medium light:text-black dark:text-white text-center navbar:text-left">
                    {t('PORTFOLIO.TITLE')}
                </h2>

                <div className="relative">
                    <div ref={emblaRef} className="overflow-hidden">
                        <div className="flex">
                            {Projects.map((item, index) => (
                                <div key={index} className={`flex-[0_0_100%] navbar:flex-[0_0_50%] min-w-0 py-6 navbar:px-4 transition-opacity duration-300 ${index === selectedIndex ? 'opacity-100' : 'opacity-25 pointer-events-none'}`}>
                                    <Card item={item} t={t} onClick={() => setDialogOpen(true)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => emblaApi?.scrollPrev()}
                        className="hidden navbar:flex absolute left-0 bottom mt-4 -translate-y-1/2 dark:text-white light:text-black dark:bg-white/10 light:bg-black/10 hover:bg-white/20 rounded-full p-3 transition"> ◀
                    </button>
                    <button onClick={() => emblaApi?.scrollNext()}
                        className="hidden navbar:flex absolute right-0 bottom mt-4 -translate-y-1/2 dark:text-white light:text-black dark:bg-white/10 light:bg-black/10 hover:bg-white/20 rounded-full p-3 transition"> ▶
                    </button>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {Projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`h-1 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-8 dark:bg-white light:bg-black' : 'w-2 dark:bg-white/30 light:bg-black/30 '}`}
                        />
                    ))}
                </div>

                {dialogOpen && (<ProjectsDialog onClose={() => setDialogOpen(false)} project={Projects[selectedIndex]} onPrev={() => emblaApi?.scrollPrev()} onNext={() => emblaApi?.scrollNext()} />)}
            </div>
        </section>

    )
}

export default projects_component