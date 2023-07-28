import { styled } from "styled-components"
import { Letras } from "../../Page/Habitos/Letras";
import { ColorsChose } from "../../Constans/Colors";
import { useEffect, useState } from "react";


export default function ButtonHabitos({ newHabit, setNewHabit }) {

    const { chose, waitchose } = ColorsChose
    const [status, setStatus] = useState("")
    const [day, setDay] = useState([])

    useEffect(()=>{

       
    } , [])

    function rotineDay(i) {

        setDay([...day, i])

        const dayChose = day

        setNewHabit({ ...newHabit, days: dayChose })

    }   


    return (
        <Button >
            {Letras.map((l) =>
                <button
                    key={l.id}
                    onClick={() => rotineDay(l.id)}
                    status={status}
                    waitchose={waitchose}
                >
                    {l.letra}
                </button>
            )}
        </Button>
    )
}


const Button = styled.div`
    display: flex;
    justify-content: space-between;

    width:215px;    
    margin-left:15px;


    button{

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;

        border-radius: 5px;
        border: 1px solid #D4D4D4
    }
`