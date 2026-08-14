import Link from "next/link";

export default function Header() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl">Kevin Rebakure</h1>
      <p>
        Systems Engineer at{" "}
        <Link href="https://github.com/BESTSELLER" target="_blank" className="underline">
          BESTSELLER
        </Link>
      </p>
    </div>
  );
}
