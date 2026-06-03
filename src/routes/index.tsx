import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/your-handle/strategy-call";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Prop Firms Arbitrage Framework — The Traders Academy" },
      {
        name: "description",
        content:
          "A risk-managed hedging framework that lets serious traders pass prop firm challenges and pull consistent payouts — by arbitraging prop firms against a brokerage account. Watch the training, then book your implementation call.",
      },
      { property: "og:title", content: "The Prop Firms Arbitrage Framework — The Traders Academy" },
      {
        property: "og:description",
        content:
          "Hedge prop firms against each other for profit. 100% legal. Watch the training and book your implementation call.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen text-foreground">
      <TopBar />
      <Hero />
      <Guarantee />
      <HowItWorks />
      <ForWho />
      <Outcomes />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="border-b border-border/40 bg-navy-deep/70 backdrop-blur-md sticky top-0 z-40">
      <div className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-md bg-gradient-to-br from-gold to-gold-bright shadow-gold" />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-tight">The Traders Academy</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">PFA Framework</div>
          </div>
        </div>
        <a
          href="#book"
          className="hidden sm:inline-flex items-center text-sm font-medium text-gold hover:text-gold-bright transition-colors"
        >
          Book a call →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-14 pb-20 sm:pt-20">
      <div className="mx-auto max-w-4xl text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          The Prop Firms Arbitrage Framework
        </div>

        <h1 className="mt-7 font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
          The Only Educational Course You'll Ever Need To Finally Get Funded And To Become Profitable.{" "}
          <span className="text-gradient-gold">Or a 100% REFUND</span>
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          Watch the short training below to see how serious traders are passing prop firm challenges and getting paid every month - then book a free implementation call to apply it to your account.
        </p>
      </div>

      <VSL />

      <div id="book" className="mt-10 flex flex-col items-center gap-4 animate-fade-up">
        <CTAButton>Yes — Book My Implementation Call</CTAButton>
        <p className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold" />
          Limited spots this week · No cost · 1-on-1 with our team
        </p>
      </div>
    </section>
  );
}

function VSL() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Replace this with your real VSL: YouTube/Vimeo embed or hosted MP4 URL.
  const VIDEO_SRC = ""; // e.g. "/videos/vsl.mp4"

  useEffect(() => {
    if (playing && videoRef.current) videoRef.current.play().catch(() => {});
  }, [playing]);

  return (
    <div className="relative mx-auto mt-12 max-w-4xl">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-gold/30 via-transparent to-gold/10 blur-2xl opacity-60" />
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/40 bg-navy-deep shadow-elevated">
        {VIDEO_SRC ? (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            controls={playing}
            playsInline
            className="size-full object-cover"
            onClick={() => setPlaying(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.28_0.07_265)_0%,oklch(0.12_0.04_265)_75%)]" />
        )}

        {!playing && (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 group"
            aria-label="Play the training video"
          >
            <span className="relative flex size-20 sm:size-24 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-bright shadow-gold animate-pulse-gold transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="size-9 sm:size-10 translate-x-0.5 fill-navy-deep">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-sm uppercase tracking-[0.25em] text-gold/90 font-medium">
              Watch the training · 12 min
            </span>
            <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-foreground/70">
              <span className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-red-500 animate-pulse" />
                LIVE TRAINING
              </span>
              <span>Sound On 🔊</span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-gold to-gold-bright px-8 sm:px-10 py-5 text-base sm:text-lg font-semibold text-navy-deep shadow-gold transition-all hover:scale-[1.02] hover:shadow-[0_15px_60px_-10px_oklch(0.86_0.14_88/0.6)] animate-pulse-gold"
    >
      {children}
      <svg viewBox="0 0 24 24" className="size-5 transition-transform group-hover:translate-x-1 fill-navy-deep">
        <path d="M13 5l7 7-7 7v-4H4v-6h9z" />
      </svg>
    </a>
  );
}

