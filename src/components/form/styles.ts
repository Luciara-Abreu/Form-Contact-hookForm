import styled from 'styled-components'

const ContainerFormSendEmail = styled.div`
margin: 0;
padding: 0;
width: 70%;

@media (max-width: 768px) {
  width: 100%;
}
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
padding: 2dvh 0 0 0;
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
    margin-bottom: 0rem;
}

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
} 

.containerGrid{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Divide a <div> em duas frações iguais */
    gap:35px;
    padding-top: 15px;
}

span{
    margin: 0;
    font-size: 0.8rem;
    color: red;
  }  


.containerLabelArea{
  span{
    margin: 0;
    font-size: 0.8rem;
    color: red;
  }
.area{
  margin-top: 10px;
}
}

.more-information{
  width: 100%; 
  padding: 25px 0 0 0;
  color: #6c757d;
  font-family: "Merriweather",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 25px;

  .subtitles-information{
    width: 100%; 
    display: flex;
    justify-content: center;   
    align-items: center; 
    flex-direction: column;

    .p-information1, .p-information2{
      margin: 0;
    }
  }

  .info{
    width: 48%;
  }
  }


@media (max-width: 768px) {
  .form-control {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
  }

  .containerLabelArea{
  span{
    margin: 0;
    font-size: 0.8rem;
    color: red;
  }
.area{
  margin-top: 15px;
}
}


  .containerGrid{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 1px;


  .left, .rigth{
    padding-top: 10px;
  }
}
 
  .more-information{
  width: 100%; 
  margin-top: -14px;
  color: #555d69;
  font-family: "Merriweather",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 15px;

    //button-info
  .info{
    width: 48%;
    margin:0;
    margin: -17px!important;
  }
  }

  .containerLabelMessage{
    padding-top: 36px;  
    }
}
`
const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
  padding-top: 10px;
  
  .btnSubmit{
    width: 48%;
  font-family: var(--font-family-sans-serif);
  background: #030312;
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
  padding: 10px;

  .btnSubmit {
    width: 48%;

  }
  .btnSubmit .info{
    width:20%;
  }
}
`



export {
  ContainerFormSendEmail,
  ContainerSection,
  ContainerSectionForm,
  ContainerButton
}