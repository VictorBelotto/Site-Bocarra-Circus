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
import { Link } from "react-router-dom";

const Links = ({label, to, onClick}) => {
  return (
    <Link to={`/${to}`} onClick={onClick} >
      <ListItem  className="text-[white] text-xl hover:bg-red-default hover:text-[white]"  >
        <ListItemPrefix>
          <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-[white]" />
        </ListItemPrefix>
        {label}
      </ListItem>
    </Link>
  )
}

export default Links