import { styled } from "styled-components"
import plus from "../../assets/plus.svg"
import CriarHabito from "../../Componentes/ComponetesHabito/CriarHabito"
import { TokenAuten } from "../../Contex/Token"
import { useContext } from "react"

import HabitosSemanais from "../../Componentes/ComponetesHabito/HabitosSemanais"

export default function HabitosDiarios() {
    const { setDisabled } = useContext(TokenAuten)

    function openCard() {

    }
    return (
        <ContainerHabito>
            <Habito>
                <h1>Meus Habitos</h1>
                <button
                    onClick={() => openCard(setDisabled(true))}
                    data-test="habit-create-btn"
                >
                    <img src={plus} alt="Button plus" />
                </button>
            </Habito>

            <CriarHabito />

            <HabitosSemanais />


        </ContainerHabito>
    )
}
const ContainerHabito = styled.div`
    width: 375px;
    height: 445px;
    background-color: #F2F2F2;

    overflow-x: hidden;
   

`
const Habito = styled.div`
    display: flex;
    justify-content: space-between;
    
    h1{
        margin-top: 25px;
        margin-left: 13px;

        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;

        color: #126BA5;
    }
    button{
        display: flex;
        width: 40px;
        height: 35px;

        justify-content: center;
        background-color: #52B6FF;
        border-radius: 5px;
        border: 1px solid  #52B6FF;

        margin-right: 15px;
        margin-top: 20px;
        cursor: pointer;
    }
    img{
        width: 16px;
        height: 34px; 
        
    }
`


