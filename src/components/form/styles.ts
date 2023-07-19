import styled from 'styled-components'

const ContainerFormSendEmail = styled.div`
margin: 0;
padding: 0;
width: 100%;
`

const ContainerSection = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #ffff;
padding: 3.5dvh 0 0dvh 0;

@media (max-width: 768px) {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background: #ffff;
padding: 10dvh 0 6dvh 0;
}
`

/* Formulário de Contato */
const ContainerSectionForm = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1px;
background: #ffff;

form{
  width: 90%;
}

label {
    display: inline-block;
    margin-bottom: 0.5rem;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    margin-bottom: 2%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: var(--white);
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}   

@media (max-width: 768px) {
  .form-control {
    width: 93%;
    margin-bottom: 10%;
  }
}
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
  padding-top: 10px;
  
  .btnSubmit{
  width: 10%;
  font-family: var(--font-family-sans-serif);
  background: #0a6d7a;
  color: aliceblue;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

@media (max-width: 768px) {
  padding: 20px;

  .btnSubmit {
    width: 93%;
  }
}
`



export {
  ContainerFormSendEmail,
  ContainerSection,
  ContainerSectionForm,
  ContainerButton
}