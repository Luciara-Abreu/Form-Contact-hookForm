import { useState } from "react";

export function CreateMessageSendEmail(onFormSubmitSuccess: () => void) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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
  return createMessage
}