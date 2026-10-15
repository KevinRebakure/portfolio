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
  const index = projects.findIndex((p) => slugify(p.name) === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto min-h-screen max-w-[960px] px-[clamp(20px,5vw,64px)] pt-[clamp(32px,7vw,88px)] pb-30">
      <Link href="/" className="inline-block py-2">
        ← Kevin Rebakure
      </Link>
      <div className="mt-10">
        <span className="border border-foreground px-2 py-0.5 text-xs">
          {project.category}
        </span>
      </div>
      <h1 className="font-heading mt-4 mb-3 text-[clamp(44px,7vw,64px)] leading-none font-normal">
        {project.name}
      </h1>
      <p className="max-w-[48ch] text-lg leading-normal">
        {project.description}
      </p>
      <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-px border border-foreground bg-foreground">
        <div className="bg-background px-6 py-5">
          <div className="mb-1 text-[13px] font-medium">Tech stack</div>
          {project.tech_stack.join(", ")}
        </div>
        {(project.app_url || project.github_url) && (
          <div className="bg-background px-6 py-5">
            <div className="mb-1 text-[13px] font-medium">Link</div>
            <div className="flex flex-wrap gap-x-6">
              {project.app_url && (
                <a href={project.app_url} target="_blank" rel="noreferrer">
                  Open the app
                </a>
              )}
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noreferrer">
                  View source
                </a>
              )}
            </div>
          </div>
        )}
      </div>
      {next.name !== project.name && (
        <div className="mt-[72px]">
          <Link
            href={`/project/${slugify(next.name)}`}
            className="inline-block border border-foreground bg-foreground px-5 py-2.5 text-background no-underline"
          >
            Next: {next.name} →
          </Link>
        </div>
      )}
    </main>
  );
}
