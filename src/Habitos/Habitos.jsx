import Topo from "../Menu/Topo";
import Menu from "../Menu/Menu"
import styled from "styled-components";
import HabitosDiario from "../Habitos/HabitosDiario"

export default function Habitos() {
    return (
        <ContainerHabito>
            <Topo />
            <MeusHabitos>
                <p>Meus Habitos</p>
                <button> + </button>
            </MeusHabitos>
            {/*<HabitosDiario />*/}
            <Texto>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Texto>
            <Menu />
        </ContainerHabito>
    )
}

const ContainerHabito = styled.div`

     left: 0px;
     top: 0px;
     position: relative;

   
`
const MeusHabitos = styled.div`
    width: 375px;
    display:flex;
    justify-content: space-between;
    //margin: 0px auto;
    margin-top: 70px;

   
    
    button{
        width: 40px;
        height: 35px;

        color:#FFFFFF;
        background: #52B6FF;
        border:#52B6FF;
        border-radius: 5px;

        font-size:27px;

        margin:auto 18px;
    }

    p{  
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;

        color:#126BA5;
        margin-left: 0px;
    }
`
const Texto = styled.div`
    width: 338px;
    height: 74px;
    

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;

    color: #666666;

`