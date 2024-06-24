import mouseIcon from '../../../assets/images/bocarra_visual/mouseIcon.svg'

const ContinueNavegando = () => {
  return (
    <div className='flex gap-2 mb-[calc(100vh-100svh+8px)] mt-auto w-maxW max-w-hd grande:max-w-grande'>
      <img className='w-4 ml-1' src={mouseIcon} alt='Icone Mouse' />
      <p className='text-white-contraste'>Continue navegando</p>
    </div>
  )
}

export default ContinueNavegando