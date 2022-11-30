import * as tmImage from "@teachablemachine/image";
import { useState, useEffect } from "react";
import test1 from "assets/img/test/test1.png";
import test2 from "assets/img/test/test2.png";
import test3 from "assets/img/test/test3.png";
import test4 from "assets/img/test/test4.png";

const Test = () => {
  const baseURL = "https://teachablemachine.withgoogle.com/models/uEdsswv4S/";
  const testImages = [test1, test2, test3, test4];
  const [selectIndex, setSelectIndex] = useState(0);
  const [prediction, setPrediction] = useState<any>([]);

  let model: any,
    webcam: any,
    maxPredictions: any,
    labelContainer: any,
    test: any;

  //로딩 빠르려면 useCallback이나 useMemo 사용해서 리렌더링시 모델 유지되도록 해야할듯

  async function predict() {
    setPrediction([]);
    // const prediction = await model.predict(이미지, 뒤집힘 여부);
    const modelURL = baseURL + "model.json";
    const metadataURL = baseURL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    //총 클래스 수
    const maxPredictions = model.getTotalClasses();
    console.log("label count : ", maxPredictions);
    console.log("model loaded");

    test = new Image();
    // test.src = test1;
    test.src = testImages[selectIndex];
    console.log(test);

    const temp = await model.predict(test, false);
    setPrediction(temp);
  }
  // console.log(
  //   prediction[0],
  //   // prediction.type,
  //   prediction[selectIndex].className,
  //   prediction[selectIndex].probability,
  // );

  return (
    <>
      {/* <button type="button" onClick={init}>
        Image Model Load
      </button> */}
      <button type="button" onClick={predict}>
        Predict
      </button>
      <div>
        <button onClick={() => setSelectIndex(0)}>1</button>
        <button onClick={() => setSelectIndex(1)}>2</button>
        <button onClick={() => setSelectIndex(2)}>3</button>
        <button onClick={() => setSelectIndex(3)}>4</button>
      </div>
      {/* <input
        type="file"
        id="image"
        accept=".png, .jpg, .jpeg"
        onChange={changeHandler}
      /> */}
      <img src={testImages[selectIndex]} alt="preview" />

      {prediction.length === 5 &&
        prediction.map((v: any, i: any) => (
          <p key={v + i}>
            {v.className}_____{v.probability}
          </p>
        ))}
    </>
  );
};

export default Test;
// <p key={v}>
//   {v.className} : {v.probability}
// </p>
