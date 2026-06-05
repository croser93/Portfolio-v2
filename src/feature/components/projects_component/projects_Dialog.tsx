import './projects_component.css'

const projects_Dialog = () => {
    return (
        <section className='dialogbackdropt flex justify-center items-center'>
            <div className="dialogCard rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-lg">
                <div className="py-6 items-center flex-col flex">
                    <img className="object-cover dialogimg" src='public/assets/img/projects_img/Join.jpg'></img>
                    <div className="px-6 py-4">
                        <div className="text-white font-DM-Sans text-xl mb-2">Join</div>
                        <p className="text-gray-400 font-DM-Sans text-sm">lorme blaaa</p>
                    </div>
                    <div className="px-6 pt-2 pb-4 flex justify-end gap-3"></div>
                </div>
            </div>
        </section>
    )
}

export default projects_Dialog