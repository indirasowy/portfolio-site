export default function Navigation() {
    return (
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md w-full px-16 py-12 flex justify-between items-center">
        <h1 className="text-xl font-bold">IS.</h1>
        <ul className="flex gap-12 text-xl font-medium">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
        </ul>
      </nav>
    );
  }
  