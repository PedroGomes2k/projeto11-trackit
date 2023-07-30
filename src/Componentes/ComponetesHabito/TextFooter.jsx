import { styled } from "styled-components"
import { TokenAuten } from "../../Contex/Token"
import { useContext } from "react"

export default function TextFooter() {

    const { text} = useContext(TokenAuten)
    
    if(!text ){
    return (
        <Text>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Text>
    )}  
        
    
}


const Text = styled.div`
    width:300px;
    height: 74px;

    margin-top: 20px;
    margin-left: 13px;

    font-family: Lexend Deca;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    color: #666666;
`