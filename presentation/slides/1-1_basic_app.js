import React, { PureComponent } from 'react';
import { Heading } from 'spectacle';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/1_basic_app.js';

class Slide_1_1_BasicApp extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText="This is your app:"
        belowText="Minimalist, but effective"
      />
    );
  }
}

export default Slide_1_1_BasicApp;
