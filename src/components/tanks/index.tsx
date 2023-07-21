
import styled from 'styled-components'
import Image from 'next/image'


const Body = styled.div` 
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .text {
  font-size: 45px;
  color: #212529;
  margin-bottom: 30px;
}

.paragrafo1 {
  font-size: 25px;
  margin: 0;
}
#paragrafo2 {
  font-size: 20px;
  margin: 0;
  padding-bottom: 4dvh;
}
.btn {
  color: #f5f5f5;
  padding: 15px 55px;
  background: #c7a8a8;
  text-decoration: none;
  font-size: 18px;
  color: #212529;
  transition: all 0.5;
}

 .seta-dedo{
    padding: 10px
  }

`


function Thanks() {
  return (
  <Body>
    <h1 className="text">Obrigado Pelo contato!</h1>
    <p className="paragrafo1">Tão logo te retorno</p>
    <p id="paragrafo2">Atenciosamente Lúci Abreu</p>
    <Image src="/images/seta.gif" className="seta-dedo"  alt="seta para baixo" width={50} height={50} />
        <a className="btn" href="index.html">Home</a>
  </Body>
  )
}


export default Thanks


