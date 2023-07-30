import { styled } from "styled-components"
import Topo from "../Topo/Topo"
import Menu from "../Menu/Menu"
import HabitosHoje from "../../Componentes/ComponentesHoje/HabitosHoje"
export default function Habitos() {
    
    return (
        <ContainerHabitos>
            <Topo />

            <HabitosHoje/>

            <Menu />
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.div`
  
`