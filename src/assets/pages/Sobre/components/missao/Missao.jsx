import Separador from "../../../../components/Separador/Separador"
import { dataMissao } from "./dataMissao"
const Missao = () => {
  return (
    <section className="w-maxW max-w-hd grande:max-w-grande min-h-screen py-16 flex flex-col">
          <Separador />
          <h2 className="text-[white] mb-12">Nossa missão, visão e valores</h2>
          
          <div className="flex w-full justify-between ">
          {dataMissao.map((dado, index) => (
            <div className="flex flex-col items-center max-w-80 gap-3" key={index}>
              <div className="w-32 h-32 bg-gray-700"></div>  
              <h3 className="text-[white]">{dado.titulo}</h3>
              <p className="text-center text-white-contraste">{dado.descricao}</p>
            </div>
          ))}
          </div>

        </section>
  )
}

export default Missao