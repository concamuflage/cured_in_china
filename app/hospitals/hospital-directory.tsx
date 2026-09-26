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
 * Renders the specialty icon selector and the selected hospital ranking.
 *
 * Example: selecting the `Cardiology` icon replaces the table with its ten
 * ranked hospitals while preserving the Rank, Hospital, and City columns.
 */
export function HospitalDirectory() {
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
          className="rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-3"
        >
          <a
            aria-current="page"
            className="block rounded-[8px] bg-[#5b2c83] px-4 py-3 text-sm font-bold text-white"
            href="#ranking-by-speciality"
          >
            Ranking by Speciality
          </a>
        </nav>
      </aside>

      <section
        aria-labelledby="ranking-by-speciality-heading"
        className="min-w-0 scroll-mt-6"
        id="ranking-by-speciality"
      >
        <div className="border-b border-[#d9caec] pb-5">
          <h2
            className="mt-2 text-3xl font-bold tracking-normal text-[#251a35]"
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
                aria-controls="specialty-ranking"
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
          id="specialty-ranking"
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
                  <tr key={`${activeSpecialty.id}-${hospital.rank}-${hospital.name}`}>
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
    </div>
  );
}
