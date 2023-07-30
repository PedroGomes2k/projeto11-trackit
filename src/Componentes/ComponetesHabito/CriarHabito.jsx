import { styled } from "styled-components";
import { useContext, useEffect, useState } from "react";
import { ColorsChose } from "../../Constans/Colors"
import ButtonHabitos from "./ButtonHabitos";
import axios from "axios"
import { TokenAuten } from "../../Contex/Token";

export default function CriarHabito() {

    const { token, disabled, setDisabled, } = useContext(TokenAuten)
    
   
    const [newHabit, setNewHabit] = useState({ name: "", days: "" })


  

    function creatHabit(e) {
        e.preventDefault()

      
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }


        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

        const promise = axios.post(URL, newHabit, config)
            .then((res) =>{
                
                setDisabled(false)
               
                setNewHabit({ name: "", days: "" })
                
                }
            )
            .catch((erro) =>
                console.log(erro.error)
            )
    }



    function cancelHabit() {
        setDisabled(false)
        setNewHabit({ name: "", days: "" })
    }



    if (!disabled) {

    } else {
        return (
            <>
            <CardHabitos onSubmit={creatHabit}>
                <input
                    type="text"
                    placeholder="nome do habito"
                    value={newHabit.name}
                    onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
                    required
                />
                <ButtonHabitos

                    newHabit={newHabit}
                    setNewHabit={setNewHabit}
                    
                />

                <Save>

                    <p onClick={() => cancelHabit()}> Cancelar </p>

                    <form action="">
                        <button type="submit"> Salvar</button>
                    </form>
                </Save>
            </CardHabitos>

           
            </>
        )
    }


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

        cursor: pointer;
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

        cursor: pointer;
    }
`
