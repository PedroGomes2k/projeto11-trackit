import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"

export default function InputCadastro() {

    const navigate = useNavigate()

    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })


    function register(e) {

        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(URL, form)
            .then((resp) => {
                console.log(resp.data)
                navigate("/")

            })
            .catch((erro) =>
                alert(`Seu cadastro deu um erro! Tente novamente :)`)
            )
    }

    return (
        <ContainerInput>

            <form onSubmit={register}>

                <input
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={form.passsword}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="nome"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />
                <input
                    type="url"
                    placeholder="foto"
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    required
                />


                <button type="submit" > Cadastrar</button>

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