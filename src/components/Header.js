import logo from '../assets/logo.png'
import styled from 'styled-components'


export default function Header(){
    return(
        <HeaderStyled>
            <Image src={logo}/>
            <Paragraph>ZapRecall</Paragraph>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    height: 100%;
    display:flex; 
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;

`

const Paragraph = styled.p`
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF; 
    padding-left: 20px;

`

const Image = styled.img`
        width: 52px;
        height: 60px;
`