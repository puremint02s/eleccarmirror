import AudiEtronGTImg from "assets/data/CarImages/Audi e-tron GT.png";
import AudiEtronSSportbackImg from "assets/data/CarImages/Audi e-tron S sportback.png";
import AudiEtronSImg from "assets/data/CarImages/Audi e-tron S.png";
import AudiEtronSportbackImg from "assets/data/CarImages/Audi e-tron Sportback.jpg";
import AudiEtronImg from "assets/data/CarImages/Audi e-tron.jpg";
import AudiQ4EtronImg from "assets/data/CarImages/Audi Q4 e-tron.png";
import AudiQ4SportbackEtronImg from "assets/data/CarImages/Audi Q4 Sportback e-tron.jpg";
import BenzEQASUVImg from "assets/data/CarImages/Benz EQA SUV.png";
import BenzEQBSUVImg from "assets/data/CarImages/Benz EQB SUV.jpg";
import BenzEQESedanImg from "assets/data/CarImages/Benz EQE Sedan.jpg";
import BenzEQSSedanImg from "assets/data/CarImages/Benz EQS Sedan.png";
import BMWi4M50Img from "assets/data/CarImages/BMW i4 M50.jpg";
import BMWi4Img from "assets/data/CarImages/BMW i4.jpg";
import BMWi7Img from "assets/data/CarImages/BMW i7.png";
import BMWiXM60Img from "assets/data/CarImages/BMW iX M60.png";
import BMWiXImg from "assets/data/CarImages/BMW iX.jpg";
import BMWiX3Img from "assets/data/CarImages/BMW iX3.png";
import ChevroletBoltEvImg from "assets/data/CarImages/Chevrolet BOLT EV.png";
import GenesisG80Img from "assets/data/CarImages/Genesis G80.png";
import GenesisGV60Img from "assets/data/CarImages/Genesis GV60.png";
import GenesisGV70Img from "assets/data/CarImages/Genesis GV70.png";
import HyundaiIoniq5Img from "assets/data/CarImages/Hyundai Ioniq 5.png";
import HyundaiIoniq6Img from "assets/data/CarImages/Hyundai Ioniq 6.png";
import KiaEV6GTImg from "assets/data/CarImages/Kia EV6 GT.png";
import KiaEV6Img from "assets/data/CarImages/Kia EV6.png";
import KiaNiroEVImg from "assets/data/CarImages/Kia Niro EV.png";
import KiaNiroPlusImg from "assets/data/CarImages/Kia Niro Plus.png";
import TeslaModel3Img from "assets/data/CarImages/Tesla Model 3.jpg";
import TeslaModelSImg from "assets/data/CarImages/Tesla Model S.jpg";
import TeslaModelXImg from "assets/data/CarImages/Tesla Model X.png";
import TeslaModelYImg from "assets/data/CarImages/Tesla Model Y.jpg";

type ResultList = {
  brand: string;
  model: string;
  distance: number;
  battery: number;
  MPG: number;
  cost: number;
  homepage: string;
  img?: string;
};

type ResultCarProps = {
  [key: number]: ResultList;
};

export const ListA: ResultCarProps = {
  1: {
    brand: "아우디",
    model: "e-tron S",
    distance: 264,
    battery: 95,
    MPG: 2.7,
    cost: 135600000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-s.html",
    img: AudiEtronSImg,
  },
  2: {
    brand: "아우디",
    model: "e-tron S Sportback",
    distance: 269,
    battery: 95,
    MPG: 2.7,
    cost: 141482000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-s-sportback.html",
    img: AudiEtronSSportbackImg,
  },
  3: {
    brand: "아우디",
    model: "e-tron",
    distance: 328,
    battery: 95,
    MPG: 2.9,
    cost: 97220000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-etron_2021.html",
    img: AudiEtronImg,
  },
};

