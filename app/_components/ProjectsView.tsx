import Link from "next/link";
import projects from "@/data/projects.json";
import { slugify } from "@/lib/utils";
import SectionTitle from "./SectionTitle";

export default function ProjectsView() {
  return (
    <div>
      <SectionTitle index="03">Projects ({projects.length})</SectionTitle>
      <ul className="mt-5 ml-[38px] border-t border-foreground">
        {projects.map((p) => (
          <li
            key={p.name}
            className="relative grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-b border-foreground px-2 py-4 transition-colors hover:bg-neutral-100 md:grid-cols-[minmax(120px,1fr)_minmax(0,2.4fr)_auto]"
          >
            <div className="font-medium">
              <Link
                href={`/project/${slugify(p.name)}`}
                className="no-underline after:absolute after:inset-0 after:content-['']"
              >
                {p.name}
              </Link>
            </div>
            <div>{p.description}</div>
            <div className="text-sm whitespace-nowrap">{p.category} →</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
