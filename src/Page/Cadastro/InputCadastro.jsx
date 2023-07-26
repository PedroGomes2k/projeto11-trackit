import { useState } from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"

export default function InputCadastro() {

    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")



    return (
        <ContainerInput>

            <form>

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={passWord}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="url"
                    placeholder="foto"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                <Link to={'/'}>
                    <button type="submit"> Cadastrar</button>
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