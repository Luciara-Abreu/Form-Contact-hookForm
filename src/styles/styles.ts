import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3ebed;

  @media (max-width: 767px) {
    width: 111%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
`

export {
  Container
}