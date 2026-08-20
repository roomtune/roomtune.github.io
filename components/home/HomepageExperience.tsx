"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

const processSteps = [
  {
    title: "Scan",
    description:
      "Capture your space in minutes with guided room scanning built for real listening environments.",
    image: "/screenshots/step-1.png",
  },
  {
    title: "Simulate",
    description:
      "Preview how placement and treatment decisions change what you hear before you move anything.",
    image: "/screenshots/step-2.png",
  },
  {
    title: "Optimize",
    description:
      "Get practical recommendations tuned to your room, gear, and listening goals.",
    image: "/screenshots/step-3.png",
  },
];

const showcaseShots = [
  "/footage/showcase-1.png",
  "/footage/showcase-2.png",
  "/footage/showcase-3.png",
];

function SectionFade({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}

function MediaFallback({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`glass-panel flex items-center justify-center ${className ?? ""}`}>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-white/55">Placeholder</p>
          <p className="mt-2 text-base font-medium text-white/90">{label}</p>
          <p className="mt-1 text-xs text-metal">{src}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={label}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}

export default function HomepageExperience() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [email, setEmail] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");

  const handleWaitlistSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setSubmitState("error");
      setSubmitMessage("Please enter an email address.");
      return;
    }

    if (FORM_ENDPOINT.includes("your-form-id")) {
      setSubmitState("error");
      setSubmitMessage("Replace your Formspree form ID in HomepageExperience.tsx.");
      return;
    }

    setSubmitState("loading");
    setSubmitMessage("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Form request failed");
      }

      setSubmitState("success");
      setSubmitMessage("You are on the list. We will reach out with early access.");
      setEmail("");
    } catch (_error) {
      setSubmitState("error");
      setSubmitMessage("Could not submit right now. Please try again shortly.");
    }
  };

  return (
    <>
      <section className="relative min-h-screen overflow-hidden border-b border-white/10" id="top">
        {!videoFailed && (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoFailed(true)}
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}

        {videoFailed && (
          <div className="absolute inset-0 overflow-hidden bg-darker">
            <motion.div
              className="absolute -left-40 top-[-20%] h-[65vh] w-[65vh] rounded-full bg-primary/20 blur-3xl"
              animate={{ x: [0, 90, 0], y: [0, 45, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -right-32 bottom-[-20%] h-[70vh] w-[70vh] rounded-full bg-secondary/20 blur-3xl"
              animate={{ x: [0, -70, 0], y: [0, -35, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <svg
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full opacity-50"
              viewBox="0 0 1200 280"
              fill="none"
            >
              <path
                d="M0,150 C90,90 180,230 270,150 C360,70 450,230 540,150 C630,70 720,230 810,150 C900,70 990,230 1080,150 C1140,110 1170,160 1200,145"
                stroke="#6EE7FF"
                strokeWidth="3"
                strokeOpacity="0.5"
              />
              <path
                d="M0,190 C90,130 180,270 270,190 C360,110 450,270 540,190 C630,110 720,270 810,190 C900,110 990,270 1080,190 C1140,150 1170,210 1200,185"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeOpacity="0.45"
              />
            </svg>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-dark" />

        <div className="container-wide relative flex min-h-screen flex-col justify-end pb-20 pt-36">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="label-chip">RoomTune</p>
            <h1 className="heading-xl mt-5 max-w-5xl">Acoustic Intelligence for every space</h1>
            <p className="mt-8 max-w-2xl text-lg text-white/85 md:text-xl">
              RoomTune helps creators and teams scan rooms, simulate outcomes, and optimize sound
              with confidence before investing in physical changes.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#waitlist" className="btn-primary">
                Join the waitlist
              </a>
              <Link href="/technology" className="btn-secondary">
                Explore the technology
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <SectionFade className="section-pad border-b border-white/10 bg-dark">
        <div className="container-wide">
          <p className="label-chip">Why RoomTune</p>
          <p className="mt-8 max-w-5xl font-heading text-3xl leading-tight tracking-[-0.02em] text-white/95 md:text-5xl md:leading-tight">
            We are building the missing layer between room geometry and real-world listening.
            RoomTune turns acoustic decisions into measurable outcomes, so every space can be tuned
            before money, time, and trust are on the line.
          </p>
        </div>
      </SectionFade>

      <SectionFade className="section-pad border-b border-white/10 bg-darker">
        <div className="container-wide">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="label-chip">How It Works</p>
              <h2 className="heading-lg mt-5">From room scan to confident setup</h2>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                className="glass-panel p-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="mb-4 text-xs uppercase tracking-[0.2em] text-white/55">
                  Step {index + 1}
                </div>
                <MediaFallback
                  src={step.image}
                  label={`${step.title} screenshot`}
                  className="h-52 w-full rounded-2xl border border-white/10 object-cover"
                />
                <h3 className="mt-5 font-heading text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionFade>

      <SectionFade className="section-pad border-b border-white/10 bg-dark">
        <div className="container-wide">
          <div className="mb-10">
            <p className="label-chip">Visual Showcase</p>
            <h2 className="heading-lg mt-5">Built for the rooms where sound matters most</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-12">
            {showcaseShots.map((shot, index) => (
              <div
                key={shot}
                className={`${index === 1 ? "md:col-span-6" : "md:col-span-3"} overflow-hidden rounded-2xl border border-white/10 bg-darker`}
              >
                <MediaFallback
                  src={shot}
                  label={`Showcase still ${index + 1}`}
                  className="h-72 w-full object-cover md:h-[420px]"
                />
              </div>
            ))}
          </div>
        </div>
      </SectionFade>

      <section id="waitlist" className="section-pad bg-darker">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="glass-panel mx-auto max-w-4xl p-8 md:p-12"
          >
            <p className="label-chip">Early Access</p>
            <h2 className="heading-lg mt-6">Join the RoomTune waitlist</h2>
            <p className="mt-4 max-w-2xl text-white/80">
              Get launch updates, private demo invites, and early product access as we ship
              RoomTune to production users.
            </p>

            <form className="mt-8 flex flex-col gap-4 sm:flex-row" onSubmit={handleWaitlistSubmit}>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-full border border-white/20 bg-black/35 px-6 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-primary"
              />
              <button type="submit" className="btn-primary min-w-44" disabled={submitState === "loading"}>
                {submitState === "loading" ? "Submitting..." : "Join waitlist"}
              </button>
            </form>

            {submitState !== "idle" && (
              <p
                className={`mt-4 text-sm ${
                  submitState === "success" ? "text-primary" : "text-red-300"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
