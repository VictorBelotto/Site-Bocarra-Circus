import React from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Links from "./Links";

const MenuSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>

      <Drawer className="bg-red-default"  open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
            <List className="p-0">
              <Links label={'Home'}/>
              <Links label={'Galeria'}/>
              <Links label={'Sobre Nós'}/>
              <Links label={'Contato'}/>
            </List>
        </Card>
      </Drawer>
    </>
  );
}

export default MenuSideBar