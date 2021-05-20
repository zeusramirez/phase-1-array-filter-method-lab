// Code your solution here
const findMatching = (driverArray, driverName) =>{
    const matchingDrivers = driverArray.filter(drivers => drivers.toLowerCase() === driverName.toLowerCase())
    return matchingDrivers
}
const fuzzyMatch = (driverArray, inString)=>{
    const matchingDrivers = driverArray.filter(drivers => drivers.slice(0, inString.length) === inString)
    return matchingDrivers
}
const matchName = (driverArray, inString)=>{
    const matchingDrivers = driverArray.filter(drivers => drivers.name.toLowerCase() === inString.toLowerCase())
    return matchingDrivers

}