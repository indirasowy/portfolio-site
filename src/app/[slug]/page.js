import Project from "../components/Project"

// Static route generation (if using `export const dynamicParams = false`)
export async function generateStaticParams() {
  return [
    { slug: "alliance" },
    { slug: "notion-for-pms" },
    { slug: "entreprenher" },
    { slug: "onlyprofs" },
    { slug: "react-lab" },
  ];
}

export default function Page({ params }) {
  return <Project params={params} />;
}
