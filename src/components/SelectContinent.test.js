import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import SelectContinent from './SelectContinent';

Enzyme.configure({ adapter: new Adapter() });  

describe('SelectContinent', () => {
    let app = mount(<SelectContinent 
        list={[]}
        selectedContinent = {''}
        setContinent = {''}
    />);

    it('renders title', () =>{
        expect(app.find('h2').text()).toEqual('Step 1')
    })

    it('renders sub-title', () =>{
        expect(app.find('h3').text()).toEqual('Select a Continent')
    })

    it('renders input box', () =>{
        expect(app.find('input').exists()).toBe(true)
    })

    describe('displays continent once its selected', ()=>{
        let selectedContinent = 'Africa';
        beforeEach(()=>{
            app.setState({
                displaySelectedContinent : selectedContinent
            })
        })

        it('displays selected continent', () => {
            expect(app.find('.selected-data').exists()).toBe(true)
        })
    })
})