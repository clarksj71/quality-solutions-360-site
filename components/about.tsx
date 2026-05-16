import Image from "next/image";
import ProfileImage from "@/public/profile.jpg";

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

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Helping organizations improve execution, resilience, and operational clarity.
            </h2>

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
              His approach combines strategic leadership with practical execution —
              helping organizations reduce operational friction, improve engineering
              effectiveness, strengthen resilience, and align technology initiatives
              with measurable business outcomes.
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
                  Security & Quality
                </div>

                <div className="mt-1 text-sm text-gray-600">
                  Embedding resilience, security, and quality into delivery.
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-sm font-semibold text-gray-900">
                  Observability & Operations
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