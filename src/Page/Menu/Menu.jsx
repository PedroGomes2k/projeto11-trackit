import { styled } from "styled-components"



export default function Menu() {
    return (
        <MenuStyle>

            <Habitos>Habitos</Habitos>
            <Hoje> Hoje</Hoje>
            <Historico>Historico</Historico>

        </MenuStyle>
    )
}

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;

  
    background-color: #FFFFFF;

`

const Hoje = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 91px;
    height: 91px;

    border-radius: 99px;
    color: #FFFFFF;
    background-color: #52B6FF;

    position: relative;
    bottom:30px;
`

const Historico = styled.div`
    margin: auto 15px;
    color: #52B6FF;
    
`
const Habitos = styled.div`
    margin: auto 15px;
    color: #52B6FF;
`