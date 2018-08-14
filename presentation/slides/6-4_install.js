import React, { PureComponent } from 'react';

import BulletPointSlide from './BulletPointSlide';

class Slide_6_4_Install extends PureComponent {
  render() {
    return (
      <BulletPointSlide {...this.props} title="If you want to try it out in your own project..">
        {['`npm install @benwiley4000/bind-cache`']}
      </BulletPointSlide>
    );
  }
}

export default Slide_6_4_Install;
