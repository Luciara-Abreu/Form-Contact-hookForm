import Apresentation from "@/components/apresentation";
import FormSendEmail from "@/components/form";
import Thanks from "@/components/tanks";
import { Container } from "@/styles/styles";
import { useState } from "react";

export default function Home() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Função de sucesso do formulário
  function handleFormSubmitSuccess() {
    setIsFormSubmitted(true);
  }

  return (
    <Container className = "ContainerHome">    
      {isFormSubmitted ? <Thanks /> : (
        <>
          <Apresentation />
          <FormSendEmail onFormSubmitSuccess={handleFormSubmitSuccess} />
        </>
      )}
    </Container>
  )
}
