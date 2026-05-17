import Link from "next/link";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-20">

        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gray-900 px-8 py-16 text-center shadow-2xl md:px-16">

          {/* Background glow */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_55%)]" />

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Turn operational noise into execution clarity.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Quality Solutions 360 partners with organizations to improve
            engineering effectiveness, strengthen operational resilience,
            and align teams around measurable business outcomes.
          </p>

          <div className="mt-10 flex justify-center">

            <Link
              href="https://calendly.com/clarksj71"
              target="_blank"
              className="group rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              <span className="inline-flex items-center">
                Let's Talk

                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}