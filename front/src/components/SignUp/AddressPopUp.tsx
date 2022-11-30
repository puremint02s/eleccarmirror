import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

interface address {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
  zonecode: string;
}
interface propsTypes {
  setAddressPopUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddressPopUp = ({ setAddressPopUpOpen }: propsTypes) => {
  const TansitionBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0px;
    left: 0px;
  `;

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
    setAddressPopUpOpen(false);
  };
  return (
    <>
      <TansitionBackground
        onClick={() => {
          setAddressPopUpOpen(false);
        }}
      >
        <DaumPostcode
          style={{
            width: "600px",
            transform: "translate(-50%, -50%)",
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
          onComplete={setAddress}
        />
      </TansitionBackground>
    </>
  );
};
export default AddressPopUp;
