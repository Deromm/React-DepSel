import React from 'react';
import '../styles/index.scss';

const regionsAndCountries = {
  		Europe: ['Italy', 'German', 'Ukraine'],
  		Asia: ['Japan', 'China', 'India'],
  		Africa: ['Nepal', 'Egypt', 'Sudan'],
  		America: ['USA', 'Canada']
  	};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRegion: undefined,
    };
  }

  onSelectChange = (event) => {
    this.setState({ selectedRegion: event.target.value });
  }

  render() {
    const { selectedRegion } = this.state;

    return (
      <div>
        <select defaultValue onChange={this.onSelectChange}>
          <option value disabled> -- select region -- </option>
          {Object.keys(regionsAndCountries).map( (region, index) =>
               <option value={region} key={region}>
                 {region}
               </option>
            )
          }
        </select>
        <select defaultValue disabled={!selectedRegion}>
          <option value disabled> -- select country -- </option>
          {selectedRegion && regionsAndCountries[selectedRegion].map( (country, index) =>
              <option value={country} key={country}>
                {country}
              </option>
            )
          }
        </select>
      </div>
    )
  }
}
