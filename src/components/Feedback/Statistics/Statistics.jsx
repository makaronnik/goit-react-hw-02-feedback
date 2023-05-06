import React from 'react';
import PropTypes from 'prop-types';
import StatisticsStyled from './StatisticsStyled';

const Statistics = ({ statistic }) => {
  return (
    <StatisticsStyled>
      {Object.keys(statistic).map(key => (
        <li key={key}>
          {key}: {statistic[key]}
        </li>
      ))}
    </StatisticsStyled>
  );
};

Statistics.propTypes = {
  statistic: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;
