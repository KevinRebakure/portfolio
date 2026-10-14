import links from "@/data/portals.json";
import Link from "next/link";

export default function Connect() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-base">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          target="_blank"
          className="underline"
        >
          {link.name}
        </Link>
      ))}
      <a href="mailto:kevinrebakure@gmail.com" className="underline">
        kevinrebakure@gmail.com
      </a>
    </div>
  );
}
