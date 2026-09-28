import { LinkedInLink } from "./linkedin-link";

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
            I believe the same question is worth asking in healthcare. Higher
            prices do not always mean proportionally better care.
          </p>
          <p>
            I experienced this firsthand while working in Uzbekistan, when a
            fish bone became lodged in my throat during a hot pot meal. I first
            went to an American hospital, where an X-ray confirmed the bone was
            there, but the doctors did not have the equipment needed to remove
            it. A kind local nurse then accompanied me to a public hospital in
            Tashkent and translated for me. There, the doctor used an endoscopic
            instrument fitted with a camera and forceps to locate and remove the
            bone. The American hospital charged me $100, while the public
            hospital charged me nothing. That experience reinforced my belief
            that a higher price does not necessarily mean better treatment.
          </p>
          <p>
            If you cannot afford care in the U.S., are exploring more affordable
            options, or are unsure where to seek treatment in China, Lotus
            Health can help you navigate the next steps. We provide language
            support and practical guidance to help you identify hospitals and
            specialists relevant to the care you are seeking, with a particular
            focus on China&apos;s more affordable public hospital system.
          </p>
          <div className="pt-2">
            <LinkedInLink />
          </div>
        </div>
      </div>
    </section>
  );
}
