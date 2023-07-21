import styled from 'styled-components'

const ContainerFormSendEmail = styled.div`
margin: 0;
padding: 0;
width: 70%;

@media (max-width: 768px) {
  width: 100%;
}
`

const ContainerApresentation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #ffff;
`
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-sans-serif);
  font-weight: 500;
  line-height: 1.2;
`;


const HR = styled.h2`
  width: 8%;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em; 
  margin-inline-start: auto;
  margin-inline-end: auto; 
  border-top: 2px solid #0a6d7a;

  @media (max-width: 768px) {
    width: 18%;
  }
  `

const ContainerInitial = styled.div`
width: 100%;
`

const SubTitle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: baseline;

.text-muted1, .text-muted2{
color: #6c757d;
font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
margin:0;
padding-left: 4px;
}

.text-muted1{
    font-size: 25px;    
  }

 .text-muted2{
    font-size: 20px;
  }

@media (max-width: 768px) {
  width: 100%;

.title-initial{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .text-muted1{
    font-size: 20px;    
  }

 .text-muted2{
    font-size: 15px;
  }

}
`

export {
  ContainerFormSendEmail,
  ContainerApresentation,
  ContainerInitial,
  SubTitle,
  Title,
  HR
}
