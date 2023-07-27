import { styled } from "styled-components"
import plus from "../../assets/plus.svg"
import CriarHabito from "../../Componentes/CriarHabito"


export default function HabitosDiarios() {

    function openCard() {
      
    }
    return (
        <ContainerHabito>
            <Habito>
                <h1>Meus Habitos</h1>
                <Imagem> <img src={plus} alt="Button plus" onClick={() => openCard()} /> </Imagem>
            </Habito>

            <CriarHabito/>

            <Text>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Text>
        </ContainerHabito>
    )
}
const ContainerHabito = styled.div`
    width: 375px;
    height: 407px;
    background-color: #F2F2F2;

    
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

`
const Imagem = styled.div`
    display: flex;
    width: 40px;
    height: 35px;

    justify-content: center;
    background-color: #52B6FF;
    border-radius: 5px;

    margin-right: 15px;
    margin-top: 20px;
    img{
        width: 16px;
        height: 34px; 
    }
`
const Text = styled.div`
    width:300px;
    height: 74px;

    margin-top: 20px;
    margin-left: 13px;

    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: #666666;
`
const CardOpen = styled`
    
`