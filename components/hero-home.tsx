import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">

          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">

            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Engineering efficiency IS the revenue strategy.
            </h1>

            <div className="mx-auto max-w-3xl">

              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Most organizations have security, quality, and operations trapped in silos. We
                operate across all of them — eliminating the blind spots holding teams back and
                unleashing their potential to deliver business value.
              </p>

              <div className="relative before:absolute before:inset-0 before:pointer-events-none before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">

                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-4"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >

                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://calendly.com/clarksj71"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative inline-flex items-center">
                      Let's Chat
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>

                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:w-auto"
                    href="#services"
                  >
                    How We Help
                  </a>

                </div>
              </div>
            </div>
          </div>

          {/* Operational Panel */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >

            <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gray-900 px-6 py-6 shadow-2xl">

              {/* Background glow */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_55%)]" />

              {/* Header */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-800 pb-4">

                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <span className="text-sm font-medium text-gray-300">
                  Quality Solutions 360
                </span>

                <div className="text-xs uppercase tracking-widest text-blue-400">
                  The Signals
                </div>

              </div>

              {/* Animated operational items */}
              <div className="space-y-3 font-mono text-sm">

                <div className="animate-[code-1_10s_infinite] rounded-xl border border-blue-500/20 bg-blue-500/10 px-4 py-3 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-sm">
                  &gt; Aligning <b>ENGINEERING to business priorities</b>...
                </div>

                <div className="animate-[code-2_10s_infinite] rounded-xl border border-slate-700 bg-gray-800/70 px-4 py-3 text-gray-300 transition-all duration-500">
                  &gt; Embedding <b>SECURITY and QUALITY</b> from the start...
                </div>

                <div className="animate-[code-3_10s_infinite] rounded-xl border border-slate-700 bg-gray-800/70 px-4 py-3 text-gray-300 transition-all duration-500">
                  &gt; <b>UNIFYING teams around a SHARED DELIVERY MODEL</b>....
                </div>

                <div className="animate-[code-4_10s_infinite] rounded-xl border border-slate-700 bg-gray-800/70 px-4 py-3 text-gray-300 transition-all duration-500">
                  &gt; <b>CENTRALIZING SIGNALS into an OPERATIONAL VIEW</b>...
                </div>

                <div className="animate-[code-5_10s_infinite] rounded-xl border border-slate-700 bg-gray-800/70 px-4 py-3 text-gray-300 transition-all duration-500">
                  &gt; <b>Designing SYSTEMS that DETECT and RECOVER</b> automatically...
                </div>

                <div className="animate-[code-6_10s_infinite] rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] backdrop-blur-sm">
                  &gt; <b>This is what effective looks like.</b>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
