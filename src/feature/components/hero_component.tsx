import { TypeAnimation } from 'react-type-animation'

const hero_component = () => {
  return (
<section className="bg-white dark:bg-gray-900 min-h-screen flex items-center" >
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Front End Developer</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Hey I´m maik and I am Front End Developer and I have a preference for dealing with problems.
            </p>
        </div>
      <div className="mb-4 rounded-xl font-mono text-sm border-2 border-gray-500 w-140 overflow-hidden ">


        <div className="bg-gray-400 px-4 py-3 flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <div className="bg-neutral-900 p-6 space-y-1 h-48 w-140">          
            <p>
            <TypeAnimation sequence={['const Dev = {', 1000]} speed={20} className="text-blue-400" cursor={false} />
          </p>
          <p className="pl-4">
            <span className="text-gray-400">name: </span>
            <TypeAnimation sequence={[1000, '"Maik Groth"', 1000]} speed={20} className="text-blue-300" cursor={false} />
          </p>
          <p className="pl-4">
            <span className="text-gray-400">role: </span>
            <TypeAnimation sequence={[2000, '"Frontend Developer"', 1000]} speed={20} className="text-blue-300" cursor={false} />
          </p>
          <p className="pl-4">
            <span className="text-gray-400">location: </span>
            <TypeAnimation sequence={[3500, '"Germany | Krummesse"', 1000]} speed={20} className="text-blue-300" cursor={false} />
          </p>
          <p className="pl-4">
            <span className="text-gray-400">nextStep: </span>
            <TypeAnimation sequence={[4500, '"Full-Stack Developer"', 1000]} speed={20} className="text-blue-300" cursor={false} />
          </p>
          <p className="pl-4">
            <TypeAnimation sequence={[6000, '}', 1000]} speed={20} className="text-blue-400" cursor={false}/>
          </p>
        </div>

      </div>          
    </div>
</section>
  )
}

export default hero_component
