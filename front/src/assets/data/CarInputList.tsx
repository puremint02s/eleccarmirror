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

type Car = {
  label: string;

  type: string;
  engin: number;
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
  g: number;
};

export const Result: Car[] = [
  {
    label: "chevrolet spark",

    type: "경형 해치백",
    engin: 2,
    a: 35,
    b: 15,
    c: 14,
    d: 23,
    e: 14,
    f: 14,
    g: 9,
  },
  {
    label: "chevrolet trailblazer",

    type: "소형 SUV",
    engin: 2,
    a: 44,
    b: 18,
    c: 16,
    d: 26,
    e: 15,
    f: 15,
    g: 13,
  },
  {
    label: "genesis g80",

    type: "준대형 세단",
    engin: 2,
    a: 49,
    b: 19,
    c: 14,
    d: 30,
    e: 16,
    f: 16,
    g: 17,
  },
  {
    label: "genesis g90",

    type: "대형 세단",
    engin: 4,
    a: 53,
    b: 19,
    c: 14,
    d: 33,
    e: 16,
    f: 16,
    g: 22,
  },
  {
    label: "hyundai avante",

    type: "준중형 세단",
    engin: 2,
    a: 46,
    b: 18,
    c: 14,
    d: 27,
    e: 15,
    f: 15,
    g: 12,
  },
  {
    label: "hyundai casper",

    type: "경형 SUV",
    engin: 2,
    a: 35,
    b: 15,
    c: 15,
    d: 24,
    e: 13,
    f: 13,
    g: 9,
  },
  {
    label: "hyundai grandeur",

    type: "준대형 세단",
    engin: 2,
    a: 50,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 17,
  },
  {
    label: "hyundai kona",

    type: "소형 SUV",
    engin: 2,
    a: 42,
    b: 18,
    c: 15,
    d: 26,
    e: 15,
    f: 15,
    g: 13,
  },
  {
    label: "hyundai palisade",

    type: "준대형 SUV",
    engin: 2,
    a: 49,
    b: 19,
    c: 17,
    d: 29,
    e: 17,
    f: 17,
    g: 19,
  },
  {
    label: "hyundai santafe",

    type: "중형 SUV",
    engin: 2,
    a: 47,
    b: 19,
    c: 16,
    d: 27,
    e: 16,
    f: 16,
    g: 17,
  },
  {
    label: "hyundai sonata",

    type: "중형 세단",
    engin: 2,
    a: 49,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 14,
  },
  {
    label: "hyundai tucson",

    type: "준중형 SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 16,
    d: 27,
    e: 16,
    f: 16,
    g: 14,
  },
  {
    label: "hyundai venue",

    type: "소형 SUV",
    engin: 2,
    a: 40,
    b: 17,
    c: 15,
    d: 25,
    e: 15,
    f: 15,
    g: 11,
  },
  {
    label: "kia carnival",

    type: "소형 SUV",
    engin: 2,
    a: 40,
    b: 17,
    c: 15,
    d: 25,
    e: 15,
    f: 15,
    g: 11,
  },
  {
    label: "kia k3",

    type: "준중형 세단",
    engin: 2,
    a: 46,
    b: 18,
    c: 14,
    d: 27,
    e: 15,
    f: 15,
    g: 12,
  },
  {
    label: "kia k5",

    type: "중형 세단",
    engin: 2,
    a: 49,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 14,
  },
  {
    label: "kia k8",

    type: "준대형 세단",
    engin: 2,
    a: 50,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 16,
  },
  {
    label: "kia k9",

    type: "대형 세단",
    engin: 2,
    a: 51,
    b: 19,
    c: 14,
    d: 31,
    e: 16,
    f: 16,
    g: 20,
  },
  {
    label: "kia mohave",

    type: "준대형 SUV",
    engin: 4,
    a: 49,
    b: 19,
    c: 17,
    d: 28,
    e: 16,
    f: 16,
    g: 22,
  },
  {
    label: "kia morning",

    type: "경형 해치백",
    engin: 2,
    a: 35,
    b: 15,
    c: 15,
    d: 24,
    e: 14,
    f: 15,
    g: 9,
  },
  {
    label: "kia ray",

    type: "경형 RV",
    engin: 2,
    a: 35,
    b: 15,
    c: 17,
    d: 25,
    e: 14,
    f: 14,
    g: 10,
  },
  {
    label: "kia seltos",

    type: "소형 SUV",
    engin: 2,
    a: 43,
    b: 18,
    c: 16,
    d: 26,
    e: 15,
    f: 15,
    g: 13,
  },
  {
    label: "kia sorento",

    type: "중형 SUV",
    engin: 2,
    a: 48,
    b: 19,
    c: 16,
    d: 28,
    e: 16,
    f: 16,
    g: 17,
  },
  {
    label: "kia sportage",

    type: "준중형 SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 16,
    d: 27,
    e: 16,
    f: 16,
    g: 15,
  },
  {
    label: "renault qm6",

    type: "중형 SUV",
    engin: 2,
    a: 46,
    b: 18,
    c: 17,
    d: 27,
    e: 15,
    f: 15,
    g: 15,
  },
  {
    label: "renault sm6",

    type: "중형 세단",
    engin: 2,
    a: 48,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 14,
  },
  {
    label: "renault xm3",

    type: "중형 세단",
    engin: 2,
    a: 48,
    b: 18,
    c: 14,
    d: 28,
    e: 16,
    f: 16,
    g: 14,
  },
  {
    label: "ssangyong rexton",

    type: "준대형 트럭",
    engin: 2,
    a: 54,
    b: 19,
    c: 18,
    d: 32,
    e: 16,
    f: 16,
    g: 20,
  },
  {
    label: "genesis g70",

    type: "중형 왜건",
    engin: 2,
    a: 46,
    b: 18,
    c: 14,
    d: 28,
    e: 15,
    f: 16,
    g: 16,
  },
  {
    label: "ssangyong tivoli",

    type: "소형 SUV",
    engin: 2,
    a: 42,
    b: 18,
    c: 16,
    d: 26,
    e: 15,
    f: 15,
    g: 13,
  },
  {
    label: "ssangyong torres",

    type: "중형 SUV",
    engin: 2,
    a: 47,
    b: 18,
    c: 17,
    d: 26,
    e: 16,
    f: 16,
    g: 15,
  },
];
