import { useState, useRef } from "react";

//api services
import { updateUser } from "./../../services/userServices";
import { createProduct } from "../../services/productServices";

//components
import HighlightButton from "../buttons/HighlightButton";
import FormField from "../formField/FormField";

//styled components
import { Form } from "./PostAndPatch.styles";


function PostAndPatch({isUpdate}) {
  const [err, setErr] = useState(false)

  const formElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const data = takeValue()

    isUpdate ? 
    updateUser(data) 
    : 
    createProduct(data).then(response => {
      if(response === undefined)setErr(true);
      else(alert('Vaquinha criada com sucesso!'))
    });
  };
  
  function takeValue(){
    const form = formElement.current;
    let data;
    if(isUpdate){
      data =
      {
        name: form['name'].value,
        email: form['email'].value,
        password: form['password'].value,
      }
    } else{
      data = {
        title: form['title'].value,
        goal_value: form['goal_value'].value,
        deadline: form['deadline'].value,
        description: form['description'].value,
      }
    }
   
    return data;
  };

  
  return (
    <Form 
    larger={isUpdate ? false : true} 
    method={isUpdate ? "PATCH" : "POST"} 
    onSubmit={handleSubmit} ref={formElement}
    >

      <FormField 
      text={isUpdate ? "Nome" : "Dê um título à sua vaquinha"}
      id={isUpdate ? "name" : "title"}
      type={"text"} 
      holder={isUpdate 
        ? "Name" 
        : "O título é o que chama a atenção!"
      }/>
      
      <FormField 
      text={isUpdate ? "Email" : "Descrição"}
      id={isUpdate ? "email" : "description"} 
      type={isUpdate ? "email" : "text"} 
      holder={isUpdate 
        ? "name@example.com" 
        : "Por que as pessoas devem se mobilizar por sua causa?"
      }/>

      <FormField 
      text={isUpdate 
        ? "Senha" 
        : "Quanto você deseja arrecadar?"
      }
      id={isUpdate ? "password" : "goal_value"} 
      type={isUpdate ? "password" : "number"} 
      holder={isUpdate && "********"}
      />

      {!isUpdate && (
        <FormField text={"Prazo final: "} id={"deadline"} type={"date"}/>
      )}

      <HighlightButton 
      text={isUpdate ? "Atualizar informações" : "Publicar vaquinha"} type={"submit"} 
      />
      
    </Form>
  )
};

export default PostAndPatch;
