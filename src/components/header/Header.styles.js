import styled from 'styled-components';

export const HeaderContainer = styled.header
`
    grid-area: header;
    padding: .3rem;
    margin: 0 auto;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const Logo = styled.h1
`
    color: var(--black);

    img {
        width: 125px;
      }
`; 

export const Buttons = styled.div
`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;