import React, { Component } from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';

class Features extends Component {
  render() {
    const { id: key } = this.props;

    const options = this.props.features.map((item, index) =>
      <FeatureOption item={item} key={key+index} id={key} index={index} selectedFeatures={this.props.selectedFeatures} updateFeature={this.props.updateFeature} />);

    return (
      <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div> 
    );
  }
}
 
Features.defaultProps = {
  features: []
};

export default Features;



