import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import path from 'path';

// Cria um novo SitemapStream
const smStream = new SitemapStream({ hostname: 'https://www.bocarracircus.com' });

// Lista de URLs do seu site
const links = [
  { url: '/', changefreq: 'daily', priority: 0.9 },
  { url: '/portifolio', changefreq: 'monthly', priority: 0.7 },
  { url: '/servicos', changefreq: 'monthly', priority: 0.7 },
  { url: '/contato', changefreq: 'monthly', priority: 0.7 },
  // Adicione outras URLs conforme necessário
];

// Adiciona as URLs ao stream
links.forEach(link => smStream.write(link));

// Finaliza o stream
smStream.end();

// Escreve o sitemap para um arquivo
streamToPromise(smStream).then(data => {
  createWriteStream(path.resolve('public', 'sitemap.xml')).write(data);
  console.log('Sitemap gerado com sucesso!');
});
