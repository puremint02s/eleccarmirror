import { TapValue } from "Pages/MyPage";
import { Tabs, Tab } from "@mui/material";

interface SidebarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<TapValue>>;
}

function Sidebar({ value, setValue }: SidebarProps) {
  const handleChangeTap = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: React.SetStateAction<TapValue>,
  ) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChangeTap} centered>
      <Tab value={TapValue.MYINFO} label="내 정보" />
      <Tab value={TapValue.MODIFYINFO} label="회원정보 수정" />
    </Tabs>
  );
}

export default Sidebar;
