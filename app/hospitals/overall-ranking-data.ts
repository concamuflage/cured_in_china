import { hospitalSpecialties } from "./hospitals-data";

export type OverallRankedHospital = {
  name: string;
  originalName: string;
  city: string;
};

export type OverallRankingTier = {
  tier: "A++++" | "A+++" | "A++" | "A+" | "A";
  hospitals: OverallRankedHospital[];
};

type HospitalTranslation = Omit<OverallRankedHospital, "originalName">;

const specialtyHospitalTranslations = new Map<string, HospitalTranslation>(
  hospitalSpecialties.flatMap((specialty) =>
    specialty.hospitals.map((hospital) => [
      hospital.originalName,
      { name: hospital.name, city: hospital.city },
    ]),
  ),
);

// These six hospitals do not appear in the specialty top-ten data, so their
// official English names and cities are supplied directly for the overall list.
const additionalHospitalTranslations: Record<string, HospitalTranslation> = {
  重庆医科大学附属第一医院: {
    name: "The First Affiliated Hospital of Chongqing Medical University",
    city: "Chongqing",
  },
  吉林大学第一医院: {
    name: "The First Hospital of Jilin University",
    city: "Changchun",
  },
  安徽医科大学第一附属医院: {
    name: "The First Affiliated Hospital of Anhui Medical University",
    city: "Hefei",
  },
  "上海市胸科医院（暨上海交通大学医学院附属胸科医院）": {
    name: "Shanghai Chest Hospital",
    city: "Shanghai",
  },
  河南省人民医院: {
    name: "Henan Provincial People's Hospital",
    city: "Zhengzhou",
  },
  西安交通大学第二附属医院: {
    name: "The Second Affiliated Hospital of Xi'an Jiaotong University",
    city: "Xi'an",
  },
};

const overallRankingSource: Array<{
  tier: OverallRankingTier["tier"];
  originalNames: string[];
}> = [
  {
    tier: "A++++",
    originalNames: [
      "中国人民解放军总医院",
      "中国医学科学院北京协和医院",
      "北京大学第一医院",
      "北京大学第三医院",
      "中国医科大学附属第一医院",
      "上海交通大学医学院附属仁济医院",
      "上海交通大学医学院附属瑞金医院",
      "复旦大学附属中山医院",
      "复旦大学附属华山医院",
      "浙江大学医学院附属第一医院",
      "浙江大学医学院附属第二医院",
      "郑州大学第一附属医院",
      "华中科技大学同济医学院附属协和医院",
      "华中科技大学同济医学院附属同济医院",
      "中南大学湘雅二医院",
      "中南大学湘雅医院",
      "中山大学附属第一医院",
      "南方医科大学南方医院",
      "四川大学华西医院",
      "空军军医大学第一附属医院（西京医院）",
    ],
  },
  {
    tier: "A+++",
    originalNames: [
      "中日友好医院",
      "中国医学科学院阜外医院",
      "中国医学科学院肿瘤医院",
      "北京大学人民医院",
      "首都医科大学附属北京儿童医院",
      "首都医科大学附属北京天坛医院",
      "首都医科大学附属北京同仁医院",
      "上海市第六人民医院",
      "上海交通大学医学院附属第九人民医院",
      "复旦大学附属儿科医院",
      "复旦大学附属肿瘤医院",
      "海军军医大学第一附属医院",
      "江苏省人民医院（南京医科大学第一附属医院）",
      "南京大学医学院附属鼓楼医院",
      "山东大学齐鲁医院",
      "广东省人民医院",
      "广州医科大学附属第一医院",
      "中山大学肿瘤防治中心",
      "陆军军医大学第一附属医院",
      "四川省人民医院",
    ],
  },
  {
    tier: "A++",
    originalNames: [
      "北京积水潭医院",
      "首都医科大学附属北京安贞医院",
      "首都医科大学宣武医院",
      "中国医科大学附属盛京医院",
      "上海市肺科医院",
      "上海交通大学医学院附属新华医院",
      "复旦大学附属眼耳鼻喉科医院",
      "中国人民解放军东部战区总医院",
      "东南大学附属中大医院",
      "苏州大学附属第一医院",
      "浙江大学医学院附属邵逸夫医院",
      "福建医科大学附属第一医院",
      "南昌大学第一附属医院",
      "山东第一医科大学附属省立医院（山东省立医院）",
      "青岛大学附属医院",
      "武汉大学人民医院",
      "武汉大学中南医院",
      "中山大学附属第三医院",
      "重庆医科大学附属第一医院",
      "四川大学华西口腔医院",
    ],
  },
  {
    tier: "A+",
    originalNames: [
      "北京大学口腔医院",
      "北京大学肿瘤医院",
      "北京医院",
      "首都医科大学附属北京友谊医院",
      "首都医科大学附属北京朝阳医院",
      "天津医科大学肿瘤医院",
      "天津医科大学总医院",
      "吉林大学第一医院",
      "哈尔滨医科大学附属第二医院",
      "浙江大学医学院附属儿童医院",
      "中国科学技术大学附属第一医院（安徽省立医院）",
      "安徽医科大学第一附属医院",
      "中南大学湘雅三医院",
      "广州市妇女儿童医疗中心",
      "中山大学中山眼科中心",
      "中山大学孙逸仙纪念医院",
      "南方医科大学珠江医院",
      "重庆医科大学附属儿童医院",
      "四川大学华西第二医院",
      "西安交通大学第一附属医院",
    ],
  },
  {
    tier: "A",
    originalNames: [
      "北京大学第六医院",
      "首都医科大学附属北京世纪坛医院",
      "中国医学科学院血液病医院（研究所）",
      "中国人民解放军北部战区总医院",
      "哈尔滨医科大学附属第一医院",
      "上海市胸科医院（暨上海交通大学医学院附属胸科医院）",
      "上海市第一人民医院",
      "上海市精神卫生中心",
      "上海交通大学医学院附属上海儿童医学中心",
      "复旦大学附属妇产科医院",
      "海军军医大学第二附属医院",
      "浙江大学医学院附属妇产科医院",
      "温州医科大学附属眼视光医院",
      "福建医科大学附属协和医院",
      "河南省人民医院",
      "武汉大学口腔医院",
      "深圳市人民医院",
      "陆军军医大学第二附属医院",
      "西安交通大学第二附属医院",
      "空军军医大学第二附属医院(唐都医院)",
    ],
  },
];

/**
 * Resolves a Chinese hospital name to the verified English name and city.
 *
 * Example: `translateOverallHospital("吉林大学第一医院")` returns The First
 * Hospital of Jilin University in Changchun.
 */
function translateOverallHospital(originalName: string): OverallRankedHospital {
  const translation =
    specialtyHospitalTranslations.get(originalName) ??
    additionalHospitalTranslations[originalName];

  if (!translation) {
    throw new Error(`Missing hospital translation for ${originalName}`);
  }

  return { originalName, ...translation };
}

export const overallRankingTiers: OverallRankingTier[] =
  overallRankingSource.map(({ tier, originalNames }) => ({
    tier,
    hospitals: originalNames.map(translateOverallHospital),
  }));
