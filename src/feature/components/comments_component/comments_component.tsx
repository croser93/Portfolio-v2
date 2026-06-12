import './comments_component.css'
import { useTranslation } from "react-i18next"
import useEmblaCarousel from 'embla-carousel-react'
import { useState, useEffect } from 'react'
import { IconQuote } from '@tabler/icons-react';
import { GithubIcon } from "@dev.icons/react"



export type CommentsItem = { name: string; comment: string; github:string;}

const Projects: CommentsItem[] = [
    { name: 'Lucas Graf', comment: 'REFERENCES.1', github: 'https://github.com/lucasxgraf' },
    { name: 'Leon G. Leuning', comment: 'REFERENCES.2', github: 'https://github.com/213Leon213' },
    { name: 'Leon G. Leuning', comment: 'REFERENCES.2', github: 'https://github.com/213Leon213' },
]

const Card = ({ item, t }: { item: CommentsItem; t: (key: string) => string }) => (
    <div className="w-full rounded-lg border border-white/20 bg-white/10 overflow-hidden shadow-lg">
        <div className="quote"><div className='light:text-gray-200/50'><IconQuote size={108}/></div></div>
        <div className="pt-12 px-6 navbar:px-12 pb-6">
            <div className="dark:text-white font-semibold font-DM-Sans text-xl mb-2">{item.name}</div>
            <p className="dark:text-gray-400 light:text-gray-800 font-semibold DM-Sans text-sm">{t(item.comment)}</p>
        </div>
        <div className="flex justify-center pb-6">
            <a href={item.github} target='_blank'><GithubIcon size={40}/></a>
        </div>
    </div>
)

const projects_component = () => {
    const { t } = useTranslation()
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center', containScroll: false })
    const [selectedIndex, setSelectedIndex] = useState(0)


    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
        emblaApi.on('select', onSelect)
        return () => { emblaApi.off('select', onSelect) }
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        const interval = setInterval(() => {
            const next = (emblaApi.selectedScrollSnap() + 1) % Projects.length
            emblaApi.scrollTo(next)
        }, 7000)
        return () => clearInterval(interval)
    }, [emblaApi])

    return (
        <section id="references" className="commentsCard border-t-4 border-white/20 px-4 navbar:px-24 py-10 navbar:py-16 overflow-x-hidden">
            <div className='mx-auto content-beg'>
                <h2 className="text-3xl navbar:text-4xl py-6 font-Unbounded font-medium dark:text-white text-center navbar:text-left">
                    {t('REFERENCES.TITLE')}
                </h2>

                <div className="relative flex justify-center">
                    <div ref={emblaRef} className="overflow-hidden commentsContainer">
                        <div className="flex">
                            {Projects.map((item, index) => (
                                <div key={index} className={`flex-[0_0_100%] navbar:flex-[0_0_50%] min-w-0 py-6 navbar:px-4 transition-opacity duration-360 ${index === selectedIndex ? 'opacity-100' : 'opacity-25'}`}>
                                    <Card item={item} t={t} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-4">
                    {Projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => emblaApi?.scrollTo(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === selectedIndex ? ' w-2 dark:bg-white light:bg-black ring-2 dark:ring-blue-500/70 light:ring-white/70' : 'w-2 bg-white/50'}`}
                        />
                    ))}
                </div>

                <div className='flex justify-center'>
                    <div className="w-100 h-1 dark:bg-white/10 light:bg-white/50 mt-6 overflow-hidden">
                        <div
                            key={selectedIndex}
                            className="h-full bg-blue-500/70 animate-progress"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default projects_component