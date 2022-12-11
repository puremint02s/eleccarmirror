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
        headerTitle="My Elec Car"
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
              { value: 2, label: "지역별 전기차 보조금", trigger: "4" },
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
              { value: 1, label: "3가지 차량 추천 방식", trigger: "service3" },
              { value: 1, label: "돌아가기", trigger: "welcome2" },
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
              { value: 1, label: "차량 외형", trigger: "welcome2" },
              { value: 1, label: "나의 성향", trigger: "welcome2" },
              { value: 1, label: "나의 연비", trigger: "welcome2" },
            ],
          },
          {
            id: "4",
            message: ":)",
            end: true,
          },
        ]}
      />
    </ThemeProvider>
  );
};

export default Bot;
