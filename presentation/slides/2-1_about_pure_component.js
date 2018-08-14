import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_2_1_AboutPureComponent extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="Pure Components in React">
        {[
          '`PureComponent` only re-renders if one of the component\'s props is different (`!==`) compared to the previous prop',

          'This can be a great performance optimization that you get almost for free',

          'Optimization is lost if any non-primitive props (objects, arrays, functions) are created inside the render method'
        ]}
      </BulletPointSlide>
    );
  }
}

export default Slide_2_1_AboutPureComponent;
