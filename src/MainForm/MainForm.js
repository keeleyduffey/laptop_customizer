import React, { Component } from 'react';

import Features from '../Features/Features';

class MainForm extends Component {
  render() {
    const features = Object.keys(this.props.features)
      .map(key => <Features key={key} id={key} features={this.props.features[key]} selectedFeatures={this.props.selectedFeatures} updateFeature={this.props.updateFeature} />);
    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        { features }
      </section>
    );
  }
}

MainForm.defaultProps = {
	features: []
};

export default MainForm;




