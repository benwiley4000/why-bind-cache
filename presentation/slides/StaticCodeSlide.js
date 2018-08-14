import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CodePane } from 'spectacle';

import HeadingWithContentSlide from './HeadingWithContentSlide';

class StaticCodeSlide extends PureComponent {
  render() {
    const { title, lang, source, ...rest } = this.props;
    return (
      <HeadingWithContentSlide {...rest} title={title}>
        <CodePane lang={lang} source={source} textSize={20} contentEditable />
      </HeadingWithContentSlide>
    );
  }
}

StaticCodeSlide.propTypes = {
  title: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};

StaticCodeSlide.defaultProps = {
  lang: 'jsx'
};

export default StaticCodeSlide;
