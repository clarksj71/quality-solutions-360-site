import Link from "next/link";
import Logo from "./logo";
import { sendGAEvent } from "@next/third-parties/google";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-3">

          <Link
            href="https://www.linkedin.com/company/quality-solutions-360/"
            target="_blank"
            onClick={() => sendGAEvent('event', 'linkedin_company_click', {})}
            className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" style={{flexShrink: 0}}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="hidden md:inline">Connect on LinkedIn</span>
          </Link>

          <Link
            href="https://calendly.com/clarksj71"
            target="_blank"
            onClick={() => sendGAEvent('event', 'contact_us_click', {})}
            className="whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Contact Us
          </Link>

        </nav>

      </div>
    </header>
  );
}