import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CodePane } from 'spectacle';

import StaticCodeSlide from './StaticCodeSlide';

import sampleCode from '!raw-loader!../code_samples/bad_arrows_example_2.js';

class Slide_4_4_BadArrowsExample2 extends PureComponent {
  render() {
    return (
      <StaticCodeSlide {...this.props} source={sampleCode} />
    );
  }
}

export default Slide_4_4_BadArrowsExample2;
