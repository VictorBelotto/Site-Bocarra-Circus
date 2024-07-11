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
import Logo from '../../images/bocarra_visual/Est1B.svg'
import { Link, useLocation } from "react-router-dom";

const MenuSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const local = useLocation()
  
  const handleClick = () => {
    closeDrawer()
  }

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className='h-10 w-10 stroke-2 text-[white]' />
        ) : (
          <Bars3Icon className='h-10 w-10 stroke-2 text-[white]' />
        )}
      </IconButton>

      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          shadow={false}
          className=" bg-blue-default w-full p-4 z-30 rounded-none h-svh"
           
        >
          <List className="p-0 flex flex-col h-full gap-4 mt-8">
            <Links onClick={handleClick} to={''} label={'Home'} local={local}/>
            <Links onClick={handleClick} to={'servicos'} label={'Serviços'} local={local}/>
            <Links onClick={handleClick} to={'sobre'} label={'Sobre Nós'} local={local}/>
            <Links onClick={handleClick} to={'contato'} label={'Contato'} local={local}/>
            <Link to={'/'} className="flex mt-auto">
              <img src={Logo} alt="Logo Bocarra Circus" className="z-30 w-32" />
            </Link>
          </List>
        </Card>
      </Drawer>
    </>
  );
}

export default MenuSideBar 