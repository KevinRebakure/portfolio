import links from "@/data/portals.json";
import Link from "next/link";
export default function Connect() {
  return (
    <ul className="flex flex-wrap items-center divide-x divide-gray-500">
      {links.map((link) => (
        <li key={link.name} className="px-2 first:pl-0">
          <Link href={link.link}>{link.name}</Link>
        </li>
      ))}
      <li className="px-2">kevinrebakure@gmail.com</li>
    </ul>
  );
}
