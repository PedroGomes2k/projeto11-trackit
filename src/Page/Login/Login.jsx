import { styled } from "styled-components"
import logo from "../../assets/logo.svg"
import InputLogin from "./InputLogin"
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <ContainerLogin>

            <img src={logo} alt="Imagem do Logo" />

            <InputLogin />

            <Link to={'/cadastro'}>
            <Cadastrar>
                Não tem uma conta? Cadastre-se!
            </Cadastrar>
            </Link>

        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
   
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

    color: #52B6FF;
    text-decoration: underline;
   
`