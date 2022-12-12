import { useState } from "react";

interface propsTypes {
  dummyPosts: Array<{
    title: string;
    userName: string;
  }>;
}

const HotPosts = ({ dummyPosts }: propsTypes) => {
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
            HOT! 10
          </span>
          <a href="/community">
            <span
              style={{
                fontSize: "1.2em",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              더보기
            </span>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            overflow: "scroll",

            flexDirection: "column",
            border: "1px solid #E8E8E8",
            height: "100%",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          {dummyPosts.map((v, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                padding: "10px 0",
                boxSizing: "border-box",
                color: "#898989",
                borderBottom: "1px solid #E8E8E8",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{v.title}</span>
              <span>{v.userName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HotPosts;
