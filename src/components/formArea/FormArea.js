//icons
import { IconContext } from "react-icons";
import { FaPiggyBank } from 'react-icons/fa';

//components
import PostAndPatch from '../postAndPatch/PostAndPatch';

//image
import Picture from "../../images/4.png";

//styled components
import {Container, Greetings} from './FormArea.styles';

function FormArea({profile}) {
    return (
        <Container>
            <Greetings>
                {profile ? <h3>Olá, Nome!</h3> : <h3>Inaugure uma causa!</h3>}
                <div>
                    <IconContext.Provider value={{ color: "var(--yellow)", size: "1.7rem"}}>
                        <FaPiggyBank/>
                    </IconContext.Provider>
                    <h4>Você tem <b>X</b> moedas para doar</h4>
                </div>
            </Greetings>

            <PostAndPatch isUpdate={profile && true}/>

            <img src={Picture} alt="Bloco de notas ilustrado por um contorno preto"/>

        </Container>
    )
};

export default FormArea;
