import styled from 'styled-components';

const ButtonStyled = styled.button.attrs({
  type: 'button',
})`
  padding: 4px 10px;
  margin: 0 5px;

  background-color: white;
  border-radius: 7px;
  border: 1px solid #c3c3c3;
  outline: none;

  cursor: pointer;

  font-weight: 600;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: inset 0 0 0 1px #c3c3c3;
  }

  &:active {
    background-color: #c3c3c3;
  }
`;

export default ButtonStyled;
