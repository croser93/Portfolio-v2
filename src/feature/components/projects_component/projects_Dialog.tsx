import './projects_component.css'
import { type ProjectItem } from './projects_component'
import { GithubIcon } from "@dev.icons/react"
import { IconArrowBigRightLines , IconArrowBigLeftLines , IconX, IconArrowUpRight } from '@tabler/icons-react';



const projects_Dialog = ({ onClose, project, onPrev, onNext }: {
    onClose: () => void
    project: ProjectItem
    onPrev: () => void
    onNext: () => void
}) => {    return (
        <section className='dialogbackdropt flex justify-center items-center'>
            <div className="dialogCard rounded-lg border border-white/ bg-white overflow-hidden shadow-lg mx-auto content-beg">
                <div className="justify-end flex p-4">
                    <button className="closebtn" onClick={onClose}><IconX/></button>
                </div>
                <div className="py-4 items-center flex-col flex">
                    <img className="object-cover dialogimg" src={project.img}></img>
                    <div className="px-6 py-4">
                        <div className="text-white font-DM-Sans text-xl mb-2">{project.name}</div>
                        <p className="text-gray-400 font-DM-Sans text-sm">{project.description}</p>
                    </div>
                    <div className="px-6 pt-2 pb-4 flex justify-end gap-3"></div>
                </div>
                <div className="flex justify-between p-4">
                    <button className="closebtn" onClick={onPrev}><IconArrowBigLeftLines/></button>
                    <div className="flex gap-4">
                        <a className="link flex justify-center items-center" href={project.github} target="_blank"><GithubIcon size={24} /></a>
                        <a className="link flex justify-center items-center font-DM-Sans text-m" href={project.live} target="_blank">Live <IconArrowUpRight/></a>
                    </div>
                    <button className="closebtn" onClick={onNext}><IconArrowBigRightLines/></button>
                </div>
            </div>
        </section>
    )
}
export default projects_Dialog