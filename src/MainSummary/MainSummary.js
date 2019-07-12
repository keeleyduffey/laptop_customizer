import React, { Component } from 'react'
import Summary from '../Summary/Summary'
import SummaryTotal from '../SummaryTotal/SummaryTotal'

class MainSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selectedFeatures)
      .map(key => <Summary key={key} id={key} selectedFeatures={this.props.selectedFeatures} />);
  
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <SummaryTotal selectedFeatures={this.props.selectedFeatures} />
      </section>
    );
  }
}

MainSummary.defaultProps = {
  selectedFeatures: []
};

export default MainSummary;
