import React, { PureComponent } from 'react';

import { Deck } from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

import { blue, white, darkBlue, black } from './colors';
import slides from './slides';

import 'normalize.css';

const theme = createTheme({
  primary: blue,
  secondary: black,
  tertiary: darkBlue,
  quaternary: white
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
});

class BindCachePresentation extends PureComponent {
  componentDidMount() {
    this.codeStyle = document.createElement('style');
    this.codeStyle.innerText = `
      code {
        color: ${white} !important;
      }
    `;
    document.body.appendChild(this.codeStyle);
  }

  componentWillUnmount() {
    document.body.removeChild(this.codeStyle);
  }

  render() {
    return (
      <Deck theme={theme} progress="bar" transition={['fade']}>
        {slides.map((SlideComponent, i) => <SlideComponent key={i} />)}
      </Deck>
    );
  }
}

export default BindCachePresentation;
