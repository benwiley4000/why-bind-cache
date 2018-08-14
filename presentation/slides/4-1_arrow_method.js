import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/4_arrow_method.js';

class Slide_4_1_ArrowMethod extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText={'The "arrow method" approach'}
        belowText="relies on class properties proposal"
        lineHighlights="8-16"
      />
    );
  }
}

export default Slide_4_1_ArrowMethod;
