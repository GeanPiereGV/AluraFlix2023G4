import styled from "styled-components";
import Logotipo from "../Logotipo/Logo";

const Footer = styled.footer`
    padding-bottom: 6rem;
    background-color: #000;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-top: 3px solid #2A7AE4;
    padding: 1.5rem 0 3.5rem 0;
    margin-top: 5rem;
`;

const PieDePagina = () => {

    return (
        <Footer>
            <Logotipo footer={true}/>

        </Footer>
    )
}


export default PieDePagina;