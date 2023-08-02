import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Lottie from "react-lottie";
import HERO from "../../assets/Hero.json";

const Hero = () => {
  return (
    <>
      <section
        id="main"
        className="md:h-[30rem] scroll-mt-20 bg-orange-200 dark:bg-orange-300 flex flex-col sm:flex-row gap-x-4 justify-evenly items-stretch md:flex-row"
      >
        {/* lottie */}
        <div className="sm:w-1/2 max-w-sm mx-auto">
          <Lottie
            options={{
              animationData: HERO,
              loop: true,
              autoplay: true,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
            }}
          />
        </div>
        {/* lottie-end */}

        {/* text */}
        <div className=" my-auto text-center sm:text-left sm:w-1/2">
          <p className="text-2xl my-2 text-purple-500 font-semibold sm:text-2xl">
            Express yourself
          </p>
          <h1
            className="text-5xl my-4 font-bold md:text-7xl tracking-wide
          bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700"
          >
            I'm a Dev
          </h1>
          <p className="px-8 sm:px-0 text-zinc-700 font-semibold sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
            recusandae explicabo repellendus? Consectetur, quisquam?
          </p>

          {/* CTA */}
          <div className="my-8">
            <a
              href="#projects"
              className="inline-block transition my-4 mr-4 p-2 rounded-md outline outline-4 bg-purple-300 text-purple-700 hover:outline-purple-500 hover:scale-95 font-semibold"
            >
              Check out my work
            </a>
            <a
              href="#contact"
              className="inline-block transition my-4 p-3 rounded-lg bg-amber-500 text-zinc-50 focus:outline-2 focus:outline-orange-300 hover:bg-orange-500 font-semibold hover:scale-95"
            >
              Join Us
            </a>
          </div>
          {/* CTA-end */}
        </div>
        {/* text-end */}
      </section>
    </>
  );
};

export default Hero;
