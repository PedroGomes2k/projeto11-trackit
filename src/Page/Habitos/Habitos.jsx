import { styled } from "styled-components"
import Topo from "../Topo/Topo"
import Menu from "../Menu/Menu"
import HabitosDiarios from "./HabitosDiarios"
export default function Habitos({token}) {
    
    return (
        <ContainerHabitos>
            <Topo token={token}/>

            <HabitosDiarios token={token}/>

            <Menu />
        </ContainerHabitos>
    )
}

const ContainerHabitos = styled.div`
    
`