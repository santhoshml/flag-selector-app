import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getContinentsList, getCountryList, getCountryFlagMap} from './utils/utils';
import SelectContinent from './components/SelectContinent'
import SelectCountry from './components/SelectCountry';

class App extends Component {
  constructor(){
    super();
    this.state={
      continentList : getContinentsList(),
      selectedContinent : ' ',
      countryList : [],
      selectedCountryList : [],
      selectedFlags : []
    };
  }

  setContinent(selectedContinent){
    this.setState({
      selectedContinent : selectedContinent,
      countryFlagMap : getCountryFlagMap(selectedContinent),
      countryList : getCountryList(selectedContinent)
    });
  }

  setSelectedCountry(selectedCountryList){
    this.setState({
      selectedCountryList : selectedCountryList
    });
  }

  displaySelectedFlags(){
    return this.state.selectedCountryList.map(ctry => {
      return (
        <span key={ctry}>
          {this.state.countryFlagMap[ctry]}
        </span>
      );
    })
  }

  resetAll(){
    this.setState({
      selectedCountryList :[]
    });
  }

  displayFlagSection(){
    return(
      <span className="enclosing-section">
        <h2>
          You selected the flags
        </h2>
        {this.displaySelectedFlags()}
        <br/>
        <button type="submit" onClick={()=>this.resetAll()}>Clear Flags</button>
      </span>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flag App</h1>
          <p>Pick a country to display its flag</p>
        </header>
        <div className="steps-container">
          <span className="enclosing-section">
            <SelectContinent  
              list={this.state.continentList}
              selectedContinent = {this.state.selectedContinent}
              setContinent={this.setContinent.bind(this)}
            />
          </span>
          <span className="enclosing-section">
            <SelectCountry 
              list={this.state.countryList}
              setSelectedCountry = {this.setSelectedCountry.bind(this)}
              />
          </span>
            {this.state.selectedCountryList.length > 0 ? this.displayFlagSection() : ''}
        </div>
      </div>
    );
  }
}

export default App;
