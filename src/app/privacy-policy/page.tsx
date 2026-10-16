import { Footer } from "@/components/Footer";

// ---------------------------------------------------------------------------
// Content — in order, as the Figma shows (no sidebar labels, just flowing
// paragraphs with a "Career information" sub-heading mid-way)
// ---------------------------------------------------------------------------

type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

const BLOCKS: Block[] = [
  {
    type: "p",
    text:
      "Depending on how you interact with our website, we may collect information such as your full name, email address, phone number, company or organization, enquiry type, message or enquiry details, and information contained in communications you send to us.",
  },
  {
    type: "p",
    text:
      "When you submit an enquiry, contact us, apply for a career opportunity, or otherwise communicate with us, we may collect the information you provide.",
  },
  {
    type: "p",
    text:
      "Our website contact form is designed to collect information such as name, email, optional phone number, company/organization, enquiry type, and message.",
  },
  {
    type: "p",
    text:
      "The website provides enquiry categories including sales/partnership, OEM/product development, mobility and EV solutions, renewable energy systems, career/human resources, support/service, and general enquiries.",
  },
  { type: "h3", text: "Career information" },
  {
    type: "p",
    text:
      "If you apply for a position or contact AMEC regarding employment, we may collect information you voluntarily provide as part of the recruitment process.",
  },
  {
    type: "p",
    text:
      "This may include information contained in your application, resume/CV, qualifications, professional experience, and communications with our HR team.",
  },
  {
    type: "p",
    text: "Career enquiries are handled through: hr@amectechnology.com",
  },
  {
    type: "p",
    text:
      "When you visit our website, certain technical information may be collected automatically, depending on the website's configuration and services being used.",
  },
  {
    type: "p",
    text:
      "This may include your IP address, browser type and version, device type, operating system, pages visited, website activity, date and time of access, and technical and performance information.",
  },
  {
    type: "p",
    text:
      "This information may be used to maintain website functionality, security, performance, and reliability.",
  },
  { type: "p", text: "We may use information collected through the website to:" },
  {
    type: "p",
    text:
      "We may use this information to respond to enquiries and requests, communicate with you regarding products, services, partnerships, or business opportunities, respond to support and service requests, process and communicate regarding career enquiries and applications, improve website content, functionality, and user experience, maintain website security and prevent misuse, support internal business and administrative operations, and comply with applicable legal and regulatory requirements.",
  },
  {
    type: "p",
    text:
      "If you contact AMEC through the website, we may use the information you provide to respond to your enquiry and communicate with you regarding the subject of your request.",
  },
  {
    type: "p",
    text:
      "Where applicable, you may opt out of non-essential marketing or promotional communications.",
  },
  { type: "p", text: "AMEC does not sell or rent your personal information." },
  { type: "p", text: "We may share information where reasonably necessary with:" },
  {
    type: "ul",
    items: [
      "Authorized employees or representatives who need the information to respond to your request.",
      "Service providers supporting website hosting, technology, communications, security, or business operations.",
      "Professional advisers where reasonably necessary.",
      "Government authorities, regulators, courts, or law enforcement bodies where required by applicable law.",
    ],
  },
  {
    type: "p",
    text:
      "We take reasonable steps to ensure that information is handled appropriately by parties that process it on our behalf.",
  },
  {
    type: "p",
    text:
      "AMEC takes reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, disclosure, or destruction.",
  },
  {
    type: "p",
    text:
      "However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.",
  },
  {
    type: "p",
    text:
      "You should avoid submitting sensitive information through website forms unless it is specifically requested and appropriate for the purpose.",
  },
  {
    type: "p",
    text:
      "AMEC may retain personal information for as long as reasonably necessary for the purpose for which it was collected, including responding to enquiries, managing business relationships, processing recruitment activities, maintaining records, resolving disputes, and complying with applicable legal obligations.",
  },
  {
    type: "p",
    text:
      "The applicable retention period may vary depending on the type and purpose of the information.",
  },
  {
    type: "p",
    text:
      "Depending on applicable law, you may have rights relating to your personal information, including the ability to:",
  },
  {
    type: "ul",
    items: [
      "Request access to personal information held about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of personal information where legally applicable.",
      "Withdraw consent where processing is based on consent.",
      "Object to or restrict certain processing where applicable.",
      "Opt out of certain marketing communications.",
    ],
  },
  {
    type: "p",
    text: "Requests may be submitted using the contact information provided below.",
  },
  {
    type: "p",
    text: "Certain requests may be subject to legal or other applicable limitations.",
  },
  { type: "p", text: "This website is not specifically directed toward children." },
  {
    type: "p",
    text:
      "We do not knowingly seek to collect personal information from children through the website. If you believe that a child has provided personal information to us, please contact us so that the matter can be reviewed and appropriate action can be taken where required.",
  },
  {
    type: "p",
    text:
      "AMEC may update this Privacy Policy from time to time to reflect changes to our website, services, technologies, business practices, or applicable legal requirements.",
  },
  {
    type: "p",
    text: "Any updated version will be published on this page with a revised effective date.",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Title block */}
      <section className="w-full border-b border-white/[0.06] px-6 pb-16 pt-32 md:px-14 md:pb-24 md:pt-40">
        <div className="mx-auto w-full max-w-[1200px]">
          <h1 className="font-display text-4xl font-semibold uppercase tracking-tight text-white md:text-6xl">
            PRIVACY POLICY
          </h1>
        </div>
      </section>

      {/* Content — single column, flowing paragraphs */}
      <section className="w-full px-6 py-16 md:px-14 md:py-24 tablet:px-8 tablet:py-20">
        <div className="mx-auto w-full max-w-[900px] space-y-6 text-sm leading-relaxed text-[#FFFFFF8C] md:text-[15px] tablet:max-w-[720px]">
          {BLOCKS.map((b, i) => {
            if (b.type === "h3") {
              return (
                <p key={i} className="pt-4">
                  {b.text}
                </p>
              );
            }
            if (b.type === "ul") {
              return (
                <ul key={i} className="list-disc space-y-2 pl-5">
                  {b.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }
            return <p key={i}>{b.text}</p>;
          })}

          {/* Contact block at the end — matches the Figma's two-column address */}
          <div className="grid gap-10 pt-10 md:grid-cols-2">
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
      </section>

      <Footer />
    </>
  );
}
