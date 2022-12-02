const ElecCarReport = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.2em",
              fontWeight: "600",
              padding: "20px 0",
            }}
          >
            전기차 추천 리포트
          </span>
          <span style={{ fontSize: "1.2em", fontWeight: "600" }}>
            더 자세한 추천 받기
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            border: "1px solid #E8E8E8",
            height: "100%",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          -
        </div>
      </div>
    </>
  );
};

export default ElecCarReport;
