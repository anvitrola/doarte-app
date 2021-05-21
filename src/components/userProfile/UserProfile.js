import { IconContext } from "react-icons";
import { FaPiggyBank } from 'react-icons/fa';
import Picture from "../../images/4.png";


import UpdateForm from '../updateForm/UpdateForm';
import {Container, Greetings} from './UserProfile.styles';

function UserProfile({name, email, amount_money}) {
    return (
        <Container>
            <Greetings>
                <h3>Olá, Nome!</h3>
                <div>
                    <IconContext.Provider value={{ color: "var(--yellow)", size: "1.7rem"}}>
                        <FaPiggyBank/>
                    </IconContext.Provider>
                    <h4>Você tem <b>X</b> moedas para doar</h4>
                </div>

            </Greetings>
            <UpdateForm/>

            <img src={Picture} alt="Contorno de cor preta de dois personagens juntos, um de aparência masculina e outro de aparência feminina, que aparentam estar conversando."/>

        </Container>
    )
}

export default UserProfile
