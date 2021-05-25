import { useState } from "react";
import { useParams } from "react-router";

//api services
import { updateUser } from "./../../services/userServices";

//components
import HighlightButton from "../buttons/HighlightButton";
import FormField from "../formField/FormField";

//styled components
import { Form } from "./PostAndPatch.styles";

function PostAndPatch({isUpdate}) {
  //let { id } = useParams(); --> está dando undefined. why? to be discovered...

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    updateUser(user);
  };

  const takeValue = (e) => {
    const { id, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  return (
    <Form 
    larger={isUpdate ? false : true} 
    method={isUpdate ? "PATCH" : "POST"} 
    onSubmit={handleSubmit}
    >

      <FormField 
      text={isUpdate ? "Nome" : "Dê um título à sua vaquinha"} 
      type={"text"} 
      getValue={takeValue} 
      holder={isUpdate 
        ? "Name" 
        : "O título é o que chama a atenção!"
      }/>
      
      <FormField 
      text={isUpdate ? "Email" : "Descrição"} 
      type={isUpdate ? "email" : "text"} 
      getValue={takeValue} 
      holder={isUpdate 
        ? "name@example.com" 
        : "Por que as pessoas devem se mobilizar por sua causa?"
      }/>

      <FormField 
      text={isUpdate 
        ? "Senha" 
        : "Quanto você deseja arrecadar?"
      } 
      type={isUpdate ? "password" : "number"} 
      getValue={takeValue} 
      holder={isUpdate && "********"}
      />

      {!isUpdate && (
        <FormField text={"Prazo final: "} type={"date"}/>
      )}

      <HighlightButton 
      text={isUpdate ? "Update my infos" : "Publicar vaquinha"} type={"submit"} 
      />
      
    </Form>
  )
};

export default PostAndPatch;
