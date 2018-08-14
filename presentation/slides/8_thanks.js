import React, { PureComponent } from 'react';
import { Slide, Heading, Text, Link } from 'spectacle';

import { white, blue, darkBlue } from '../colors';

class Slide_8_Thanks extends PureComponent {
  render() {
    return (
      <Slide {...this.props} bgColor={white}>
        <Heading size={3} textColor={blue}>
          Thanks!
        </Heading>
        <br />
        <Text textColor={darkBlue}>
          @benwiley4000
        </Text>
        <br />
        <Text textColor={darkBlue}>
          therealbenwiley@gmail.com
        </Text>
        <br />
        <Text textColor={darkBlue}>
          Slides are at:
          <br />
          <Link href="https://benwiley4000.github.io/why-bind-cache">benwiley4000.github.io/why-bind-cache</Link>
        </Text>
      </Slide>
    );
  }
}

export default Slide_8_Thanks;
