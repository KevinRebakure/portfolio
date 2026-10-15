export default function SectionTitle({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-baseline gap-4 font-sans text-base leading-[1.55] font-medium tracking-normal">
      <span className="font-heading tracking-[0.1em]">{index}</span>
      {children}
    </h2>
  );
}
