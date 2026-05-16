import Image from "next/image";
import ProfileImage from "@/public/images/profile.jpg";

export default function About() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-2xl">
              <Image
                src={ProfileImage}
                width={500}
                height={600}
                alt="Stephen Clark"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>

            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
              Leadership
            </div>

            {/* Name + Title block */}
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Stephen Clark
            </h2>

            <p className="mt-2 text-lg font-medium text-blue-600">
              Fractional CTO &amp; Engineering Advisor
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Denver, CO
              </span>
              <span className="text-gray-300">|</span>
              <span>20+ Years Experience</span>
              <span className="text-gray-300">|</span>
              <span>Healthcare · Fintech · SaaS</span>
              <span className="text-gray-300">|</span>
              <a
                href="https://www.linkedin.com/in/qualityevangelist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            <div className="mt-4 h-px w-16 bg-blue-600" />

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Stephen Clark is a fractional technology executive and engineering advisor
              with more than two decades of experience leading enterprise transformation,
              engineering enablement, quality, security, and operational modernization
              initiatives across healthcare, SaaS, and enterprise technology organizations.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Having held leadership roles at organizations including Cigna,
              Express Scripts, Evernorth, and TurningPoint Healthcare Solutions,
              Stephen has led large-scale initiatives spanning DevOps,
              observability, application security, quality engineering,
              CI/CD enablement, and enterprise delivery transformation.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              His approach is built on a simple truth — executives and technology leaders rarely
              get close enough to the work to see where waste, risk, and inefficiency actually
              live. Stephen partners directly with leaders to surface those blind spots,
              translating deep technical insight into organizational clarity, faster delivery,
              and measurable cost savings.
            </p>

            {/* Focus Areas */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Engineering Effectiveness
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Aligning teams, tooling, and delivery execution.
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Security &amp; Quality
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Embedding resilience, security, and quality into delivery.
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Observability &amp; Operations
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Improving visibility, incident response, and operational clarity.
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Enterprise Transformation
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Leading modernization and operational improvement initiatives at scale.
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
