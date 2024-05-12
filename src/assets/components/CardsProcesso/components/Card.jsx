import React from "react";
import {
  Card as CardMaterial,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ButtonLink from "../../ButtonLink/ButtonLink";


 
const Card = ({titulo, descricao, imagem}) => {
  return (
    <CardMaterial className="mt-6 max-w-96 w-[95%]" >
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={imagem}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <h2 className="titlesFont text-lg font-semibold text-red-default mb-2">{titulo}</h2>
       <p>
        {descricao}
       </p>
          
      </CardBody>
     
    </CardMaterial>
  );
}

export default Card