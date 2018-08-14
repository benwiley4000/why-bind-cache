import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StaticCodeSlide from './StaticCodeSlide';

import sampleCode from '!raw-loader!../code_samples/bad_arrows_example.js';

class Slide_4_3_BadArrowsExample extends PureComponent {
  render() {
    return (
      <StaticCodeSlide {...this.props} source={sampleCode} />
    );
  }
}

export default Slide_4_3_BadArrowsExample;
