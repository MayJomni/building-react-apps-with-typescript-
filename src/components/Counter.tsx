import React, { Component } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
  onCountChange?: (count: number) => void;
}

interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: props.initialValue || 0
    };
  }

  increment = (): void => {
    const newCount = this.state.count + (this.props.step || 1);
    this.setState({ count: newCount }, () => {
      if (this.props.onCountChange) {
        this.props.onCountChange(this.state.count);
      }
    });
  };

  decrement = (): void => {
    const newCount = this.state.count - (this.props.step || 1);
    this.setState({ count: newCount }, () => {
      if (this.props.onCountChange) {
        this.props.onCountChange(this.state.count);
      }
    });
  };

  reset = (): void => {
    this.setState({ count: this.props.initialValue || 0 }, () => {
      if (this.props.onCountChange) {
        this.props.onCountChange(this.state.count);
      }
    });
  };

  render(): JSX.Element {
    const { step = 1 } = this.props;
    const { count } = this.state;
    const displayClass = count < 0 ? 'negative' : count > 0 ? 'positive' : 'zero';

    return (
      <div className="counter-card">
        <h2>Counter Component</h2>
        <div className={`counter-display ${displayClass}`}>
          {count}
        </div>
        <div className="counter-info">
          <p>Step: {step}</p>
          <p>Initial Value: {this.props.initialValue}</p>
        </div>
        <div className="counter-controls">
          <button onClick={this.decrement} className="btn btn-decrement">
            -{step}
          </button>
          <button onClick={this.reset} className="btn btn-reset">
            Reset
          </button>
          <button onClick={this.increment} className="btn btn-increment">
            +{step}
          </button>
        </div>
        {count > 10 && (
          <div className="counter-message">
            🎉 Wow! You've reached {count}!
          </div>
        )}
        {count < -5 && (
          <div className="counter-message">
            ❄️ Brrr... it's getting cold at {count}!
          </div>
        )}
      </div>
    );
  }
}

export default Counter;