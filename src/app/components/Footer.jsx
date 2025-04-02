import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-white text-black text-sm text-center flex flex-col items-center gap-4">
      <div className="flex gap-6 text-xl">
        <a
          href="https://github.com/indirasowy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/indirasowy/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:indira.sowy@gmail.com"
          className="hover:text-gray-400 transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Indira Sowy. All rights reserved.</p>
    </footer>
  );
}
