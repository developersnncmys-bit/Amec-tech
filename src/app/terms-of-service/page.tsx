import { Footer } from "@/components/Footer";

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const SECTIONS: Array<{
  title: string;
  paragraphs?: string[];
  intro?: string;
  bullets?: string[];
}> = [
  {
    title: "About AMEC",
    paragraphs: [
      "AMEC Mobility Private Limited operates as an engineering-driven technology organization working across mobility, energy, and digital technology domains.",
      "The AMEC Group website presents information relating to areas including electric mobility, EV drivetrain systems, renewable energy systems, OEM engineering, digital platforms, and related technology concepts. The website may also provide information about AMEC's business verticals, projects, career opportunities, and services.",
    ],
  },
  {
    title: "Use of the Website",
    paragraphs: [
      "You may use this website for lawful purposes and in accordance with these Terms.",
    ],
    intro: "You agree not to:",
    bullets: [
      "Use the website for any unlawful or unauthorized purpose.",
      "Attempt to gain unauthorized access to the website, its systems, servers, or databases.",
      "Interfere with or disrupt the operation or security of the website.",
      "Copy, reproduce, modify, distribute, or commercially exploit website content without appropriate authorization.",
      "Use website content in a way that infringes AMEC's intellectual property rights or the rights of others.",
      "Submit false, misleading, or unauthorized information through website forms.",
    ],
  },
  {
    title: "Website Content",
    paragraphs: [
      "The information published on this website is provided for general informational and business purposes.",
      "AMEC makes reasonable efforts to ensure that website information is accurate and current. However, information may change as products, technologies, projects, services, and business activities evolve.",
      "AMEC does not guarantee that all website content will always be complete, current, or error-free.",
    ],
  },
  {
    title: "Products, Technologies and Concepts",
    paragraphs: [
      "AMEC's website may contain information about products, technologies, prototypes, concepts, research, engineering capabilities, and projects.",
      "Some products or technologies presented on the website may be under development, evaluation, testing, prototyping, or commercialization.",
      "The appearance of a product, technology, or concept on the website does not necessarily mean that it is commercially available, available in every location, or available for purchase.",
      "Technical specifications, features, availability, and other information may change without prior notice.",
    ],
  },
  {
    title: "Business Enquiries",
    paragraphs: [
      "The website provides contact forms and enquiry channels for business discussions, partnerships, OEM/product development, mobility and EV solutions, renewable energy systems, support, and general enquiries.",
      "Submitting an enquiry does not create a contract, partnership, commercial relationship, employment relationship, or other binding obligation between you and AMEC.",
      "Any commercial relationship or engagement will be subject to separately agreed terms and documentation.",
    ],
  },
  {
    title: "Third-Party Websites and Services",
    paragraphs: [
      "The website may contain links to third-party websites, platforms, social-media pages, services, or resources.",
      "These third-party websites are not controlled by AMEC. AMEC is not responsible for the availability, content, privacy practices, security, or policies of third-party websites.",
      "Your use of third-party services is subject to their respective terms and policies.",
    ],
  },
  {
    title: "Website Availability and Security",
    paragraphs: [
      "AMEC aims to maintain the availability and security of its website. However, we do not guarantee that the website will always be:",
    ],
    bullets: [
      "Available without interruption;",
      "Free from errors;",
      "Free from viruses or other harmful components; or",
      "Compatible with every device, browser, or technical environment.",
    ],
  },
  {
    title: "Technical and Product Information",
    paragraphs: [
      "Information relating to technical specifications, performance, capabilities, applications, engineering systems, and technologies is provided for general informational purposes.",
      "Actual performance and suitability may depend on operating conditions, configuration, integration, environment, application, and other factors.",
      "Technical information available on the website should not be treated as a substitute for product documentation, technical specifications, engineering assessments, or professional advice.",
    ],
  },
  {
    title: "Disclaimer",
    paragraphs: [
      "To the maximum extent permitted by applicable law, the website and its content are provided on an “as is” and “as available” basis.",
      "AMEC does not make warranties or representations regarding the uninterrupted availability, completeness, accuracy, or suitability of the website or its content for a particular purpose, except where such warranties cannot legally be excluded.",
      "Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable law.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by applicable law, AMEC shall not be responsible for indirect, incidental, consequential, special, or similar losses arising from or relating to the use of, or inability to use, the website.",
      "This limitation does not apply to liabilities that cannot legally be excluded or limited under applicable law.",
    ],
  },
  {
    title: "Indemnification",
    paragraphs: [
      "To the extent permitted by applicable law, you agree to be responsible for losses, claims, liabilities, damages, or expenses arising from your unlawful use of the website, violation of these Terms, or infringement of the rights of AMEC or another party.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "AMEC may update or modify these Terms from time to time.",
      "Updated Terms will be published on this page with the revised effective date. Your continued use of the website after an update constitutes your continued use of the website subject to the updated Terms, to the extent permitted by applicable law.",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    paragraphs: [
      "These Terms shall be governed by and interpreted in accordance with the laws of India.",
      "Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra, India, to the extent permitted by applicable law.",
    ],
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TermsOfServicePage() {
  return (
    <>
      {/* Title block */}
      <section className="w-full border-b border-white/[0.06] px-6 pb-16 pt-32 md:px-14 md:pb-24 md:pt-40">
        <div className="mx-auto w-full max-w-[1200px]">
          <h1 className="font-display text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
            TERMS OF SERVICE
          </h1>
        </div>
      </section>

      {/* Content — two-column: section title left, body right */}
      <section className="w-full px-6 py-16 md:px-14 md:py-24">
        <div className="mx-auto w-full max-w-[1200px]">
          {SECTIONS.map((s) => (
            <div
              key={s.title}
              className="grid gap-6 border-b border-white/[0.06] py-10 last:border-b-0 md:grid-cols-[280px_1fr] md:gap-16 md:py-12"
            >
              <h2 className="font-display text-base font-semibold text-white md:text-lg">
                {s.title}
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-[#FFFFFF8C] md:text-[15px]">
                {s.paragraphs?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.intro ? <p>{s.intro}</p> : null}
                {s.bullets ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}

          {/* Contact Us — mirrors the two-column layout but with the address grid */}
          <div className="grid gap-6 border-t border-white/[0.06] pt-10 md:grid-cols-[280px_1fr] md:gap-16 md:pt-12">
            <h2 className="font-display text-base font-semibold text-white md:text-lg">
              Contact Us
            </h2>
            <div className="grid gap-10 text-sm leading-relaxed text-[#FFFFFF8C] md:grid-cols-2 md:text-[15px]">
              <div className="space-y-1">
                <p>AMEC Mobility Private Limited</p>
                <p>Plot No. 5A, 13A MIDC,</p>
                <p>Beside Tata Motors Service Centre,</p>
                <p>Hingna MIDC,</p>
                <p>Nagpur “ 440016, Maharashtra, India.</p>
              </div>
              <div className="space-y-4">
                <div>
                  <p>Legal / General Contact:</p>
                  <p>amecmobility@gmail.com</p>
                </div>
                <div>
                  <p>HR / Careers:</p>
                  <p>hr@amectechnology.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
