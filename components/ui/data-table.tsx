"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const SearchContext = createContext("");

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: { columnFilters, globalFilter },
  });

  return (
    <SearchContext.Provider value={globalFilter}>
    <div className="space-y-3">
      <input
        value={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        className="w-full max-w-xs text-sm px-3 py-1.5 rounded border bg-transparent focus:outline-none placeholder:text-muted-foreground"
      />
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
    </div>
    </SearchContext.Provider>
  );
}

export function Highlight({ text }: { text: string }) {
  const query = useContext(SearchContext);
  if (!query.trim()) return <>{text}</>;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <mark key={i} className="bg-yellow-200 dark:bg-yellow-700 rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

interface FilterHeaderProps<TData> {
  column: Column<TData, unknown>;
  title: string;
  options: string[];
}

export function FilterHeader<TData>({
  column,
  title,
  options,
}: FilterHeaderProps<TData>) {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const current = column.getFilterValue() as string | undefined;

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !dropdownRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  function handleToggle() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPos({ top: rect.bottom + 4, left: rect.left });
    }
    setOpen((o) => !o);
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`flex items-center gap-1 transition-colors ${
          current ? "text-foreground font-medium" : "hover:text-foreground"
        }`}
      >
        <span>{current ?? title}</span>
        <ChevronDown
          className={`h-3 w-3 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div
          ref={dropdownRef}
          style={{ top: pos.top, left: pos.left }}
          className="fixed z-50 bg-background border rounded shadow-sm min-w-max text-foreground font-normal"
        >
          <button
            className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-muted ${!current ? "font-medium" : ""}`}
            onClick={() => { column.setFilterValue(undefined); setOpen(false); }}
          >
            All
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              className={`block w-full text-left px-3 py-1.5 text-sm hover:bg-muted ${current === opt ? "font-medium" : ""}`}
              onClick={() => { column.setFilterValue(opt); setOpen(false); }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