export const ListB: ResultCarProps = {
  1: {
    brand: "아우디",
    model: "e-tron Sportback",
    distance: 304,
    battery: 95,
    MPG: 3.1,
    cost: 101140000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron/audi-e-tron-sportback_2021.html",
    img: AudiEtronSportbackImg,
  },
  2: {
    brand: "BMW",
    model: "iX M60",
    distance: 421,
    battery: 106.3,
    MPG: 3.4,
    cost: 155100000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/m-series/bmw-ix-m60/2021/bmw-ix-m60-highlights.html",
    img: BMWiXM60Img,
  },
  3: {
    brand: "아우디",
    model: "e-tron GT",
    distance: 487,
    battery: 93.4,
    MPG: 3.4,
    cost: 206300000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron-gt/etrongt_2022.html",
    img: AudiEtronGTImg,
  },
};

export const ListC: ResultCarProps = {
  1: {
    brand: "BMW",
    model: "iX",
    distance: 447,
    battery: 111.5,
    MPG: 3.6,
    cost: 148600000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/bmw-ix/2021/bmw-ix.html",
    img: BMWiXImg,
  },
  2: {
    brand: "BMW",
    model: "i7",
    distance: 438,
    battery: 105.7,
    MPG: 3.7,
    cost: 215700000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/i7/2022/bmw-i7-sedan-highlights.html",
    img: BMWi7Img,
  },
  3: {
    brand: "아우디",
    model: "e-tron GT",
    distance: 487,
    battery: 93.4,
    MPG: 3.7,
    cost: 143320000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/e-tron-gt/etrongt_2022.html",
    img: AudiEtronGTImg,
  },
  4: {
    brand: "kia",
    model: "EV6 GT",
    distance: 342,
    battery: 77.4,
    MPG: 3.9,
    cost: 76680000,
    homepage: "https://www.kia.com/kr/vehicles/ev6-gt/features",
    img: KiaEV6GTImg,
  },
};

export const ListD: ResultCarProps = {
  1: {
    brand: "벤츠",
    model: "EQS Sedan",
    distance: 440,
    battery: 88.8,
    MPG: 4,
    cost: 188600000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqs/saloon-v297/explore.html",
    img: BenzEQSSedanImg,
  },
  2: {
    brand: "벤츠",
    model: "EQA SUV",
    distance: 301,
    battery: 66.5,
    MPG: 4,
    cost: 59900000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqa/explore.html",
    img: BenzEQASUVImg,
  },
  3: {
    brand: "BMW",
    model: "i4 M50",
    distance: 378,
    battery: 83.9,
    MPG: 4.1,
    cost: 84900000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/m-series/i4-m50/2021/bmw-i4-m50-highlights.html",
    img: BMWi4M50Img,
  },
  4: {
    brand: "BMW",
    model: "iX3",
    distance: 344,
    battery: 80,
    MPG: 4.1,
    cost: 75900000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/x-series/iX3/2021/bmw-ix3-highlights.html",
    img: BMWiX3Img,
  },
  5: {
    brand: "테슬라",
    model: "Model S",
    distance: 483,
    battery: 100,
    MPG: 4.1,
    cost: 129990000,
    homepage: "https://www.tesla.com/ko_kr/models",
    img: TeslaModelSImg,
  },
  6: {
    brand: "테슬라",
    model: "Model X",
    distance: 478,
    battery: 100,
    MPG: 4.1,
    cost: 139990000,
    homepage: "https://www.tesla.com/ko_kr/modelx",
    img: TeslaModelXImg,
  },
  7: {
    brand: "아우디",
    model: "Q4 Sportback e-tron",
    distance: 357,
    battery: 82,
    MPG: 4.1,
    cost: 63700000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/q4_e-tron/q4etronsb_2022.html",
    img: AudiQ4SportbackEtronImg,
  },
  8: {
    brand: "벤츠",
    model: "EQB SUV",
    distance: 313,
    battery: 66.5,
    MPG: 4.1,
    cost: 76000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqb/suv-x243/explore.html",
    img: BenzEQBSUVImg,
  },
  9: {
    brand: "제네시스",
    model: "G80",
    distance: 427,
    battery: 82.7,
    MPG: 4.3,
    cost: 82800000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html",
    img: GenesisG80Img,
  },
  10: {
    brand: "아우디",
    model: "Q4 e-tron",
    distance: 368,
    battery: 82,
    MPG: 4.3,
    cost: 59700000,
    homepage:
      "https://www.audi.co.kr/kr/web/ko/models/q4_e-tron/q4etron_2022.html",
    img: AudiQ4EtronImg,
  },
  11: {
    brand: "벤츠",
    model: "EQE Sedan",
    distance: 471,
    battery: 88.8,
    MPG: 4.3,
    cost: 103000000,
    homepage:
      "https://www.mercedes-benz.co.kr/passengercars/mercedes-benz-cars/models/eqe/saloon-v295/explore.html",
    img: BenzEQESedanImg,
  },
};

