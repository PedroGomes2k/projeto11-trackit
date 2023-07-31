import { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { TokenAuten } from "../../Contex/Token"
import Card from "./Card"
import axios from "axios"

export default function Hoje() {

    const { habitDay, setHabitDay, token } = useContext(TokenAuten)


    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
            .then((res) => {

                setHabitDay(res.data)
            }
            ).catch((erro) =>
                console.log(erro.error)
            )

    }, [])


    return (
        <Container>
            <Text>
                <h1 data-test="today">Segunda, 31/07</h1>
                <p data-test="today-counter">Nenhum hábito concluído ainda</p>
            </Text>
            <ContainerCards>
                {habitDay.map((h) =>
                    <Card
                        currentSequence={h.currentSequence}
                        highestSequence={h.highestSequence}
                        id={h.id}
                        name={h.name}
                        token={token}
                        key={h.id}
                       
                    />
                )}


            </ContainerCards>
        </Container>
    )
}

const Container = styled.div`

    width: 375px;
    height: 445px;

    display: flex;
    flex-direction: column;

    background-color: #F2F2F2;

    overflow-x: hidden;
    
`
const Text = styled.div`

    h1{

    margin-top: 30px;
    margin-left: 13px;
    font-family: Lexend Deca;
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

    color: #126BA5;
    }

    p{


    margin-left: 13px;
    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color:#666666;
    }
`
const ContainerCards = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
`

