import styled from 'styled-components'

const ContainerFormSendEmail = styled.div`
margin: 0;
padding: 0;
width: 70%;


@media (max-width: 768px) {
  margin: 0;
  padding: 0;
  width: 100%;    
}
`

const ContainerSectionForm = styled.div`
margin: 0;
width: 100%;
height: auto;

form{
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
}

.containerLabelArea{
  width: 100%;
  margin: 0;
}
`

// AJUSTANDO TAMANHOS DOS IMPUTS
const ContainerLabel = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffff;

  label{
    width: 90%;        
    margin: 0;
    padding-top: 10px;
  }

  .labelName{
    padding-top: 30px;
  }

.form-control {
  width: 90%;
  display: block;
  margin: 0;
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
  width: 90%;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr; /* Divide a <div> em duas frações iguais */
  gap:35px;
  padding-top: 15px;
}

.more-information{
  width: 90%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 

  .p-1, .p-2{
    margin: 0;
    color: #555d69;
    font-family: "Merriweather",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 25px;    
  }

  .p-1{
    padding: 10px 0 0 0;
  }
  .p-2{
    padding: 0 0 15px 0;
  }

  }  

span{
  width: 100%;
  margin: 0;
  font-size: 0.8rem;
  color: red;
  padding-left: 86px;
  }  

.area{
  width: 90%;
  margin: 0;
  padding-top: 10px;
}


@media (max-width: 768px) {
  width: 100%;
  background: #f3ebed;
  margin: 0;
  padding: 0;

  .form-control {
    width: 90%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
  }

  .left, .rigth{
    width: 90%;
    margin: 0;
  }

  .more-information{
  width: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;   

  .p-1, .p-2{
    margin: 0;
    color: #555d69;
    font-family: "Merriweather",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 20px;
    }

    .p-1{
    padding: 10px 0 0 0;
  }
    .p-2{
    padding: 15px 0 0 0;

  }

  }

  .labelName{
    padding-top: 60px;
  }
}
`


const ContainerButton = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
  
  .btnSubmit{
  width: 20%;
  font-family: var(--font-family-sans-serif);
  color: aliceblue;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  background: url("/images/IrF.gif");
  background-size: cover;
  background-repeat: no-repeat;
}


@media (max-width: 768px) {
  width: 100%;
  padding: 30px 0 10px 0;

  .btnSubmit {
    width: 48%;

  }
  .btnSubmit .info{
    width:20%;
  }
}

.remove{
  margin: 1px 0 1px 0;
}
`




export {
  ContainerFormSendEmail,
  ContainerLabel,
  ContainerSectionForm,
  ContainerButton
}