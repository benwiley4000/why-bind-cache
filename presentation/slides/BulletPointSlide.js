import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Appear, List, ListItem, Code, Text } from 'spectacle';

import HeadingWithContentSlide from './HeadingWithContentSlide';
import { blue } from '../colors';

class BulletPointSlide extends PureComponent {
  render() {
    const { title, children, ...rest } = this.props;
    return (
      <HeadingWithContentSlide {...rest} title={title}>
        <List>
          {/* convert `code` markup to Code tags */}
          {children.map((bulletPoint, i) =>
            bulletPoint.split('`').map((substring, i) =>
              i % 2 === 0 ? substring : <Code key={i}>{substring}</Code>
            )
          ).map((bulletPointParts, i) =>
            <Appear key={i}>
              <ListItem>
                <Text textColor={blue}>{bulletPointParts}</Text>
              </ListItem>
            </Appear>
          )}
        </List>
      </HeadingWithContentSlide>
    );
  }
}

BulletPointSlide.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BulletPointSlide;
