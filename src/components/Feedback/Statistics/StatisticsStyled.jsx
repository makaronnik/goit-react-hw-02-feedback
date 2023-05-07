import styled from 'styled-components';

const StatisticsStyled = styled.ul`
  list-style: none;
  padding-left: 0;

  & li {
    font-size: 18px;
    font-weight: 600;

    &:first-letter {
      text-transform: uppercase;
    }

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`;

export default StatisticsStyled;
