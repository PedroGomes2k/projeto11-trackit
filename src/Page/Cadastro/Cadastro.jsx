import { styled } from "styled-components"
import logo from "../../assets/logo.svg"
import InputCadastro from "./InputCadastro"
import { Link } from "react-router-dom"




export default function Cadastro() {
    return (
        <ContainerCadastro>

            <img src={logo} alt="Imagem do Logo" />

            <InputCadastro/>

            <Link to={'/'}>
                <Cadastrar>
                    Já tem uma conta? Faça login!
                </Cadastrar>
            </Link>

        </ContainerCadastro>
    )
}

const ContainerCadastro = styled.div`
   
    width: 375px;
    
    justify-content: center;
    

    
    img{
    
        display: flex;
        align-items: center;
        width: 180px;
        height: 179px;
               
    }
    
`

const Cadastrar = styled.div`

    margin-top: 5px;
    color: #52B6FF;
    text-decoration: underline;
   
`