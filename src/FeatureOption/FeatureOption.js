import React, { Component } from 'react';

class FeatureOption extends Component {
  render() {
    const { item, id: key, index, selectedFeatures } = this.props;
    const selectedClass = item.name === selectedFeatures[key].name ? 'feature__selected' : '';
    const featureClass = 'feature__option ' + selectedClass;

    return (
      <li key={index} className="feature__item">
        <div className={featureClass}
          onClick={e => this.props.updateFeature(key, item)}>
            { item.name }
            ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
              .format(item.cost) })
        </div>
      </li>
    )       
  }
}

export default FeatureOption;
