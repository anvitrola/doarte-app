//react
import {useState,useEffect} from 'react';

//icons
import { IconContext } from "react-icons";
import { FaPiggyBank } from 'react-icons/fa';

//components
import PostAndPatch from '../postAndPatch/PostAndPatch';

//services
import {getUser} from './../../services/userServices';

//image
import Picture from "../../images/4.png";

//styled components
import {Container, Greetings} from './FormArea.styles';


function FormArea({profile}) {
    const [user,setUser] = useState({
        name:"Default",
        amount_money:0
    });

    useEffect(async () => {
        const data = await getUser();
        setUser(data);
        
    }, []);
    return (
        <Container>
            <Greetings>
                {profile ? <h3>Olá, {user.name}!</h3> : <h3>Inaugure uma causa!</h3>}
                <div>
                    <IconContext.Provider value={{ color: "var(--yellow)", size: "1.7rem"}}>
                        <FaPiggyBank/>
                    </IconContext.Provider>
                    <h4>Você tem <b>{user.amount_money}</b> moedas para doar</h4>
                </div>
            </Greetings>

            <PostAndPatch isUpdate={profile && true}/>

            <img src={Picture} alt="Bloco de notas ilustrado por um contorno preto"/>

        </Container>
    )
};

export default FormArea;
