import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerButton, ContainerFormSendEmail, ContainerSection, ContainerSectionForm } from "./styles";
import { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Thanks from '../tanks';


/*** 
 * To-do
 * 
 * [ok] Validação / Transformação com Zod
 * [ok] Field Arrays / 
 * [] Upload de arquivos
 * [] Composition Pattern
 * 
 */

const captalize = ((name: string) => {
  return name.trim().split(' ').map(word => {
    return word[0].toLocaleUpperCase().concat(word.substring(1))
  }).join(' ')
})

const createContactFormSchema = z.object({
  // Validação com Zod

  nome: z.string().nonempty('O nome é obrigatório').transform(captalize),
  email: z.string().nonempty('O email é obrigatório').email('Formato de email inválido').toLowerCase(),
  fone: z.string().min(11, 'informe o DDD + o seu numero'),
  message: z.string().nonempty('O campo é obrigatório').min(6, 'Precisa ser uma mensagem :D'),
  area: z.array(z.object({
    title: z.string().nonempty('Campo Obrgatório'),
    empresa: z.string().nonempty('Campo Obrgatório'),
    vaga: z.string(),
  }))
})

//typagem
type CreateContactFormData = z.infer<typeof createContactFormSchema>

// Prop da função de sucesso do formulário
type FormSubmitSuccessProps = {
  onFormSubmitSuccess: () => void;
};


function FormSendEmail({ onFormSubmitSuccess }: FormSubmitSuccessProps) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateContactFormData>({
    resolver: zodResolver(createContactFormSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'area',
  })

  function addInformation() {
    append({ title: '', empresa: '', vaga: '' })
  }


  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);



  function createMessage(data: any) {
    fetch("https://formsubmit.co/ajax/6022aec38f12017e7094cebed4e0c3bf", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: "FormSubmit",
        message: JSON.stringify(data, null, 2)
      })
    })
      .then(response => response.json())
      .then(data => {
        // Verifica se o formulário foi enviado com sucesso
        if (data.success) {
          setIsFormSubmitted(true); // Define o estado para true após o envio do formulário
          onFormSubmitSuccess();
          console.log(JSON.stringify(data, null, 2));
        }
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  }

  // Redireciona para a página de agradecimento quando o estado isFormSubmitted for true
  useEffect(() => {
    if (isFormSubmitted) {
      window.location.href = "http://localhost:3000/"; // Redirecionamento para a página de agradecimento
    }
  }, [isFormSubmitted]);


  return (
    <ContainerFormSendEmail className="containerFormSendEmail">
      <ContainerSection>
        <ContainerSectionForm className="containerSectionForm" data-aos="zoom-in-left">
          <form onSubmit={handleSubmit(createMessage)}>

            <div className='containerLabel'>
              <label>Seu Nome</label>
              <input type="text" className="form-control" placeholder="nome sobrenome"
                autoComplete="on"
                {...register('nome')}
              />
              {errors.nome && <span>{errors.nome.message}</span>}
            </div>

            <div className='containerGrid'>
              <div className="left">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="nome@email.com"
                  autoComplete="on"
                  {...register('email')}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>

              <div className="right">
                <label>Fone </label>
                <input type="fone" className="form-control" placeholder="(xx) xxxxx-xxxx"
                  autoComplete="on"
                  {...register('fone')}
                />
                {errors.fone && <span>{errors.fone.message}</span>}
              </div>
            </div>

            <div className='containerLabel'>
              <label className="more-information">
                <div className='subtitles-information'>
                  <p className="p-information1">Quer adicionar mais informações?</p>
                  <p className="p-information2">clique aqui</p>
                </div>
                <ContainerButton>
                  <button className="btnSubmit info" type="button" onClick={addInformation}>Adicionar</button>
                </ContainerButton>
              </label>
            </div>


            {/**Add os campos para ascrentar mais informações */}
            {fields.map((field, index) => {
              return (
                <div key={field.id} className='containerLabelArea'>

                  <div className="area">
                    <label>Sua área</label>
                    <input type="text" className="form-control" placeholder="Exemplo Tec Recruter"
                      {...register(`area.${index}.title`)}
                    />
                    {errors.area?.[index]?.title && <span>{errors.area?.[index]?.title?.message}</span>}
                  </div>

                  <div className="area">
                    <label>Empresa</label>
                    <input type="text" className="form-control" placeholder="Exemplo XPTO"
                      {...register(`area.${index}.empresa`)}
                    />
                    {errors.area?.[index]?.empresa && <span>{errors.area?.[index]?.empresa?.message}</span>}
                  </div>

                  <div className="area">
                    <label>Vaga</label>
                    <input type="text" className="form-control" placeholder="Exemplo Desenvolvedora Front-end"
                      {...register(`area.${index}.vaga`)}
                    />
                    {errors.area?.[index]?.vaga && <span>{errors.area?.[index]?.vaga?.message}</span>}
                  </div>

                  {/* Botão de exclusão */}
                  <ContainerButton >
                    <button className="btnSubmit info" type="button" onClick={() => remove(index)}>
                      Remover
                    </button>
                  </ContainerButton>

                </div>
              )
            })}

            <div className='containerLabelMessage'>
              <label >Mensagem</label>
              <textarea className="form-control" placeholder="Digite aqui..." style={{ height: "100px" }}
                {...register('message')}>
              </textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </div>

            <ContainerButton>
              <button className="btnSubmit" type="submit">Enviar</button>
            </ContainerButton>

            <input type="hidden" name="redirectTo" value="Thanks" />
          </form>
        </ContainerSectionForm>
      </ContainerSection>
    </ContainerFormSendEmail>
  );
}

export default FormSendEmail;

