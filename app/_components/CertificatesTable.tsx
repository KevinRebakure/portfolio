"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterHeader, Highlight } from "@/components/ui/data-table";
import certificates from "@/data/certificates.json";
import Link from "next/link";

type Certificate = (typeof certificates)[number];

const institutions = Array.from(
  new Set(certificates.map((c) => c.institution_name))
);

const INSTITUTION_COLORS: Record<string, string> = {
  "The Gym": "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900",
  "Code With Mosh": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const columns: ColumnDef<Certificate>[] = [
  {
    accessorKey: "name",
    header: "Certificate",
    cell: ({ row }) => (
      <div className="min-w-44">
        <Highlight text={row.original.name} />
      </div>
    ),
  },
  {
    id: "link",
    header: "Link",
    cell: ({ row }) => (
      <Link href={row.original.certificate_link} target="_blank" className="underline">
        View
      </Link>
    ),
  },
  {
    accessorKey: "institution_name",
    header: ({ column }) => (
      <FilterHeader column={column} title="Issued by" options={institutions} />
    ),
    cell: ({ row }) => {
      const name = row.original.institution_name;
      const color = INSTITUTION_COLORS[name] ?? "bg-muted text-muted-foreground";
      return (
        <span className={`inline-block whitespace-nowrap text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
          <Highlight text={name} />
        </span>
      );
    },
    filterFn: "equals",
  },
  {
    id: "topics",
    header: "Tech",
    cell: ({ row }) => {
      const topics = row.original.tags.join(", ");
      return <div className="max-w-[6rem]"><Highlight text={topics} /></div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const desc = row.original.description;
      return desc ? <div className="min-w-48"><Highlight text={desc} /></div> : "—";
    },
  },
];

export default function CertificatesTable() {
  return <DataTable columns={columns} data={certificates} />;
}