export const ListE: ResultCarProps = {
  1: {
    brand: "BMW",
    model: "i4",
    distance: 429,
    battery: 83.9,
    MPG: 4.6,
    cost: 66400000,
    homepage:
      "https://www.bmw.co.kr/ko/all-models/bmw-i/i4/2021/bmw-i4-highlights.html",
    img: BMWi4Img,
  },
  2: {
    brand: "제네시스",
    model: "GV70",
    distance: 400,
    battery: 77.4,
    MPG: 4.6,
    cost: 73320000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/highlights.html",
    img: GenesisGV70Img,
  },
  3: {
    brand: "테슬라",
    model: "Model Y",
    distance: 448,
    battery: 75,
    MPG: 4.8,
    cost: 96640000,
    homepage: "https://www.tesla.com/ko_kr/modely",
    img: TeslaModelYImg,
  },
};

export const ListF: ResultCarProps = {
  1: {
    brand: "테슬라",
    model: "Model 3",
    distance: 403,
    battery: 75,
    MPG: 5.1,
    cost: 70340000,
    homepage: "https://www.tesla.com/ko_kr/model3",
    img: TeslaModel3Img,
  },
  2: {
    brand: "제네시스",
    model: "GV60",
    distance: 427,
    battery: 82.7,
    MPG: 4.3,
    cost: 82800000,
    homepage:
      "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html",
    img: GenesisGV60Img,
  },
  3: {
    brand: "현대",
    model: "아이오닉 5",
    distance: 458,
    battery: 77.4,
    MPG: 5.2,
    cost: 50050000,
    homepage: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq5/intro",
    img: HyundaiIoniq5Img,
  },
  4: {
    brand: "기아",
    model: "Niro EV",
    distance: 401,
    battery: 64.8,
    MPG: 5.3,
    cost: 49420000,
    homepage: "https://www.kia.com/kr/vehicles/niro-plus/features",
    img: KiaNiroEVImg,
  },
  5: {
    brand: "기아",
    model: "Niro Plus",
    distance: 392,
    battery: 64,
    MPG: 5.3,
    cost: 44200000,
    homepage: "https://www.kia.com/kr/vehicles/niro-plus/features",
    img: KiaNiroPlusImg,
  },
};

export const ListG: ResultCarProps = {
  1: {
    brand: "기아",
    model: "EV6",
    distance: 475,
    battery: 58,
    MPG: 5.6,
    cost: 51870000,
    homepage: "https://www.kia.com/kr/vehicles/ev6/features",
    img: KiaEV6Img,
  },
};

export const ListH: ResultCarProps = {
  1: {
    brand: "현대",
    model: "아이오닉 6",
    distance: 524,
    battery: 77.4,
    MPG: 6.2,
    cost: 52000000,
    homepage: "https://www.hyundai.com/kr/ko/e/vehicles/ioniq6/intro",
    img: HyundaiIoniq6Img,
  },
};

export const ListI: ResultCarProps = {
  1: {
    brand: "쉐보레",
    model: "BOLT EV",
    distance: 414,
    battery: 66,
    MPG: 6.6,
    cost: 44300000,
    homepage: "https://www.chevrolet.co.kr/electric/bolt-ev",
    img: ChevroletBoltEvImg,
  },
};
