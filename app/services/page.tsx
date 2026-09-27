import type { Metadata } from "next";
import { createPageMetadata, siteUrl } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Healthcare Support Services in China",
  description:
    "Explore Lotus Health consultation, medical appointment, translation, and bilingual bedside support services in China.",
  path: "/services",
});

const services = [
  {
    name: "Online consultation",
    description:
      "Book an online meeting to ask questions about healthcare in China and discuss what support you may need.",
    price: "Free",
  },
  {
    name: "Medical appointment scheduling",
    description:
      "We can help you contact providers and arrange an appointment with a doctor.",
    price: "$20 per appointment",
  },
  {
    name: "Translation support",
    description:
      "Bilingual support for medical appointments, hospital communication, and practical healthcare needs.",
    price: "$30 per hour",
  },
  {
    name: "Bilingual bedside support",
    description:
      "For patients who cannot leave bed independently, a bilingual caregiver can provide continuous personal assistance. In many Chinese public hospitals, routine bedside support may be provided by family members or a hired caregiver rather than hospital staff.",
    price: "$150 per 24 hours",
  },
];

const servicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Lotus Health services",
  url: new URL("/services", siteUrl).toString(),
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: services[0].name,
        description: services[0].description,
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: { "@type": "Country", name: "China" },
        offers: {
          "@type": "Offer",
          price: 0,
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: services[1].name,
        description: services[1].description,
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: { "@type": "Country", name: "China" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 20,
            priceCurrency: "USD",
            unitText: "appointment",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: services[2].name,
        description: services[2].description,
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: { "@type": "Country", name: "China" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 30,
            priceCurrency: "USD",
            unitText: "hour",
          },
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: services[3].name,
        description: services[3].description,
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: { "@type": "Country", name: "China" },
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: 150,
            priceCurrency: "USD",
            unitText: "24 hours",
          },
        },
      },
    },
  ],
};

/**
 * Renders the service and pricing table for Lotus Health support in China.
 *
 * Example: a visitor can compare free online consultation with translation at
 * `$30 per hour` and bilingual bedside support at `$150 per 24 hours`.
 */
export default function ServicesPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#251a35]">
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <section className="mx-auto w-full max-w-6xl flex-1 px-5 py-16">
        <div className="w-full">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            Our Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal sm:text-5xl">
            Practical support for care in China
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4b3f5a]">
            Choose the support you need before or during your healthcare journey.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[8px] border border-[#d9caec]">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead className="bg-[#f5f0fb] text-[#251a35]">
              <tr>
                <th className="w-1/4 px-5 py-4 text-sm font-bold" scope="col">
                  Service
                </th>
                <th className="w-1/2 px-5 py-4 text-sm font-bold" scope="col">
                  What is included
                </th>
                <th className="w-1/4 px-5 py-4 text-sm font-bold" scope="col">
                  Cost
                </th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr className="border-t border-[#e8def8]" key={service.name}>
                  <th
                    className="px-5 py-5 align-top text-base font-semibold text-[#251a35]"
                    scope="row"
                  >
                    {service.name}
                  </th>
                  <td className="px-5 py-5 align-top text-base leading-7 text-[#4b3f5a]">
                    {service.description}
                  </td>
                  <td className="px-5 py-5 align-top text-base font-semibold text-[#4f2478]">
                    {service.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 w-full text-sm leading-6 text-[#625371]">
          Service fees do not include medical treatment, hospital, medication,
          transportation, accommodation, or other third-party costs. Availability
          may vary by city, hospital, and patient needs.
        </p>
        <div className="mt-6 w-full border-l-4 border-[#6c3a99] bg-[#f5f0fb] px-5 py-4">
          <h2 className="text-base font-bold text-[#251a35]">
            Travel and accommodation for an assistant
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#4b3f5a]">
            If a suitable assistant is not available locally, an assistant may
            need to travel to the client&apos;s location. In that situation, the
            client is responsible for the assistant&apos;s transportation and hotel
            costs. These additional expenses will be discussed before any travel
            is arranged.
          </p>
        </div>
      </section>
    </main>
  );
}
