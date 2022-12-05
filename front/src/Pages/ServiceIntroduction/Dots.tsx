interface Dot {
  num: number;
  scrollIndex: number;
}

interface Dots {
  scrollIndex: number;
}

const Dot = ({ num, scrollIndex }: Dot) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        backgroundColor: scrollIndex === num ? "#d9d9d9" : "lightgrey",
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Dots = ({ scrollIndex }: Dots) => {
  return (
    <div style={{ position: "fixed", top: "45%", right: 100 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} scrollIndex={scrollIndex}></Dot>
        <Dot num={2} scrollIndex={scrollIndex}></Dot>
        <Dot num={3} scrollIndex={scrollIndex}></Dot>
      </div>
    </div>
  );
};

export default Dots;
