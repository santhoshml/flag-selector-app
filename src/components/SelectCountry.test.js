import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SelectCountry from './SelectCountry';

Enzyme.configure({ adapter: new Adapter() });  

describe('SelectCountry', () => {
    let app = mount(<SelectCountry 
        list={['Egypt', 'Ethiopia']}
        selectedCountry = {''}
    />);

    it('renders title', () =>{
        expect(app.find('h2').text()).toEqual('Step 2')
    })

    it('renders sub-title', () =>{
        expect(app.find('h3').text()).toEqual('Select a country')
    })

    it('renders input box', () =>{
        expect(app.find('input').exists()).toBe(true)
    })

    it('country dropdown list isn\'t displayed when the page is painted initially', () =>{
        expect(app.find('.country-element').exists()).toBe(false)
    })

    describe('displays country with checkbox', ()=>{
        beforeEach(()=>{
            app.setState({
                displayCountryList : true
            });
        })

        it('displays country dropdown', () => {
            expect(app.find('.country-element').exists()).toBe(true)
        })
    })
})