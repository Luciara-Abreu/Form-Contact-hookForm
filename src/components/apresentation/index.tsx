import React, { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ContainerApresentation,  ContainerFormApresentation, ContainerInitial, SubTitle, HR, Title } from "./styles";


function Apresentation() {
  useEffect(() => {
    AOS.init(); // Inicia o AOS

    return () => {
      AOS.refresh(); // Atualiza o AOS quando o componente é desmontado
    };
  }, []);



  return (
        <ContainerFormApresentation className='ContainerFormApresentation'>
            <ContainerApresentation data-aos="zoom-in-up" data-aos-duration="1000">
              <Title className='title1'>Se interessou pelo</Title>
              <Title className='title2'>meu currículo?</Title>
              <HR />
              <ContainerInitial data-aos="zoom-in-up" data-aos-duration="1000">
                <SubTitle>
                <p className="text-muted1">Quer saber mais sobre mim? </p>
                <p className="text-muted2"> Fale comigo.</p>
                </SubTitle>
              </ContainerInitial>

            </ContainerApresentation>
        </ContainerFormApresentation>
  );
}

export default Apresentation;