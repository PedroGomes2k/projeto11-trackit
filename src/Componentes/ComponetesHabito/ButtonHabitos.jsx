import { styled } from "styled-components"
import { Letras } from "../../Constans/Letras";
import { ColorsChose } from "../../Constans/Colors";
import { useEffect, useState } from "react";


export default function ButtonHabitos({ newHabit, setNewHabit }) {


    const [status, setStatus] = useState("normal")
    const { chose, waitchose } = ColorsChose





    function rotineDay(i) {
        if (status === "normal") {
            setStatus("selected")
        } else if (status === "selected") {
            setStatus("normal")
        }

        setNewHabit({ ...newHabit, days: [...newHabit.days, i] })

        
    }


    return (
        <ButtonDay >
            <Button>
                {Letras.map((l) =>
                    <button
                        key={l.id}
                        onClick={() => rotineDay(l.id)}
                        status={status}
                        chose={chose.background}
                        waitchose={waitchose}
                    >
                        {l.letra}
                    </button>

                )}
            </Button>
        </ButtonDay>
    )
}


const ButtonDay = styled.div`
   

    width:215px;    
    margin-left:15px;


  
`
const Button = styled.div`
     display: flex;
    justify-content: space-between;

    background-color: ${(props) =>
        props.status

        ? props.status === "selected"
        : "blue"
            
        ? props.waitchose
        : "red"
                 
    };

    button {
    
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