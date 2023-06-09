import styled from "styled-components";


export const Boton = styled.button`
    width: 20rem;
    height: 4.8rem;
    font-size: 1.9rem;
    font-weight: 800;
    color: #2A7AE4;
    padding: .6rem 1.5rem;
    border: 2px solid #2A7AE4;
    background-color: #000;
    text-align: center;
    border-radius: 2.9rem;

    :hover {
        background-color: #2A7AE4;
        border: 2px solid white;
        color: #000;
        cursor:pointer;
        transition: .3s ease-in-out;
    }

    @media (max-width: 768px) {
        font-size: 1.3rem;
        width: 15rem;
        height: 4rem;
    }
`;


export const BtnForm = styled.button`
    border: 2px solid #2A7AE4;
    border-radius: 2.9rem;
    font-size: 1.9rem;
    color: #2A7AE4;
    padding: 1.5rem 3rem;
    margin: 3rem 0;
    max-width: 95%;
    background-color: #000;
    cursor: pointer;

    :hover {
        background-color: #2A7AE4;
        border: 2px solid white;
        color: #000;
        cursor:pointer;
        transform: scale(.9);
    }
`;