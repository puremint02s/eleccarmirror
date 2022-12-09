type CarProps = {
  [key: string]: string;
};

export const CAR: CarProps = {
  cfbh: "cfbh",
  cfbn: "cfbn",
  cfah: "cfah",
  cfan: "cfan",
  cwbh: "cwbh",
  cwbn: "cwbn",
  cwah: "cwah",
  cwan: "cwan",
  efbh: "efbh",
  efbn: "efbn",
  efah: "efah",
  efan: "efan",
  ewbh: "ewbh",
  ewbn: "ewbn",
  ewah: "ewah",
  ewan: "ewan",
};

type CarDesc = {
  [key: string]: string;
};

type ResultCarProps = {
  [key: string]: CarDesc;
};

export const RESULT_CAR: ResultCarProps = {
  cfbh: {
    name: "CFBH",
    desc: "가성비 고려/디자인 중시/브랜드 중시/고성능 선호",
  },
  cfbn: {
    name: "CFBN",
    desc: "가성비 고려/디자인 중시/브랜드 중시/보급형 성능 ok",
  },
  cfah: {
    name: "CFAH",
    desc: "가성비 고려/디자인 중시/브랜드 상관 없음/고성능 선호",
  },
  cfan: {
    name: "CFAN",
    desc: "가성비 고려/디자인 중시/브랜드 상관 없음/보급형 성능 ok",
  },
  cwbh: {
    name: "CWBH",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 중시/고성능 선호",
  },
  cwbn: {
    name: "CWBN",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 중시/보급형 성능 ok",
  },
  cwah: {
    name: "CWAH",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 상관 없음/고성능 선호",
  },
  cwan: {
    name: "CWAN",
    desc: "가성비 고려/외관 크게 고려 X/브랜드 상관 없음/보급형 성능 ok",
  },
  efbh: {
    name: "EFBH",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 중시/고성능 선호",
  },
  efbn: {
    name: "EFBN",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 중시/보급형 성능 ok",
  },
  efah: {
    name: "EFAH",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 상관 없음/고성능 선호",
  },
  efan: {
    name: "EFAN",
    desc: "비싸도 괜찮음/디자인 중시/브랜드 상관 없음/보급형 성능 ok",
  },
  ewbh: {
    name: "EWBH",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 중시/고성능 선호",
  },
  ewbn: {
    name: "EWBN",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 중시/보급형 성능 ok",
  },
  ewah: {
    name: "EWAH",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 상관 없음/고성능 선호",
  },
  ewan: {
    name: "EWAN",
    desc: "비싸도 괜찮음/외관 크게 고려 X/브랜드 상관 없음/보급형 성능 ok",
  },
};
