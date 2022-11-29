import React from "react";
import DaumPostcode from "react-daum-postcode";

interface address {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}

const AddressPopUp = () => {
  const setAddress = (data: address) => {
    let fullAddress = data.address;
    let extraAddress = "";
    console.log(data);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
  };
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          // -webkit-transform: translate(-50%, -50%);
          // -moz-transform: translate(-50%, -50%);
          // -ms-transform: translate(-50%, -50%);
          // -o-transform: translate(-50%, -50%);
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "700px",
          // zIndex: "9999",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <DaumPostcode
          onComplete={setAddress}
          //style={addressStyle}
          //height={700}
        />
      </div>
    </>
  );
};
export default AddressPopUp;
