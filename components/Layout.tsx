import { User, Group } from "@microsoft/microsoft-graph-types-beta";
import React, { ReactNode, useState } from "react";
import { NAV_ITEMS } from "../utils/constants";
import { Header } from "./Header";
import MenuControl from "./MenuControl";
import { NavMenu } from "./navigation-components/NavMenu";
import { Sidebar } from "./navigation-components/SideBar";
import { PageWrapper } from "./ui-components/PageWrapper";

interface LayoutProps {
  AADUser?: User | undefined;
  groupData?: Group[] | undefined;
  imageData?: string | null;
  children?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  AADUser,
  groupData,
  imageData,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleHidden = () => {
    setIsHidden((prevState) => !prevState);
  };
  return (
    <>
      <Sidebar
        AADUser={AADUser}
        groupData={groupData}
        imageData={imageData}
        isOpen={isOpen}
        isHidden={isHidden}
        onOpen={onOpen}
        onClose={onClose}
        onToggle={onToggle}
        toggleHidden={toggleHidden}
      >
        {({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
          <NavMenu onClose={onClose} navItems={NAV_ITEMS} isOpen={isOpen} />
        )}
      </Sidebar>
      <Header isSidebarOpen={isOpen} isSidebarHidden={isHidden} />
      <MenuControl isSidebarHidden={isHidden} toggleSidebar={toggleHidden} />
      <PageWrapper isSidebarOpen={isOpen} isSidebarHidden={isHidden}>
        {children}
      </PageWrapper>
    </>
  );
};
