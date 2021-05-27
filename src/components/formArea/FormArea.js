//react
import { useState, useEffect } from 'react';

//icons
import { IconContext } from "react-icons";
import { FaPiggyBank } from 'react-icons/fa';

//components
import PostAndPatch from '../postAndPatch/PostAndPatch';

//services
import { getUser } from './../../services/userServices';

//image
import Picture from "../../images/4.png";

//styled components
import { Container, Greetings, DeleteArea } from './FormArea.styles';
import ModalTemplate from '../modal/Modal';
import TinyForm from '../tinyForm/TinyForm';


function FormArea({profile}) {
    const [user, setUser] = useState({
        name:"Default",
        amount_money:0
    });

    useEffect(() => {
        async function fetchUser() {
            setUser(await getUser());
        }
        fetchUser();    
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

            {profile &&(
                <DeleteArea>
                    <ModalTemplate isDelete={true} text={"Deletar conta"}>
                        <TinyForm isDelete={true}/>
                    </ModalTemplate>
                </DeleteArea>
            )}

        </Container>
    )
};

export default FormArea;
