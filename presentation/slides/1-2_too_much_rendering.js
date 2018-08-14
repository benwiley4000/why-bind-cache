import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/1_basic_app.js';

class Slide_1_2_TooMuchRendering extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText="One problem though..."
        belowText="Everything keeps re-rendering!"
      />
    );
  }
}

export default Slide_1_2_TooMuchRendering;
