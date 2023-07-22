import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerButton, ContainerFormSendEmail,ContainerLabel,  ContainerSectionForm } from "./styles";
import { useEffect, useRef, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Thanks from '../tanks';
import Apresentation from '../apresentation';


/*** 
 * To-do
 * 
 * [ok] Validação / Transformação com Zod
 * [ok] Field Arrays / 
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
    salario: z.string()
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
  const [scrollAmount, setScrollAmount] = useState(200); 
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateContactFormData>({
    resolver: zodResolver(createContactFormSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'area',
  })

  const fieldsAreaRef = useRef<HTMLDivElement>(null);

  // limita add do container campos.
  const MAX_AREA_FIELDS = 1; 


  function addInformation() {
    if (fields.length < MAX_AREA_FIELDS) {
    append({ title: '', empresa: '', vaga: '', salario: '' })

    // Aguardar um pequeno intervalo antes de rolar para a posição dos campos
    // Isso permite que os campos sejam renderizados antes de calcular a posição
    setTimeout(() => {
      if (fieldsAreaRef.current) {
        const fieldsAreaPosition = fieldsAreaRef.current.getBoundingClientRect().top + 200; // 50 é um valor de offset, você pode ajustá-lo conforme necessário
        window.scrollTo({ top: fieldsAreaPosition, behavior: 'smooth' });
      }
    }, 100); // Ajuste o valor do intervalo conforme necessário, 100ms é um valor razoável
 

    }
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
      <Apresentation />
        <ContainerSectionForm className="containerSectionForm" data-aos="zoom-in-left"  ref={fieldsAreaRef}>
          <form className='form'onSubmit={handleSubmit(createMessage)}>

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

