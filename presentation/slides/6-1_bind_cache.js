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
        lineHighlights="9-10,30-37,69-72"
      />
    );
  }
}

export default Slide_6_1_BindCache;
