import DaumPostcode from "react-daum-postcode";

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
      <div
        onClick={() => {
          setAddressPopUpOpen(false);
        }}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "fixed",
          top: "0px",
          left: "0px",
        }}
      >
        <DaumPostcode
          style={{
            width: "600px",
            transform: "translate(-50%, -50%)",
            // -webkit-transform: translate(-50%, -50%);
            // -moz-transform: translate(-50%, -50%);
            // -ms-transform: translate(-50%, -50%);
            // -o-transform: translate(-50%, -50%);
            position: "fixed",
            top: "50%",
            left: "50%",
          }}
          onComplete={setAddress}
        />
      </div>
    </>
  );
};
export default AddressPopUp;
