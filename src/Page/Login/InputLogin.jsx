import axios from "axios"
import { useContext, useState, } from "react"
import { Link, useNavigate } from "react-router-dom"
import { styled } from "styled-components"
import { TokenAuten } from "../../Contex/Token"




export default function InputLogin() {

    const { setToken, token} = useContext(TokenAuten)


    
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })


    function chekLogin(e) {
        e.preventDefault()

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

        const promise = axios.post(URL, form)
            .then(res => {
                setToken(res.data)
                navigate("/habitos")
            })
            .catch((erro) =>{
                console.log(erro.error)
                alert("deu error nessa bosta" + erro.error)
            })

    }

    return (
        <ContainerInput>

            <form onSubmit={chekLogin}>
                <input type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email"
                    data-test="email-input"
                    required
                />

                <input type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="senha"
                    data-test="password-input"
                    required
                />

                <button type="submit" data-test="login-btn"> Entrar</button>

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