import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Slide, Heading } from 'spectacle';

import { white, black } from '../colors';

class HeadingWithContentSlide extends PureComponent {
  render() {
    const { title, children, ...rest } = this.props;
    return (
      <Slide {...rest} bgColor={black}>
        {title && <Heading size={4} textColor={white}>{title}</Heading>}
        {children}
      </Slide>
    );
  }
}

HeadingWithContentSlide.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default HeadingWithContentSlide;
