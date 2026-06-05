import './hero_component.css'

const hero_component = () => {
  return (
    <section className="hero min-h-screen flex items-center">
      <div className="grid px-14 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-10 lg:justify-between">        <div className="mr-auto place-self-center lg:col-span-7">
          <h4 className="font-DM-Sans max-w-xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-4xl dark:text-white">
            Hey, I'm Maik and a
          </h4>
          <h1 className="font-Unbounded max-w-4xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Front-End Developer
          </h1>
          <p className="font-DM-Sans max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-xl lg:text-2xl">
            I care about the details, the kind that make the difference between good and great.
          </p>
        </div>
        <div className="right flex items-center justify-center">
            <img className="hero-avatar" src="../../../../public/assets/img/profile_img/Profile-Avatar.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default hero_component;
