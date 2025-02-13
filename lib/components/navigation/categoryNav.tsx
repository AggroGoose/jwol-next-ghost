import Link from "next/link";

export default function CategoryNav() {
  return (
    <div className="max-xl:hidden w-full col-span-1 col-start-2 font-secondary text-sm tracking-wider h-full text-always-light">
      <nav className="w-max mx-auto flex h-full items-center gap-4">
        <Link className="hover:text-accent-500" href="/level-up">
          #Level Up
        </Link>
        <Link className="hover:text-accent-500" href="/flavorverse">
          #Flavorverse
        </Link>
        <Link className="hover:text-accent-500" href="/travel-fever">
          #Travel Fever
        </Link>
        <Link className="hover:text-accent-500" href="/human-orbit">
          #Human Orbit
        </Link>
        <Link className="hover:text-accent-500" href="/tech-hole">
          #Tech Hole
        </Link>
        <Link className="hover:text-accent-500" href="/mission-control">
          #Mission Control
        </Link>
      </nav>
    </div>
  );
}
