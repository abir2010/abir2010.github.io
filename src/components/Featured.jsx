import arrow from "../assets/arrowgif.gif";
import featured from "../assets/featured.gif";

export default function Featured() {
  return (
    <div className="bg-[#f8f9f9] dark:bg-[#10121A]">
      <div className="container mx-auto py-8 md:flex justify-center items-center md:px-20">
        <div className="md:w-1/2 text-black dark:text-white">
          <h1 className="text-6xl md:text-9xl font-bold">Featured Project</h1>
          <p className="md:text-xl">
            Deployed scalable travel, event and telemedicine web and hybrid
            mobile apps using React SPA and PWA. Collaborated in 140+ projects
            with 50+ clients all around the world. I am also interested in data
            analytics and visualization.
          </p>
          <div className="md:flex justify-end items-center gap-2 md:gap-8 mt-2">
            <div className="text-2xl font-bold">Project : Linked Out</div>
            <button className="bg-cyan-400 text-black px-8 py-4 text-2xl font-bold md:mt-12 hover:bg-transparent hover:text-cyan-400 border-2 border-cyan-400 transition-all duration-300">
              View More
            </button>
          </div>
          <div className="flex md:justify-end items-center pr-12">
            <img className="w-32" src={arrow} alt="" />
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={featured} alt="" />
        </div>
      </div>
    </div>
  );
}
