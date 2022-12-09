export interface Test {
  question: string;
  selection: { answer: string; value: string }[];
}

export const TestContents: Test[] = [
  {
    question: "길을 가다가 보인 무언가! 무엇을 보고 놀랐나요?",
    selection: [
      { answer: "세일을 잘 하지 않는 브랜드의 대박할인 행사", value: "c" },
      { answer: "가격대는 비싸 보이지만 취향저격 편집샵", value: "e" },
    ],
  },
  {
    question:
      "새해를 위한 새 다이어리를 사려는 당신! 마침 딱 갖고 싶던 디자인의 다이어리가 있는데 공간이 부족해 보이네요.",
    selection: [
      { answer: "내가 딱 찾던 디자인인걸? 그냥 산다.", value: "f" },
      { answer: "쓸 공간이 부족할 것 같은데… 다른 걸 찾아본다.", value: "w" },
    ],
  },
  {
    question: "케이블이 어디 갔지? 핸드폰 충전 케이블을 새로 사야 합니다.",
    selection: [
      {
        answer: "그래도 정품이 고장이 안 날 거야! 정품샵을 방문한다",
        value: "b",
      },
      { answer: "충전만 되면 됐지~ 다이소에 방문한다 ", value: "a" },
    ],
  },
  {
    question: "외계인의 침공이 시작되었어요. 어떤 무기로 맞서 싸울까요?",
    selection: [
      { answer: "작고 빠른데 데미지가 낮은 레이저총", value: "n" },
      {
        answer: "무겁고 느리지만 데미지가 높은 바주카총",
        value: "h",
      },
    ],
  },
  {
    question: "누구의 말이 더 옳을까요?",
    selection: [
      { answer: "가격이 모든 것을 말해주는 건 아니다", value: "c" },
      { answer: "비싼 차는 비싼 값을 한다고 생각한다", value: "e" },
    ],
  },
  {
    question: "둘 중에 하나를 구매할 수 있다면 어떤 차를 구매하고 싶으신가요?",
    selection: [
      { answer: "화려하고 흔하지 않은 디자인의 차", value: "f" },
      { answer: "질리지 않는 클래식한 디자인의 차", value: "w" },
    ],
  },
  {
    question: "평소 고가의 제품을 구매하실 때 대체로 어떤 상품을 구매하시나요?",
    selection: [
      { answer: "브랜드가 유명한 전통있는 제품", value: "b" },
      { answer: "요즘 뜨는 잘 알려진 새로운 제품", value: "a" },
    ],
  },
  {
    question: "차량을 구매했어요, 자주 운전할 것 같은 코스는 어디인가요?",
    selection: [
      { answer: "100km 미만 주거지역 근교", value: "n" },
      { answer: "100km 이상 타지역 방문", value: "h" },
    ],
  },
  {
    question: "새로 차를 구매하신다면 어느 정도의 가격대를 원하시나요?",
    selection: [
      { answer: "5000만원 이하", value: "c" },
      { answer: "5000만원 이상", value: "e" },
    ],
  },
  {
    question: "차 구매시 외향도 선택에 중요한 비중을 차지한다.",
    selection: [
      { answer: "yes", value: "f" },
      { answer: "no", value: "w" },
    ],
  },
  {
    question: "혹은 어떤 상황이 더 싫으신가요?",
    selection: [
      {
        answer: "점유율 높은 국민 브랜드를 구매해서 모두가 나랑 똑같은 상황",
        value: "b",
      },
      {
        answer: "비싼 해외브랜드를 구매했는데 너무 희소해서 AS를 못받는 상황",
        value: "a",
      },
    ],
  },
  {
    question: "차 구매시 승하차감이 중요한 고려사항이다.",
    selection: [
      { answer: "Yes", value: "h" },
      { answer: "No", value: "n" },
    ],
  },
];
