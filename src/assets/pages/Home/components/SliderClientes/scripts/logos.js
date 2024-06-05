const logos = Object.values(import.meta.glob('/src/assets/images/logos_circos_parceiros/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' }));

export default logos