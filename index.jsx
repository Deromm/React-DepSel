import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

class RegionSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onRegionChange(e.target.value);
  }
  
  render() {
    return (
      <label>
        Select your region:
        <select value={this.props.region} onChange={this.handleChange}>
          <option value='Europe'>Europe</option>
          <option value='Asia'>Asia</option>
          <option value='America'>America</option>
          <option value='Africa'>Africa</option>
        </select>
      </label>
    )
  }
}

class CountrySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '---'};
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  
  render() {
    switch(this.props.region) {
      case 'Europe':
        return (
          <label>
            Select your country: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='---'>---</option>
              <option value='Italy'>Italy</option>
              <option value='German'>German</option>
            </select>
            </label>
              );
        case 'Asia':
        return (
          <label>
            Select your country: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='---'>---</option>
              <option value='China'>China</option>
              <option value='Japan'>Japan</option>
            </select>
            </label>
              );
        case 'America':
        return (
          <label>
            Select your country: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='---'>---</option>
              <option value='USA'>USA</option>
              <option value='Canada'>Canada</option>
            </select>
            </label>
              );
        case 'Africa':
        return (
          <label>
            Select your country: 
            <select value={this.state.value} onChange={this.handleChange}>
              <option value='---'>---</option>
              <option value='Nepal'>Nepal</option>
              <option value='SAR'>SAR</option>
            </select>
            </label>
              );
         }
  }
}

class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {region: 'Europe'};
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  
  onRegionChange(newRegion) {
    this.setState ({region: newRegion});
  }
  
  render() {
    return(
      <div>
        <p>Hello</p>
        <RegionSelector region={this.state.region} onRegionChange={this.onRegionChange}/>
        <CountrySelector region={this.state.region} />
      </div>
    )
  }
}

ReactDOM.render(
  <LocationSelector />,
  document.getElementById('app')
    );

if (module && module.hot) {
  module.hot.accept('./app', () => {
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
