import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Slide, Text, Appear, ComponentPlayground } from 'spectacle';
import bindCache from '@benwiley4000/bind-cache';

import { blue, white, darkBlue, black } from '../colors';

const scope = { bindCache, blue, white, darkBlue, black };

class CodePlaygroundSlide extends PureComponent {
  render() {
    const { code, aboveText, belowText, ...rest } = this.props;
    return (
      <Slide {...rest} bgColor={darkBlue}>
        {aboveText && <Text textColor={white}>{aboveText}</Text>}
        <ComponentPlayground
          code={code}
          scope={scope}
          previewBackgroundColor={white}
        />
        {belowText &&
          <Appear><Text textColor={white}>{belowText}</Text></Appear>}
      </Slide>
    );
  }
}

CodePlaygroundSlide.propTypes = {
  code: PropTypes.string.isRequired,
  aboveText: PropTypes.node,
  belowText: PropTypes.node
};

export default CodePlaygroundSlide;
