import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { slugify } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: slugify(p.name) }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => slugify(p.name) === slug);
  if (!project) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-[960px] px-[clamp(20px,5vw,64px)] pt-[clamp(32px,7vw,88px)] pb-30">
      <Link href="/" className="underline">
        ← Back
      </Link>
      <h1 className="font-heading mt-8 mb-4 text-[clamp(44px,7vw,64px)] leading-none">
        {project.name}
      </h1>
      <p className="mb-4 text-sm text-neutral-700">{project.category}</p>
      <p className="mb-4 text-lg leading-snug">{project.description}</p>
      <p className="mb-6 text-neutral-700">{project.tech_stack.join(", ")}</p>
      <div className="flex gap-6">
        {project.app_url && (
          <a
            href={project.app_url}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Visit app
          </a>
        )}
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}
