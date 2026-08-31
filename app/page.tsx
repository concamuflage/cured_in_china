const treatmentSteps = [
  {
    title: "Share your case",
    detail:
      "Upload records, imaging summaries, diagnosis notes, and goals so the care team can understand what you need.",
  },
  {
    title: "Compare care options",
    detail:
      "Review hospital pathways, estimated timelines, interpreter support, and transparent cost ranges before you travel.",
  },
  {
    title: "Travel with support",
    detail:
      "Coordinate appointments, translation, local logistics, and follow-up planning from arrival through recovery.",
  },
];

const blogPosts = [
  {
    category: "Planning",
    title: "How Americans Can Prepare Medical Records for Treatment Abroad",
    excerpt:
      "A practical checklist for organizing labs, scans, medication lists, and physician notes before requesting a review.",
  },
  {
    category: "Costs",
    title: "What Makes Specialty Care in China More Affordable?",
    excerpt:
      "Understand the factors behind lower self-pay prices and the questions to ask before comparing treatment estimates.",
  },
  {
    category: "Travel",
    title: "What to Expect During a Supported Medical Trip",
    excerpt:
      "From airport pickup to translated discharge notes, see how guided coordination can reduce uncertainty.",
  },
];

const faqs = [
  {
    question: "Is CuredInChina a hospital?",
    answer:
      "No. CuredInChina is a patient coordination service that helps Americans explore treatment options with qualified providers in China.",
  },
  {
    question: "Can you guarantee a treatment price or outcome?",
    answer:
      "No medical outcome can be guaranteed. Final pricing depends on the provider review, diagnosis, procedure plan, length of stay, and recovery needs.",
  },
  {
    question: "Do I need to speak Mandarin?",
    answer:
      "No. Interpreter and translation support can be coordinated for appointments, records, travel instructions, and discharge planning.",
  },
  {
    question: "What treatments can I ask about?",
    answer:
      "Patients commonly ask about second opinions, orthopedic care, dental procedures, oncology consultations, rehabilitation, and advanced diagnostics.",
  },
];

/**
 * Renders the CuredInChina landing page.
 *
 * Example: a visitor looking for orthopedic care sees a clear path from
 * sharing records to comparing options and arranging supported travel.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf9ff] text-[#251a35]">
      <section className="relative overflow-hidden border-b border-[#e8def8] bg-[radial-gradient(circle_at_20%_20%,#f1e6ff_0,#fbf9ff_38%,#ffffff_100%)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a className="text-xl font-bold tracking-normal text-[#4b217c]" href="#">
            CuredInChina
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-[#5d4d70] sm:flex">
            <a href="#about">About Us</a>
            <a href="#blogs">Blogs</a>
            <a href="#faqs">FAQs</a>
          </div>
          <a
            className="rounded-full bg-[#5b2c83] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#5b2c83]/20"
            href="mailto:care@curedinchina.com"
          >
            Request Guidance
          </a>
        </nav>

        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pb-20 md:pt-14">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#cbb4ec] bg-white/80 px-3 py-1 text-sm font-semibold text-[#5b2c83]">
              Affordable care coordination for Americans
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-normal text-[#251a35] sm:text-5xl lg:text-6xl">
              Find trusted treatment options in China with less uncertainty.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d4d70]">
              CuredInChina helps U.S. patients explore lower-cost care abroad,
              compare provider options, and plan each step with medical
              translation and travel support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-[#5b2c83] px-6 py-3 text-center font-semibold text-white shadow-md shadow-[#5b2c83]/20"
                href="mailto:care@curedinchina.com"
              >
                Start a Case Review
              </a>
              <a
                className="rounded-full border border-[#b79bdc] bg-white px-6 py-3 text-center font-semibold text-[#4b217c]"
                href="#faqs"
              >
                Read FAQs
              </a>
            </div>
          </div>

          <div className="rounded-[8px] border border-[#e3d8f2] bg-white p-4 shadow-xl shadow-[#5b2c83]/10">
            <img
              alt="Care coordinator reviewing medical travel options with a patient and family member"
              className="mb-4 aspect-[16/9] w-full rounded-[8px] object-cover"
              src="/og.png"
            />
            <div className="rounded-[8px] bg-[#f4effb] p-5">
              <p className="text-sm font-semibold uppercase tracking-normal text-[#6c3a99]">
                Patient pathway
              </p>
              <div className="mt-5 space-y-4">
                {treatmentSteps.map((step, index) => (
                  <div
                    className="rounded-[8px] border border-[#e4d9f1] bg-white p-4"
                    key={step.title}
                  >
                    <div className="mb-2 flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full bg-[#5b2c83] text-sm font-bold text-white">
                        {index + 1}
                      </span>
                      <h2 className="text-base font-bold text-[#251a35]">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-sm leading-6 text-[#625371]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" id="about">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
              About Us
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-[#251a35]">
              Built for patients comparing serious care decisions.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#5d4d70]">
            <p>
              CuredInChina guides Americans who are evaluating affordable
              treatment in China. We focus on clear communication, provider
              matching, travel readiness, and practical support before, during,
              and after the visit.
            </p>
            <p>
              Our approach is designed for patients and families who need plain
              explanations, transparent next steps, and help understanding how
              international care options compare with U.S. self-pay costs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16" id="blogs">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
                Blogs
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal">
                Patient planning resources
              </h2>
            </div>
            <a className="font-semibold text-[#5b2c83]" href="mailto:care@curedinchina.com">
              Suggest a topic
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                className="rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-5"
                key={post.title}
              >
                <p className="text-sm font-bold text-[#6c3a99]">
                  {post.category}
                </p>
                <h3 className="mt-3 text-xl font-bold leading-7 text-[#251a35]">
                  {post.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#625371]">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16" id="faqs">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            FAQs
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-normal">
            Clear answers before you take the next step
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article
              className="rounded-[8px] border border-[#e8def8] bg-white p-5"
              key={faq.question}
            >
              <h3 className="text-lg font-bold text-[#251a35]">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#625371]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#e8def8] bg-[#251a35] px-5 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold">CuredInChina</p>
          <p className="max-w-2xl text-sm leading-6 text-[#d9caec]">
            Information on this site is for care coordination and planning. It
            is not a substitute for professional medical advice, diagnosis, or
            emergency care.
          </p>
        </div>
      </footer>
    </main>
  );
}
