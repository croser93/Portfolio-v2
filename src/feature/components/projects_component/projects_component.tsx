import './projects_component.css'
import { useTranslation } from "react-i18next"
import { skillIconMap } from '../../shared/skills'
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import  ProjectsDialog  from './projects_Dialog'


export type ProjectItem = { name: string; img: string; description: string; language: string[] }

const Projects: ProjectItem[] = [
    { name: 'Hellgate Shadowfall', img: '/public/assets/img/projects_img/Hellgate Shadowfall.png', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', language: ['HTML', 'CSS', 'Javascript'] },
    { name: 'Code à Cuisine', img: 'public/assets/img/projects_img/CodeaCuisine.jpg', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', language: ['Angular', 'SASS', 'Typescript', 'n8n', 'Supabase'] },
    { name: 'Join', img: 'public/assets/img/projects_img/Join.jpg', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.', language: ['HTML', 'CSS', 'Javascript', 'Firebase'] },
]

const Card = ({ item, onClick }: { item: ProjectItem; onClick: () => void }) => (
    <div className="singleCard w-full rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
        <img className="w-full img_size object-cover" src={item.img} alt={item.name} />
        <div className="px-6 py-4">
            <div className="text-white font-DM-Sans text-xl mb-2">{item.name}</div>
            <p className="text-gray-400 font-DM-Sans text-sm">{item.description}</p>
        </div>
        <div className="px-6 pt-2 pb-4 flex justify-end gap-3">
            {item.language.map((lang, i) => {
                const Icon = skillIconMap[lang]
                return Icon
                    ? <div key={i} className={lang === 'HTML' ? 'text-orange-500' : ''}><Icon size={40} /></div>
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
        <section className="projects border-t border-white/10 px-24 py-16">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">
                {t('PORTFOLIO.TITLE')}
            </h2>

            <div className="relative">
                <div ref={emblaRef} className="overflow-hidden">
                    <div className="flex">
                        {Projects.map((item, index) => (
                            <div key={index} className={`flex-[0_0_50%] min-w-0 py-6 px-4 transition-opacity duration-300 ${index === selectedIndex ? 'opacity-100' : 'opacity-25 pointer-events-none '}`}>
                                <Card item={item} onClick={() => setDialogOpen(true)} />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={() => emblaApi?.scrollPrev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"> ◀
                </button>
                <button onClick={() => emblaApi?.scrollNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition"> ▶
                </button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {Projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={`h-1 rounded-full transition-all duration-300 ${i === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
                    />
                ))}
            </div>

            {dialogOpen && (<ProjectsDialog onClose={() => setDialogOpen(false)} project={Projects[selectedIndex]} onPrev={() => emblaApi?.scrollPrev()} onNext={() => emblaApi?.scrollNext()} />)}

        </section>

    )
}

export default projects_component