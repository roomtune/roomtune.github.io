import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TechnologyPage() {
  const coreFeatures = [
    {
      title: "Room Analysis",
      description:
        "Our AR scanning system builds a precise digital model of your room and highlights the acoustic constraints that matter most.",
      bullets: [
        "Identify reflective surfaces and key problem zones",
        "Map response behavior across listening positions",
        "Expose resonances and standing-wave hotspots",
        "Measure reverberation trends by region",
      ],
      href: "/technology",
    },
    {
      title: "Acoustic Simulation",
      description:
        "Model outcomes before spending money on treatment or moving gear. Evaluate options with clear tradeoffs.",
      bullets: [
        "Test treatment placement scenarios",
        "Compare alternate speaker layouts",
        "Evaluate listening positions against goals",
        "Review before-and-after deltas clearly",
      ],
      href: "/technology",
    },
    {
      title: "Optimization",
      description:
        "Convert analysis and simulation data into practical recommendations for your exact space and constraints.",
      bullets: [
        "Treatment suggestions prioritized by impact",
        "Speaker/listener placement guidance",
        "Use-case presets for music, film, and voice",
        "Actionable improvement roadmap",
      ],
      href: "/technology",
    },
  ];

  const applications = [
    "Home Audio",
    "Studio and Professional",
    "Commercial Spaces",
    "Hospitality and Events",
  ];

  return (
    <main className="min-h-screen bg-dark pt-[72px] text-white">
      <Header />

      <section className="section-pad border-b border-white/10 bg-darker">
        <div className="container-wide">
          <p className="label-chip">Platform</p>
          <div className="mt-6 max-w-4xl">
            <h1 className="heading-xl mb-6 !text-4xl md:!text-6xl lg:!text-7xl">
              Our Technology
            </h1>
            <p className="text-lg text-white/80 md:text-2xl">
              RoomTune combines room capture, acoustic simulation, and optimization logic into one
              decision layer for high-confidence tuning.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10 bg-dark">
        <div className="container-wide">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-5">
              <h2 className="heading-lg">AR-Based Acoustic Modeling</h2>
              <p className="text-white/80">
                RoomTune uses augmented reality to scan and analyze room geometry with high
                precision, producing a digital acoustic context for each listening space.
              </p>
              <p className="text-white/80">
                The system identifies the most meaningful sound interactions, then turns those into
                concrete setup and treatment decisions teams can trust.
              </p>
              <p className="text-white/80">
                Instead of guesswork, you get measurable outcomes aligned to your room, equipment,
                and target experience.
              </p>
            </div>
            <div className="glass-panel flex h-80 items-center justify-center border border-white/10">
              <span className="text-sm uppercase tracking-[0.2em] text-white/50">
                AR Modeling Visual
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10 bg-darker">
        <div className="container-wide">
          <div className="mb-14 max-w-4xl">
            <p className="label-chip">Capabilities</p>
            <h2 className="heading-lg mt-6">Core system features</h2>
            <p className="mt-4 text-white/80">
              RoomTune components work together in sequence: diagnose, model, and optimize.
            </p>
          </div>

          <div className="space-y-8">
            {coreFeatures.map((feature) => (
              <article key={feature.title} className="glass-panel grid gap-8 p-8 md:grid-cols-5">
                <div className="md:col-span-3">
                  <h3 className="heading-md mb-3">{feature.title}</h3>
                  <p className="mb-5 text-white/80">{feature.description}</p>
                  <ul className="space-y-2 text-sm text-white/75">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-panel flex min-h-48 items-center justify-center md:col-span-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/45">
                    {feature.title} Visual
                  </span>
                </div>
                <div className="md:col-span-5">
                  <Link href={feature.href} className="btn-secondary">
                    Explore {feature.title}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10 bg-dark">
        <div className="container-wide">
          <h2 className="heading-lg mb-10">Applications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <div key={app} className="glass-panel p-6">
                <div className="mb-4 h-2 w-12 rounded-full bg-primary/75" />
                <h3 className="font-heading text-xl text-white">{app}</h3>
                <p className="mt-3 text-sm text-white/75">
                  Built to support acoustic decision-making in this environment.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-darker">
        <div className="container-wide">
          <div className="glass-panel mx-auto max-w-4xl p-10 text-center">
            <p className="label-chip">Next Step</p>
            <h2 className="heading-lg mt-6">Ready to hear the difference?</h2>
            <p className="mt-4 text-white/80">
              Join the waitlist to get product updates and early access opportunities.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/#waitlist" className="btn-primary">
                Join waitlist
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn about RoomTune
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}