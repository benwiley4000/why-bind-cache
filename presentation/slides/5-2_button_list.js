import React, { PureComponent } from 'react';

import CodePlaygroundSlide from './CodePlaygroundSlide';

import sampleCode from '!raw-loader!../code_samples/5_button_list.js';

class Slide_5_2_ButtonList extends PureComponent {
  render() {
    return (
      <CodePlaygroundSlide
        {...this.props}
        code={sampleCode}
        aboveText={'"Sure, that\'ll be easy."'}
        belowText="Wait.. everything's screwed up again!"
        lineHighlights="7,11,14,45-64"
      />
    );
  }
}

export default Slide_5_2_ButtonList;
