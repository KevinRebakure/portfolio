"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable, FilterHeader, Highlight } from "@/components/ui/data-table";
import learning from "@/data/learning.json";

type LearningItem = (typeof learning)[number];

const statuses = Array.from(new Set(learning.map((l) => l.status)));

const STATUS_COLORS: Record<string, string> = {
  "Experimenting": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Completed": "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
  "On hold": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

const TOOLTIP_TEXT =
  "Doesn't mean I mastered it and stopped learning it. I just no longer research it full-time.";

function WithTooltip({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative group inline-flex cursor-help items-center gap-0.5">
      {children}
      <span className="underline decoration-dotted">ⓘ</span>
      <span className="absolute bottom-full left-0 mb-1 w-64 text-xs bg-popover text-popover-foreground border rounded p-2 hidden group-hover:block z-10 shadow-sm">
        {TOOLTIP_TEXT}
      </span>
    </span>
  );
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(iso));
}

const columns: ColumnDef<LearningItem>[] = [
  {
    accessorKey: "name",
    header: "Topic",
    cell: ({ row }) => <Highlight text={row.original.name} />,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <FilterHeader column={column} title="Status" options={statuses} />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const color = STATUS_COLORS[status] ?? "bg-muted text-muted-foreground";
      return (
        <span className={`inline-block whitespace-nowrap text-xs font-medium px-2 py-0.5 rounded-full ${color}`}>
          <Highlight text={status} />
        </span>
      );
    },
    filterFn: "equals",
  },
  {
    accessorKey: "started",
    header: "Started",
    cell: ({ row }) => {
      const started = row.original.started;
      return started ? <Highlight text={formatDate(started)} /> : "—";
    },
  },
  {
    accessorKey: "ended",
    header: "Ended",
    cell: ({ row }) => {
      const ended = row.original.ended;
      return ended ? (
        <WithTooltip><Highlight text={formatDate(ended)} /></WithTooltip>
      ) : (
        "—"
      );
    },
  },
];

export default function LearningTable() {
  return <DataTable columns={columns} data={learning} />;
}
