import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-8 py-12 md:py-18 flex flex-col md:flex-row items-center gap-10 md:gap-16 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold md:hidden text-center">About</h2>
      <div className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] relative rounded-[40px] overflow-hidden shadow-lg flex-shrink-0">
        <Image
          src="/me.png"
          alt="Indira's profile"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="text-center md:text-left max-w-2xl">
        <h2 className="hidden md:block text-5xl font-bold mb-4">About</h2>
        <p className="text-xl md:text-2xl font-semibold mb-2">Hello there!</p>
        <p className="text-gray-700 mb-4 text-md md:text-lg">
          I'm Indira, a software developer and designer studying Cognitive Systems at the University of British Columbia. I enjoy building innovative solutions with software and using my knowledge to develop applications that have real-world impact.
        </p>
        <p className="text-gray-700 text-md md:text-lg">
          Outside of work, I enjoy participating in my uni’s clubs, where I can contribute my skills and work with other like-minded individuals. Whether it's creating website designs or developing software to address student problems, I find joy in using my skills to positively impact my community. 
        </p>
      </div>
    </section>
  );
}
