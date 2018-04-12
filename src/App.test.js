import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from './App';

Enzyme.configure({ adapter: new Adapter() });  

describe('App', () => {
  let app = mount(<App />);

  it('renders the App title', () => {
    expect(app.find('h1').text()).toEqual('Flag App')
  });

  it('renders image tag', () => {
    expect(app.find('img').exists())
  });

  it('renders steps container', () => {
    expect(app.find('.steps-container').exists())
  })

  it('renders enclosing containers', () => {
    expect(app.find('.enclosing-section').exists())
  })

  it('renders 3 enclosing containers', () => {
    expect(app.find('.enclosing-section').length).toEqual(3)
  })

  it('continents list is of size 5', () => {
    expect(app.state().continentList.length).toEqual(5);
  })

  it('countryList is initialized to empty', () => {
    expect(app.state().countryList.length).toEqual(0);
  })

  it('selectedCountryList is initialized to empty', () => {
    expect(app.state().selectedCountryList.length).toEqual(0);
  })

  it('selectedFlags is initialized to empty', () => {
    expect(app.state().selectedFlags.length).toEqual(0);
  })

  describe('when we set continent', () => {
    let selectedContinent = 'Africa';
    beforeEach(() => {
      app.instance().setContinent(selectedContinent);
    });

    it('selected continent is set in the state', () => {
      // console.log('state:'+JSON.stringify(app.state()));
      expect(app.state().selectedContinent).toEqual(selectedContinent)
    })

    it('country-flag map is populated', ()=>{
      // console.log('state:'+JSON.stringify(app.state()));
      expect(Object.keys(app.state().countryFlagMap).length).toEqual(5)
    })

    it('country List is populated', ()=>{
      // console.log('state:'+JSON.stringify(app.state()));
      expect(app.state().countryList.length).toEqual(5)
    })
  })

  describe('when we select the country', () => {
    let selectedCountry = ['Egypt'];
    beforeEach(() => {
      app.instance().setSelectedCountry(selectedCountry);
    });

    it('selected country is set in the state', () => {
      // console.log('state:'+JSON.stringify(app.state()));
      expect(app.state().selectedCountryList).toEqual(selectedCountry)
    })
  })
});