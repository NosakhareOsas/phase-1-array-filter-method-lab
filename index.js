// Code your solution here
const findMatching = (drivers, name) => {
    let filteredDrivers = [];
    filteredDrivers = drivers.filter(function(driver){
        return (driver === name || driver === name.toLowerCase());
    });
    return filteredDrivers;
}

const fuzzyMatch = (drivers, name) => {
    let filteredDrivers = [];
    filteredDrivers = drivers.filter(function(driver){
        return (driver[0] === name[0] && driver[1] === name[1]);
    });
    return filteredDrivers;
}

const matchName = (drivers, paramName) => {
    let filteredDrivers = [];
    filteredDrivers = drivers.filter(function(driver){
        return (driver.name === paramName);  
    });
    return filteredDrivers;
}