function Guarantee() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-6 sm:p-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Our Guarantee</p>
        <p className="mt-3 font-display text-2xl sm:text-3xl leading-snug">
          “If you don't become funded or generate profits,{" "}
          <span className="text-gradient-gold">you get a full refund.</span> No questions asked.”
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Open the positions",
      d: "Take a trade on a 1-step prop firm challenge and the exact opposite trade on your brokerage account. One side wins, the other loses — by design.",
    },
    {
      n: "02",
      t: "Engineer the outcome",
      d: "Pre-calculated risk ratios mean either you pass the challenge and get funded, or the hedge on your broker fully covers the cost of the lost challenge.",
    },
    {
      n: "03",
      t: "Get paid",
      d: "Once funded, scale lot sizing using the PFA formula. Whether the funded account hits payout or breaches drawdown, the structure leaves you in profit.",
    },
  ];
  return (
    <section className="px-6 py-16 sm:py-20 border-t border-border/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-gold/80">
          How the PFA Framework Works
        </p>
        <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
          Two accounts. One formula.{" "}
          <span className="text-gradient-gold">Asymmetric outcomes.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          The PFA Framework is a risk management and execution system — not a
          signal service, not a strategy course. It's a structured way to
          arbitrage prop firms using one brokerage account as a hedge. 100% legal.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-gold/20 bg-card/60 p-7 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ForWho() {
  const items = [
    "You've blown one (or several) prop firm challenges and you're tired of handing evaluation fees to the firm.",
    "You're profitable on demo but emotion kicks in the moment real drawdown rules apply.",
    "You want a mechanical, risk-defined framework — not 'discipline' lectures, signals, or another scalping strategy.",
  ];
  return (
    <section className="px-6 py-16 sm:py-20 border-t border-border/40">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-semibold">
          This is for you if<span className="text-gold">…</span>
        </h2>
        <ul className="mt-10 space-y-4">
          {items.map((t) => (
            <li
              key={t}
              className="flex gap-4 rounded-xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm"
            >
              <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <svg viewBox="0 0 24 24" className="size-4 fill-current">
                  <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                </svg>
              </span>
              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">{t}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Outcomes() {
  const stats = [
    { k: "2 Outcomes", v: "Either you breakeven on a failed challenge, or you pass and scale to payouts" },
    { k: "1 Framework", v: "Mechanical execution rules — no guessing, no over-discretion, no guru hopium" },
    { k: "100% Legal", v: "Pure risk arbitrage between independent prop firms and your own broker account" },
  ];
  return (
    <section className="px-6 py-16 sm:py-20 border-t border-border/40">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-gold/80">
          What you can expect
        </p>
        <h2 className="mt-3 text-center font-display text-3xl sm:text-4xl font-semibold">
          A defined-risk path to a funded account
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.k}
              className="rounded-2xl border border-gold/20 bg-card/60 p-8 text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="font-display text-4xl text-gradient-gold font-semibold">{s.k}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border/40">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-navy-mid to-navy-deep p-10 sm:p-14 text-center shadow-elevated">
        <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gold/20 blur-3xl" />
        <h2 className="relative font-display text-3xl sm:text-5xl font-semibold leading-tight">
          Stop gambling on challenges.{" "}
          <span className="text-gradient-gold">Start arbitraging them.</span>
        </h2>
        <p className="relative mt-5 text-lg text-muted-foreground">
          Book your free 1-on-1 implementation call. We'll walk you through the
          PFA Framework setup for your account — and our refund guarantee.
        </p>
        <div className="relative mt-9 flex flex-col items-center gap-4">
          <CTAButton>Book My Free Implementation Call</CTAButton>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Only 7 spots open this week
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-6 py-10 border-t border-border/40">
      <div className="mx-auto max-w-6xl text-center text-xs text-muted-foreground space-y-2">
        <p>
          © {new Date().getFullYear()} The Traders Academy — The Prop Firms Arbitrage Framework.
          Trading involves risk. Past performance does not guarantee future results.
        </p>
        <p className="text-muted-foreground/70">
          Not affiliated with any prop firm or broker. The PFA Framework is a risk management
          and execution methodology. Results vary based on individual execution and market conditions.
        </p>
      </div>
    </footer>
  );
}
