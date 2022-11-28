import React from "react";
import DaumPostcode from "react-daum-postcode";

const AddressPopUp = () => {
  const complete = (data: object) => {
    // let fullAddress = data.address;
    // let extraAddress = '';
    console.log(data);
    // if (data.addressType === 'R') {
    //     if (data.bname !== '') {
    //         extraAddress += data.bname;
    //     }
    //     if (data.buildingName !== '') {
    //         extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
    //     }
    //     fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    // }
    // console.log(data)
    // console.log(fullAddress)
    // console.log(data.zonecode)
  };
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "500px",
          zIndex: "9999",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DaumPostcode
          onComplete={complete}
          //style={addressStyle}
          //height={700}
        />
      </div>
    </>
  );
};
export default AddressPopUp;
