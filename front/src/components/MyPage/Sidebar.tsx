import styled from "styled-components";
import { SidebarMenu } from "./SidebarMenu";

function Sidebar() {
  return (
    <SideMenu>
      <SideMenuUl>
        {SidebarMenu.map((menu, index) => (
          <SideMenuLi
            key={index}
            onClick={() => {
              window.location.pathname = menu.link;
            }}
          >
            {" "}
            <div style={{ fontSize: 15 }}>{menu.title}</div>{" "}
          </SideMenuLi>
        ))}
      </SideMenuUl>
    </SideMenu>
  );
}

export default Sidebar;

const SideMenu = styled.div`
  height: 30rem;
  width: 10vw;
  padding-left: 15vw;
  display: inline;
`;

const SideMenuUl = styled.ul`
  padding-top: 5rem;
`;

const SideMenuLi = styled.li`
  padding-top: 1rem;
  font-weight: 500;
  cursor: pointer;
`;
