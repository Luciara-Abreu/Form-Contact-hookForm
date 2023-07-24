import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerButton, ContainerFormSendEmail, ContainerLabel, ContainerSectionForm } from "./styles";
import { useEffect, useState } from 'react';
import Apresentation from '../apresentation';
import { FormSubmitSuccessProps } from '@/utils';
import { CreateMessageSendEmail } from '../createMessage';
import { useCreateField } from '@/hooks';


function FormSendEmail({ onFormSubmitSuccess }: FormSubmitSuccessProps) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

// Use o hook para add novos campos
const { register, handleSubmit, errors, addInformation, fields, append, remove, fieldsAreaRef, MAX_AREA_FIELDS } = useCreateField();

  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);


  // Redireciona para a página de agradecimento quando o estado isFormSubmitted for true
  useEffect(() => {
    if (isFormSubmitted) {
      window.location.href = "http://localhost:3000/"; // Redirecionamento para a página de agradecimento
    }
  }, [isFormSubmitted]);

  //Cria o escopo da mesagem via API
  const createMassage = CreateMessageSendEmail(onFormSubmitSuccess);

  return (
    <ContainerFormSendEmail className="containerFormSendEmail">
      <Apresentation />
        <ContainerSectionForm className="containerSectionForm" data-aos="zoom-in-left"  ref={fieldsAreaRef}>
          <form className='form'onSubmit={handleSubmit(createMassage)}>

            <ContainerLabel className='containerLabel'>
              <label className='labelName'>Seu Nome</label>
              <input type="text" className="form-control" placeholder="nome sobrenome"
                autoComplete="on"
                {...register('nome')}
              />
              {errors.nome && <span>{errors.nome.message}</span>}
            </ContainerLabel>

            <ContainerLabel className='containerGrid'>
              <label>Email</label>
                <input type="email" className="form-control left" placeholder="nome@email.com"
                  autoComplete="on"
                  {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}
                
                <label>Fone </label>
                <input type="fone" className="form-control right" placeholder="(xx) xxxxx-xxxx"
                  autoComplete="on"
                  {...register('fone')}
                />
                {errors.fone && <span>{errors.fone.message}</span>}
            </ContainerLabel>

            <ContainerLabel className='containerLabel'>
                <div className='more-information'>
                  <p className="p-1">Quer adicionar mais informações?</p>
                  <p className="p-2">clique aqui</p>
                </div>
                {fields.length < MAX_AREA_FIELDS && (
                <ContainerButton>
                  <button className="btnSubmit info" type="button" onClick={addInformation}>Adicionar</button>
                </ContainerButton>
                )}
            </ContainerLabel>


            {/**Add os campos para ascrentar mais informações */}
            {fields.map((field, index) => {
              return (
                <div key={field.id} className='containerLabelArea'>

                  <ContainerLabel className="area">
                    <label>Sua área</label>
                    <input type="text" className="form-control" placeholder="Exemplo Tec Recruter"
                      {...register(`area.${index}.title`)}
                    />
                    {errors.area?.[index]?.title && <span>{errors.area?.[index]?.title?.message}</span>}
                  </ContainerLabel>

                  <ContainerLabel className="area">
                    <label>Empresa</label>
                    <input type="text" className="form-control" placeholder="Exemplo XPTO"
                      {...register(`area.${index}.empresa`)}
                    />
                    {errors.area?.[index]?.empresa && <span>{errors.area?.[index]?.empresa?.message}</span>}
                  </ContainerLabel>

                  <ContainerLabel className="area">
                    <label>Vaga</label>
                    <input type="text" className="form-control" placeholder="Exemplo Desenvolvedora Front-end"
                      {...register(`area.${index}.vaga`)}
                    />
                    {errors.area?.[index]?.vaga && <span>{errors.area?.[index]?.vaga?.message}</span>}
                  </ContainerLabel>

                  <ContainerLabel className="area">
                    <label>Salário</label>
                    <input type="text" className="form-control" placeholder="Exemplo R$ 00.000,00"
                      {...register(`area.${index}.salario`)}
                    />
                    {errors.area?.[index]?.vaga && <span>{errors.area?.[index]?.vaga?.message}</span>}
                  </ContainerLabel>

                  <ContainerLabel style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                  {/* Botão de exclusão */}
                  <ContainerButton className= 'containerButton remove' >
                    <button className="btnSubmit info" type="button" onClick={() => remove(index)}>
                      Remover
                    </button>
                  </ContainerButton>
                  </ContainerLabel>

                </div>
              )
            })}

            <ContainerLabel>
              <label>Mensagem</label>
              <textarea className="form-control" placeholder="Digite aqui..." style={{ height: "100px" }}
                {...register('message')}>
              </textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </ContainerLabel>

            <ContainerLabel style={{ paddingTop: '30px', paddingBottom: '10px' }}>
            <ContainerButton className="btnSendForm">
              <button className="btnSubmit" type="submit">Enviar</button>
            </ContainerButton>
            </ContainerLabel>

            <input type="hidden" name="redirectTo" value="Thanks" />
          </form>
        </ContainerSectionForm>   
    </ContainerFormSendEmail>
  );
}

export default FormSendEmail;