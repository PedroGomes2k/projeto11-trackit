import styled from "styled-components"


export default function HabitosDiario() {
    const letras = [
        { nome: "D", id: "1" },
        { nome: "S", id: "2" },
        { nome: "T", id: "3" },
        { nome: "Q", id: "4" },
        { nome: "Q", id: "5" },
        { nome: "S", id: "6" },
        { nome: "S", id: "7" },
    ]
    return (
        <Container>
            <Form>
                <form>
                    <input type="text" placeholder="Nome do hábito" />
                </form>
            </Form>
            <Button >
                {letras.map((props) =>
                    <button key={props.id}>
                        {props.nome}
                    </button>
                )}
            </Button>
            <BottomPagina>
            <p> Cancelar</p>
            <button>Salvar</button>
            </BottomPagina>
        </ Container>
    )
}

const Container = styled.div`
   
    width: 340px;
    height:180px;

    background-color: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 29px;
   

    input{
        
        width:303px;
        height: 45px;

        border: 1px solid #D5D5D5;
        border-radius: 5px;
        
        margin-top: 18px;
        margin-left: 15px;

        color: #666666;
        

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
    }

    
`
const Form = styled.div`
    
`

const Button = styled.div`
    width: 300  px;
    height: 30px;

    margin-top: 8px;
    margin-left: 15px;
    
    button{
        width: 30px;
        height:30px;;

        margin-left: 4px;
        
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        background: #FFFFFF;

        color: #DBDBDB;
    }
`
const BottomPagina = styled.div`
    display: flex;

    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;

    text-align: center;
    justify-content: flex-end;
    
    

    button{
        width: 84px;
        height: 35px;
        margin-right: 15px;
        margin-top: 30px;
       
        

        background-color: #52B6FF;
        color: #FFFFFF;

        text-align: center;

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;

        border-radius: 5px;
        border: #52B6FF;
    }

    p{
        margin-right: 23px;
        margin-top: 36px;
    }
`