import { styled } from "styled-components"


export default function Historico() {
    return (
        <Container>
            <h1>Historico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
    )
}

const Container = styled.div`
    
        width: 375px;
        height: 445px;
    
        background-color: #F2F2F2;
        display: flex;
        flex-direction: column;
        
        
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

            margin-top: 25px;
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