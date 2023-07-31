import { Link } from "react-router-dom"
import { styled } from "styled-components"



export default function Menu() {
    return (
        <MenuStyle data-test="menu">

            <Link to={"/habitos"} data-test="habit-link">
                <Habitos>Habitos</Habitos>
            </Link>

            <Link to={"/hoje"} data-test="today-link">
                <Hoje> Hoje</Hoje>
            </Link>

            <Link to={"/historico"} data-test="history-link">
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
    font-family: Lexend Deca;
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