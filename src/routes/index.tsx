import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import payout1 from "@/assets/payouts/p1.jpg.asset.json";
import payout2 from "@/assets/payouts/p2.jpg.asset.json";
import payout3 from "@/assets/payouts/p3.jpg.asset.json";
import payout4 from "@/assets/payouts/p4.jpg.asset.json";
import payout5 from "@/assets/payouts/p5.jpg.asset.json";
import payout6 from "@/assets/payouts/p6.jpg.asset.json";
import payout7 from "@/assets/payouts/p7.jpg.asset.json";
import payout8 from "@/assets/payouts/p8.jpg.asset.json";
import payout9 from "@/assets/payouts/p9.jpg.asset.json";
import payout10 from "@/assets/payouts/p10.jpg.asset.json";
import payout11 from "@/assets/payouts/p11.jpg.asset.json";
import payout12 from "@/assets/payouts/p12.jpg.asset.json";
import payout13 from "@/assets/payouts/p13.jpg.asset.json";
import payout14 from "@/assets/payouts/p14.jpg.asset.json";
import payout15 from "@/assets/payouts/p15.jpg.asset.json";
import payout16 from "@/assets/payouts/p16.jpg.asset.json";
import payout17 from "@/assets/payouts/p17.jpg.asset.json";
import payout18 from "@/assets/payouts/p18.jpg.asset.json";
import payout19 from "@/assets/payouts/p19.jpg.asset.json";
import payout20 from "@/assets/payouts/p20.jpg.asset.json";
import payout21 from "@/assets/payouts/p21.jpg.asset.json";
import payout22 from "@/assets/payouts/p22.jpg.asset.json";
import payout23 from "@/assets/payouts/p23.jpg.asset.json";
import payout24 from "@/assets/payouts/p24.jpg.asset.json";
import payout25 from "@/assets/payouts/p25.jpg.asset.json";
import payout26 from "@/assets/payouts/p26.jpg.asset.json";
import payout27 from "@/assets/payouts/p27.jpg.asset.json";
import payout28 from "@/assets/payouts/p28.png.asset.json";
import payout29 from "@/assets/payouts/p29.jpg.asset.json";
import payout33 from "@/assets/payouts/p33.jpg.asset.json";

// Rails grouped by prop firm. p10 and p29 appear only once (dedup).
// p9 (Falcon Funded "Withdrawal Approved") and p28 (FundedNext
// "Performance Reward") are moved to the bottom rail and duplicated for
// extended viewer exposure.

// Top rail — Hola Prime, then Rise family (Holaprime, Falcon Funded, FN,
// Challenge Tech).
const RAIL_TOP: { url: string }[] = [
  // Hola Prime withdrawal requests (dark template)
  payout2, payout3, payout1, payout5, payout4,
  // Rise — Holaprime payments
  payout8, payout6, payout7,
  // Rise — Falcon Funded / FundedNext
  payout10, payout29,
  // Rise — Challenge Technologies FZCO payments
  payout19, payout20, payout17, payout18, payout14, payout16, payout15,
] as { url: string }[];

// Bottom rail — Falcon Funded + FundedNext confirmations (extra exposure)
// interleaved with all FXRK proofs.
const RAIL_BOTTOM: { url: string }[] = [
  // Falcon Funded + FundedNext (large, prime first slot)
  payout9, payout28,
  // FXRK reward emails
  payout25, payout27, payout24, payout26, payout23, payout22,
  // FXRK "All Submitted" tables
  payout21, payout33,
  // Falcon Funded + FundedNext again (second exposure pass)
  payout9, payout28,
  // FXRK Payout History tables ($13,435.51 totals)
  payout11, payout12, payout13,
] as { url: string }[];


