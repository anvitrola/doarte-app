import {FooterContainer, Lists, Signature} from './Footer.styles';

function Footer() {
    return (
        <FooterContainer>
            <Lists>
                <ul>
                    <li>Criar vaquinha</li>
                    <li>Login</li>
                </ul>

                <ul>
                    <li>Quem somos</li>
                    <li>Taxas e prazos</li>
                </ul>

                <ul>
                    <li>Dúvidas Frequentes</li>
                    <li>Fale conosco</li>
                </ul>
            </Lists>

            <hr/>
            <Signature>
                <h1>Logo</h1>
                <p>&copy; Todos os direitos resevados</p>
            </Signature>

        </FooterContainer>
    )
}

export default Footer
