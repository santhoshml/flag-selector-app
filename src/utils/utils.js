import data from './continents.json';

export function getContinentsList(){
    let continentList=[];
    data.forEach(element => {
        continentList.push(element.continent);
    });
    return continentList;
}

export function getCountryList(continent){
    let ctryArr=[];
    let object= data.filter(element => element.continent === continent);
    if(object.length > 0){
        let objectArr= object[0].countries;
        objectArr.forEach(element => ctryArr.push(element.name));    
    }
    return ctryArr;
}

export function getCountryFlagMap(continent){
    let map = {};
    let object= data.filter(element => element.continent === continent);
    if(object.length > 0){
        object[0].countries.forEach(element => map[element.name] = element.flag);
    }
    return map;
}