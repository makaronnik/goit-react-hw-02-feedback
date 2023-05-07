import React, { Component } from 'react';
import FeedbackStyled from './FeedbackStyled';
import Button from 'components/UI/Button/Button';
import Statistics from './Statistics/Statistics';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodFeedback = () =>
    this.setState(prevState => ({ ...prevState, good: prevState.good + 1 }));

  onNeutralFeedback = () =>
    this.setState(prevState => ({
      ...prevState,
      neutral: prevState.neutral + 1,
    }));

  onBadFeedback = () =>
    this.setState(prevState => ({ ...prevState, bad: prevState.bad + 1 }));

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    return (
      <FeedbackStyled>
        <h1>Please leave feedback</h1>

        <Button onButtonClick={this.onGoodFeedback}>Good</Button>
        <Button onButtonClick={this.onNeutralFeedback}>Neutral</Button>
        <Button onButtonClick={this.onBadFeedback}>Bad</Button>

        <h2>Statistics</h2>

        <Statistics
          statistic={{
            ...this.state,
            total: this.countTotalFeedback(),
            'positive feedback': this.countPositiveFeedbackPercentage() + '%',
          }}
        ></Statistics>
      </FeedbackStyled>
    );
  }
}

export default Feedback;
