"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import { gsap, ScrollTrigger, useIsomorphicLayoutEffect } from "@/lib/gsap";
import { Footer } from "@/components/Footer";
import { HeroCTA } from "@/components/HeroCTA";
import { ArrowRight } from "@/components/Icons";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const HERO_DESCRIPTION =
  "A Company That Puts You in the Driver's Seat. Find the right role for you and take ownership of work that truly matters. At AMEC, we empower individuals to lead, make decisions, and grow through real challenges—not predefined paths.";

const PARTNER_LOGOS = [
  { name: "Hoora", logo: "/Careers/logos/Hoora.png", scale: 0.85 },
  { name: "Multimarine", logo: "/Careers/logos/MM.png", scale: 1.15 },
  { name: "WCT", logo: "/Careers/logos/WCT.png", scale: 1.15 },
  { name: "Meta Motors", logo: "/Careers/logos/Meta-motors.png", scale: 1.15 },
];

const HIRING_STEPS = [
  {
    key: "work",
    title: "How We Work",
    body:
      "In the Technical Round, we closely evaluate your problem-solving skills and attention to detail, giving us insight into your work style. At AMEC, we emphasize teamwork, but we equally value a strong commitment to high-quality work and precision. This round focuses on how effectively you balance efficiency with top-notch quality, showcasing your ability to solve problems while maintaining excellence and accuracy.",
  },
  {
    key: "seek",
    title: "What We Seek",
    body:
      "We look for curious engineers and operators who take ownership — people who can go from a loose brief to a validated solution without needing their hand held. Strong fundamentals, honest communication, and a bias toward building beat polish on a résumé every time.",
  },
  {
    key: "are",
    title: "Who You Are",
    body:
      "You care about getting the details right, you're comfortable sitting with ambiguity, and you'd rather ship something real than argue a diagram. If you've built things end-to-end — in school, in a job, or on your own time — you'll feel at home here.",
  },
];

const DEPARTMENTS = [
  "All Departments",
  "Compliance",
  "Customer Support",
  "Engineering",
  "Finance",
  "General Opportunities",
];

const LOCATIONS = [
  "All Locations",
  "Nagpur, India",
  "Bengaluru, India",
  "Remote",
];

type Role = {
  title: string;
  location: string;
  type: string;
  description: string;
};
type RoleCategory = { category: string; roles: Role[] };

const ROLE_CATEGORIES: RoleCategory[] = [
  {
    category: "Compliance",
    roles: [
      {
        title: "Compliance Officer",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Help us keep compliance simple and consistent across the organization. You'll own policy updates, audits, and reporting—making sure we stay aligned with standards and regulations.",
      },
    ],
  },
  {
    category: "Customer Support",
    roles: [
      {
        title: "Customer Success Manager",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Own the end-to-end relationship with our customers—onboard, train, and keep them successful as their fleets scale.",
      },
      {
        title: "Technical Support Engineer",
        location: "Bengaluru, India",
        type: "Full-time",
        description:
          "Triage field issues, work directly with engineering on root cause, and ship fixes that stay fixed.",
      },
      {
        title: "Service Coordinator",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Keep service operations running cleanly—dispatch, parts, and SLAs across our service network.",
      },
    ],
  },
  {
    category: "Engineering",
    roles: [
      {
        title: "Battery Systems Engineer",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Design and validate pack-level systems—cells, thermals, BMS integration—for next-generation EV platforms.",
      },
      {
        title: "Embedded Firmware Engineer",
        location: "Bengaluru, India",
        type: "Full-time",
        description:
          "Write production firmware for our vehicle controllers and energy systems—C/C++, drivers, and real-time constraints.",
      },
      {
        title: "Mechanical Design Engineer",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Own mechanical design from concept through DFM—structures, enclosures, and precision mechanisms.",
      },
      {
        title: "Power Electronics Engineer",
        location: "Bengaluru, India",
        type: "Full-time",
        description:
          "Design converters, inverters, and chargers—schematic to lab bring-up to production hand-off.",
      },
      {
        title: "QA Automation Engineer",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Build the test harness and automation that keeps our firmware and hardware honest as we scale.",
      },
    ],
  },
  {
    category: "Finance",
    roles: [
      {
        title: "Senior Financial Analyst",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Partner with engineering and operations leadership on budgeting, forecasting, and unit economics.",
      },
    ],
  },
  {
    category: "General Opportunities",
    roles: [
      {
        title: "Open Application",
        location: "Nagpur, India",
        type: "Full-time",
        description:
          "Don't see your role? If you're excited about what we're building, send us a note—we hire for strong people over fixed titles.",
      },
    ],
  },
];

