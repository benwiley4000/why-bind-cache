import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/6_bind_cache.js';

class Slide_6_1_BindCache extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText="Bind cache to the rescue!"
        belowText="The investors are thrilled"
        lineHighlights="9,24-29,56"
      />
    );
  }
}

export default Slide_6_1_BindCache;
