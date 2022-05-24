import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    body{
        padding: 0; margin: 0; box-sizing: border-box;
        font-family: "Roboto";
    }
`;

export const Message = styled.div`
    color: #dc3545;
`;

export const MessageLogin = styled.label`
    color: #dc3545;
`