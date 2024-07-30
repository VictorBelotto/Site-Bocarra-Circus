import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Links from "./Links";
import Logo from '../../images/bocarra_visual/Est1B.svg';

const MenuSideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
    document.body.style.overflow = 'hidden'; // Trava o scroll
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.style.overflow = 'auto'; // Destrava o scroll
  };
  const location = useLocation();

  const handleClick = () => {
    closeDrawer();
  };

  return (
    <>
      <button className="text-white p-2" onClick={openDrawer}>
        <Bars3Icon className="h-10 w-10 stroke-2 text-[white]" />
      </button>

      <div className={`fixed inset-y-0 right-0 z-30 transition-transform transform ${isDrawerOpen ? "translate-x-0 block" : "translate-x-full hidden"} bg-blue-contraste w-64 p-4 h-[100svh] `}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end">
            <button onClick={closeDrawer}>
              <XMarkIcon className="h-10 w-10 stroke-2 text-[white]" />
            </button>
          </div>
          <div className="p-0 flex flex-col h-fit  gap-4 mt-4">
            <Links onClick={handleClick} to="" label="Home" local={location} />
            <Links onClick={handleClick} to="servicos" label="Serviços" local={location} />
            <Links onClick={handleClick} to="sobre" label="Sobre Nós" local={location} />
            <Links onClick={handleClick} to="contato" label="Contato" local={location} />
          </div>
          <div className="mt-auto flex justify-center">
            <Link to="/" onClick={handleClick} className="flex w-full justify-end">
              <img src={Logo} alt="Logo Bocarra Circus" className="w-28" />
            </Link>
          </div>
        </div>
      </div>

      {isDrawerOpen && (
        <div className="fixed inset-0 z-20 bg-black opacity-50" onClick={closeDrawer}></div>
      )}
    </>
  );
};

export default MenuSideBar;
