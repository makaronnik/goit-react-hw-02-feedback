import styled from 'styled-components';

const FeedbackOptionStyled = styled.button.attrs({
  type: 'button',
})`
  margin: 0 5px;
  padding: 4px 10px;

  outline: none;
  border: 1px solid #c3c3c3;
  border-radius: 7px;
  background-color: white;

  cursor: pointer;

  font-weight: 600;
  text-transform: capitalize;

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

export default FeedbackOptionStyled;
