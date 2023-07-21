import styled from 'styled-components'

const ContainerFormApresentation = styled.div`
margin: 0;
padding: 0;
width: 70%;
background: url("/images/IrF.gif");
background-size: cover;
background-repeat: no-repeat;


@media (max-width: 768px) {
  width: 90%;
  padding-bottom: 10px;
  }
`

const ContainerApresentation = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: transparent;
`
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-sans-serif);
  font-weight: 500;
  line-height: 1.2;
  color: aliceblue;
`;


const HR = styled.h2`
  width: 10%;
  display: block;
  border-top: 2px solid #ffff; 

  @media (max-width: 768px) {
    width: 0%;
    margin: 0;
   padding: 0;
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
padding-bottom: 12px;

.text-muted1, .text-muted2{
color: aliceblue;
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
  ContainerFormApresentation,
  ContainerApresentation,
  ContainerInitial,
  SubTitle,
  Title,
  HR
}
