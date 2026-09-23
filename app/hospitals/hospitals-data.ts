export type RankedHospital = {
  rank: string;
  name: string;
  originalName: string;
  city: string;
};

export type HospitalSpecialty = {
  id: string;
  name: string;
  originalName: string;
  hospitals: RankedHospital[];
};

/**
 * Official top-ten entries from the 2023 Fudan hospital specialty reputation
 * rankings. Nominated hospitals are intentionally excluded. English hospital
 * names follow the institution's own English-language site where available;
 * for example, 山东大学附属生殖医院 is listed as Hospital for Reproductive
 * Medicine, Shandong University.
 */
export const hospitalSpecialties: HospitalSpecialty[] = [
  {
    "originalName": "病理科",
    "name": "Pathology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Fudan University Shanghai Cancer Center",
        "originalName": "复旦大学附属肿瘤医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      },
      {
        "rank": "5",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "7",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "8",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      }
    ],
    "id": "pathology"
  },
  {
    "originalName": "传染感染",
    "name": "Infectious Diseases",
    "hospitals": [
      {
        "rank": "1",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "3",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "5",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "6",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "8",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "9",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "The Third Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第三医院",
        "city": "Guangzhou"
      }
    ],
    "id": "infectious-diseases"
  },
  {
    "originalName": "耳鼻喉科",
    "name": "Otolaryngology (ENT)",
    "hospitals": [
      {
        "rank": "1",
        "name": "Eye & ENT Hospital of Fudan University",
        "originalName": "复旦大学附属眼耳鼻喉科医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Beijing Tongren Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京同仁医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Shanghai Ninth People's Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属第九人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Shanghai Sixth People's Hospital",
        "originalName": "上海市第六人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "9",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "10",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      }
    ],
    "id": "otolaryngology-ent"
  },
  {
    "originalName": "放射科",
    "name": "Radiology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "3",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Zhongda Hospital, Southeast University",
        "originalName": "东南大学附属中大医院",
        "city": "Nanjing"
      },
      {
        "rank": "6",
        "name": "PLA Eastern Theater Command General Hospital",
        "originalName": "中国人民解放军东部战区总医院",
        "city": "Nanjing"
      },
      {
        "rank": "7",
        "name": "Changzheng Hospital, Naval Medical University",
        "originalName": "海军军医大学第二附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Guangdong Provincial People's Hospital",
        "originalName": "广东省人民医院",
        "city": "Guangzhou"
      },
      {
        "rank": "10",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      }
    ],
    "id": "radiology"
  },
  {
    "originalName": "呼吸科",
    "name": "Pulmonology",
    "hospitals": [
      {
        "rank": "1",
        "name": "The First Affiliated Hospital of Guangzhou Medical University",
        "originalName": "广州医科大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "2",
        "name": "China-Japan Friendship Hospital",
        "originalName": "中日友好医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "6",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "9",
        "name": "Beijing Chaoyang Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京朝阳医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      }
    ],
    "id": "pulmonology"
  },
  {
    "originalName": "风湿病",
    "name": "Rheumatology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Nanjing Drum Tower Hospital",
        "originalName": "南京大学医学院附属鼓楼医院",
        "city": "Nanjing"
      },
      {
        "rank": "5",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "6",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "9",
        "name": "The First Affiliated Hospital of Harbin Medical University",
        "originalName": "哈尔滨医科大学附属第一医院",
        "city": "Harbin"
      },
      {
        "rank": "10",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      }
    ],
    "id": "rheumatology"
  },
  {
    "originalName": "妇产科",
    "name": "Obstetrics and Gynecology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "3",
        "name": "Obstetrics & Gynecology Hospital of Fudan University",
        "originalName": "复旦大学附属妇产科医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Women's Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属妇产科医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "West China Second University Hospital, Sichuan University",
        "originalName": "四川大学华西第二医院",
        "city": "Chengdu"
      },
      {
        "rank": "7",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      },
      {
        "rank": "T7",
        "name": "Qilu Hospital of Shandong University",
        "originalName": "山东大学齐鲁医院",
        "city": "Jinan"
      },
      {
        "rank": "9",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "10",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      }
    ],
    "id": "obstetrics-and-gynecology"
  },
  {
    "originalName": "骨科",
    "name": "Orthopedics",
    "hospitals": [
      {
        "rank": "1",
        "name": "Beijing Jishuitan Hospital",
        "originalName": "北京积水潭医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Shanghai Sixth People's Hospital",
        "originalName": "上海市第六人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "7",
        "name": "The Third Hospital of Hebei Medical University",
        "originalName": "河北医科大学第三医院",
        "city": "Shijiazhuang"
      },
      {
        "rank": "8",
        "name": "Changzheng Hospital, Naval Medical University",
        "originalName": "海军军医大学第二附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "Tianjin Hospital",
        "originalName": "天津市天津医院",
        "city": "Tianjin"
      }
    ],
    "id": "orthopedics"
  },
  {
    "originalName": "精神医学",
    "name": "Psychiatry",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University Sixth Hospital",
        "originalName": "北京大学第六医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Shanghai Mental Health Center",
        "originalName": "上海市精神卫生中心",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Second Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅二医院",
        "city": "Changsha"
      },
      {
        "rank": "4",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "5",
        "name": "Beijing Anding Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京安定医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Nanjing Brain Hospital",
        "originalName": "南京脑科医院",
        "city": "Nanjing"
      },
      {
        "rank": "7",
        "name": "The Affiliated Brain Hospital of Guangzhou Medical University",
        "originalName": "广州医科大学附属脑科医院",
        "city": "Guangzhou"
      },
      {
        "rank": "8",
        "name": "Renmin Hospital of Wuhan University",
        "originalName": "武汉大学人民医院",
        "city": "Wuhan"
      },
      {
        "rank": "9",
        "name": "Beijing Huilongguan Hospital",
        "originalName": "北京回龙观医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "First Affiliated Hospital of Xi'an Jiaotong University",
        "originalName": "西安交通大学第一附属医院",
        "city": "Xi'an"
      }
    ],
    "id": "psychiatry"
  },
  {
    "originalName": "口腔科",
    "name": "Dentistry and Oral Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University Hospital of Stomatology",
        "originalName": "北京大学口腔医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "West China Hospital of Stomatology, Sichuan University",
        "originalName": "四川大学华西口腔医院",
        "city": "Chengdu"
      },
      {
        "rank": "3",
        "name": "Shanghai Ninth People's Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属第九人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Third Affiliated Hospital of Air Force Medical University (Stomatological Hospital)",
        "originalName": "空军军医大学第三附属医院（口腔医院）",
        "city": "Xi'an"
      },
      {
        "rank": "5",
        "name": "Hospital of Stomatology, Wuhan University",
        "originalName": "武汉大学口腔医院",
        "city": "Wuhan"
      },
      {
        "rank": "6",
        "name": "Hospital of Stomatology, Sun Yat-sen University",
        "originalName": "中山大学光华口腔医学院附属口腔医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Beijing Stomatological Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京口腔医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "The Affiliated Stomatological Hospital of Nanjing Medical University (Jiangsu Province Stomatology Hospital)",
        "originalName": "南京医科大学附属口腔医院（江苏省口腔医院）",
        "city": "Nanjing"
      },
      {
        "rank": "9",
        "name": "Stomatology Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属口腔医院",
        "city": "Hangzhou"
      },
      {
        "rank": "10",
        "name": "School and Hospital of Stomatology, China Medical University",
        "originalName": "中国医科大学附属口腔医院",
        "city": "Shenyang"
      }
    ],
    "id": "dentistry-and-oral-medicine"
  },
  {
    "originalName": "麻醉科",
    "name": "Anesthesiology",
    "hospitals": [
      {
        "rank": "1",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "2",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "5",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "8",
        "name": "The First Affiliated Hospital of Zhengzhou University",
        "originalName": "郑州大学第一附属医院",
        "city": "Zhengzhou"
      },
      {
        "rank": "9",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      }
    ],
    "id": "anesthesiology"
  },
  {
    "originalName": "泌尿外科",
    "name": "Urology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "T2",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Sun Yat-sen Memorial Hospital, Sun Yat-sen University",
        "originalName": "中山大学孙逸仙纪念医院",
        "city": "Guangzhou"
      },
      {
        "rank": "5",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "6",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Changhai Hospital, Naval Medical University",
        "originalName": "海军军医大学第一附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "9",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "10",
        "name": "The Second Hospital of Tianjin Medical University",
        "originalName": "天津医科大学第二医院",
        "city": "Tianjin"
      }
    ],
    "id": "urology"
  },
  {
    "originalName": "内分泌",
    "name": "Endocrinology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Second Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅二医院",
        "city": "Changsha"
      },
      {
        "rank": "5",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "6",
        "name": "Shanghai Sixth People's Hospital",
        "originalName": "上海市第六人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "8",
        "name": "Shandong Provincial Hospital Affiliated to Shandong First Medical University",
        "originalName": "山东第一医科大学附属省立医院（山东省立医院）",
        "city": "Jinan"
      },
      {
        "rank": "9",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "10",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      }
    ],
    "id": "endocrinology"
  },
  {
    "originalName": "皮肤科",
    "name": "Dermatology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Hospital for Skin Diseases, Institute of Dermatology, Chinese Academy of Medical Sciences and Peking Union Medical College",
        "originalName": "中国医学科学院皮肤病医院（研究所）",
        "city": "Nanjing"
      },
      {
        "rank": "3",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "4",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "6",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "7",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Dermatology Hospital of Shandong First Medical University",
        "originalName": "山东第一医科大学附属皮肤病医院",
        "city": "Jinan"
      },
      {
        "rank": "10",
        "name": "China-Japan Friendship Hospital",
        "originalName": "中日友好医院",
        "city": "Beijing"
      }
    ],
    "id": "dermatology"
  },
  {
    "originalName": "普通外科",
    "name": "General Surgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "7",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "8",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "10",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      }
    ],
    "id": "general-surgery"
  },
  {
    "originalName": "神经内科",
    "name": "Neurology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Beijing Tiantan Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京天坛医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Xuanwu Hospital, Capital Medical University",
        "originalName": "首都医科大学宣武医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "6",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "9",
        "name": "The First Affiliated Hospital of Fujian Medical University",
        "originalName": "福建医科大学附属第一医院",
        "city": "Fuzhou"
      },
      {
        "rank": "10",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      }
    ],
    "id": "neurology"
  },
  {
    "originalName": "肾脏病",
    "name": "Nephrology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "PLA Eastern Theater Command General Hospital",
        "originalName": "中国人民解放军东部战区总医院",
        "city": "Nanjing"
      },
      {
        "rank": "4",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "5",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "10",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      }
    ],
    "id": "nephrology"
  },
  {
    "originalName": "神经外科",
    "name": "Neurosurgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Beijing Tiantan Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京天坛医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Xuanwu Hospital, Capital Medical University",
        "originalName": "首都医科大学宣武医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "Tianjin Medical University General Hospital",
        "originalName": "天津医科大学总医院",
        "city": "Tianjin"
      },
      {
        "rank": "7",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Tangdu Hospital, Air Force Medical University",
        "originalName": "空军军医大学第二附属医院(唐都医院)",
        "city": "Xi'an"
      },
      {
        "rank": "9",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "10",
        "name": "China-Japan Friendship Hospital",
        "originalName": "中日友好医院",
        "city": "Beijing"
      }
    ],
    "id": "neurosurgery"
  },
  {
    "originalName": "消化病",
    "name": "Gastroenterology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Changhai Hospital, Naval Medical University",
        "originalName": "海军军医大学第一附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "6",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "7",
        "name": "Beijing Friendship Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京友谊医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      }
    ],
    "id": "gastroenterology"
  },
  {
    "originalName": "小儿内科",
    "name": "Pediatric Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Children's Hospital of Fudan University",
        "originalName": "复旦大学附属儿科医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Beijing Children's Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京儿童医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Children's Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属儿童医院",
        "city": "Hangzhou"
      },
      {
        "rank": "4",
        "name": "Children's Hospital of Chongqing Medical University",
        "originalName": "重庆医科大学附属儿童医院",
        "city": "Chongqing"
      },
      {
        "rank": "5",
        "name": "Shanghai Children's Medical Center, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属上海儿童医学中心",
        "city": "Shanghai"
      },
      {
        "rank": "6",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "Guangzhou Women and Children's Medical Center",
        "originalName": "广州市妇女儿童医疗中心",
        "city": "Guangzhou"
      },
      {
        "rank": "8",
        "name": "Xinhua Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属新华医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "West China Second University Hospital, Sichuan University",
        "originalName": "四川大学华西第二医院",
        "city": "Chengdu"
      },
      {
        "rank": "10",
        "name": "Shengjing Hospital of China Medical University",
        "originalName": "中国医科大学附属盛京医院",
        "city": "Shenyang"
      }
    ],
    "id": "pediatric-medicine"
  },
  {
    "originalName": "小儿外科",
    "name": "Pediatric Surgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Beijing Children's Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京儿童医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Children's Hospital of Fudan University",
        "originalName": "复旦大学附属儿科医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Children's Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属儿童医院",
        "city": "Hangzhou"
      },
      {
        "rank": "4",
        "name": "Children's Hospital of Chongqing Medical University",
        "originalName": "重庆医科大学附属儿童医院",
        "city": "Chongqing"
      },
      {
        "rank": "5",
        "name": "Guangzhou Women and Children's Medical Center",
        "originalName": "广州市妇女儿童医疗中心",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Shengjing Hospital of China Medical University",
        "originalName": "中国医科大学附属盛京医院",
        "city": "Shenyang"
      },
      {
        "rank": "7",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "8",
        "name": "Xinhua Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属新华医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Shanghai Children's Medical Center, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属上海儿童医学中心",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Capital Institute of Pediatrics",
        "originalName": "首都儿科研究所",
        "city": "Beijing"
      }
    ],
    "id": "pediatric-surgery"
  },
  {
    "originalName": "心血管病",
    "name": "Cardiology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Fuwai Hospital, Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院阜外医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Beijing Anzhen Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京安贞医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "PLA Northern Theater Command General Hospital",
        "originalName": "中国人民解放军北部战区总医院",
        "city": "Shenyang"
      },
      {
        "rank": "5",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "Guangdong Provincial People's Hospital",
        "originalName": "广东省人民医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "8",
        "name": "The Second Affiliated Hospital of Harbin Medical University",
        "originalName": "哈尔滨医科大学附属第二医院",
        "city": "Harbin"
      },
      {
        "rank": "9",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      }
    ],
    "id": "cardiology"
  },
  {
    "originalName": "心外科",
    "name": "Cardiac Surgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Fuwai Hospital, Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院阜外医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Beijing Anzhen Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京安贞医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "5",
        "name": "Guangdong Provincial People's Hospital",
        "originalName": "广东省人民医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "7",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "8",
        "name": "Second Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅二医院",
        "city": "Changsha"
      },
      {
        "rank": "9",
        "name": "Shanghai Children's Medical Center, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属上海儿童医学中心",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Fujian Medical University Union Hospital",
        "originalName": "福建医科大学附属协和医院",
        "city": "Fuzhou"
      }
    ],
    "id": "cardiac-surgery"
  },
  {
    "originalName": "胸外科",
    "name": "Thoracic Surgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Cancer Hospital of the Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院肿瘤医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Shanghai Chest Hospital",
        "originalName": "上海市胸科医院（暨上海交通大学附属胸科医院）",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Shanghai Pulmonary Hospital",
        "originalName": "上海市肺科医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "5",
        "name": "The First Affiliated Hospital of Guangzhou Medical University",
        "originalName": "广州医科大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      },
      {
        "rank": "T7",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Sun Yat-sen University Cancer Center",
        "originalName": "中山大学肿瘤防治中心",
        "city": "Guangzhou"
      },
      {
        "rank": "10",
        "name": "Fudan University Shanghai Cancer Center",
        "originalName": "复旦大学附属肿瘤医院",
        "city": "Shanghai"
      }
    ],
    "id": "thoracic-surgery"
  },
  {
    "originalName": "血液学",
    "name": "Hematology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Institute of Hematology & Blood Diseases Hospital, Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院血液病医院（研究所）",
        "city": "Tianjin"
      },
      {
        "rank": "3",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "The First Affiliated Hospital of Soochow University",
        "originalName": "苏州大学附属第一医院",
        "city": "Suzhou"
      },
      {
        "rank": "5",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "6",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "7",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "8",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "9",
        "name": "Xinqiao Hospital, Army Medical University",
        "originalName": "陆军军医大学第二附属医院",
        "city": "Chongqing"
      },
      {
        "rank": "10",
        "name": "Qilu Hospital of Shandong University",
        "originalName": "山东大学齐鲁医院",
        "city": "Jinan"
      }
    ],
    "id": "hematology"
  },
  {
    "originalName": "眼科",
    "name": "Ophthalmology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Zhongshan Ophthalmic Center, Sun Yat-sen University",
        "originalName": "中山大学中山眼科中心",
        "city": "Guangzhou"
      },
      {
        "rank": "2",
        "name": "Beijing Tongren Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京同仁医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Eye & ENT Hospital of Fudan University",
        "originalName": "复旦大学附属眼耳鼻喉科医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "5",
        "name": "Eye Hospital of Wenzhou Medical University",
        "originalName": "温州医科大学附属眼视光医院",
        "city": "Wenzhou"
      },
      {
        "rank": "6",
        "name": "Shanghai Ninth People's Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属第九人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "7",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Shanghai General Hospital",
        "originalName": "上海市第一人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Tianjin Eye Hospital",
        "originalName": "天津市眼科医院",
        "city": "Tianjin"
      },
      {
        "rank": "10",
        "name": "Peking University People's Hospital",
        "originalName": "北京大学人民医院",
        "city": "Beijing"
      }
    ],
    "id": "ophthalmology"
  },
  {
    "originalName": "整形外科",
    "name": "Plastic Surgery",
    "hospitals": [
      {
        "rank": "1",
        "name": "Shanghai Ninth People's Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属第九人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Plastic Surgery Hospital, Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院整形外科医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "4",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "6",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "7",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      },
      {
        "rank": "9",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "10",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      }
    ],
    "id": "plastic-surgery"
  },
  {
    "originalName": "肿瘤学",
    "name": "Oncology",
    "hospitals": [
      {
        "rank": "1",
        "name": "Cancer Hospital of the Chinese Academy of Medical Sciences",
        "originalName": "中国医学科学院肿瘤医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Sun Yat-sen University Cancer Center",
        "originalName": "中山大学肿瘤防治中心",
        "city": "Guangzhou"
      },
      {
        "rank": "3",
        "name": "Fudan University Shanghai Cancer Center",
        "originalName": "复旦大学附属肿瘤医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Peking University Cancer Hospital",
        "originalName": "北京大学肿瘤医院",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Tianjin Medical University Cancer Institute and Hospital",
        "originalName": "天津医科大学肿瘤医院",
        "city": "Tianjin"
      },
      {
        "rank": "6",
        "name": "Cancer Hospital of Shandong First Medical University (Shandong Cancer Institute, Shandong Cancer Hospital)",
        "originalName": "山东省肿瘤医院暨山东省肿瘤防治研究院",
        "city": "Jinan"
      },
      {
        "rank": "7",
        "name": "Cancer Hospital of the University of Chinese Academy of Sciences (Zhejiang Cancer Hospital)",
        "originalName": "中国科学院大学附属肿瘤医院（浙江省肿瘤医院）",
        "city": "Hangzhou"
      },
      {
        "rank": "8",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "9",
        "name": "Jiangsu Cancer Hospital",
        "originalName": "江苏省肿瘤医院",
        "city": "Nanjing"
      },
      {
        "rank": "10",
        "name": "Sichuan Cancer Hospital",
        "originalName": "四川省肿瘤医院",
        "city": "Chengdu"
      }
    ],
    "id": "oncology"
  },
  {
    "originalName": "老年医学",
    "name": "Geriatric Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Beijing Hospital",
        "originalName": "北京医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "5",
        "name": "Huadong Hospital Affiliated to Fudan University",
        "originalName": "复旦大学附属华东医院",
        "city": "Shanghai"
      },
      {
        "rank": "6",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "7",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Guangdong Provincial People's Hospital",
        "originalName": "广东省人民医院",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "10",
        "name": "Second Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅二医院",
        "city": "Changsha"
      }
    ],
    "id": "geriatric-medicine"
  },
  {
    "originalName": "康复医学",
    "name": "Rehabilitation Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "2",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Jiangsu Province Hospital (First Affiliated Hospital of Nanjing Medical University)",
        "originalName": "江苏省人民医院（南京医科大学第一附属医院）",
        "city": "Nanjing"
      },
      {
        "rank": "4",
        "name": "China Rehabilitation Research Center (Beijing Bo'ai Hospital)",
        "originalName": "中国康复研究中心(北京博爱医院)",
        "city": "Beijing"
      },
      {
        "rank": "5",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "6",
        "name": "The Third Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第三医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Qilu Hospital of Shandong University",
        "originalName": "山东大学齐鲁医院",
        "city": "Jinan"
      },
      {
        "rank": "8",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "9",
        "name": "Zhujiang Hospital, Southern Medical University",
        "originalName": "南方医科大学珠江医院",
        "city": "Guangzhou"
      },
      {
        "rank": "10",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      }
    ],
    "id": "rehabilitation-medicine"
  },
  {
    "originalName": "检验医学",
    "name": "Laboratory Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "2",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Nanfang Hospital, Southern Medical University",
        "originalName": "南方医科大学南方医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      },
      {
        "rank": "8",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Sichuan Provincial People's Hospital",
        "originalName": "四川省人民医院",
        "city": "Chengdu"
      }
    ],
    "id": "laboratory-medicine"
  },
  {
    "originalName": "烧伤科",
    "name": "Burn Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      },
      {
        "rank": "2",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Changhai Hospital, Naval Medical University",
        "originalName": "海军军医大学第一附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Beijing Jishuitan Hospital",
        "originalName": "北京积水潭医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "7",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "8",
        "name": "The First Affiliated Hospital of Nanchang University",
        "originalName": "南昌大学第一附属医院",
        "city": "Nanchang"
      },
      {
        "rank": "9",
        "name": "Wuhan Third Hospital (Tongren Hospital of Wuhan University)",
        "originalName": "武汉市第三医院暨武汉大学附属同仁医院",
        "city": "Wuhan"
      },
      {
        "rank": "10",
        "name": "Affiliated Hospital of Jiangnan University",
        "originalName": "江南大学附属医院",
        "city": "Wuxi"
      }
    ],
    "id": "burn-medicine"
  },
  {
    "originalName": "核医学",
    "name": "Nuclear Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "3",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "4",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "5",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "6",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "First Hospital of Shanxi Medical University",
        "originalName": "山西医科大学第一医院",
        "city": "Taiyuan"
      },
      {
        "rank": "8",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "10",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      }
    ],
    "id": "nuclear-medicine"
  },
  {
    "originalName": "超声医学",
    "name": "Ultrasound Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "6",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "7",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "8",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Shanghai Sixth People's Hospital",
        "originalName": "上海市第六人民医院",
        "city": "Shanghai"
      }
    ],
    "id": "ultrasound-medicine"
  },
  {
    "originalName": "急诊医学",
    "name": "Emergency Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Qilu Hospital of Shandong University",
        "originalName": "山东大学齐鲁医院",
        "city": "Jinan"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "5",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "6",
        "name": "China-Japan Friendship Hospital",
        "originalName": "中日友好医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "Beijing Chaoyang Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京朝阳医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Sichuan Provincial People's Hospital",
        "originalName": "四川省人民医院",
        "city": "Chengdu"
      },
      {
        "rank": "9",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "10",
        "name": "The First Affiliated Hospital of Zhengzhou University",
        "originalName": "郑州大学第一附属医院",
        "city": "Zhengzhou"
      }
    ],
    "id": "emergency-medicine"
  },
  {
    "originalName": "重症医学",
    "name": "Critical Care Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Zhongda Hospital, Southeast University",
        "originalName": "东南大学附属中大医院",
        "city": "Nanjing"
      },
      {
        "rank": "3",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "4",
        "name": "Ruijin Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属瑞金医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "The First Affiliated Hospital of Harbin Medical University",
        "originalName": "哈尔滨医科大学附属第一医院",
        "city": "Harbin"
      },
      {
        "rank": "7",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "8",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "9",
        "name": "Zhongnan Hospital of Wuhan University",
        "originalName": "武汉大学中南医院",
        "city": "Wuhan"
      },
      {
        "rank": "10",
        "name": "Shandong Provincial Hospital Affiliated to Shandong First Medical University",
        "originalName": "山东第一医科大学附属省立医院（山东省立医院）",
        "city": "Jinan"
      }
    ],
    "id": "critical-care-medicine"
  },
  {
    "originalName": "临床药学",
    "name": "Clinical Pharmacy",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Union Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属协和医院",
        "city": "Wuhan"
      },
      {
        "rank": "3",
        "name": "Second Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅二医院",
        "city": "Changsha"
      },
      {
        "rank": "4",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "5",
        "name": "The First Affiliated Hospital of Zhengzhou University",
        "originalName": "郑州大学第一附属医院",
        "city": "Zhengzhou"
      },
      {
        "rank": "6",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "Xijing Hospital, Air Force Medical University",
        "originalName": "空军军医大学第一附属医院（西京医院）",
        "city": "Xi'an"
      },
      {
        "rank": "8",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "9",
        "name": "Sichuan Provincial People's Hospital",
        "originalName": "四川省人民医院",
        "city": "Chengdu"
      },
      {
        "rank": "10",
        "name": "The First Affiliated Hospital of Soochow University",
        "originalName": "苏州大学附属第一医院",
        "city": "Suzhou"
      }
    ],
    "id": "clinical-pharmacy"
  },
  {
    "originalName": "生殖医学",
    "name": "Reproductive Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "The First Affiliated Hospital of Zhengzhou University",
        "originalName": "郑州大学第一附属医院",
        "city": "Zhengzhou"
      },
      {
        "rank": "3",
        "name": "Hospital for Reproductive Medicine, Shandong University",
        "originalName": "山东大学附属生殖医院",
        "city": "Jinan"
      },
      {
        "rank": "4",
        "name": "Reproductive & Genetic Hospital of CITIC-Xiangya",
        "originalName": "中信湘雅生殖与遗传专科医院",
        "city": "Changsha"
      },
      {
        "rank": "5",
        "name": "Nanjing Drum Tower Hospital",
        "originalName": "南京大学医学院附属鼓楼医院",
        "city": "Nanjing"
      },
      {
        "rank": "6",
        "name": "The First Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "7",
        "name": "Chongqing Health Center for Women and Children",
        "originalName": "重庆市妇幼保健院",
        "city": "Chongqing"
      },
      {
        "rank": "8",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "9",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Women's Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属妇产科医院",
        "city": "Hangzhou"
      }
    ],
    "id": "reproductive-medicine"
  },
  {
    "originalName": "变态反应",
    "name": "Allergy",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Beijing Tongren Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京同仁医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "Beijing Shijitan Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京世纪坛医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "Jiangsu Province Hospital (First Affiliated Hospital of Nanjing Medical University)",
        "originalName": "江苏省人民医院（南京医科大学第一附属医院）",
        "city": "Nanjing"
      },
      {
        "rank": "5",
        "name": "The First Affiliated Hospital of Guangzhou Medical University",
        "originalName": "广州医科大学附属第一医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "7",
        "name": "The Second Affiliated Hospital of Guangzhou Medical University",
        "originalName": "广州医科大学附属第二医院",
        "city": "Guangzhou"
      },
      {
        "rank": "8",
        "name": "Renji Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属仁济医院",
        "city": "Shanghai"
      },
      {
        "rank": "9",
        "name": "Shengjing Hospital of China Medical University",
        "originalName": "中国医科大学附属盛京医院",
        "city": "Shenyang"
      },
      {
        "rank": "10",
        "name": "The Third Affiliated Hospital of Sun Yat-sen University",
        "originalName": "中山大学附属第三医院",
        "city": "Guangzhou"
      }
    ],
    "id": "allergy"
  },
  {
    "originalName": "健康管理",
    "name": "Health Management",
    "hospitals": [
      {
        "rank": "1",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Sichuan Provincial People's Hospital",
        "originalName": "四川省人民医院",
        "city": "Chengdu"
      },
      {
        "rank": "3",
        "name": "Jiangsu Province Hospital (First Affiliated Hospital of Nanjing Medical University)",
        "originalName": "江苏省人民医院（南京医科大学第一附属医院）",
        "city": "Nanjing"
      },
      {
        "rank": "4",
        "name": "The Affiliated Hospital of Qingdao University",
        "originalName": "青岛大学附属医院",
        "city": "Qingdao"
      },
      {
        "rank": "5",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "7",
        "name": "The First Affiliated Hospital of USTC (Anhui Provincial Hospital)",
        "originalName": "中国科学技术大学附属第一医院（安徽省立医院）",
        "city": "Hefei"
      },
      {
        "rank": "8",
        "name": "Third Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅三医院",
        "city": "Changsha"
      },
      {
        "rank": "9",
        "name": "Shenzhen People's Hospital",
        "originalName": "深圳市人民医院",
        "city": "Shenzhen"
      },
      {
        "rank": "10",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      }
    ],
    "id": "health-management"
  },
  {
    "originalName": "结核病",
    "name": "Tuberculosis",
    "hospitals": [
      {
        "rank": "1",
        "name": "Beijing Chest Hospital, Capital Medical University",
        "originalName": "首都医科大学附属北京胸科医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Shanghai Pulmonary Hospital",
        "originalName": "上海市肺科医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Shenzhen Third People's Hospital (Second Affiliated Hospital of Southern University of Science and Technology)",
        "originalName": "深圳市第三人民医院（南方科技大学第二附属医院）",
        "city": "Shenzhen"
      },
      {
        "rank": "4",
        "name": "Shanghai Public Health Clinical Center",
        "originalName": "上海市（复旦大学附属）公共卫生临床中心",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Guangzhou Chest Hospital",
        "originalName": "广州市胸科医院",
        "city": "Guangzhou"
      },
      {
        "rank": "6",
        "name": "Wuhan Pulmonary Hospital",
        "originalName": "武汉市肺科医院",
        "city": "Wuhan"
      },
      {
        "rank": "7",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "Shandong Public Health Clinical Center",
        "originalName": "山东省公共卫生临床中心",
        "city": "Jinan"
      },
      {
        "rank": "9",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      }
    ],
    "id": "tuberculosis"
  },
  {
    "originalName": "全科医学",
    "name": "General Practice",
    "hospitals": [
      {
        "rank": "1",
        "name": "Zhongshan Hospital, Fudan University",
        "originalName": "复旦大学附属中山医院",
        "city": "Shanghai"
      },
      {
        "rank": "2",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "3",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "4",
        "name": "Sir Run Run Shaw Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属邵逸夫医院",
        "city": "Hangzhou"
      },
      {
        "rank": "5",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "6",
        "name": "Fuxing Hospital, Capital Medical University",
        "originalName": "首都医科大学附属复兴医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "The Second Affiliated Hospital of Harbin Medical University",
        "originalName": "哈尔滨医科大学附属第二医院",
        "city": "Harbin"
      },
      {
        "rank": "8",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "9",
        "name": "Sichuan Provincial People's Hospital",
        "originalName": "四川省人民医院",
        "city": "Chengdu"
      },
      {
        "rank": "10",
        "name": "Affiliated Hospital of Zunyi Medical University",
        "originalName": "遵义医科大学附属医院",
        "city": "Zunyi"
      }
    ],
    "id": "general-practice"
  },
  {
    "originalName": "疼痛学",
    "name": "Pain Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "China-Japan Friendship Hospital",
        "originalName": "中日友好医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "The First Affiliated Hospital of Nanchang University",
        "originalName": "南昌大学第一附属医院",
        "city": "Nanchang"
      },
      {
        "rank": "3",
        "name": "Shandong Provincial Hospital Affiliated to Shandong First Medical University",
        "originalName": "山东第一医科大学附属省立医院（山东省立医院）",
        "city": "Jinan"
      },
      {
        "rank": "4",
        "name": "Xinhua Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属新华医院",
        "city": "Shanghai"
      },
      {
        "rank": "5",
        "name": "Huazhong University of Science and Technology Union Shenzhen Hospital",
        "originalName": "华中科技大学协和深圳医院",
        "city": "Shenzhen"
      },
      {
        "rank": "6",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "7",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "8",
        "name": "The First Hospital of China Medical University",
        "originalName": "中国医科大学附属第一医院",
        "city": "Shenyang"
      },
      {
        "rank": "9",
        "name": "First Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第一医院",
        "city": "Hangzhou"
      },
      {
        "rank": "10",
        "name": "The First Affiliated Hospital of Zhengzhou University",
        "originalName": "郑州大学第一附属医院",
        "city": "Zhengzhou"
      }
    ],
    "id": "pain-medicine"
  },
  {
    "originalName": "运动医学",
    "name": "Sports Medicine",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking University Third Hospital",
        "originalName": "北京大学第三医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Huashan Hospital, Fudan University",
        "originalName": "复旦大学附属华山医院",
        "city": "Shanghai"
      },
      {
        "rank": "3",
        "name": "Beijing Jishuitan Hospital",
        "originalName": "北京积水潭医院",
        "city": "Beijing"
      },
      {
        "rank": "4",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "5",
        "name": "Shanghai Sixth People's Hospital",
        "originalName": "上海市第六人民医院",
        "city": "Shanghai"
      },
      {
        "rank": "6",
        "name": "Chinese PLA General Hospital",
        "originalName": "中国人民解放军总医院",
        "city": "Beijing"
      },
      {
        "rank": "7",
        "name": "Nanjing Drum Tower Hospital",
        "originalName": "南京大学医学院附属鼓楼医院",
        "city": "Nanjing"
      },
      {
        "rank": "8",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      },
      {
        "rank": "9",
        "name": "Changhai Hospital, Naval Medical University",
        "originalName": "海军军医大学第一附属医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Southwest Hospital, Army Medical University",
        "originalName": "陆军军医大学第一附属医院",
        "city": "Chongqing"
      }
    ],
    "id": "sports-medicine"
  },
  {
    "originalName": "罕见病",
    "name": "Rare Diseases",
    "hospitals": [
      {
        "rank": "1",
        "name": "Peking Union Medical College Hospital",
        "originalName": "中国医学科学院北京协和医院",
        "city": "Beijing"
      },
      {
        "rank": "2",
        "name": "Second Affiliated Hospital, Zhejiang University School of Medicine",
        "originalName": "浙江大学医学院附属第二医院",
        "city": "Hangzhou"
      },
      {
        "rank": "3",
        "name": "The First Affiliated Hospital of Fujian Medical University",
        "originalName": "福建医科大学附属第一医院",
        "city": "Fuzhou"
      },
      {
        "rank": "4",
        "name": "West China Hospital, Sichuan University",
        "originalName": "四川大学华西医院",
        "city": "Chengdu"
      },
      {
        "rank": "5",
        "name": "Peking University First Hospital",
        "originalName": "北京大学第一医院",
        "city": "Beijing"
      },
      {
        "rank": "6",
        "name": "Tongji Hospital, Tongji Medical College, Huazhong University of Science and Technology",
        "originalName": "华中科技大学同济医学院附属同济医院",
        "city": "Wuhan"
      },
      {
        "rank": "7",
        "name": "Children's Hospital of Fudan University",
        "originalName": "复旦大学附属儿科医院",
        "city": "Shanghai"
      },
      {
        "rank": "8",
        "name": "Guangzhou Women and Children's Medical Center",
        "originalName": "广州市妇女儿童医疗中心",
        "city": "Guangzhou"
      },
      {
        "rank": "9",
        "name": "Xinhua Hospital, Shanghai Jiao Tong University School of Medicine",
        "originalName": "上海交通大学医学院附属新华医院",
        "city": "Shanghai"
      },
      {
        "rank": "10",
        "name": "Xiangya Hospital, Central South University",
        "originalName": "中南大学湘雅医院",
        "city": "Changsha"
      }
    ],
    "id": "rare-diseases"
  }
];
