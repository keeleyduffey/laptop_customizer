import React, { Component } from 'react';

class Summary extends Component {
  render() {
  	const {id: key} = this.props;
    return (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key}  </div>
        <div className="summary__option__value">{this.props.selectedFeatures[key].name}</div>
        <div className="summary__option__cost">
          { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(this.props.selectedFeatures[key].cost) }
        </div>
    	</div>
    );
  }
}

export default Summary;
