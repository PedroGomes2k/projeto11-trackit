import { styled } from "styled-components";
import { Letras } from "../Page/Habitos/Letras";

export default function CriarHabito(props) {

    function saveHabit(){
        
    }
    return (
        <CardHabitos>
            <input type="text" placeholder="nome do habito" />
            <Button >
                {Letras.map((l) =>
                    <button key={l.id}>
                        {l.letra}
                    </button>
                )}
            </Button>
            <Save>
                <p> Cancelar </p>
                <button onClick={saveHabit}> Salvar</button>
            </Save>
        </CardHabitos>
    )

}

const CardHabitos = styled.div`

    width: 340px;
    height: 180px;

    margin: 25px auto;
    border-radius: 5px;
    background-color: #FFFFFF;

    input{
        
        margin: 10px 0px;
        margin-left: 15px;

        width:  303px;
        height: 45px;

        border-radius: 5px;
        border: 1px solid #D4D4D4
    }
`
const Button = styled.div`
    display: flex;
    justify-content: space-between;

    width:215px;    
    margin-left:15px;
    button{
        background-color: #FFFFFF;

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;

        color: #DBDBDB;

        border-radius: 5px;
        border: 1px solid #D4D4D4
    }
`
const Save = styled.div`

    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
    margin-right: 15px;

    p{
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;

        color:#52B6FF;
        margin-top: 7px;
        margin-right: 30px;
    }   

    button{
        width: 84px;
        height: 35px;

        border-radius: 5px;
        border: 1px solid;
        background-color: #52B6FF;

        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;

        color: #FFFFFF;
        text-align: center;

    }
`