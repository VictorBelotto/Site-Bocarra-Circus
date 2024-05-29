const gallery = Object.values(import.meta.glob('/src/assets/images/imagens_carrossel/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));
const imagens = [];
gallery.forEach((img) =>(
  imagens.push(img)
))

export default imagens
