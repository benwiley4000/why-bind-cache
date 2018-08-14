import React, { PureComponent } from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { white, blue, darkBlue, black } from '../colors';

class Slide_7_Questions extends PureComponent {
  render() {
    return (
      <Slide {...this.props} bgColor={white}>
        <Heading size={3} textColor={blue}>
          Questions?
        </Heading>
        <br />
        <Text textColor={darkBlue}>
          @benwiley4000
        </Text>
        <br />
        <Text textColor={darkBlue}>
          therealbenwiley@gmail.com
        </Text>
      </Slide>
    );
  }
}

export default Slide_7_Questions;
