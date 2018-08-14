import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import StaticCodeSlide from './StaticCodeSlide';

import sampleCode from '!raw-loader!../code_samples/bind_cache_source.js';

class Slide_6_3_BindCacheCode extends PureComponent {
  render() {
    return (
      <StaticCodeSlide
        {...this.props}
        title="The code is small"
        source={sampleCode}
      />
    );
  }
}

export default Slide_6_3_BindCacheCode;
