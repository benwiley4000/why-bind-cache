import React, { PureComponent } from 'react';
import { Slide, Heading, Text, Appear } from 'spectacle';

import { white, darkBlue, black } from '../colors';

class Slide_0_Title extends PureComponent {
  render() {
    return (
      <Slide {...this.props}>
        <Appear>
          <Heading size={3} textColor={white}>
            How to use a bound function cache to impress your friends
          </Heading>
        </Appear>
        <Appear>
          <Text textColor={darkBlue}>
            and make your React components look and work good
          </Text>
        </Appear>
        <br />
        <Heading size={2} textColor={black}>
          Ben Wiley
        </Heading>
      </Slide>
    );
  }
}

export default Slide_0_Title;
