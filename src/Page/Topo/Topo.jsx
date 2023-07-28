import { styled } from "styled-components"


export default function Topo({ token }) {
    
    return (
        <TopoStyle>
            <h1>
                Trackit
            </h1>
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