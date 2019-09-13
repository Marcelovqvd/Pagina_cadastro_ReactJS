import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 30px;
  margin: 40px auto;
`;


export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    font-size: 20px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    border: 3px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
      margin: 0 30px 0 30px;
    }
      a:hover {
        color: #000;
        background: yellow;
        border: 1px solid black;
        padding: 5px;
     }
`;

export const Paragrafos = styled.div`
  color: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  justify-content: center;
  align-items: center;
`;





