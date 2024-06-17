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


const MenuSideBar = ({path}) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const handleClick = () =>{
    closeDrawer()
  }
 
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className={`h-10 w-10 stroke-2  ${path === '/'? "text-[white]" : "text-[white]"}`} />
        ) : (
          <Bars3Icon className={`h-10 w-10 stroke-2 ${path === '/'? "text-[white]" : "text-[white]"}`} />
        )}
      </IconButton>

      <Drawer   open={isDrawerOpen} onClose={closeDrawer} className="bg-red-default">
        <Card
          shadow={false}
          className="h-[calc(100vh)] bg-red-default w-full p-4 z-30"
        >
            <List className="p-0 ">
              <Links onClick={handleClick} to={''} label={'Home'}/>
              <Links onClick={handleClick} to={'portifolio'} label={'Portifólio'}/>
              <Links onClick={handleClick} to={'sobre'} label={'Sobre Nós'}/>
              <Links onClick={handleClick} to={'contato'} label={'Contato'}/>
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