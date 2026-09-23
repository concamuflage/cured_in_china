"use client";

import { useState } from "react";
import { hospitalSpecialties } from "./hospitals-data";

/**
 * Renders the translated specialty navigation and ranked hospital table.
 *
 * Example: selecting `Cardiology` replaces the table with its ten ranked
 * hospitals while preserving the Rank, Hospital, and City columns.
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
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="lg:sticky lg:top-6 lg:self-start">
        <nav
          aria-label="Hospital specialties"
          className="flex gap-2 overflow-x-auto rounded-[8px] border border-[#e8def8] bg-[#fbf9ff] p-3 lg:max-h-[calc(100vh-3rem)] lg:flex-col lg:overflow-y-auto"
        >
          {hospitalSpecialties.map((specialty) => {
            const isActive = specialty.id === activeSpecialty.id;

            return (
              <button
                aria-pressed={isActive}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-[8px] bg-[#5b2c83] px-4 py-3 text-left text-sm font-bold text-white"
                    : "whitespace-nowrap rounded-[8px] px-4 py-3 text-left text-sm font-semibold text-[#5d4d70] hover:bg-white hover:text-[#4b217c]"
                }
                key={specialty.id}
                onClick={() => setActiveSpecialtyId(specialty.id)}
                type="button"
              >
                {specialty.name}
              </button>
            );
          })}
        </nav>
      </aside>

      <section aria-labelledby="specialty-heading" className="min-w-0">
        <div className="border-b border-[#d9caec] pb-5">
          <p className="text-sm font-bold uppercase tracking-normal text-[#6c3a99]">
            2023 Specialty Reputation Ranking
          </p>
          <h2
            className="mt-2 text-3xl font-bold tracking-normal text-[#251a35]"
            id="specialty-heading"
          >
            {activeSpecialty.name}
          </h2>
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
