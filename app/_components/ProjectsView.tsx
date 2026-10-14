"use client";

import { useState } from "react";
import projects from "@/data/projects.json";
import { cn } from "@/lib/utils";
import Blueprint from "./Blueprint";
import SectionTitle from "./SectionTitle";

type View = "grid" | "list";

const tag =
  "inline-flex self-start border border-[var(--brand)] px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-[var(--brand)]";

function toggleClass(active: boolean) {
  return cn(
    "font-heading cursor-pointer border px-[14px] py-[7px] text-sm font-semibold leading-tight",
    active
      ? "border-[var(--brand)] bg-[var(--brand)] text-background"
      : "border-[var(--divider)] hover:bg-foreground/5"
  );
}

export default function ProjectsView() {
  const [view, setView] = useState<View>("grid");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SectionTitle index="03">Projects ({projects.length})</SectionTitle>
        <div className="flex gap-2" role="group" aria-label="Project layout">
          <button
            type="button"
            aria-pressed={view === "grid"}
            className={toggleClass(view === "grid")}
            onClick={() => setView("grid")}
          >
            Grid
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            className={toggleClass(view === "list")}
            onClick={() => setView("list")}
          >
            List
          </button>
        </div>
      </div>

      {view === "grid" ? (
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 md:ml-[38px]">
          {projects.map((p) => {
            const href = p.app_url ?? p.github_url ?? undefined;
            return (
              <Blueprint
                key={p.name}
                className="flex min-h-44 flex-col gap-2 p-6 transition-colors hover:bg-accent-100"
              >
                <span className={tag}>{p.category}</span>
                <h3 className="font-heading mt-1 text-[30px] font-normal leading-[1.05]">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="!text-foreground no-underline after:absolute after:inset-0 after:content-['']"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </h3>
                <p className="leading-snug">{p.description}</p>
                <div className="mt-auto text-sm text-neutral-700">
                  {p.tech_stack.join(", ")} →
                </div>
              </Blueprint>
            );
          })}
        </div>
      ) : (
        <ul className="mt-5 border-t border-[var(--brand)] md:ml-[38px]">
          {projects.map((p) => {
            const href = p.app_url ?? p.github_url ?? undefined;
            return (
              <li
                key={p.name}
                className="relative grid grid-cols-1 items-baseline gap-x-6 gap-y-2 border-b border-accent-300 px-2 py-4 transition-colors hover:bg-accent-100 md:grid-cols-[minmax(120px,1fr)_minmax(0,2.4fr)_auto]"
              >
                <div className="font-medium">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="!text-foreground no-underline after:absolute after:inset-0 after:content-['']"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </div>
                <div className="text-neutral-700">{p.description}</div>
                <div className="whitespace-nowrap text-sm">{p.category} →</div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
