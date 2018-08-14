import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StaticCodeSlide from './StaticCodeSlide';

import sampleCode from '!raw-loader!../code_samples/constructor_binding_hell.js';

class Slide_3_2_ConstructorBindingHell extends PureComponent {
  render() {
    return (
      <StaticCodeSlide
        {...this.props}
        title={'"How bad could it get?"'}
        source={sampleCode}
      />
    );
  }
}

export default Slide_3_2_ConstructorBindingHell;
