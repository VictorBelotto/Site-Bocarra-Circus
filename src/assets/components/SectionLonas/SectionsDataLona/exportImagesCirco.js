export const imagesPiramides = Object.values(import.meta.glob('/src/assets/images/imagens_piramide/*.{png,jpg,jpeg,webp,JPG}', { eager: true, as: 'url' }));

export const imagesGalpao = Object.values(import.meta.glob('/src/assets/images/imagens_galpao/*.{png,jpg,jpeg,webp,JPG}', { eager: true, as: 'url' }));

export const imagesExclusiva = Object.values(import.meta.glob('/src/assets/images/imagens_exclusivo/*.{png,jpg,jpeg,webp,JPG}', { eager: true, as: 'url' }));

export const imagesAranha = Object.values(import.meta.glob('/src/assets/images/imagens_aranha/*.{png,jpg,jpeg,webp,JPG}', { eager: true, as: 'url' }));

export const imagesCirco = Object.values(import.meta.glob('/src/assets/images/imagens_circos/*.{png,jpg,jpeg,webp,JPG}', { eager: true, as: 'url' }));
