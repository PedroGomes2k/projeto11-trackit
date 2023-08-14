import { styled } from "styled-components"
import { ColorsChose } from "../../Constans/Colors";
import { useEffect, useState } from "react";


export default function ButtonHabitos({ newHabit, setNewHabit, letra, id }) {


    const [status, setStatus] = useState('normal')
    const { chose, waitchose } = ColorsChose



    //
    function rotineDay(i) {
        if (status === "normal") {
            setStatus("selected")
        } else if (status === "selected") {

            setStatus("normal")
        }
        console.log(status)

        setNewHabit({ ...newHabit, days: [...newHabit.days, i] })

    }


    return (

        <Button
            data-test="habit-day"
            onClick={() => rotineDay(id)}
            status={status}
            chose={chose}
            wait={waitchose}
        >

            {letra}
        </Button>

    )
}



const Button = styled.button`
     display: flex;
    justify-content: space-between;
    background-color: ${(props) =>

        props.status === "normal"
            ? props.wait.background
            : props.chose.background
    };
    color: ${(props) =>

        props.status === "normal"
            ? props.wait.color
            : props.chose.color
    };

    
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

    border-radius: 5px;
    border: 1px solid #D4D4D4;
   
    
`