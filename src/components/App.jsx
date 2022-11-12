import { Component } from 'react';
import PropTypes from 'prop-types';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onPositiveFeedback = () => {
    this.setState({
      good: this.state.good + 1,
    });
  };

  onNeutralFeedback = () => {
    this.setState({
      neutral: this.state.neutral + 1,
    });
  };

  onNegativeFeedback = () => {
    this.setState({
      bad: this.state.bad + 1,
    });
  };
  //

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  positivePercentage() {
    return ((this.state.good / this.totalFeedback()) * 100).toFixed(1);
  }

  render() {
    const total = this.totalFeedback();
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Pleese leave feadback">
          <FeedbackOptions
            positive={this.onPositiveFeedback}
            neutral={this.onNeutralFeedback}
            negative={this.onNegativeFeedback}
          ></FeedbackOptions>
        </Section>

        <Section header="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

App.propType = {
  options: PropTypes.oneOf(['good', 'neutral', 'bad']),

  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string,
};
