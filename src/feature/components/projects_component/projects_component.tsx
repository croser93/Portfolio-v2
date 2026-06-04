import './projects_component.css'
import { useTranslation } from "react-i18next"
const projects_component = () => {

const { t } = useTranslation()

type ProjectItem = {name: string, img: string, description: string, language: string[]}
const Projects: ProjectItem[] = [
    {name: 'Hellgate Shadowfall', img: '/public/assets/img/projects_img/mockup Hellgate Shadowfall.png', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', language: ['Html', 'Css', 'Javascript']},
    {name: 'Code à Cuisine', img: 'public/assets/img/projects_img/1.jpg', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', language: ['Html', 'Css', 'Javascript']}

]

const Card = ({ items}: { items: ProjectItem[]}) => (

    <div className='py-12'>{items.map((item, index) => (
        <div key={index} className="max-w-lg rounded overflow-hidden rounded-lg border-t-2 shadow-lg bg-blue-500/50 border">
                        <img className="w-full" src={item.img} alt="Hellgate Shadowfall"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">{item.description}</p>
                    </div>
                        <div className="px-6 pt-4 pb-2">{item.language.map((lang, i) =>(
                            <span key={i}>#{lang}</span>
                        ))}
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