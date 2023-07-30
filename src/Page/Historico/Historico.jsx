import { styled } from "styled-components"
import Topo from "../Topo/Topo"
import Menu from "../Menu/Menu"
import HistoricoHabitos from "../../Componentes/ComponentesHistorico/HistoricoHabitos"
export default function Habitos() {
    
    return (
        <ContainerHabitos>
            <Topo />

            <HistoricoHabitos/>

            <Menu />
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.div`
  
`