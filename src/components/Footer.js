import styled from "styled-components"



export default function Footer(){
    return(
      <FooterStyle>
        0/4 CONCLUÍDOS
      </FooterStyle>
    )
}

const FooterStyle = styled.div`
    width: 375px;
    height: 70px;

    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    font-family: 'Recursive';
    display: flex;
    align-items: center;
    justify-content: center;
`