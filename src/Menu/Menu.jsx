import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Menu() {
    return (
        <Container>
            <StyleMenu>

                <Habit> Hábitos</Habit>

                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsq7-N86T1sl81qGwdtQndwKI2TSP3EMa_g&usqp=CAU" alt="Imagem-Hoje" /></div>

                <Historic> Histórico</Historic>

            </StyleMenu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    
    position: fixed;
    bottom: 0px;
    left: 0px;
`

const StyleMenu = styled.div`
    width:375px ;
    height: 70px;
    display: flex;
    

    justify-content: space-between;

    background-color: #FFFFFF;
    border: 1px solid #d3d3d3;
    color: #52B6FF;

    

    img{
        width: 91px;
        height: 91px;
        margin-top: -40px;
    }
`
const Habit = styled.div`
    
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    margin: auto;   
`
const Historic = styled.div`
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;

    margin: auto;
`