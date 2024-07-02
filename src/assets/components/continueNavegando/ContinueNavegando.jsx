import mouseIcon from '../../../assets/images/bocarra_visual/mouseIcon.svg'

const ContinueNavegando = () => {
  return (
    <div className='flex gap-2 mt-auto mb-[calc(100vh-100svh+8px)]'>
      <img className='w-4 ml-4' src={mouseIcon} alt='Icone Mouse' />
      <p className='text-white-contraste'>Continue navegando</p>
    </div>
  )
}

export default ContinueNavegando