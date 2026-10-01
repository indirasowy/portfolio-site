import Project from "../components/Project";
import { projectPages } from "../consts";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(projectPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${projectPages[slug]?.title} · Indira Sowy` };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <Project slug={slug} />;
}
