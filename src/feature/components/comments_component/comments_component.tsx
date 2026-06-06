import './comments_component.css'
import { useTranslation } from "react-i18next"
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'



export type CommentsItem = { name: string; comment: string; github:string;}

const Projects: CommentsItem[] = [
    { name: 'Lucas Graf', comment: 'REFERENCES.1', github: 'https://github.com/lucasxgraf' },
    { name: 'Leon G. Leuning', comment: 'REFERENCES.2', github: 'https://github.com/213Leon213' },
]

const Card = ({ item, t }: { item: CommentsItem; t: (key: string) => string }) => (
    <div className="singleCard w-full rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-lg cursor-pointer">
        {/* <img className="w-full img_size object-cover" src={item.img} alt={item.name} /> */}
        <div className="px-6 py-4">
            <div className="text-white font-DM-Sans text-xl mb-2">{item.name}</div>
            <p className="text-gray-400 font-DM-Sans text-sm">{t(item.comment)}</p>
        </div>
    </div>
)

const projects_component = () => {
    const { t } = useTranslation()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)


    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const interval = setInterval(() => emblaApi.scrollNext(), 5000)
        return () => clearInterval(interval)
    }, [emblaApi])

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
                                <Card item={item} t={t} />
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
        </section>
    )
}

export default projects_component