import { LazyLoadImage } from "react-lazy-load-image-component"

const Galerry = ({section}) => {
  return (
    <div className='grid grid-cols-2 gap-2 md:gap-4 md:grid-cols-4'>
    {section.imagens.map((src, index) => (
      <a href={src} data-fancybox="gallery" data-caption={`Imagem ${index + 1}`} key={index}>
        <LazyLoadImage
          wrapperClassName='h-[130px] md:h-[200px] w-full cursor-pointer object-cover'
          className='h-[130px] md:h-[200px] w-full cursor-pointer object-cover'
          src={src}
          alt={`Imagem ${index + 1}`}
          effect="opacity"
        />
      </a>
    ))}
  </div>
  )
}

export default Galerry