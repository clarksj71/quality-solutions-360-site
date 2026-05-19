import Link from "next/link";
import Logo from "./logo";
import { sendGAEvent } from "@next/third-parties/google";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer
      className={`border-t border-gray-200 bg-white ${
        border
          ? "[border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
          : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Branding */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">

            <Logo />

            <p className="mt-3 max-w-md text-sm text-gray-600">
              Engineering efficiency IS the revenue strategy.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              © 2026 Quality Solutions 360 LLC. All rights reserved.
            </p>

          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">

            <Link
              href="#services"
              onClick={() => sendGAEvent('event', 'how_we_help_click', { location: 'footer' })}
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              Services
            </Link>

            <Link
              href="https://www.linkedin.com/company/quality-solutions-360/"
              target="_blank"
              onClick={() => sendGAEvent('event', 'linkedin_company_click', { location: 'footer' })}
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              LinkedIn
            </Link>

            <Link
              href="https://calendly.com/clarksj71"
              target="_blank"
              onClick={() => sendGAEvent('event', 'lets_chat_click', { location: 'footer' })}
              className="whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Let's Chat
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}