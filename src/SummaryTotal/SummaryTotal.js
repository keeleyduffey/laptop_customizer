import React, { Component } from 'react';

class SummaryTotal extends Component {
  render() {    
    const total = Object.keys(this.props.selectedFeatures)
      .reduce((acc, curr) => acc + this.props.selectedFeatures[curr].cost, 0);

    return (
      <div className="summary__total">
        <div className="summary__total__label">Your Price: </div>
        <div className="summary__total__value">
        { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
            .format(total) }
        </div>
      </div>
    );
  }
}

SummaryTotal.defaultProps = {
  selectedFeatures: []
};

export default SummaryTotal;
