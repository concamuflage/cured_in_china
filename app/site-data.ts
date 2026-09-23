export type BlogPost = {
  slug: string;
  category: string;
  topic: string;
  title: string;
  excerpt: string;
  images?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  }[];
  sourceLabel?: string;
  sourceUrl?: string;
  sources?: {
    label: string;
    url: string;
  }[];
  body: string[];
  comparison?: {
    intro: string;
    sections: {
      title: string;
      china: string[];
      unitedStates: string[];
    }[];
    note: string;
    conclusion: string;
  };
  priceComparison?: {
    intro: string;
    rows: {
      treatment: string;
      chinaPrice: string;
      chinaDetail: string;
      usaPrice: string;
      usaDetail: string;
    }[];
    note: string;
    conclusion: string;
  };
};

export const treatmentSteps = [
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

export const blogPosts: BlogPost[] = [
  {
    slug: "dental-care-costs-us-china",
    category: "Prices",
    topic: "Prices",
    title: "Dental Care Costs in the United States and China",
    excerpt:
      "A side-by-side look at 2025 U.S. dental fee averages and published 2026 prices from a private dental clinic in Beijing.",
    body: [],
    priceComparison: {
      intro:
        "Published prices show a substantial difference across several common dental treatments.",
      rows: [
        {
          treatment: "Routine adult cleaning",
          chinaPrice: "About $14",
          chinaDetail: "Published Beijing clinic price",
          usaPrice: "$111 average",
          usaDetail: "Survey range: $61-$135",
        },
        {
          treatment: "One-surface composite filling",
          chinaPrice: "About $70-$191",
          chinaDetail: "Price varies by tooth and complexity",
          usaPrice: "$200-$217 average",
          usaDetail: "Anterior to posterior tooth",
        },
        {
          treatment: "Root canal treatment",
          chinaPrice: "About $130-$398",
          chinaDetail: "Published treatment range",
          usaPrice: "$894-$1,234 average",
          usaDetail: "Anterior tooth to molar",
        },
        {
          treatment: "Porcelain or all-ceramic crown",
          chinaPrice: "About $400 or $685",
          chinaDetail: "Depends on the crown option",
          usaPrice: "$1,400 average",
          usaDetail: "Survey range: $897-$1,975",
        },
        {
          treatment: "Dental implant",
          chinaPrice: "About $572-$1,789",
          chinaDetail: "Listed as all-inclusive; varies by brand",
          usaPrice: "About $4,744 combined",
          usaDetail: "Average placement, custom abutment, and crown fees combined",
        },
      ],
      note:
        "U.S. figures are 2025 averages reported by dental practices participating in a professional fee survey. The U.S. implant figure combines the survey averages for surgical placement ($2,220), a custom abutment ($955), and an abutment-supported crown ($1,569). China figures are 2026 estimates published by one private Beijing clinic, not a national average. These are not guaranteed quotes. Insurance, examinations, imaging, sedation, extraction, bone grafting, travel, accommodation, follow-up care, and complications can change the total cost.",
      conclusion:
        "Before choosing care, request a written treatment plan and confirm exactly what the quoted price includes.",
    },
    sources: [
      {
        label: "2025 Dental Fees, Woody & Associates and Academy of Dental CPAs",
        url: "https://woodycpas.com/wp-content/uploads/2025/07/2025-Dental-Survey-Statistics.pdf",
      },
      {
        label: "2026 Dental Price List, Beijing Keer Dental Clinic",
        url: "https://www.dentalbeijing.com/prices/",
      },
    ],
  },
  {
    slug: "patient-experiences-medical-trips-to-china",
    category: "Patient Experiences",
    topic: "Patient Experiences",
    title: "How Are People's Experiences With Medical Trips to China?",
    excerpt: "",
    sourceLabel: "Reddit discussion on medical trips to China",
    sourceUrl:
      "https://www.reddit.com/r/travelchina/comments/1q6pva2/anyone_has_been_on_a_medical_realited_trip_to/",
    images: [
      {
        src: "/blog-images/medical-trip-guangzhou.png",
        alt: "Reddit comment describing a fast blood test, ultrasound, and CT scan experience in Guangzhou",
        caption:
          "I was in Guangzhou, China in December 2025. Did a full blood test, ultrasound and CT scan without prior appointment. Everything was completed in just under two hours. Results were sent to my phone within the next hour. Went back in May for holidays, stopped by the hospital for another blood test just to see if my readings got better. In and out of the hospital under an hour. FYI, I am currently living in Vancouver, Canada. I would have to wait months to get a CT scan.",
        width: 1480,
        height: 374,
      },
      {
        src: "/blog-images/ivf-china-experience.png",
        alt: "Reddit comment describing a family's IVF experience in China",
        caption:
          "My son and daughter in-law went through the IVF process there. It was a fraction of the cost it would have been in the states, and very successful - I am now the grandmother of twin girls, born yesterday!",
        width: 1570,
        height: 262,
      },
    ],
    body: [],
  },
  {
    slug: "overcome-language-barrier-in-china",
    category: "Language Support",
    topic: "Language Support",
    title: "How to Overcome the Language Barrier in China",
    excerpt:
      "Why a medically aware translator and reliable translation tools can make treatment in China easier to navigate.",
    body: [
      "One option is to hire a translator who knows how to use AI translation tools effectively.",
      "Medical terminology can be difficult even for professional translators. Advanced AI tools such as ChatGPT and Claude can help translators understand and translate medical terms more accurately. Since access to these tools can be limited in China, it is a good idea to ask potential translators whether they use advanced AI models as part of their work.",
      "A translator may not be able to accompany you at all times. For everyday situations, it is also helpful to have a reliable translation app or translation device that you can use on your own.",
    ],
  },
  {
    slug: "american-chinese-healthcare-differences",
    category: "Healthcare Comparison",
    topic: "Healthcare Comparison",
    title: "4 Key Differences Between American and Chinese Healthcare",
    excerpt:
      "A clear comparison of how patients pay, access doctors, understand doctor training, and receive bedside care in the U.S. and China.",
    body: [],
    comparison: {
      intro:
        "The U.S. and China both have advanced hospitals and highly trained doctors, but the patient experience can be quite different.",
      sections: [
        {
          title: "1. Payment timing",
          china: [
            "Hospitals commonly require payment for consultations, tests, medications, or a deposit before non-emergency services are provided.",
            "Patients generally pay more before or during treatment.",
          ],
          unitedStates: [
            "Insured patients often receive treatment first while the hospital bills the insurance company afterward.",
            "Patients may receive additional bills after treatment.",
          ],
        },
        {
          title: "2. Access to doctors",
          china: [
            "Patients usually do not need to consult a primary care doctor before seeing a specialist. They can make an appointment directly with the specialist they need.",
            "Walk-in visits are available for many specialties, although patients may wait several hours depending on the specialist's schedule and how busy the hospital is. The consultation itself often lasts about 5 to 10 minutes.",
          ],
          unitedStates: [
            "Healthcare is more appointment-based. Patients often see a primary care doctor first and may need a referral for specialist care.",
            "Appointments and referrals are more common.",
          ],
        },
        {
          title: "3. Doctor training",
          china: [
            "Students can enter medical school directly after high school. A common pathway includes a five-year medical degree followed by standardized residency training, although longer programs also exist.",
          ],
          unitedStates: [
            "Doctors typically complete about 11 to 15 years of education and training after high school: four years of college, four years of medical school, and three to seven years of residency.",
          ],
        },
        {
          title: "4. Bedside care during hospitalization",
          china: [
            "Family members often play a larger role in caring for hospitalized patients.",
            "Depending on the hospital and the patient's condition, families may hire a caregiver to help with meals, mobility, bathroom visits, and overnight assistance.",
          ],
          unitedStates: [
            "Nurses and other hospital staff generally provide more of the routine bedside and personal care patients need during an inpatient stay.",
          ],
        },
      ],
      note:
        "Practices vary by hospital, ward, insurance arrangement, and level of care in both countries.",
      conclusion:
        "For patients, four noticeable differences are when they pay, how they access doctors, how doctors are trained, and who provides day-to-day care during hospitalization.",
    },
  },
  {
    slug: "public-private-international-hospitals-china",
    category: "China Healthcare System",
    topic: "China Healthcare System",
    title: "Public, Private, and International Hospitals",
    excerpt:
      "A practical overview of public hospitals, private hospitals, and international hospitals for patients considering treatment in China.",
    body: [
      "Most hospitals in China are public hospitals. Many have experienced doctors and see a high volume of patients, but the patient experience can be frustrating. Appointment systems do not always work smoothly, and it is common to wait one or two hours at the hospital for only five to ten minutes with a doctor.",
      "Access to medicine can also be uneven. Some imported or higher-quality medicines may not be available to ordinary patients through the public hospital system, even when those medicines could be useful for treatment.",
      "Although these hospitals are public, many still need to cover their own operating costs. Because of that pressure, patients may sometimes be advised to take extra examinations or purchase expensive traditional Chinese medicine products that may offer limited clear medical benefit.",
      "Private hospitals usually offer better service, shorter waiting times, and friendlier staff. Many patients choose private hospitals when they want a smoother experience, clearer communication, or more flexible access to medicine options.",
      "China also has private international hospitals built for foreign patients. Doctors, nurses, and administrative staff often speak English, which makes the process easier for Americans. The tradeoff is price: international hospitals are usually much more expensive than local private hospitals.",
      "Choosing care in China is not simply a matter of choosing public or private. Patients should consider their condition, budget, language needs, medicine access, and expectations for service before deciding where to seek care.",
    ],
  },
];
