type CarProps = {
  [key: string]: string;
};

export const CAR: CarProps = {
  CFBH: "CFBH",
  CFBN: "CFBN",
  CFAH: "CFAH",
  CFAN: "CFAN",
  CWBH: "CWBH",
  CWBN: "CWBN",
  CWAH: "CWAH",
  CWAN: "CWAN",
  EFBH: "EFBH",
  EFBN: "EFBN",
  EFAH: "EFAH",
  EFAN: "EFAN",
  EWBH: "EWBH",
  EWBN: "EWBN",
  EWAH: "EWAH",
  EWAN: "EWAN",
};

type CarDesc = {
  [key: string]: string;
};

type ResultCarProps = {
  [key: string]: CarDesc;
};

export const RESULT_CAR: ResultCarProps = {
  CFBH: {
    name: "CFBH",
    desc: "가성비 고려/디자인 중시/브랜드 중시/고성능 선호",
  },
  CFBN: {
    name: "CFBN",
    desc: "가성비 고려/디자인 중시/브랜드 중시/보급형 성능 ok",
  },
  CFAH: {
    name: "CFAH",
    desc: "가성비 고려/디자인 중시/브랜드 상관 없음/고성능 선호",
  },
  CFAN: {
    name: "CFAN",
    desc: "가성비 고려/디자인 중시/브랜드 상관 없음/보급형 성능 ok",
  },
  CWBH: {
    name: "CWBH",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 중시/고성능 선호",
  },
  CWBN: {
    name: "CWBN",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 중시/보급형 성능 ok",
  },
  CWAH: {
    name: "CWAH",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 상관 없음/고성능 선호",
  },
  CWAN: {
    name: "CWAN",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 상관 없음/보급형 성능 ok",
  },
  EFBH: {
    name: "EFBH",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 중시/고성능 선호",
  },
  EFBN: {
    name: "EFBN",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 중시/보급형 성능 ok",
  },
  EFAH: {
    name: "EFAH",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 상관 없음/고성능 선호",
  },
  EFAN: {
    name: "EFAN",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 상관 없음/보급형 성능 ok",
  },
  EWBH: {
    name: "EWBH",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 중시/고성능 선호",
  },
  EWBN: {
    name: "EWBN",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 중시/보급형 성능 ok",
  },
  EWAH: {
    name: "EWAH",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 상관 없음/고성능 선호",
  },
  EWAN: {
    name: "EWAN",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 상관 없음/보급형 성능 ok",
  },
};
