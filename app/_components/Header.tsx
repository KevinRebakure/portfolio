import links from "@/data/portals.json";
import Link from "next/link";

export default function Header() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl">Kevin Rebakure</h1>
          <p>Software developer. Sharing what I&apos;m learning and building</p>
        </div>
        <p className="font-semibold">Let&apos;s connect</p>
        <div className="flex gap-2">
          {links.map((link, i) => (
            <Link key={link.name} href={link.link}>
              {link.name}
              {i < links.length - 1 && <span> |</span>}
            </Link>
          ))}
          <span> | kevinrebakure@gmail.com</span>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Currently learning</p>
        <p>Since October 2025: Java, Systems Design</p>
      </div>
    </div>
  );
}
