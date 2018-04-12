import React, { Component } from 'react';

class SelectContinent extends Component {
    constructor(){
        super();
        this.state = {            
            displaySelectedContinent : false
        };
    }

    displaySelectedContinent(){
        return(
            <div className="selected-data">
                You Selected
                <br/>
                <br/>
                {this.props.selectedContinent}
            </div>
        );
    }

    onBlur(){
        this.props.setContinent(this.state.selectedContinent);
        this.setState({
            displaySelectedContinent : true
        });
    }

    componentDidMount(){

    }

    render() {
        return (
            <div className="continent-div">
                <h2>Step 1</h2>
                <h3>Select a Continent</h3>
                <input 
                    type="text" 
                    id="selectedContinent"
                    list="continentList" 
                    onChange={(e) => {this.setState({selectedContinent : e.target.value})}}
                    onBlur={this.onBlur.bind(this)}
                    autoFocus
                />
                <datalist id="continentList">
                    {this.props.list.map((item) => <option key={item} value={item}/>)}
                </datalist>
                <br/>
                <br/>
                {this.state.displaySelectedContinent ? this.displaySelectedContinent() : ''}
            </div>
        );
    }
}

export default SelectContinent;
