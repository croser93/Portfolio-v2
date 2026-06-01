import './hero_component.css'

const hero_component = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="grid px-10 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="font-Unbounded max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Front-End Developer
          </h1>
          <p className="font-DM-Sans max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-xl lg:text-2xl">
            Hey I´m Maik and I am Front-End Developer and I have a preference
            for dealing with problems.
          </p>
        </div>
        <div className="right">
        </div>
      </div>
    </section>
  );
};

export default hero_component;
