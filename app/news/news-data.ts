export type NewsArticle = {
  slug: string;
  title: string;
  subtitle: string;
  attribution?: string;
  sourceLabel: string;
  sourceUrl: string;
  body: string[];
  references?: {
    label: string;
    url: string;
  }[];
};

export const peopleCancerTreatmentNews: NewsArticle = {
  slug: "california-couple-seeks-car-t-treatment-in-china",
  title: "California Couple Travels to Shenzhen for CAR T-Cell Therapy",
  subtitle:
    "After recurrent esophageal cancer stopped responding to standard treatment, Larry and Jamie Black sought a CLDN18.2-targeted cellular therapy in China.",
  attribution:
    "Original reporting by Wendy Grossman Kantor for People, published September 22, 2026. This page is an independent summary.",
  sourceLabel: "Read the original report in People",
  sourceUrl:
    "https://people.com/california-couple-travels-to-china-for-lifesaving-cancer-treatment-exclusive-12116104",
  body: [
    `Larry Black, 65, and his wife, Jamie, traveled from Los Angeles to Shenzhen in September 2026 to pursue satricabtagene autoleucel, or satri-cel, a CAR T-cell therapy that targets the protein CLDN18.2. People reported that Larry had recurrent esophageal cancer and that testing showed his tumor was CLDN18.2-positive.`,
    `Larry was diagnosed with stage 3 esophageal cancer in March 2025 after an endoscopy. He received FLOT chemotherapy and underwent an esophagectomy that June, followed by additional chemotherapy. After about eight months with no evidence of disease, a March 2026 scan showed that the cancer had spread to his peritoneum. Jamie told People that subsequent chemotherapy was not working.`,
    `CAR T-cell therapy uses a patient's own T cells. The cells are collected, genetically modified to recognize a target on cancer cells, expanded in a laboratory, and infused back into the patient. U.S. regulators have approved several CAR T-cell therapies for blood cancers, but no CAR T-cell therapy was FDA-approved for a solid tumor at the time of the report.`,
    `The couple flew to Hong Kong on September 6 and continued to the University of Hong Kong-Shenzhen Hospital. According to People, they paid an initial installment of about $80,000 to a specialty pharmacy. Jamie estimated that treatment, hospital care, travel, accommodations, follow-up care, and possible additional infusions could bring the total cost close to $500,000.`,
    `People reported that Larry's T cells were collected in Shenzhen and were expected to be modified and reinfused several weeks later. Jamie said her goal was not to assume a cure, but to seek more time and a better quality of life for her husband. The report did not include a treatment outcome because the infusion and follow-up had not yet occurred.`,
    `Jamie also described the practical difficulty of arranging complex treatment in another country. She said an English-speaking medical liaison was important for navigating the technology, payment process, hospital procedures, and communication with the medical team.`,
    `China's approval of satri-cel is narrower than the phrase "approved for solid tumors" may suggest. In June 2026, the National Medical Products Administration approved it for CLDN18.2-positive, HER2-negative advanced gastric or gastroesophageal-junction adenocarcinoma after failure of at least two prior lines of therapy. The People report identifies Larry's diagnosis as esophageal cancer, so readers should not infer that satri-cel is approved or appropriate for every esophageal cancer or solid tumor.`,
    `CAR T-cell therapy can cause serious side effects, including infections, cytokine release syndrome, and neurological complications. Treatment eligibility and risks require assessment by qualified oncology and cellular-therapy specialists. This summary is general information, not medical advice or a treatment recommendation.`,
  ],
  references: [
    {
      label: "People: original report by Wendy Grossman Kantor",
      url: "https://people.com/california-couple-travels-to-china-for-lifesaving-cancer-treatment-exclusive-12116104",
    },
    {
      label: "National Cancer Institute: how CAR T-cell therapy works and its risks",
      url: "https://www.cancer.gov/about-cancer/treatment/research/car-t-cells",
    },
    {
      label: "Hong Kong Exchanges filing: the approved satri-cel indication in China",
      url: "https://www1.hkexnews.hk/search/titlesearch.xhtml?category=0&lang=EN&market=SEHK&stockId=1000099082",
    },
  ],
};

