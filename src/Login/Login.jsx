import styled from "styled-components"

export default function Habito() {
    return (


        <StyleInput>
            ,
        <form>
            <label for="nome"></label>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <input type="submit"  />
        </form>
        </StyleInput>

    )
}

const StyleInput = styled.div`
    input{
        width: 303px;
        width: 45px;
    }

`