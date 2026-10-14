export default function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-4 text-base font-medium">
      <span className="font-heading tracking-[0.1em] text-accent-700">
        {index}
      </span>
      {children}
    </div>
  );
}
