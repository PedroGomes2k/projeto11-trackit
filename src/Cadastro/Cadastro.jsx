import styled from "styled-components"
import StyleInputCadastro from "./StyleInputCadastro"
import { Link } from "react-router-dom"

export default function Cadastro() {
    return (

        <Container>
            <StylePalavra>
                <p>Trackit</p>
            </StylePalavra>

            <StyleInputCadastro />

            <Link to={"/"}>
                <Cadastrar>
                    Já tem uma conta? Faça login!
                </Cadastrar>
            </Link>
        </Container>

    )
}

const Container = styled.div`
        
            
        `
const StylePalavra = styled.div`
        
    display: flex;
    justify-content: center;
           
            
    p{  
    width: 180px;
    height: 86px;

    font-size: 69px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;

    color: #126BA5;
    }
        `


const Cadastrar = styled.div`
            color: #52B6FF;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 14;
        
            text-align: center;
            text-decoration:underline;
        `
