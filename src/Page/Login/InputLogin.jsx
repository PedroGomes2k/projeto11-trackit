import { Link } from "react-router-dom"
import { styled } from "styled-components"



export default function InputLogin() {
    return (
        <ContainerInput>

            <form>
                <input type="email" placeholder="email" required/>
                <input type="password" placeholder="senha"  required/>
                <Link to={'/habitos'}> 
                    <button type="submit"> Entrar</button>
                </Link>
            </form>

        </ContainerInput>
    )
}

const ContainerInput = styled.div`
    
    

    input{
        width: 303px;
        height: 45px;

        border: 1px solid #D4D4D4;
        border-radius: 5px;

        
        margin: 5px 0px;
        

    }
    button{
        width: 303px;
        height: 45px;

        background: #52B6FF;
        color: #FFFFFF;

        text-align: center;

        border: 1px #52B6FF;
        border-radius: 5px ;

        margin-left:2px;
    }
`