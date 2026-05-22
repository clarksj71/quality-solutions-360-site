import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/images/QS360_clean.png";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Quality Solutions 360"
    >
      <Image
        src={LogoImage}
        width={36}
        height={36}
        alt="Quality Solutions 360"
        className="h-9 w-9"
        priority
        placeholder=""
      />

      <div className="text-base font-semibold tracking-tight text-gray-900 md:text-lg">
        Quality Solutions <span className="text-blue-500">360</span>
      </div>
    </Link>
  );
}