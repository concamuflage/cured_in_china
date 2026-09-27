"use client";

import {
  Accessibility,
  Activity,
  Baby,
  Bone,
  Brain,
  CircleAlert,
  Dna,
  Droplets,
  Dumbbell,
  Ear,
  Eye,
  Flame,
  FlaskConical,
  Hand,
  Heart,
  HeartPulse,
  Microscope,
  Pill,
  PersonStanding,
  Radiation,
  Ribbon,
  ScanLine,
  Scissors,
  ShieldCheck,
  Siren,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  TestTube,
  VenusAndMars,
  Virus,
  Waves,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { hospitalSpecialties } from "./hospitals-data";
import { overallRankingTiers } from "./overall-ranking-data";

type HospitalDirectorySection = "overall" | "specialty";

const directorySections: Array<{
  id: HospitalDirectorySection;
  label: string;
}> = [
  { id: "overall", label: "Overall Ranking" },
  { id: "specialty", label: "Ranking by Speciality" },
];

// Lucide does not have a unique symbol for every medical discipline, so closely
// related specialties intentionally share familiar medical icons.
const specialtyIcons: Record<string, LucideIcon> = {
  pathology: Microscope,
  "infectious-diseases": Virus,
  "otolaryngology-ent": Ear,
  radiology: ScanLine,
  pulmonology: Wind,
  rheumatology: Bone,
  "obstetrics-and-gynecology": VenusAndMars,
  orthopedics: Bone,
  psychiatry: Brain,
  "dentistry-and-oral-medicine": Smile,
  anesthesiology: Syringe,
  urology: Droplets,
  endocrinology: Activity,
  dermatology: Sparkles,
  "general-surgery": Scissors,
  neurology: Brain,
  nephrology: Droplets,
  neurosurgery: Brain,
  gastroenterology: Activity,
  "pediatric-medicine": Baby,
  "pediatric-surgery": Baby,
  cardiology: HeartPulse,
  "cardiac-surgery": Heart,
  "thoracic-surgery": Wind,
  hematology: TestTube,
  ophthalmology: Eye,
  "plastic-surgery": Sparkles,
  oncology: Ribbon,
  "geriatric-medicine": Accessibility,
  "rehabilitation-medicine": PersonStanding,
  "laboratory-medicine": FlaskConical,
  "burn-medicine": Flame,
  "nuclear-medicine": Radiation,
  "ultrasound-medicine": Waves,
  "emergency-medicine": Siren,
  "critical-care-medicine": CircleAlert,
  "clinical-pharmacy": Pill,
  "reproductive-medicine": Baby,
  allergy: ShieldCheck,
  "health-management": Activity,
  tuberculosis: Wind,
  "general-practice": Stethoscope,
  "pain-medicine": Hand,
  "sports-medicine": Dumbbell,
  "rare-diseases": Dna,
};

/**
 * Renders the overall and specialty hospital ranking views.
 *
 * Example: selecting `Overall Ranking` shows all five grades, while selecting
 * `Ranking by Speciality` opens the specialty icon selector.
 */
export function HospitalDirectory() {
  const [activeSection, setActiveSection] =
    useState<HospitalDirectorySection>("overall");
  const [activeSpecialtyId, setActiveSpecialtyId] = useState(
    hospitalSpecialties[0].id,
  );
  const activeSpecialty =
    hospitalSpecialties.find(
      (specialty) => specialty.id === activeSpecialtyId,
    ) ?? hospitalSpecialties[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <nav
          aria-label="Hospital sections"
          className="flex gap-2 overflow-x-auto rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-3 lg:flex-col"
        >
          {directorySections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <button
                aria-controls={`${section.id}-ranking`}
                aria-pressed={isActive}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-[8px] bg-[#5b2c83] px-4 py-3 text-left text-sm font-bold text-white"
                    : "whitespace-nowrap rounded-[8px] px-4 py-3 text-left text-sm font-semibold text-[#5d4d70] hover:bg-white hover:text-[#4b217c]"
                }
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                type="button"
              >
                {section.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {activeSection === "overall" ? (
        <section
          aria-labelledby="overall-ranking-heading"
          className="min-w-0"
          id="overall-ranking"
        >
          <div className="border-b border-[#d9caec] pb-5">
            <h2
              className="text-3xl font-bold tracking-normal text-[#251a35]"
              id="overall-ranking-heading"
            >
              Overall Ranking
            </h2>
            <p className="mt-3 leading-7 text-[#4b3f5a]">
              The 2023 overall ranking places 100 hospitals into five grades,
              with 20 hospitals in each grade. Hospitals within the same grade
              are not ranked against one another.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[8px] border border-[#d9caec]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-[#5b2c83] text-white">
                  <tr>
                    <th className="w-28 px-5 py-4 text-sm font-bold" scope="col">
                      Grade
                    </th>
                    <th className="px-5 py-4 text-sm font-bold" scope="col">
                      Hospital
                    </th>
                    <th className="w-36 px-5 py-4 text-sm font-bold" scope="col">
                      City
                    </th>
                  </tr>
                </thead>
                {overallRankingTiers.map((rankingTier) => (
                  <tbody
                    className="divide-y divide-[#e8def8] border-b border-[#cdbbe2] bg-white last:border-b-0"
                    key={rankingTier.tier}
                  >
                    {rankingTier.hospitals.map((hospital, index) => (
                      <tr key={`${rankingTier.tier}-${hospital.originalName}`}>
                        {index === 0 ? (
                          <th
                            className="bg-[#f5f0fb] px-5 py-4 align-top text-xl font-bold text-[#4f2478]"
                            rowSpan={rankingTier.hospitals.length}
                            scope="rowgroup"
                          >
                            {rankingTier.tier}
                          </th>
                        ) : null}
                        <td className="px-5 py-4 align-top">
                          <span className="block font-semibold leading-6 text-[#251a35]">
                            {hospital.name}
                          </span>
                          <span
                            className="mt-1 block text-xs leading-5 text-[#756780]"
                            lang="zh-CN"
                          >
                            {hospital.originalName}
                          </span>
                        </td>
                        <td className="px-5 py-4 align-top text-sm font-medium text-[#4b3f5a]">
                          {hospital.city}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </section>
      ) : (
        <section
          aria-labelledby="ranking-by-speciality-heading"
          className="min-w-0"
          id="specialty-ranking"
        >
          <div className="border-b border-[#d9caec] pb-5">
            <h2
              className="text-3xl font-bold tracking-normal text-[#251a35]"
              id="ranking-by-speciality-heading"
            >
              Ranking by Speciality
            </h2>
            <p className="mt-3 leading-7 text-[#4b3f5a]">
              Select a specialty to view its 2023 hospital reputation ranking.
            </p>
          </div>

          <div
            aria-label="Choose a medical specialty"
            className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4"
          >
            {hospitalSpecialties.map((specialty) => {
              const isActive = specialty.id === activeSpecialty.id;
              const SpecialtyIcon = specialtyIcons[specialty.id] ?? Stethoscope;

              return (
                <button
                  aria-controls="selected-specialty-ranking"
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "flex min-h-24 flex-col items-center justify-center gap-2 rounded-[8px] border border-[#5b2c83] bg-[#5b2c83] px-3 py-3 text-center text-sm font-bold leading-5 text-white"
                      : "flex min-h-24 flex-col items-center justify-center gap-2 rounded-[8px] border border-[#ded2ed] bg-white px-3 py-3 text-center text-sm font-semibold leading-5 text-[#4b3f5a] hover:border-[#8a5bb1] hover:bg-[#fbf9ff] hover:text-[#4b217c]"
                  }
                  key={specialty.id}
                  onClick={() => setActiveSpecialtyId(specialty.id)}
                  title={`Show ${specialty.name} ranking`}
                  type="button"
                >
                  <SpecialtyIcon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.8}
                  />
                  <span>{specialty.name}</span>
                </button>
              );
            })}
          </div>

          <div
            className="mt-10 border-b border-[#d9caec] pb-5"
            id="selected-specialty-ranking"
          >
            <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
              2023 Specialty Reputation Ranking
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-normal text-[#251a35]">
              {activeSpecialty.name}
            </h3>
            <p className="mt-2 text-sm text-[#756780]" lang="zh-CN">
              {activeSpecialty.originalName}
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-[8px] border border-[#d9caec]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-[#5b2c83] text-white">
                  <tr>
                    <th className="w-20 px-5 py-4 text-sm font-bold" scope="col">
                      Rank
                    </th>
                    <th className="px-5 py-4 text-sm font-bold" scope="col">
                      Hospital
                    </th>
                    <th className="w-36 px-5 py-4 text-sm font-bold" scope="col">
                      City
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8def8] bg-white">
                  {activeSpecialty.hospitals.map((hospital) => (
                    <tr
                      key={`${activeSpecialty.id}-${hospital.rank}-${hospital.name}`}
                    >
                      <td className="px-5 py-4 align-top text-lg font-bold text-[#4f2478]">
                        {hospital.rank}
                      </td>
                      <td className="px-5 py-4 align-top">
                        <span className="block font-semibold leading-6 text-[#251a35]">
                          {hospital.name}
                        </span>
                        <span
                          className="mt-1 block text-xs leading-5 text-[#756780]"
                          lang="zh-CN"
                        >
                          {hospital.originalName}
                        </span>
                      </td>
                      <td className="px-5 py-4 align-top text-sm font-medium text-[#4b3f5a]">
                        {hospital.city}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
