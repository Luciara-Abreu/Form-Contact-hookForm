import { z } from 'zod'

/*** 
 * To-do * 
 * [ok] Validação / Transformação com Zod
 * [ok] Field Arrays / 
 */


//typagem
type CreateContactFormData = z.infer<typeof createContactFormSchema>

// Prop da função de sucesso do formulário
type FormSubmitSuccessProps = {
  onFormSubmitSuccess: () => void;
};

const captalize = ((name: string) => {
  return name.trim().split(' ').map(word => {
    return word[0].toLocaleUpperCase().concat(word.substring(1))
  }).join(' ')
})

export const createContactFormSchema = z.object({
  // Validação com Zod

  nome: z.string().nonempty('O nome é obrigatório').transform(captalize),
  email: z.string().nonempty('O email é obrigatório').email('Formato de email inválido').toLowerCase(),
  fone: z.string().min(11, 'informe o DDD + o seu numero'),
  message: z.string().min(6, 'Precisa ser uma mensagem :D'),
  area: z.array(z.object({
    title: z.string().nonempty('Campo Obrgatório'),
    empresa: z.string().nonempty('Campo Obrgatório'),
    vaga: z.string(),
    salario: z.string()
  }))
})

export type { CreateContactFormData, FormSubmitSuccessProps }

