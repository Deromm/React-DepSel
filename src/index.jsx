import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import LocationSelector from './app.jsx';

render( <AppContainer><LocationSelector/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
      <AppContainer>
        <LocationSelector/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
