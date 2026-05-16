import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Quality Solutions 360"
    >
      <Image
        src="/QS360_clean.png"
        width={36}
        height={36}
        alt="Quality Solutions 360"
        className="h-9 w-9"
      />

      <div className="text-base font-semibold tracking-tight text-gray-900 md:text-lg">
        Quality Solutions <span className="text-blue-500">360</span>
      </div>
    </Link>
  );
}