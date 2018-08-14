import React, { PureComponent, forwardRef } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { Slide, Text, Appear, ComponentPlayground } from 'spectacle';
import { multirange } from 'multi-integer-range';
import bindCache from '@benwiley4000/bind-cache';

import { blue, white, darkBlue, black } from '../colors';

const scope = { bindCache, PureComponent, blue, white, darkBlue, black };

function hexToRgbValues(hexString) {
  return [1, 3, 5]
    .map(i => parseInt(hexString.slice(i, i + 2), 16))
    .join(',');
}

function getHighlightTop(lineNumber, lineHeight) {
  return `${lineHeight * (lineNumber - 1)}px`;
}

const lineHighlightBaseStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  backgroundColor: `rgba(${hexToRgbValues(white)}, 0.15)`,
  marginTop: '0.5rem',
  pointerEvents: 'none'
}

class CodePlaygroundSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.bind = bindCache(this);
  }

  componentDidMount() {
    this.pre = findDOMNode(this).querySelector('pre');
    if (this.props.lineHighlights) {
      this.createLineHighlights();
    }
    window.addEventListener('resize', this.bind(this.repositionLineHighlights));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.lineHighlights !== this.props.lineHighlights) {
      this.removeLineHighlights();
      if (this.props.lineHighlights) {
        this.createLineHighlights();
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.bind(this.repositionLineHighlights));
  }

  createLineHighlights() {
    if (!this.props.lineHighlights) {
      return;
    }
    const testElement = document.createElement('div');
    Object.assign(testElement.style, lineHighlightBaseStyle, {
      visibility: 'none'
    });
    testElement.innerText = '\n';
    this.pre.appendChild(testElement);
    const lineHeight = testElement.offsetHeight;
    this.linesToHighlight = multirange(this.props.lineHighlights).toArray();
    this.highlights = this.linesToHighlight.map(lineNumber => {
      const lineElement = document.createElement('div');
      Object.assign(lineElement.style, lineHighlightBaseStyle, {
        top: getHighlightTop(lineNumber, lineHeight)
      });
      // we need a newline body so the element fills up a line
      lineElement.innerText = '\n';
      return lineElement;
    });
    for (const lineElement of this.highlights) {
      this.pre.appendChild(lineElement);
    }
    this.pre.removeChild(testElement);
    this.highlights[0].scrollIntoViewIfNeeded();
  }

  repositionLineHighlights() {
    if (!this.highlights) {
      return;
    }
    let lineHeight;
    this.highlights.forEach((lineElement, index) => {
      if (!lineHeight) {
        lineHeight = lineElement.offsetHeight;
      }
      lineElement.style.top = getHighlightTop(
        this.linesToHighlight[index],
        lineHeight
      );
    });
  }

  removeLineHighlights() {
    if (!this.highlights) {
      return;
    }
    for (const lineElement of this.highlights) {
      this.pre.removeChild(lineElement);
    }
  }

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
  belowText: PropTypes.node,
  // string to initialize multirange
  lineHighlights: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default CodePlaygroundSlide;
