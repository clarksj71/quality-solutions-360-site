import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">

            <Link
              href="https://www.linkedin.com/company/quality-solutions-360/"
              target="_blank"
              className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              <img src="/images/logo-linkedin.svg" alt="LinkedIn" width={18} height={18} />
              <span className="hidden md:inline">Connect on LinkedIn</span>
            </Link>

          <Link
            href="https://calendly.com/clarksj71"
            target="_blank"
            className="whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Contact Us
          </Link>

        </nav>

      </div>
    </header>
  );
}