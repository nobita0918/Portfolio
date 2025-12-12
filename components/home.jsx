import Spline from "@splinetool/react-spline";
import Link from "next/link";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div
        className="
          w-full max-w-7xl 
          grid grid-cols-1 md:grid-cols-2 
          gap-10 md:gap-10 
          px-3 md:px-2
        "
      >
        {/* Text Section */}
        <div className=" pt-10 md:pt-20 text-lg md:text-md font-serif leading-relaxed">
          <h2 className="text-3xl md:text-4xl font-semibold  mb-5">
            Hi, I'm Anurag Sharma 👋
          </h2>

          <p className="text-gray-300">
            MERN Full-Stack Developer committed to delivering high-performance,
            enterprise-grade web solutions. I specialised in architecting
            scalable systems, building intuitive user experiences and driving
            technology excellence with professionalism, precision and integrity.
          </p>

          <Link href={"/About"}>
            <section className="text-gray-500  cursor-pointer">
              read more...
            </section>
          </Link>
          <Contact />
        </div>

        {/* Spline Section */}
        <div className="hidden md:block w-full h-[300px] md:h-[400px]">
          <div className="w-full h-full rounded-xl overflow-hidden">
            <Spline scene="https://prod.spline.design/TEYA4fdijnGbwXWp/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  );
}
