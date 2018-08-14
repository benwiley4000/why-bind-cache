import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_5_1_NewProductRequest extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="Product has a new request..">
        {[
          'The button feature is super popular with our investors so let\'s add 99 more of them',

          'Also it might be hard to keep track so can we display the last clicked button\'s number in a `<marquee>` element?'
        ]}
      </BulletPointSlide>
    );
  }
}

export default Slide_5_1_NewProductRequest;