export const yicaiMedicalTourismNews: NewsArticle = {
  slug: "medical-tourism-china-robotic-surgery-specialist-expertise",
  title:
    "Medical Tourism to China Grows With Robotic Surgery and Specialist Expertise",
  subtitle:
    "Yicai reports that overseas patients are considering Chinese hospitals for advanced procedures, specialist care, and lower treatment costs.",
  attribution:
    "Original reporting by Qian Tongxin for Yicai, published January 27, 2026. This page is an independent summary.",
  sourceLabel: "Read the original report in Yicai Global",
  sourceUrl:
    "https://www.yicaiglobal.com/news/chinas-medical-technology-on-par-with-developed-countries-attract-foreign-patients",
  body: [
    `Yicai reports that a growing number of overseas patients are learning about Chinese hospitals through social media, online research, remote consultations, and appointment services. According to the report, patients are being drawn not only by lower prices but also by specialized procedures and medical technology available at major hospitals.`,
    `The report centers on a 10-year-old girl with a pancreatic tumor whose father is a Chinese doctor who had worked in Vancouver for 20 years. Her father told Yicai that specialists at several Canadian hospitals expected surgery to require removal of her spleen. The family instead traveled to Ruijin Hospital, affiliated with Shanghai Jiao Tong University School of Medicine, after learning that its surgeons could evaluate a less invasive robotic approach.`,
    `Yicai reported that a Ruijin Hospital team led by Dr. Jin Jiabin used robotic laparoscopy to separate the pancreatic tumor from blood vessels serving the spleen and repair damaged vessels. According to the girl's father, the tumor was removed while preserving the spleen, and she recovered and was discharged. The reported cost was CNY160,000, or about $23,000 at the exchange rate cited by Yicai.`,
    `Doctors interviewed by Yicai pointed to rapid development in Chinese medical devices and expertise in selected specialties. One physician at Shanghai Ninth People's Hospital cited congenital hand deformities, hemangiomas, and lymphedema as areas in which the hospital receives international patients. These statements reflect the views of the physicians interviewed and should not be read as independent rankings of hospitals or treatments.`,
    `The report also notes that many leading Chinese hospitals have created international medical departments for overseas patients. These services can help with remote consultations and appointments, but capacity remains limited because international care requires both clinical expertise and staff with suitable language skills.`,
    `Physicians interviewed by Yicai said hospitals must continue serving domestic patients while developing stronger systems and service guarantees for visitors from abroad. For prospective patients, the account highlights the importance of confirming a hospital's experience with the specific condition, obtaining an individualized medical review, and understanding costs, follow-up care, and language support before traveling.`,
    `This is a summary of Yicai's reporting, including one family's account of treatment. It does not independently verify the outcome, establish that one healthcare system is superior, or provide medical advice. Treatment options and results depend on the individual patient, diagnosis, hospital, and clinical team.`,
  ],
};

