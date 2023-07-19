import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerButton, ContainerFormSendEmail, ContainerSection, ContainerSectionForm } from "./styles";
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

/**
 * 
 * To-do
 * 
 * [ok] Validação / Transformação com Zod
 * [] Field Arrays
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

  name:    z.string().nonempty('O nome é obrigatório').transform(captalize),
  email:   z.string().nonempty('O email é obrigatório').email('Formato de email inválido').toLowerCase(),
  fone:    z.string().min(11, 'informe o DDD + o seu numero'),
  message: z.string().nonempty('O campo é obrigatório').min(6, 'Precisa ser uma mensagem :D'),
})

//typagem
type CreateContactFormData = z.infer<typeof createContactFormSchema> 

function FormSendEmail() {
  const [output, setOutput] = useState('')
  const { register, handleSubmit, formState: { errors } } = useForm<CreateContactFormData>({
    resolver: zodResolver(createContactFormSchema)
  })

  //ver dados do imput 
  function createMessage(data: any) {
    console.log(JSON.stringify(data, null, 2))
  }

  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);


//<form action="https://formsubmit.co/6022aec38f12017e7094cebed4e0c3bf" method="POST"

  return (
    <ContainerFormSendEmail>
      <ContainerSection>
        <ContainerSectionForm data-aos="zoom-in-left">
          <form onSubmit={handleSubmit(createMessage)}>

            <div className='containerLabel'>
              <label>Nome</label>
              <input type="text" className="form-control" placeholder="nome sobrenome"
                autoComplete="on" 
                {...register('name')}
              />
              {errors.name && <span>{errors.name.message}</span>}
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
              <label >Mensagem</label>
              <textarea className="form-control" placeholder="Digite aqui..." style={{ height: "100px" }}
                {...register('message')}>
              </textarea>
              {errors.message && <span>{errors.message.message}</span>}
            </div>

            <ContainerButton>
              <button className="btnSubmit" type="submit">Enviar</button>
            </ContainerButton>
          </form>
        </ContainerSectionForm>
      </ContainerSection>
    </ContainerFormSendEmail>
  );
}

export default FormSendEmail;