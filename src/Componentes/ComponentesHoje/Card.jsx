import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { TokenAuten } from "../../Contex/Token"
import axios from "axios"
import check from "../../assets/check.svg"


export default function Card({ currentSequence, highestSequence, name, id}) {

    const { habitDay, setHabitDay, token } = useContext(TokenAuten)
    const [make, setMake] = useState("normal")






    function doneHabit(id) {

        const body = {}



        if (make === 'normal') {



            const config = {
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            }

            const URL = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, body, config)
                .then((res) =>
                    console.log("deu certo")
                ).catch((erro) =>
                    console.log("erro check")
                )

            setMake("check")


        } else if (make === "check") {



            const config = {
                headers: {
                    Authorization: `Bearer ${token.token}`
                }
            }
            const URL = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, body, config)
                .then(() => {
                    console.log("deu certo")
                }
                ).catch((erro) =>
                    console.log("retirar marcaçao")
                )
            setMake("normal")
        }

    }

    console.log(make)
    return (

        <CardHoje data-test="today-habit-container">

            <Text>
                <h1 data-test="today-habit-name">{name}</h1>
                <p data-test="today-habit-sequence">Sequência atual:<h2>{currentSequence} dias </h2> </p>
                <p data-test="today-habit-record">Seu recorde:<h2>  {highestSequence} dias!</h2> </p>
            </Text>
            <Image
                make={make}
                onClick={() => doneHabit(id)}


            >   <button>
                    <img src={check} alt="imagem check" />
                </button>
            </Image>

        </CardHoje>

    )
}

const ContainerCards = styled.div`
    
`

const CardHoje = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 340px;
    height: 94px;

    border-radius: 5px;
    margin: 0px auto;
    margin-top: 10px;

    background-color: #FFFFFF;

    border: 1px solid #E7E7E7;

`
const Text = styled.div`
  

    h1{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        margin: auto 15px;
        margin-bottom: 13px;

        color: #666666;
        
    }

    h2{
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        margin-left: 15px;

        color: ${props => {
        if (props.make === "normal") {
            return "#666666"
        } else if (props.make === "check") {
            return "#8FC549"
        }
    }};  
        
    }

    p{
        display: flex;
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;

        color: #666666;
        margin-left: 15px;

    }
`

const Image = styled.div`
    button{
        display: flex;
        height: 69px;
        width: 69px;

        border-radius: 5px;
        border: 1px solid #E7E7E7;
        background-color:${props =>
            props.make === "normal"
                ? "#EBEBEB"
                : "#8FC549"
        };

        margin-right: 15px;
}

    img{
        
        
        width: 35px;
        height: 28px;
        
        color: #FFFFFF;
        margin: auto;
    }
`