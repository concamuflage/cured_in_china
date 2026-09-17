/**
 * Renders the shared About Us story used on both the home page and `/about`.
 *
 * Example: the home page can show the same Boston University and Shenzhen
 * University cost comparison that appears on the standalone About Us page.
 */
export function AboutContent() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
        About Us
      </p>
      <div className="mt-4 grid gap-8 md:grid-cols-[0.78fr_1fr] md:items-start">
        <h1 className="max-w-md text-4xl font-bold tracking-normal text-[#251a35] sm:text-5xl">
          Why I started Lotus Health
        </h1>
        <div className="max-w-3xl space-y-4 text-[17px] leading-7 text-[#211827]">
          <p>
            I studied at Boston University for two years. During that time, I
            saw how expensive medical insurance, doctor consultations, and
            treatment can be in the United States. I also saw many friends go
            without health insurance simply because the monthly cost was too
            high.
          </p>
          <p>
            That experience made me think about cost and value more carefully.
            Boston University charged nearly $70,000 per year in tuition, while
            my undergraduate alma mater, Shenzhen University, charged about $700
            per year. Was the education at Boston University one hundred times
            better than the education at Shenzhen University? In my experience,
            the answer was no.
          </p>
          <p>
            I believe the same question is worth asking in healthcare. A higher
            price does not always mean care is one hundred times better.
            Healthcare should not feel out of reach because of cost, and
            language should not be the reason a patient cannot explore more
            affordable care.
          </p>
          <p>
            If you are struggling to afford healthcare in the U.S., I hope Lotus
            Health can help you overcome the language barrier, understand your
            options, and find more affordable treatment in China.
          </p>
        </div>
      </div>
    </section>
  );
}
