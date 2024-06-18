import {imagesCirco, imagesAranha, imagesExclusiva, imagesGalpao, imagesPiramides} from '../exportImages/exportImages'
console.log(imagesCirco)

export const sectionsData = [
  {
    id: 'circo',
    titulo: 'Lonas para Circo',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagens: imagesCirco
  },
  {
    id: 'piramide',
    titulo: 'Tendas piramidais',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagens: imagesGalpao
  },
  {
    id: 'exclusivas',
    titulo: 'Coberturas Exclusivas',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagens: imagesExclusiva
  },
  {
    id: 'aranha',
    titulo: 'Tenda Aranha',
    descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imagens: imagesAranha
  },
];
