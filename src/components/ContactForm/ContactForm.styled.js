import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  margin:auto;
  border: 3px solid ;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;

  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  width: 300px;
  margin:auto;
  text-align:center;
  border-radius: 4px;
  border: 3px ;

  font-size: 18px;
`;