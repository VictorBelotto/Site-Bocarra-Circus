const logos = Object.values(import.meta.glob('/src/assets/images/logos_clientes_cinza/*.{png,jpg,jpeg,PNG,JPEG,webp}', { eager: true, as: 'url' }));

export default logos