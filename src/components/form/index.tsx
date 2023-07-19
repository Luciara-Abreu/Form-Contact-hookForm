import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerButton, ContainerFormSendEmail, ContainerSection, ContainerSectionForm } from "./styles";
import { useEffect } from 'react';


function FormSendEmail() {
  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);



  return (
        <ContainerFormSendEmail>
          <ContainerSection>
              <ContainerSectionForm data-aos="zoom-in-left">
              <form action="https://formsubmit.co/6022aec38f12017e7094cebed4e0c3bf" method="POST">
                  <div >
                    <label>Nome</label>
                    <input type="text" name="name" className="form-control" placeholder="nome sobrenome" autoComplete="on" required />
                  </div>

                  <div>
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" placeholder="nome@email.com" autoComplete="on" required />
                  </div>

                  <div>
                    <label >Mensagem</label>
                    <textarea  name="textmessage" className="form-control" placeholder="Digite aqui..." style={{ height: "100px" }}></textarea>
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