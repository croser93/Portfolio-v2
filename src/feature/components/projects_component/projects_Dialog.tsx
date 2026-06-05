import './projects_component.css'
import { type ProjectItem } from './projects_component'

const projects_Dialog = ({ onClose, project }: { onClose: () => void, project: ProjectItem }) => {
    return (
        <section className='dialogbackdropt flex justify-center items-center'>
            <div className="dialogCard rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-lg">
                <div className="justify-end flex p-4">
                    <button className="closebtn" onClick={onClose}>x</button>
                </div>
                <div className="py-4 items-center flex-col flex">
                    <img className="object-cover dialogimg" src='public/assets/img/projects_img/Join.jpg'></img>
                    <div className="px-6 py-4">
                        <div className="text-white font-DM-Sans text-xl mb-2">Join</div>
                        <p className="text-gray-400 font-DM-Sans text-sm">lorme blaaa</p>
                    </div>
                    <div className="px-6 pt-2 pb-4 flex justify-end gap-3"></div>
                </div>
                <div className="flex justify-between p-4">
                    <button className="closebtn">◀</button>
                    <button className="closebtn">▶</button>
                </div>
            </div>
        </section>
    )
}
export default projects_Dialog