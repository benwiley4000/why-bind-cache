import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/2_trying_pure_component.js';

class Slide_2_2_TryingPureComponent extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText="MyButton is now a PureComponent..."
        belowText="But that doesn't fix the problem."
        lineHighlights={70}
      />
    );
  }
}

export default Slide_2_2_TryingPureComponent;
