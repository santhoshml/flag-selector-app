import React, { Component } from 'react';
import './SelectCountry.css';

class SelectCountry extends Component {
    constructor(){
        super();
        this.state = {
            displayCountryList : false,
            selectedCountryList : []
        };
    }


    displaySelectedCountries(){
        return(
            <div>
                You Selected
                <br/>
                <br/>
                {this.state.selectedCountryList.toString()}
            </div>
        );
    }

    onBlur(){
    }

    addCountry(val){
        //check if the country is already checked
        let updatedCountryList = [];
        let idx = this.state.selectedCountryList.indexOf(val);
        if( idx > -1){
            // element already exists, so remove it
            updatedCountryList =  this.state.selectedCountryList.filter(element => element!== val);
        } else {
            updatedCountryList =  [...this.state.selectedCountryList, val];  
        }

        this.props.setSelectedCountry(updatedCountryList);
        this.setState({
            selectedCountryList : updatedCountryList
        });
    }

    displayCountries(){
        return(<div className="country-dropdown">
            {this.props.list.map(country => {
            return (
                <div key={country} className={this.state.focusCountryValue === country ? 'country-element highlight-background' : 'country-element'}>                    
                    <input 
                        type="checkbox" 
                        value={country} 
                        checked = {this.state.selectedCountryList.indexOf(country) > -1}
                        onClick={evt => this.addCountry(evt.target.value)}
                    />
                    {country}
                </div>
            );
        })
        }
        </div>);
    }

    handleMove(evt){
        if(evt.key === 'ArrowDown'){
            let idx = this.props.list.indexOf(this.state.focusCountryValue);
            if(idx === this.props.list.length-1){
                idx = 0;
            } else {
                idx++;
            }
            this.setState({
                focusCountryValue : this.props.list[idx]
            });
        } else if(evt.key === 'ArrowUp'){
            let idx = this.props.list.indexOf(this.state.focusCountryValue);
            if(idx === 0){
                idx = this.props.list -1;
            } else {
                idx--;
            }
            this.setState({
                focusCountryValue : this.props.list[idx]
            });
        } else if(evt.key === 'Enter'){
            this.addCountry(this.state.focusCountryValue);   
        }
        
    }

    render() {        
        return (
            <div className="continent-div" onKeyDown={this.handleMove.bind(this)}>
                <h2>Step 2</h2>
                <h3>Select a country</h3>
                <input 
                    style={{width:'80%'}} 
                    value={this.state.selectedCountryList.toString()}
                    type="text" 
                    placeholder="Select a country" 
                    onClick={(e)=> {this.setState({displayCountryList : !this.state.displayCountryList})}}
                    onFocus={(e)=> {this.setState({displayCountryList : !this.state.displayCountryList, focusCountryValue : this.props.list[0]})}}
                    
                />
                <br/>
                {this.state.displayCountryList ? this.displayCountries() : ''}
                <br/>
                <br/>
                {this.state.selectedCountryList.length > 0 ? this.displaySelectedCountries() : ''}
                
            </div>
        );
    }
}

export default SelectCountry;
