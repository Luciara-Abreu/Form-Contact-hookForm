import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 178%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3ebed;
 
  @media (max-width: 767px) {
    width: auto;
    height: auto;
  }
`

export {
  Container
}