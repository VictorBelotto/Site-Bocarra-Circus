import React from "react";
import {
  Card as CardMaterial,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

 
const Card = ({titulo, descricao, imagem}) => {
  return (
    <CardMaterial className="mt-6 max-w-96 w-[95%]" >
      <CardHeader  className="relative h-fit">
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