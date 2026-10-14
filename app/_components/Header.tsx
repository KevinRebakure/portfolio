import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1 className="font-heading mb-4 text-[clamp(44px,7vw,64px)] leading-none">
        Kevin Rebakure
      </h1>
      <p className="mb-1.5 text-lg">
        Systems Engineer at{" "}
        <Link
          href="https://github.com/BESTSELLER"
          target="_blank"
          className="!text-foreground underline"
        >
          BESTSELLER
        </Link>
      </p>
      <p className="mb-1.5 text-lg">Kigali, Rwanda</p>
      <p className="text-neutral-700">
        Basketball · Games · Film · Swimming · Running · Guitar · Cars
      </p>
    </header>
  );
}
