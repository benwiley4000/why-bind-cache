import React, { PureComponent } from 'react';
import { Slide, Heading } from 'spectacle';

import { white, blue } from '../colors';

class Slide_7_Questions extends PureComponent {
  render() {
    return (
      <Slide {...this.props} bgColor={white}>
        <Heading size={3} textColor={blue}>
          Questions?
        </Heading>
      </Slide>
    );
  }
}

export default Slide_7_Questions;
