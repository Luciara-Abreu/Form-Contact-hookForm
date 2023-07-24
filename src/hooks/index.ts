

import { CreateContactFormData, createContactFormSchema } from '@/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';



export function useCreateField() {
  const { register, handleSubmit, formState: { errors }, control } = useForm<CreateContactFormData>({
    resolver: zodResolver(createContactFormSchema)
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'area',
  });

  const fieldsAreaRef = useRef<HTMLDivElement>(null);
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


  return { register, handleSubmit, errors, addInformation, fields, append, remove, fieldsAreaRef, MAX_AREA_FIELDS };
}
