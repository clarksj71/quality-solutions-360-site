import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";

export default function FeaturesPlanet() {
  return (
    <section
  id="services"
  className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Helping organizations improve execution, operational clarity,
              and engineering effectiveness
            </h2>

            <p className="mt-4 text-lg text-gray-400">
              Partnering with organizations to reduce operational friction,
              improve delivery visibility, strengthen resilience practices,
              and align engineering teams around measurable outcomes.
            </p>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">

              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">

                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />

                <div className="pointer-events-none" aria-hidden="true">

                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />

                  {/* Floating Cards */}
                  <div>

                    <div className="absolute -left-28 top-16 z-10 w-64 min-h-[72px] animate-[float_4s_ease-in-out_infinite_both] rounded-xl border border-blue-500/20 bg-gray-900/90 px-4 py-3 shadow-2xl backdrop-blur-sm">
                      <div className="text-sm font-semibold text-white">
                        Operational Efficiency
                      </div>
                      <div className="text-xs text-gray-400">
                        Optimize. Align. Execute.
                      </div>
                    </div>

                    <div className="absolute left-56 top-7 z-10 w-64 min-h-[72px] animate-[float_4s_ease-in-out_infinite_1s_both] rounded-xl border border-blue-500/20 bg-gray-900/90 px-4 py-3 shadow-2xl backdrop-blur-sm">
                      <div className="text-sm font-semibold text-white">
                        Security & Resilience
                      </div>
                      <div className="text-xs text-gray-400">
                        Reduce risk. Improve resilience.
                      </div>
                    </div>

                    <div className="absolute -left-20 bottom-24 z-10 w-64 min-h-[72px] animate-[float_4s_ease-in-out_infinite_2s_both] rounded-xl border border-blue-500/20 bg-gray-900/90 px-4 py-3 shadow-2xl backdrop-blur-sm">
                      <div className="text-sm font-semibold text-white">
                        Observability & Insight
                      </div>
                      <div className="text-xs text-gray-400">
                        Improve visibility. Drive decisions.
                      </div>
                    </div>

                    <div className="absolute bottom-32 left-64 z-10 w-64 min-h-[72px] animate-[float_4s_ease-in-out_infinite_3s_both] rounded-xl border border-blue-500/20 bg-gray-900/90 px-4 py-3 shadow-2xl backdrop-blur-sm">
                      <div className="text-sm font-semibold text-white">
                        Engineering Effectiveness
                      </div>
                      <div className="text-xs text-gray-400">
                        Align teams. Deliver outcomes.
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Operational Efficiency</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Improve engineering execution by identifying operational bottlenecks,
                reducing friction, and aligning teams around measurable outcomes.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Security & Resilience</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Strengthen security posture and improve organizational resilience
                through practical, risk-aware technology leadership.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Engineering Effectiveness</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Improve delivery predictability, software quality, and
                cross-functional alignment across engineering organizations.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Observability & Visibility</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Implement operational visibility practices that support proactive
                issue detection, faster resolution, and informed decision-making.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Strategic Technology Leadership</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Provide fractional technology leadership focused on operational
                maturity, organizational alignment, and sustainable execution.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <span>Quality Engineering</span>
              </h3>

              <p className="text-[15px] text-gray-400">
                Strengthen software quality practices through scalable testing
                strategies, engineering discipline, and continuous improvement initiatives.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}