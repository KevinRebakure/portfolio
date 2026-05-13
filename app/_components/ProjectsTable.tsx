"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterHeader, Highlight } from "@/components/ui/data-table";
import projects from "@/data/projects.json";
import Link from "next/link";

type Project = (typeof projects)[number];

const categories = Array.from(new Set(projects.map((p) => p.category)));

const CATEGORY_COLORS: Record<string, string> = {
  "Experimental": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Course Project": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Project",
    cell: ({ row }) => (
      <span className="font-medium whitespace-nowrap">
        <Highlight text={row.original.name} />
      </span>
    ),
  },
  {
    accessorKey: "description",
    header: "About",
    cell: ({ row }) => (
      <div className="min-w-48">
        <Highlight text={row.original.description} />
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <FilterHeader column={column} title="Category" options={categories} />
    ),
    cell: ({ row }) => {
      const category = row.original.category;
      const color = CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground";
      return (
        <span className={`inline-block whitespace-nowrap text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
          <Highlight text={category} />
        </span>
      );
    },
    filterFn: "equals",
  },
  {
    id: "tech_stack",
    header: "Tech stack",
    cell: ({ row }) => (
      <div className="max-w-[9rem]">
        <Highlight text={row.original.tech_stack.join(", ")} />
      </div>
    ),
  },
  {
    id: "github",
    header: "GitHub",
    cell: ({ row }) =>
      row.original.github_url ? (
        <Link href={row.original.github_url} target="_blank" className="underline">
          Source
        </Link>
      ) : (
        "—"
      ),
  },
  {
    id: "app",
    header: "Try it",
    cell: ({ row }) =>
      row.original.app_url ? (
        <Link href={row.original.app_url} target="_blank" className="underline">
          Open
        </Link>
      ) : (
        "—"
      ),
  },
];

export default function ProjectsTable() {
  return <DataTable columns={columns} data={projects} />;
}
