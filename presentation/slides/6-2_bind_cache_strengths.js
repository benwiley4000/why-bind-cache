import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_6_2_BindCacheStrengths extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="Why is this approach good?">
        {[
          'Works great for any arguments you need to bind',

          'We can state our dependencies when we need them, not preemptively',

          'Cache recycled with associated component',

          'Single line of boilerplate [O(1)]'
        ]}
      </BulletPointSlide>
    );
  }
}

export default Slide_6_2_BindCacheStrengths;
