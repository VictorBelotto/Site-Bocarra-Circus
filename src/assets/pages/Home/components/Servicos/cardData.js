// cardData.js
import circoSonhos from '../../../../images/imagens_servicos/circoSonhos.webp';
import aranha from '../../../../images/imagens_servicos/aranha.webp';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.webp';
import galpao from '../../../../images/imagens_servicos/galpao.webp';
import piramide from '../../../../images/imagens_servicos/piramide.webp';

export const cardData = [
  {
    img: circoSonhos,
    title: 'Circo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
    to: '/servicos/circo',
    width: 'w-[100%]' 
  },
  {
    img: piramide,
    title: 'Pirâmide',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
    to: '/servicos/piramide',
    width: 'w-[50%]' 
  },
  {
    img: exclusiva,
    title: 'Exclusiva',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
    to: '/servicos/exclusivas',
    width: 'w-[50%]'
  },
  {
    img: galpao,
    title: 'Galpão',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
    to: '/servicos/galpao',
    width: 'w-[50%]'
  },
  {
    img: aranha,
    title: 'Aranha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
    to: '/servicos/aranha',
    width: 'w-[50%]'
  }
];
