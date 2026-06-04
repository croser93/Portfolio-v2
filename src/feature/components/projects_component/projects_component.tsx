import './projects_component.css'
import { useTranslation } from "react-i18next"
import { skillIconMap }  from '../../shared/skills'


const projects_component = () => {

const { t } = useTranslation()

type ProjectItem = {name: string, img: string, description: string, language: string[]}
const Projects: ProjectItem[] = [
    {name: 'Hellgate Shadowfall', img: '/public/assets/img/projects_img/mockup Hellgate Shadowfall.png', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', language: ['HTML', 'CSS', 'Javascript']},
    {name: 'Code à Cuisine', img: 'public/assets/img/projects_img/1.jpg', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', language: ['Angular', 'SASS', 'Typescript','n8n', 'Supabase']}

]

const Card = ({ items}: { items: ProjectItem[]}) => (

    <div className='py-12 singleCard'>{items.map((item, index) => (
        <div key={index} className="max-w-lg rounded overflow-hidden rounded-lg border-t-2 shadow-lg rounded-lg border border-white/10 bg-white/5 transition-colors cursor-default border">
                        <img className="w-full img_size" src={item.img} alt="Hellgate Shadowfall"></img>
                    <div className="px-6 py-4">
                        <div className="text-white font-DM-Sans text-sm text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 font-DM-Sans text-base">{item.description}</p>
                    </div>
                        <div className="px-6 pt-4 pb-4 flex justify-end gap-3">
                            {item.language.map((lang, i) => {
                                const Icon = skillIconMap[lang]
                                return Icon
                                    ? <Icon key={i} size={48} />
                                    : <span key={i} className="text-white/50 text-sm">#{lang}</span>
                            })}
                        </div>
                    </div>
        ))}</div>

)

    return (
        <section className="projects border-t-4 border-blue-500/20 px-24 py-18">
            <h2 className="text-4xl py-6 font-Unbounded font-medium text-white">{t('PORTFOLIO.TITLE')}</h2>
            <div className="flex justify-center">
                <Card items={Projects} />
            </div>
        </section>
    )
}

export default projects_component