import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/3_bind_in_constructor.js';

class Slide_3_1_BindInConstructor extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText="Binding the method in the constructor"
        belowText=".. it works, but it's ugly"
        lineHighlights="8-10,53-55"
      />
    );
  }
}

export default Slide_3_1_BindInConstructor;