export const cancerTreatmentNews: NewsArticle = {
  slug: "patients-flying-to-china-for-cancer-treatment",
  title: "Patients Are Flying to China for the Latest Cancer Treatment",
  subtitle:
    "Shanghai is a favored destination, with lower costs than the West and innovation in biotechnology",
  sourceLabel: "Read the original report in The Wall Street Journal",
  sourceUrl:
    "https://www.wsj.com/health/healthcare/patients-are-flying-to-china-for-the-latest-cancer-treatment-528659c3",
  body: [
    `SHANGHAI—Michael Walters, 25, had just begun his first full-time job out of university when he was diagnosed last year with non-Hodgkin lymphoma, a blood cancer.`,
    `Walters, who hails from New Zealand, underwent several unsuccessful rounds of chemotherapy, radiotherapy and immunotherapy in Auckland. Then doctors told him about CAR-T treatment, in which a patient’s immune cells are extracted, re-engineered in a laboratory and reintroduced into the body to fight cancer cells.`,
    `Walters looked at the U.S. and India as well as Australia, where a hospital in Melbourne said it could treat him with the therapy—at a cost of as much as $600,000, a prohibitive sum for his family.`,
    `At SinoUnited Hospital in Shanghai, Walters paid less than half that amount—and, on Aug. 18, learned that the treatment had succeeded in pushing his lymphoma into complete remission.`,
    `“I feel more appreciative of life,” Walters said. “If this was 10 or 15 years ago, I wouldn’t have this option.”`,
    `CAR-T therapy, short for chimeric antigen receptor T-cell therapy, was pioneered in the U.S. Today, however, Shanghai is emerging as a favored destination for patients from America and other rich countries—a testament not only to China’s low costs but also to the country’s emergence as an innovator in biotechnology.`,
    `“China has basically done to CAR-T cell therapy the same thing that it’s done to other industries, which is, they’ve industrialized it,” said Sairah Ahmed, director of the CAR-T program in the department of lymphoma and myeloma at the University of Texas MD Anderson Cancer Center in Houston.`,
    `In some cases, China has jumped ahead of the U.S. In June, Beijing regulators greenlighted a CAR-T treatment for a cancer of the stomach and upper small intestine—the world’s first approved CAR-T therapy for solid tumors.`,
    `Josh Bronkhorst, the 59-year-old chief executive of a financial services company, was among the first to get the treatment after approval. Diagnosed in December, he went through four months of chemotherapy and immunotherapy—only to find that the tumor was still growing.`,
    `His doctors told him another round of chemotherapy would have only a 15% chance of success. So Bronkhorst, also a New Zealander, headed to China.`,
    `“Every day is getting better,” Bronkhorst said in a faint voice on Aug. 6 from his bed at Jiahui International Hospital in Shanghai. By then, 10 days after the re-engineered cells were infused into his body, the buildup of extra fluids caused by Bronkhorst’s cancer had come to a halt, allowing doctors to remove a drainage tube.`,
    `“It’s not a miracle drug, but this was by far the best option I could find,” he said at the time.`,
    `On Aug. 16, he flew back to New Zealand, where he continues to recover.`,
    `Ahmed of MD Anderson said she has advised some of her overseas patients to seek treatment in China, where CAR-T therapy can range between $150,000 and $230,000, versus $550,000 to $850,000 in the U.S.`,
    `Regulators in dozens of countries have approved CAR-T therapy for blood cancers, including leukemia, lymphoma and myeloma. The therapies Bronkhorst and Walters received are among nine CAR-T products approved by Chinese regulators, the most in the world.`,
    `Bronkhorst’s stomach-cancer treatment was developed by Shanghai-based CARsgen Therapeutics, which won Chinese approval for the solid tumor CAR-T therapy following a clinical-trial program that included U.S. patients at MD Anderson and Mayo Clinic in Minnesota.`,
    `“We have more and more new weapons to fight cancer,” Li Zonghai, founder and chief executive of CARsgen, said in an interview. “A lot of people said we couldn’t treat it, and now there are more and more modalities—so many treatment options.”`,
    `For all of its advances, China has also found itself in controversy over the transparency of its clinical trials, after three people, including a 6-year-old girl, were reported to have died while receiving experimental medicines. In general, Chinese regulators allow hospitals to start clinical trials with less central government oversight than the U.S. requires—a system that has enabled innovation but also increased risks for patients in trials.`,
    `By contrast, China’s private international hospitals have generally been more cautious, steering clear of clinical trials and sticking only to therapies, including CAR-T treatments, that have been approved by regulators for commercialization.`,
    `Harnessing the immune system to attack cancer is the principle behind many of this century’s medical advances, and the pace is accelerating.`,
    `In August, Cambridge, Mass.-based Moderna and its partner Merck said their mRNA-based vaccine succeeded in preventing cancer from coming back or spreading in high-risk melanoma patients. The potential breakthrough could extend the lifespans of hundreds of thousands of people with the deadly skin cancer.`,
    `Meanwhile, the Food and Drug Administration last month approved a therapy for pancreatic tumors, a breakthrough in fighting one of the deadliest forms of cancer.`,
    `Chinese regulators first granted approval for CAR-T therapy to be administered to overseas patients in 2021. Since it began offering CAR-T in 2023, Shanghai SinoUnited Hospital has treated roughly three dozen patients from 12 countries, said Dr. Kathy Shi, the hospital’s founder and chief executive. Shi, a cardiologist who did her postdoctoral work at Emory University in Atlanta, said most of them were now cancer-free.`,
    `As word has spread, SinoUnited Hospital says it has welcomed patients from MD Anderson, Mayo Clinic and Johns Hopkins Hospital in Baltimore. Shi says the hospital has also seen an uptick in inquiries from across the U.S., Canada, Europe and Southeast Asia.`,
    `“A year ago, I was frequently talking to Chinese patients seeking international treatment,” said Xuan Linli, chief of medical oncology at Jiahui Hospital. “Now, more and more overseas patients are requesting consultations with us.”`,
    `CAR-T therapies have been studied in the U.S. since the 1980s and in China since the 1990s. A breakthrough came in 2012 when Pennsylvania native Emily Whitehead, then 6 years old, became the first child to beat leukemia after undergoing the therapy. (She is now an undergraduate at the University of Pennsylvania, steps from where she received her CAR-T treatment.)`,
    `CAR-T remains a niche within cancer treatment because it can treat a limited number of cancer types. For now, CAR-T treatment generally comes only after other treatments have failed, in part because of potential side effects such as inflammation caused by the infusion.`,
    `Patients choose China not merely for the low cost of treatment, but because the country’s international hospitals offer a range of services—a critical factor, since CAR-T therapy can require intensive care and intervention from cardiologists, neurologists and other specialists.`,
    `Because CAR-T requires tailor-made cellular therapy for each patient, China’s ability to crank out the therapies in a matter of days—in laboratories just a short drive from Shanghai—can give it an edge over countries where the wait is longer.`,
    `The possibility of immediate treatment in China makes it an attractive choice for patients fighting aggressive cancers.`,
    `Bronkhorst and Walters also describe better customer service than they found when considering other countries, including help in securing medical visas and a higher level of English-language proficiency.`,
    `Walters said he was reassured when he got on a video call with SinoUnited Hospital hematologist Lily Zhou, who did her postdoctoral work at the University of California, San Francisco.`,
    `In New Zealand, “I felt like I had done more research and knew more about it than the doctors I was talking to,” Walters said. “But she has so much experience.…It was nice to talk to someone who knew exactly what she was doing.”`,
    `Walters and his friends started a crowdfunding effort online to cover most of the costs, and in late June he flew to Shanghai to begin his treatment under Zhou. It was his first time traveling there. On his 25th birthday, the staff at SinoUnited Hospital presented him with a cake.`,
    `For his next birthday, he is planning to be home in Auckland, with his cancer still in remission.`,
    `“I’d give anything to be healthy right now,” Walters said. “I want to be able to worry about the normal everyday things that everyone worries about: university, work, girlfriends, gossip.”`,
  ],
};
