import { useState } from "react"
import styled from "styled-components"
import vector from '../assets/seta_play.png'
import vector2 from '../assets/seta_virar.png'

export default function Cards(){
    
    
   const cards = [
        { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]
    return(
        <div>
            {cards.map((card, index) => <Card key={index} question={card.question} answer={card.answer} id={card.id}/>)}
        </div>
    )
}

 function Card(props){

    const cards = [
        { id: 1, question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { id: 2, question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { id: 3, question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { id: 4, question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { id: 5, question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { id: 6, question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { id: 7, question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { id: 8, question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    const [pergunta, setPerguntas] = useState(false)
    const [resposta, setResposta] = useState(false)
    const [displayVisible, setDisplayVisible] = useState(false)


    return (
        <>
            <CardStyle3 style={{display: displayVisible ? 'flex' : 'none'}} key={props.index}>
                <SpanStyled >{props.answer}</SpanStyled>
                <DivBalloon>
                    <Balloon>Não lembrei</Balloon>
                    <Balloon2>Quase não lembrei</Balloon2>
                    <Balloon3>Zap!</Balloon3>
                </DivBalloon>
            </CardStyle3> 
        { pergunta === false ? 
        
            <CardStyle style={{display: resposta ? 'block' : 'hidden'}} key={props.index} onClick={() => setPerguntas(true)}>
                <SpanStyled >{`Pergunta ${props.id}`}</SpanStyled>
                    <Vector src={vector}/>
            </CardStyle>
            :
            <CardStyle2 style={{display: pergunta ? 'block' : 'none'}}key={props.index}>
                <SpanStyled >{props.question}</SpanStyled>
                <div>
                    <Vector2 onClick={function(event) {setDisplayVisible(true); setPerguntas()}} src={vector2}/>
                </div>
            </CardStyle2> 
        }      
        </>
  )
}  

const CardStyle = styled.div`
    font-family: 'Recursive';
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 30px;
`

const CardStyle2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-left: 40px;
    margin-top: 20px;
    font-family: 'Recursive';
`
const SpanStyled = styled.span`
display: flex;
    font-size: 16px;
    padding: 10px;
    font-family: 'Recursive';

`

const Vector = styled.img`
    width: 20px;
    height: 23px;
    padding: 10px;
    cursor: pointer;
    font-family: 'Recursive';

`

const Vector2 = styled.img`
    width: 30px;
    height: 20px;
    padding-right: 10px;
    cursor: pointer;
    position: absolute;
    top: 200px;
    left: 300px;
    font-family: 'Recursive';

`
const CardStyle3 = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 40px;
    margin-top: 20px;
    font-size: 18px;
    font-family: 'Recursive';
`
const DivBalloon = styled.div`
    display: flex;
    font-family: 'Recursive';
`

const Balloon = styled.div`
    width: .90px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 80px;
    height: 37.17px;
    margin: 15px;
    font-family: 'Recursive';
`

const Balloon2 = styled.div`
    width: 90px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    
    width: 65.04px;
    height: 37.17px;
    margin: 15px;
    font-family: 'Recursive';
`
const Balloon3 = styled.div`
    width:90px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 65.04px;
    height: 37.17px;
    margin: 15px;
    font-family: 'Recursive';
`