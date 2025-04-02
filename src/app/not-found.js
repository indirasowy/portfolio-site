import Link from "next/link";
import Navigation from '../app/components/Navigation'

export default function NotFound() {
  return (
    <>
    <Navigation />
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        href="/"
        className="px-5 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Go back home
      </Link>
    </div>
    </>
  );
}