const CALENDLY_URL = "https://calendly.com/your-handle/strategy-call";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Prop Firms Hedge Blueprint — The Traders Academy" },
      {
        name: "description",
        content:
          "A risk-managed hedging framework that lets serious traders pass prop firm challenges and pull consistent payouts — by arbitraging prop firms against a brokerage account. Watch the training, then book your implementation call.",
      },
      { property: "og:title", content: "The Prop Firms Hedge Blueprint — The Traders Academy" },
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
      <PayoutProof />
      <SocialProof />
      <Guarantee />
      <ForWho />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function PayoutRail({
  payouts,
  reverse = false,
  rowIndex,
}: {
  payouts: { url: string }[];
  reverse?: boolean;
  rowIndex: number;
}) {
  // Duplicate for seamless loop
  const items = [...payouts, ...payouts];
  return (
    <div className="relative">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-navy-deep to-transparent" />

      <div className={`${reverse ? "marquee-track-reverse" : "marquee-track"} flex gap-6 w-max py-4`}>
        {items.map((src, i) => (
          <figure
            key={`${rowIndex}-${i}`}
            className="relative shrink-0 w-[260px] sm:w-[300px] h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-gold/30 bg-card shadow-elevated group transition-transform hover:scale-[1.03]"
          >
            <img
              src={src.url}
              alt={`Verified prop firm payout proof ${(i % payouts.length) + 1}`}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-deep/95 to-transparent" />
            <figcaption className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-xs text-foreground/90">
              <span className="size-2 rounded-full bg-green-400 animate-pulse" />
              <span className="uppercase tracking-[0.18em] text-gold/90">Verified payout</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PayoutProof() {
  return (
    <section className="relative px-0 py-16 sm:py-20 border-t border-border/40 overflow-hidden">
      <div className="px-6 text-center mb-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-gold">
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Live Milestones
        </div>
        <h2 className="mt-5 font-display text-3xl sm:text-5xl font-semibold leading-tight">
          Real Payouts.{" "}
          <span className="text-gradient-gold">Real Proof.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          A live showcase of actual prop firm payout milestones and performance metrics.
        </p>
      </div>

      <div className="space-y-4">
        <PayoutRail payouts={RAIL_TOP} rowIndex={0} />
        <PayoutRail payouts={RAIL_BOTTOM} reverse rowIndex={1} />
      </div>


      <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Live Prop Firm Payouts History · View latest withdrawals
      </p>
    </section>
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
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold/80">Prop Firm Playbook™</div>
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
          THE PROP FIRM PLAYBOOK™
        </div>

        <h1 className="mt-7 font-display text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
          How Traders Are Passing Prop Firm Challenges With Ease And Getting Paid Every Month.
        </h1>

        <p className="mt-7 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
          This is the only system you'll ever need to finally get funded and start generating profits consistently.{" "}
          <span className="font-semibold text-gradient-gold">Or we'll give you a 100% Refund</span>
          {" "}— Watch the video below and book a free implementation call.
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

function SocialProof() {
  const stats = [
    { n: "2024", l: "marks the start of helping dozens of traders pass evaluations and secure funded accounts" },
    { n: "$3M+", l: "In combined funded capital through passing evaluation challenges" },
    { n: "14 Days", l: "on average to pass evaluation challenges and get funded" },
    { n: "1-on-1", l: "dedicated personal guidance until you are funded and can confidently execute our system independently" },
  ];
  return (
    <section className="px-6 py-10 sm:py-14 border-t border-border/40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((s) => (
            <div key={s.n} className="space-y-2">
              <div className="font-display text-5xl sm:text-6xl text-gradient-gold font-semibold">
                {s.n}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="px-6 pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/10 to-transparent p-6 sm:p-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Our Guarantee</p>
        <p className="mt-3 font-display text-2xl sm:text-3xl leading-snug">
          “If you don't become funded or generate profits using our system,{" "}
          <span className="text-gradient-gold">you get a full refund.</span> No questions asked.”
        </p>
      </div>
    </section>
  );
}





function ForWho() {
  const items = [
    "You're tired of blowing through countless evaluation challenges and losing your money to prop firms.",
    "You're completely new to prop firm trading and want to start off the right way.",
    "You want a mechanical, risk-defined framework that is easy to execute without having to learn overcomplicated trading strategies.",
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




function FinalCTA() {
  return (
    <section className="px-6 py-20 sm:py-28 border-t border-border/40">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-navy-mid to-navy-deep p-10 sm:p-14 text-center shadow-elevated">
        <div className="absolute -top-20 -right-20 size-64 rounded-full bg-gold/20 blur-3xl" />
        <h2 className="relative font-display text-3xl sm:text-5xl font-semibold leading-tight">
          Stop gambling on challenges.{" "}
          <span className="text-gradient-gold">Start playing the game correctly.</span>
        </h2>
        <p className="relative mt-5 text-lg text-muted-foreground">
          Book your free 1-on-1 implementation call. We'll walk you through the Prop Firm Playbook™ and to see if we're a good fit.
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
          © {new Date().getFullYear()} The Traders Academy — The Prop Firm Playbook™.
          Trading involves risk. Past performance does not guarantee future results.
        </p>
        <p className="text-muted-foreground/70">
          Not affiliated with any prop firm or broker. The Prop Firm Playbook™ is a risk management
          and execution methodology. Results vary based on individual execution and market conditions.
        </p>
      </div>
    </footer>
  );
}
