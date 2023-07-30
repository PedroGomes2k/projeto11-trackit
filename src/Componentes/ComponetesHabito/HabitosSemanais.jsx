import { styled } from "styled-components"
import dump from "../../assets/dump.svg"
import { Letras } from "../../Constans/Letras"
import { useContext, useEffect } from "react"
import { TokenAuten } from "../../Contex/Token"
import axios from "axios"


export default function HabitosSemanais() {

    const { infCard, setInfCard, token } = useContext(TokenAuten)

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        const URL = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
            .then((res) => {

                setInfCard(res.data)

            }
            )
            .catch((erro) =>
                console.log(erro)
            )

    }, [])

    function deleteCard(id) {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const URL = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then((res) => {
                setInfCard(infCard.filter(infCard => infCard.id !== id))
                
            }
            )
            .catch((erro) =>
                console.log(erro.error))
    }


    return (
        <Container>
            {infCard && infCard.map((i) =>
                <HabitoSemanal key={i.id}>


                    <Habito>
                        <p>{i.name}</p>
                        <Image> <img src={dump} alt="imagem para excluir" onClick={() => deleteCard(i.id)} /></Image>
                    </Habito>



                    <Button>
                        {Letras.map((l) =>
                            <button
                                key={l.id}
                            >
                                {l.letra}
                            </button>

                        )}
                    </Button>

                </HabitoSemanal>
            )}

        </Container>
    )
}
const Container = styled.div`
    margin:0px 18px;
    margin-top: 20px;
    
    

`

const HabitoSemanal = styled.div`

    width: 340px;
    height: 91px;

    margin-top: 10px;

    border-radius: 5px;
    background-color: #FFFFFF;
`
const Habito = styled.div`
    display: flex;
    justify-content: space-between;
    
    p{
        margin-top: 10px;
        margin-left: 10px;

        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;


        color: #666666;
    }

`

const Image = styled.div`
img{
    width: 13px;
    height: 15px;

    margin-top: 10px;
    margin-right: 10px;

}
    
`

const Button = styled.div`
 button {
    
    font-family: Lexend Deca;
    font-size: 20px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

    border-radius: 5px;
    border: 1px solid #D4D4D4;

    margin-top: 10px;
    margin-left: 5px;

    }
`
