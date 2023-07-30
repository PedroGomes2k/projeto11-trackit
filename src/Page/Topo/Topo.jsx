import { styled } from "styled-components"
import { TokenAuten } from "../../Contex/Token"
import { useContext } from "react"
import logo from "../../assets/logo-mini.svg"


export default function Topo() {

    const {token} = useContext(TokenAuten)
    
    
    return (
        <TopoStyle>
            <Image><img src={logo} alt="logo-mini" /></Image>
            <img src={token.image} alt="imagem do usuário" />
        </TopoStyle>
    )
}

const TopoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 375px;
    height: 70px;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px 0px #00000026;

    position: relative;

    img{
        
        width: 51px;
        height: 51px;

        border-radius: 99px;
        
        margin: auto 20px;
    }

    h1{ 
        margin: auto 15px;
        color: #FFFFFF;
    }
`
const Image = styled.div`
    img{
        width: 97px;
        height: 49px;
    }   

    margin: auto 0px;
`