const CULTURE_IMAGES = [
  { src: "/Careers/Images/Left.jpg", alt: "AMEC team at work" },
  { src: "/Careers/Images/Right-top.jpg", alt: "AMEC team collaboration" },
  { src: "/Careers/Images/Right-bottom.png", alt: "AMEC team planning" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function CareersPage() {
  return (
    <>
      <Hero />
      <PartnerStrip />
      <HowWeHire />
      <OpenRoles />
      <CompanyCulture />
      <ClosingCTA />
      <Footer />
    </>
  );
}

// ---------------------------------------------------------------------------
// Shell
// ---------------------------------------------------------------------------

function Shell({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-6 md:px-14 ${className}`}>
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero — full-bleed industrial image with title bottom-left and copy right
// ---------------------------------------------------------------------------

function Hero() {
  const pinRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const target = pinRef.current;
    if (!target) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-title] span", {
        autoAlpha: 0,
        y: 32,
        stagger: 0.08,
        duration: 0.8,
      })
        .from("[data-hero-cta]", { autoAlpha: 0, y: 12, duration: 0.5 }, "-=0.4")
        .from("[data-hero-sub]", { autoAlpha: 0, y: 20, duration: 0.6 }, "-=0.5");
    }, target);

    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      window.clearTimeout(refreshId);
      ctx.revert();
    };
  }, []);

  const titleLines = ["Shape Your Career", "At AMEC"];

  return (
    <section
      ref={pinRef}
      className="relative isolate h-screen w-full overflow-hidden bg-[#0a0a0a]"
    >
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/career.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        {/* Subtle full-bleed dark wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/35"
        />
        {/* Soft top + bottom gradient for text legibility */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>

      {/* Content — vertically centered; description sits beside the heading's first line */}
      <div className="relative flex h-full flex-col justify-center">
        <Shell>
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start md:gap-16">
            {/* LEFT — title + CTA */}
            <div>
              <h1
                data-hero-title
                className="heading-xl md:!text-[68px] md:!leading-[1.06]"
              >
                {titleLines.map((line, i) => (
                  <Fragment key={i}>
                    <span className="inline-block">{line}</span>
                    {i < titleLines.length - 1 ? <br /> : null}
                  </Fragment>
                ))}
              </h1>
              <div data-hero-cta className="mt-8 md:mt-10">
                <Link
                  href="#open-roles"
                  className="inline-flex items-center justify-center rounded border border-white bg-white px-6 py-2.5 font-display text-sm font-medium text-black transition-colors duration-300 ease-out hover:bg-white/90 md:px-8 md:py-3 md:text-base"
                >
                  Join the team
                </Link>
              </div>
            </div>

            {/* RIGHT — description */}
            <p
              data-hero-sub
              className="max-w-xl text-sm leading-relaxed text-white md:text-[18px]"
            >
              {HERO_DESCRIPTION}
            </p>
          </div>
        </Shell>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Partner Logos — simple strip
// ---------------------------------------------------------------------------

function PartnerStrip() {
  const ref = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-partner-logo]", {
        autoAlpha: 0,
        y: 12,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="w-full border-y border-white/[0.04] py-12 md:py-16">
      <Shell>
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-10">
          {PARTNER_LOGOS.map((p) => (
            <div
              key={p.name}
              data-partner-logo
              className="relative h-12 w-36 md:h-16 md:w-48"
              style={{ transform: `scale(${p.scale})` }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

// ---------------------------------------------------------------------------
// How We Hire — image left, heading + accordion right
// ---------------------------------------------------------------------------

function HowWeHire() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState<string>("work");

  useIsomorphicLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hwh-media]", {
        autoAlpha: 0,
        x: -24,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
      gsap.from("[data-hwh-copy]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 75%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28">
      <Shell>
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {/* LEFT — media; stretches to match the right column's height on md+ */}
          <div data-hwh-media className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-bg-card md:aspect-auto md:h-full md:min-h-[480px]">
            <Image
              src="/images/OEM-engineering.png"
              alt="AMEC hiring process"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT — heading + accordion */}
          <div data-hwh-copy>
            <h2 className="heading-lg">HOW WE HIRE?</h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#FFFFFF8C] md:text-[15px]">
              Our hiring process is designed to be transparent, rigorous, and
              respectful of your time. We look for the right balance of craft,
              collaboration, and character.
            </p>

            <div className="mt-10 flex flex-col gap-3">
              {HIRING_STEPS.map((s) => {
                const isOpen = open === s.key;
                return (
                  <div
                    key={s.key}
                    className={`rounded-xl border transition-colors ${
                      isOpen
                        ? "border-white/15 bg-white/[0.04]"
                        : "border-white/10 bg-white/[0.02] hover:border-white/15"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? "" : s.key)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-sm font-semibold text-white md:text-base">
                        {s.title}
                      </span>
                      <ChevronToggle open={isOpen} closedDirection="right" />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0">
                        <div aria-hidden className="h-px bg-white/10" />
                        <p className="px-5 pb-5 pt-5 text-xs leading-relaxed text-[#FFFFFF8C] md:text-[13px]">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Open Roles — filter + accordion per category
// ---------------------------------------------------------------------------

function OpenRoles() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [dept, setDept] = useState<string>("All Departments");
  const [loc, setLoc] = useState<string>("All Locations");
  const [query, setQuery] = useState<string>("");
  const [openCat, setOpenCat] = useState<string>("Compliance");

  useIsomorphicLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-roles-heading]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      gsap.from("[data-roles-filters]", {
        autoAlpha: 0,
        y: 16,
        duration: 0.5,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      gsap.from("[data-role-row]", {
        autoAlpha: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-roles-list]", start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ROLE_CATEGORIES.map((cat) => {
      if (dept !== "All Departments" && cat.category !== dept) {
        return { ...cat, roles: [] as Role[] };
      }
      const roles = cat.roles.filter((r) => {
        const matchesLoc = loc === "All Locations" || r.location === loc;
        const matchesQuery =
          !q ||
          r.title.toLowerCase().includes(q) ||
          r.location.toLowerCase().includes(q) ||
          cat.category.toLowerCase().includes(q);
        return matchesLoc && matchesQuery;
      });
      return { ...cat, roles };
    }).filter((c) => c.roles.length > 0);
  }, [dept, loc, query]);

  return (
    <section
      id="open-roles"
      ref={sectionRef}
      className="w-full py-20 md:py-28"
    >
      <Shell>
        <div data-roles-heading className="text-center">
          <h2 className="heading-lg">OPEN ROLES</h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-[18px] md:leading-[1.4]">
            AMEC embodies a strong culture, driven by a talented and dedicated
            team. As we grow, so does the team.
          </p>
        </div>

        {/* Filters — relative + z-30 so the dropdown lists float above the
            role rows below (GSAP transforms on each row create their own
            stacking contexts that otherwise cover the absolute dropdown). */}
        <div
          data-roles-filters
          className="relative z-30 mx-auto mt-10 grid w-full max-w-4xl gap-3 md:mt-12 md:grid-cols-[auto_1fr_1fr_1.6fr] md:items-center md:gap-3"
        >
          {/* Technology — static chip to mirror the Figma pivot label */}
          <div className="flex items-center justify-between gap-2 rounded-lg bg-[#2a2a2a] px-4 py-3 text-sm text-white md:text-[15px]">
            <span>Technology</span>
            <CaretDown className="h-3.5 w-3.5 text-white/60" />
          </div>
          <FilterSelect value={dept} onChange={setDept} options={DEPARTMENTS} />
          <FilterSelect value={loc} onChange={setLoc} options={LOCATIONS} />
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search open positions"
              className="w-full rounded-lg border border-white/10 bg-white/[0.02] py-3 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none md:text-[15px]"
            />
            <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          </div>
        </div>

        {/* List */}
        <div data-roles-list className="relative z-10 mx-auto mt-10 flex max-w-4xl flex-col gap-3">
          {filtered.length === 0 ? (
            <p className="py-10 text-center text-sm text-white/60">
              No open roles match your filters.
            </p>
          ) : (
            filtered.map((cat) => {
              const isOpen = openCat === cat.category;
              return (
                <div
                  key={cat.category}
                  data-role-row
                  className={`rounded transition-colors ${
                    isOpen
                      ? "bg-[#111111]"
                      : "border-b border-white/10 bg-transparent last:border-b-0"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenCat(isOpen ? "" : cat.category)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-white md:text-lg">
                      {cat.category}
                      <span
                        className={`ml-2 font-sans font-normal ${
                          isOpen ? "text-white" : "text-white/40"
                        }`}
                      >
                        ({cat.roles.length})
                      </span>
                    </span>
                    <ChevronToggle open={isOpen} />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0">
                      {/* Subtle divider below the heading — full card width */}
                      <div aria-hidden className="h-px bg-white/10" />
                      <div className="flex flex-col gap-8 px-6 pb-6 pt-6 md:px-8 md:pb-8">
                        {cat.roles.map((r) => (
                          <div key={`${cat.category}-${r.title}`}>
                            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                              <div>
                                <h3 className="font-display text-sm font-semibold text-white md:text-base">
                                  {r.title}
                                </h3>
                                <span className="mt-3 inline-flex items-center rounded border border-white bg-transparent px-3 py-1.5 text-xs text-white md:text-[13px]">
                                  {r.location} · {r.type}
                                </span>
                              </div>
                              <Link
                                href="/contact"
                                className="inline-flex shrink-0 items-center justify-center rounded bg-white px-5 py-2.5 font-display text-sm font-medium text-black transition hover:bg-white/90 md:text-[15px]"
                              >
                                Apply Now
                              </Link>
                            </div>
                            {r.description ? (
                              <p className="mt-6 text-xs leading-relaxed text-[#FFFFFF8C] md:text-[13px]">
                                {r.description}
                              </p>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Shell>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Company Culture — 3-image collage + copy
// ---------------------------------------------------------------------------

function CompanyCulture() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-culture-heading]", {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      gsap.from("[data-culture-img]", {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: "[data-culture-grid]", start: "top 85%" },
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-28">
      <Shell>
        <div data-culture-heading className="text-center">
          <h2 className="heading-lg">COMPANY CULTURE</h2>
        </div>

        {/* Content column — description + collage + supporting copy share the same width */}
        <div className="mx-auto mt-10 w-full max-w-6xl md:mt-14">
          <p className="text-left text-sm leading-relaxed text-white/70 md:text-[15px]">
            At AMEC, we cultivate a work culture that values people as much as
            performance. We prioritize employee well-being and believe that
            sustainable productivity comes from balance—not burnout. A healthy
            work-life balance enables our teams to perform at their best, both
            professionally and personally.
          </p>

          <div data-culture-grid className="mt-10 grid gap-3 md:mt-12 md:grid-cols-2 md:gap-4">
            <div
              data-culture-img
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-bg-card md:aspect-auto"
            >
              <Image
                src={CULTURE_IMAGES[0].src}
                alt={CULTURE_IMAGES[0].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-3 md:gap-4">
              <div
                data-culture-img
                className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-bg-card"
              >
                <Image
                  src={CULTURE_IMAGES[1].src}
                  alt={CULTURE_IMAGES[1].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div
                data-culture-img
                className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-bg-card"
              >
                <Image
                  src={CULTURE_IMAGES[2].src}
                  alt={CULTURE_IMAGES[2].alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <p className="mt-12 text-left text-sm leading-relaxed text-white/70 md:text-[15px]">
            We operate with trust, autonomy, and ownership at the core of our
            culture. Team members are empowered to make decisions, take
            responsibility for their work, and grow through real-world
            challenges. Collaboration and teamwork are deeply embedded in how we
            operate, driving innovation and efficient execution.
          </p>
        </div>
      </Shell>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Closing CTA
// ---------------------------------------------------------------------------

const CTA_HEADING_WORDS = "Ready to build the future of mobility?".split(" ");

function ClosingCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Pin the section at the top so a single scroll gesture scrubs the
      // full heading reveal before the user moves on to the footer.
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      });

      // Word-by-word scrub reveal — words start dim, brighten to full white
      // as the user scrolls through a short range (~one gesture).
      const words = gsap.utils.toArray<HTMLElement>("[data-cta-word]");
      gsap.set(words, { autoAlpha: 0.14 });
      gsap.to(words, {
        autoAlpha: 1,
        ease: "none",
        stagger: { amount: 1 },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=25%",
          scrub: 0.3,
          invalidateOnRefresh: true,
        },
      });

      // CTA button pops once the section enters, not scrubbed
      gsap.from("[data-cta-btn]", {
        autoAlpha: 0,
        y: 24,
        scale: 0.95,
        duration: 0.7,
        delay: 0.2,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: section, start: "top 70%" },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Concentric rings — centered behind the heading, matching the Figma
          radar-style backdrop. Rings get subtler the farther out they go. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        {[
          { size: 520, opacity: 0.1 },
          { size: 900, opacity: 0.07 },
          { size: 1300, opacity: 0.045 },
          { size: 1700, opacity: 0.03 },
        ].map((r) => (
          <span
            key={r.size}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: `${r.size}px`,
              height: `${r.size}px`,
              borderColor: `rgba(255,255,255,${r.opacity})`,
            }}
          />
        ))}
      </div>

      {/* Soft radial vignette to deepen the center */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-[36px] font-semibold uppercase leading-[1.08] text-white md:text-[64px] lg:text-[72px]">
          {CTA_HEADING_WORDS.map((w, i) => (
            <Fragment key={i}>
              <span data-cta-word className="inline-block">
                {w}
              </span>
              {i < CTA_HEADING_WORDS.length - 1 ? " " : null}
            </Fragment>
          ))}
        </h2>
        <div data-cta-btn className="mt-10 md:mt-14">
          <Link
            href="#open-roles"
            className="group inline-flex flex-row-reverse items-center gap-3 rounded border border-white/20 bg-transparent py-1.5 pl-1.5 pr-5 font-display text-sm font-medium text-white transition-all duration-300 ease-out hover:flex-row hover:border-white hover:bg-white hover:pl-5 hover:pr-1.5 hover:text-black md:text-base"
          >
            Apply Now
            <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded bg-white text-black transition-colors duration-300 ease-out group-hover:bg-black group-hover:text-white md:h-8 md:w-8">
              <ArrowRight className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Small UI bits
// ---------------------------------------------------------------------------

function ChevronToggle({
  open,
  closedDirection = "down",
}: {
  open: boolean;
  closedDirection?: "down" | "right";
}) {
  const isRight = closedDirection === "right";
  const path = isRight ? "m9 6 6 6-6 6" : "m6 9 6 6 6-6";
  const rotation = isRight
    ? open
      ? "rotate-90"
      : ""
    : open
    ? "rotate-180"
    : "";
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-white/70 transition-transform duration-300 ${rotation}`}
    >
      <path d={path} />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(0, options.indexOf(value))
  );
  const rootRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLLIElement>(
      `[data-index="${activeIndex}"]`
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [open, activeIndex]);

  const choose = (v: string) => {
    onChange(v);
    setActiveIndex(Math.max(0, options.indexOf(v)));
    setOpen(false);
  };

  const onTriggerKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const onListKey = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      choose(options[activeIndex]);
    }
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className={`flex w-full items-center justify-between gap-3 rounded-lg border bg-white/[0.02] px-4 py-3 text-left text-sm text-white outline-none transition md:text-[15px] ${
          open
            ? "border-white/40 bg-white/[0.05]"
            : "border-white/10 hover:border-white/20"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={onTriggerKey}
      >
        <span>{value}</span>
        <CaretDown
          className={`h-3.5 w-3.5 shrink-0 text-white/60 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          onKeyDown={onListKey}
          className="absolute left-0 top-full z-50 mt-2 min-w-full max-h-80 overflow-auto whitespace-nowrap rounded-lg border border-white/10 bg-[#141414] p-1 shadow-[0_12px_32px_rgba(0,0,0,0.5)] focus:outline-none"
        >
          {options.map((opt, i) => {
            const selected = value === opt;
            const active = i === activeIndex;
            return (
              <li
                key={opt}
                data-index={i}
                role="option"
                aria-selected={selected}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => choose(opt)}
                className={`cursor-pointer whitespace-nowrap rounded-md px-4 py-2.5 text-sm transition-colors md:text-[15px] ${
                  selected
                    ? "bg-white/[0.06] text-white"
                    : active
                    ? "bg-white/[0.04] text-white"
                    : "text-white/70 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                {opt}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function CaretDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
