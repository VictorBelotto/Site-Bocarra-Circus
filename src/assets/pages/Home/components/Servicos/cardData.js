import circoSonhos from '../../../../images/imagens_servicos/circoSonhos.webp';
import aranha from '../../../../images/imagens_servicos/aranha.webp';
import exclusiva from '../../../../images/imagens_servicos/exclusiva.webp';
import galpao from '../../../../images/imagens_servicos/galpao.webp';
import piramide from '../../../../images/imagens_servicos/piramide.webp';

export const cardData = [
  {
    img: circoSonhos,
    title: 'Circo',
    description: 'Lonas para circo projetadas com alta precisão, resistentes e de fácil montagem, combinando design atrativo e durabilidade.',
    to: '/servicos/circo',
    width: 'w-[100%]' 
  },
  {
    img: piramide,
    title: 'Pirâmide',
    description: 'Tendas elegantes e versáteis, ideais para eventos, feiras e festas, garantindo durabilidade e fácil montagem.',
    to: '/servicos/piramide',
    width: 'w-[50%]' 
  },
  {
    img: exclusiva,
    title: 'Exclusiva',
    description: 'Coberturas inovadoras e personalizadas, combinando beleza e funcionalidade para uma proteção eficaz contra os elementos.',
    to: '/servicos/exclusivas',
    width: 'w-[50%]'
  },
  {
    img: galpao,
    title: 'Galpão',
    description: 'Galpões robustos e versáteis, projetados para oferecer espaço e funcionalidade máximos para armazenamento e atividades industriais.',
    to: '/servicos/galpao',
    width: 'w-[50%]'
  },
  {
    img: aranha,
    title: 'Aranha',
    description: 'Tenda com design marcante e inovador, resistente e fácil de montar, ideal para eventos que exigem uma estrutura distinta.',
    to: '/servicos/aranha',
    width: 'w-[50%]'
  }
];
