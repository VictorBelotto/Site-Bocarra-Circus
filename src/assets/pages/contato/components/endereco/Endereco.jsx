import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaWhatsapp  } from "react-icons/fa";

const Endereco = () => {
  return (
    <div className="w-maxW max-w-hd grande:max-w-grande">

    <aside className=''>
      <iframe className='' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.4100297795808!2d-47.09731084202674!3d-22.963477290187747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c9758ac085ab%3A0x80810d6a5b39cb27!2sAv.%20Jos%C3%A9%20Carlos%20do%20Amaral%20Galv%C3%A3o%2C%20582%20-%20Jardim%20Itatinga%2C%20Campinas%20-%20SP%2C%2013051-160!5e0!3m2!1spt-BR!2sbr!4v1704825380292!5m2!1spt-BR!2sbr" loading="lazy" >
      </iframe>

      <a href="https://www.google.com/maps/place/Av.+Jos%C3%A9+Carlos+do+Amaral+Galv%C3%A3o,+582+-+Jardim+Itatinga,+Campinas+-+SP,+13051-160/@-22.963595,-47.097212,18z/data=!4m6!3m5!1s0x94c8c9758ac085ab:0x80810d6a5b39cb27!8m2!3d-22.9635946!4d-47.0972116!16s%2Fg%2F11qt2m4hk8?hl=pt-BR&entry=ttu" rel="noopener" target="_blank" ><FaLocationDot style={{ fill: '#D03438' }} />&nbsp; Av. José Carlos do Amaral Galvão, 582 - Jardim São José</a>


      <div className=''>
        <a href="https://api.whatsapp.com/send?phone=5519996924744&text=Ol%C3%A1%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bocarracircus/"><FaInstagram /></a>

      </div>
      <p>Seg. à Sex. das 8h às 17h </p>
    </aside>
  </div>
  )
}

export default Endereco