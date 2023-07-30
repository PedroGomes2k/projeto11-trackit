import { Link } from "react-router-dom"
import { styled } from "styled-components"



export default function Menu() {
    return (
        <MenuStyle>

            <Link to={"/habitos"}>
                <Habitos>Habitos</Habitos>
            </Link>

            <Link to={"/hoje"}>
                <Hoje> Hoje</Hoje>
            </Link>

            <Link to={"/historico"}>
                <Historico>Historico</Historico>
            </Link>


        </MenuStyle>
    )
}

const MenuStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;

  
    background-color: #FFFFFF;
    position: fixed;
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
    margin: 30px 15px;
    
    color: #52B6FF;

    text-decoration: none;
    
`
const Habitos = styled.div`
    margin: 30px 15px;
    color: #52B6FF;
    text-decoration: none;

`