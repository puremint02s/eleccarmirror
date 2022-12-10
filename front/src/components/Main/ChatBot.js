import { ThemeProvider } from "styled-components/macro";
import ChatBot from "react-simple-chatbot";
import car from "assets/img/BlueCar.png";
import loading from "assets/img/loading2.gif";

const Bot = () => {
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
        botAvatar={car}
        userAvatar={loading}
        steps={[
          {
            id: "welcome",
            message: "안녕하세요! ㅁㅁㅁ님 전기차 추천 서비스 MyElecCar입니다.",
            trigger: "welcome2",
          },
          {
            id: "welcome2",
            message: "무엇을 안내해드릴까요?",
            trigger: "option1",
          },
          {
            id: "option1",
            options: [
              { value: 1, label: "서비스 소개", trigger: "service" },
              { value: 2, label: "차량 추천 방식", trigger: "4" },
              { value: 3, label: "지역별 전기차 보조금", trigger: "4" },
            ],
          },
          {
            id: "service",
            message:
              "MyElecCar는 현재 차량 외형, 성향 테스트, 연비 계산 3가지 방법으로 차량을 추천해드립니다. ",
            trigger: "welcome2",
          },
          {
            id: "4",
            message: "Awesome! You are a telepath!",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Bot;
