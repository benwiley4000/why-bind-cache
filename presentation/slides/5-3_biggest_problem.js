import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_5_3_BiggestProblem extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="The biggest problem with pre-binding methods">
        {[
          'They\'re no good if you need to bind arguments.'
        ]}
      </BulletPointSlide>
    );
  }
}

export default Slide_5_3_BiggestProblem;
