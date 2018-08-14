import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_4_2_ProblemsWithArrows extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="Some reasons I get grumpy about arrow methods">
        {[
          'Class properties are not in the spec (yet)',

          'Arrow methods don\'t live on the class prototype'
        ]}
      </BulletPointSlide>
    );
  }
}

export default Slide_4_2_ProblemsWithArrows;
