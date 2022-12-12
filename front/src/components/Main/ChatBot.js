import { ThemeProvider } from "styled-components/macro";
import ChatBot from "react-simple-chatbot";
import car from "assets/img/BlueCar.png";
import loading from "assets/img/loading2.gif";
import data from "assets/data/subsidy.json";

const Bot = () => {
  const userName = "최은오";
  const theme = {
    background: "whitesmoke",
    headerBgColor: "#0a84ff",
    headerFontColor: "white",
    headerFontsize: "16px",
    botBubbleColor: "#0a84ff",
    botFontColor: "#FFF",
    userBubbleColor: "grey",
    userFontColor: "white",
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="My Elec Car"
        botAvatar={car}
        userAvatar={loading}
        steps={[
          {
            id: "welcome1",
            message: `안녕하세요. ${userName}님! MyElecCar입니다. 무엇을 안내해드릴까요?`,
            trigger: "welcome2",
          },
          {
            id: "welcome2",
            message: `무엇을 안내해드릴까요?`,
            trigger: "option1",
          },
          {
            id: "option1",
            options: [
              { value: 1, label: "서비스 소개", trigger: "service" },
              { value: 2, label: "지역별 전기차 보조금", trigger: "money" },
              { value: 3, label: "1대1 문의", trigger: "onetoone" },
            ],
          },
          {
            id: "service",
            message:
              "MyElecCar는 3가지 방식으로 사용자에게 알맞는 전기차를 추천해드립니다. ",
            trigger: "service2",
          },
          {
            id: "service2",
            options: [
              { value: 1, label: "3가지 추천 방식?", trigger: "service3" },
              { value: 2, label: "다른 안내 받기", trigger: "welcome2" },
            ],
          },
          {
            id: "service3",
            message:
              "차량 외형, 나의 성향, 나의 연비를 통해 알맞은 전기차를 추천해드립니다.",
            trigger: "service4",
          },
          {
            id: "service4",
            options: [
              { value: 1, label: "차량 외형", trigger: "car" },
              { value: 2, label: "나의 성향", trigger: "test" },
              { value: 3, label: "나의 연비", trigger: "oil" },
              { value: 4, label: "다른 안내 받기", trigger: "welcome2" },
            ],
          },
          {
            id: "car",
            message:
              "사용자로부터 입력받은 이미지의 차종과 모델을 분석하여 가장 많은 공통 특징을 가진 전기차를 추천해드립니다.",
            trigger: "service4",
          },
          {
            id: "test",
            message:
              "간단한 유저 테스트를 통해 유저 유형을 결정짓고 그에 따른 전기차를 추천해드립니다.",
            trigger: "service4",
          },
          {
            id: "oil",
            message:
              "현재 사용중이신 차량의 연비를 평균 연비를 계산하고 비슷한 수준의 전비를 가진 전기차를 추천해드립니다.",
            trigger: "service4",
          },
          {
            id: "onetoone",
            message: "구현 예정입니다... :(",
            trigger: "welcome2",
          },
          {
            id: "money",
            message:
              "지역명을 입력해주세요.(특별시, 광역시, 시, 군, 특별자치도 기준)",
            trigger: "money2",
          },
          {
            id: "money2",
            user: true,
            validator: value => {
              if (!data.find(v => v.area === value)) {
                return "행정구역의 단위를 올바른 형태로 입력해주세요.";
              }
              return true;
            },
            trigger: "money3",
          },
          {
            id: "money3",
            message: ans => {
              const found = data.find(v => v.area === ans.previousValue);
              return `${found.area}의 전기차 보조금은 승용차 기준 ${found.s}만원, 초소형차 기준 ${found.m}만원 입니다.`;
            },
            trigger: "money4",
          },
          {
            id: "money4",
            message: "* 안내된 보조금은 최대 금액 예상치 입니다. (2022년 기준, 국비+지방비)",
            trigger: "money5",
          },
          {
            id: "money5",
            component: (
              <a href="https://www.ev.or.kr/portal/buyersGuide/incenTive">
                상세 정보 알아보러가기
              </a>
            ),
            trigger: "welcome2",
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Bot;
