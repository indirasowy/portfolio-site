import Link from "next/link";
import Navigation from "../app/components/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-8xl font-bold tracking-tight">
          4<span className="font-serif italic font-normal text-accent">0</span>4
        </h1>
        <p className="text-xl text-muted mt-4 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-contrast text-on-contrast rounded-full font-semibold hover:bg-accent transition-colors"
        >
          Go back home
        </Link>
      </div>
    </>
  );
}
