import { styled } from "styled-components"
import Topo from "../Topo/Topo"
import Menu from "../Menu/Menu"
import HabitosDiarios from "./HabitosDiarios"
export default function Habitos() {
    
    return (
        <ContainerHabitos>
            <Topo />

            <HabitosDiarios/>

            <Menu />
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.div`
  
`