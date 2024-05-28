import React from "react";
import {
  IconButton,
  List,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Links from "./Links";
import Logo from '../../images/bocarra_visual/rino.svg'


const MenuSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-10 w-10 stroke-2 text-slate-50" />
        ) : (
          <Bars3Icon className="h-10 w-10 stroke-2 text-slate-50" />
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
              <div className="flex"> 
                <img src={Logo} alt="Logo Bocarra Circus" className="z-30 w-full"/>
              </div>
            
            </List>
           
        </Card>
        
      </Drawer>
    </>
  );
}

export default MenuSideBar