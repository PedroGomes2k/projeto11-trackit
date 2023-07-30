import { styled } from "styled-components"


export default function Hoje() {
    return (
        <Container>
            <h1>Segunda, 17/05</h1>
            <p>Nenhum hábito concluído ainda</p>
        </Container>
    )
}

const Container = styled.div`

    width: 375px;
    height: 445px;

    display: flex;
    flex-direction: column;

    background-color: #F2F2F2;

    h1{

    margin-top: 30px;
    margin-left: 13px;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

    color: #126BA5;
    }

    p{

   
    margin-left: 13px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color:#666666;
    }
`