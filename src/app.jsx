import React from 'react';
import '../styles/index.scss';

const countries = {
  		Europe: ['Italy', 'German', 'Ukraine'],
  		Asia: ['Japan', 'China', 'India'],
  		Africa: ['Nepal', 'Egypt', 'Sudan'],
  		America: ['USA', 'Canada']
  	};


  //Обычно Родительский компонент рендерят внизу, вначале ты знакомишься с детьми, где содержится основной код. А потом смотришь на родителя, где дети вызываются
export default class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
    // Так нагляднее
    this.state = {
      selectedRegion: 'Selector',
      selectedCountries: '',
      isCSActive: false
    };

  }


// Если записывать метод так: method = () => {} то не надо в конструкторе делать this.method.bind(this)
  onRegionChange = (newRegion) => {
    this.setState ({
      selectedRegion: newRegion,
      selectedCountries: countries[newRegion],
      isCSActive: true
    });
  }

  render() {
    // Никогда не использовал console.dir, прикольно
  	console.dir(Object.keys(countries));
  	console.dir(this.state.selectedCountries);
    // Обычно выносят все ключи стейта, чтобы не писать this.state каждый раз. То же относится и к this.props.
    {selectedRegion, selectedCountries, isCSActive} = this.state;

    return(
      <div>
        <p>Hello</p>
        {/* Если атрибуты не помещаются в одну строку, я их располагаю один под другим */}
        <RegionSelector
          regions={Object.keys(countries)}
          selectedRegion={selectedRegion}
          onRegionChange={this.onRegionChange}
        />
        <CountrySelector selectedCountries={selectedCountries} isActive={isCSActive}/>
      </div>
    )
  }
}


class RegionSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onRegionChange(e.target.value);
  }

  render() {

  	var regions = [];
  	this.props.regions.forEach(function(region) {regions.push(<option value={region}>{region}</option>)});

    return (
    	<div>
	      <label>
	        Select your region:
	        <br/>
	        <select value={this.props.selectedRegion} onChange={this.handleChange}>
	          <option value='Selector' disabled>Select here</option>
	          {regions}
	        </select>
	      </label>
      </div>
    )
  }
}

class CountrySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Selector'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {

  	var countries = [];
  	if (this.props.isActive) {
			this.props.selectedCountries.forEach(function(country) {countries.push(<option value={country}>{country}</option>)});
		}

  	return(
  		<div>
  		<label>
        Select your country:
        <br/>
        <select value={this.state.value} onChange={this.handleChange} disabled={!this.props.isActive}>
          <option value='Selector' disabled>Select here</option>
          {countries}
        </select>
      </label>
      </div>
  		)
  }
}
