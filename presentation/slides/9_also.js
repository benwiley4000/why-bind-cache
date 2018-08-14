import React, { PureComponent } from 'react';
import { Slide, Heading, Text, Link } from 'spectacle';

import { white, blue, darkBlue } from '../colors';

class Slide_9_Also extends PureComponent {
  render() {
    return (
      <Slide {...this.props} bgColor={white}>
        <Heading size={3} textColor={blue}>
          Also...
        </Heading>
        <br />
        <Text textColor={darkBlue}>
          Check out my game, Sk8Border. It's about destroying Donald Trump's US-Mexico border wall with sick skateboarding combos
        </Text>
        <br />
        <Text textColor={darkBlue}>
          <Link href="https://sk8border.github.io/sk8border/">sk8border.github.io/sk8border</Link>
        </Text>
        <br />
        <Text textColor={darkBlue}>
          It plays on the web, on your phone or computer!
        </Text>
      </Slide>
    );
  }
}

export default Slide_9_Also;
