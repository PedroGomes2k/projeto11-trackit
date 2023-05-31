import { Link } from "react-router-dom"
import styled from "styled-components"

export default function StyleInputLogin() {
    return (
        <Input>
            <form>
                <input type="email" placeholder="Email" />

            </form>
            <form>
                <input type="password" placeholder="Senha" />
            </form>

            <Link to={"/habitos"}>
                <button> Entrar</button>
            </Link>
        </Input>
    )
}

const Input = styled.div`
    
        text-align: center;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        color: #D5D5D5;
    input{
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        border-radius:5px;
        border:1px solid #D5D5D5;

        
    }

    button{  
        width: 309px;
        height: 45px;

        background-color: #52B6FF;
        color: #FFFFFF;
        border-radius: 5px;
        border:#52B6FF;

        justify-content: center;
        align-items: center;
        text-align: center;

        margin-bottom: 25px;
    }

`