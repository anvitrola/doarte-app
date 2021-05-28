//icons
import { IconContext } from "react-icons";
import { FaPiggyBank } from "react-icons/fa";

//components
import PostAndPatch from "../postAndPatch/PostAndPatch";

//image
import Picture from "../../images/image11.png";

//styled components
import { Container, Greetings, DeleteArea } from "./FormArea.styles";
import ModalTemplate from "../modal/Modal";
import TinyForm from "../tinyForm/TinyForm";

function FormArea({profile}) {
    
    return (
        <Container>
            <Greetings>
                {profile ?
                <>
                    <h3>Olá, {localStorage.getItem('Username')}!</h3>
                    <div>      
                        <IconContext.Provider value={{ color: "var(--yellow)", size: "1.7rem"}}>
                            <FaPiggyBank/>
                        </IconContext.Provider>
                        <h4>Você tem <b>{localStorage.getItem('amount_money')}</b> moedas para doar</h4>
                    </div>
                </> : 
                <h3>Inaugure uma causa!</h3>}
            </Greetings>

      <PostAndPatch isUpdate={profile && true} />

      <img src={Picture} alt="Bloco de notas ilustrado por um contorno preto" />

      {profile && (
        <DeleteArea>
          <ModalTemplate isDelete={true} text={"Deletar conta"}>
            <TinyForm isDelete={true} isUser={true} />
          </ModalTemplate>
        </DeleteArea>
      )}
    </Container>
  );
}

export default FormArea
