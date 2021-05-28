//react
import { useState } from 'react';

//hooks
import { useForm } from "react-hook-form";

//components
import DefaultButton from "../buttons/DefaultButton";
import FormField from "../formField/FormField";
import TextBox from "../textBox/TextBox";

//api services
import { deleteProduct, updateProduct } from "../../services/productServices";

//styled components
import { Form, DeleteButton } from "./TinyUpdate.styles";
import { useHistory } from "react-router";
import ModalTemplate from '../modal/Modal';

function TinyUpdate({ id }) {


  const { register, handleSubmit } = useForm();



  const handleDelete = () => {

    deleteProduct(id).then((response) =>
      alert(response.message)
    );
    
  };
  const handleUpdate = (data) => {
    
    updateProduct(data, id).then((response) =>
      alert(response.message)
    );
   
  }
  return (
    <>
    <Form
      metod={"PATCH"}
      onSubmit={handleSubmit(handleUpdate)}
    >
     
        <>
          <FormField
            text="Qual é o novo título da sua vaquinha?"
            name={"title"}
            type={"text"}
            register={register}
            
          />
          <FormField text="Descrição" name={"description"} type={"text"} register={register} />
          <FormField
            text="Nova meta da vaquinha"
            name={"goal_value"}
            type={"number"}
            register={register}
            
          />
        </>
      

      {/* {isDelete && <TextBox subtitle={"Você tem certeza?"} />} */}

      <DefaultButton text={"Confirmar"} primary={true}  type={"submit"}  />
       

    </Form>
      <ModalTemplate isDelete={true} text={"deletar vaquinha"}>
        <DeleteButton type={"button"} onClick={handleDelete} >Deletar vaquinha</DeleteButton>
        
      </ModalTemplate>
     </> 
  );
}

export default TinyUpdate;
