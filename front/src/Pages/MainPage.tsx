import Header from "components/common/Header";

const MainPage = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header></Header>
        <div style={{ height: "40vh" }}>유저 환영 컴포넌트 영역</div>
        <div style={{ height: "60vh", display: "flex" }}>
          <div style={{ width: "50vw" }}>hot! 게시물 영역</div>
          <div style={{ width: "50vw" }}>전기차 추천 리포트 역역</div>
        </div>
      </div>
    </>
  );
};
export default MainPage;
