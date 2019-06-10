const location = require('./location/location')
const argv = require('./config/yargs').argv
const weather = require('./weather/weather')

const getInfo = async(city) => {
    try {
        const coords = await location.getLocationLatLnt(city)
        const temp = await weather.getWeather(coords.lat, coords.lnt)
        return `El clima de ${coords.city} es de ${temp}`
    } catch (e) {
        return `No se encontró el clima de ${city}`
    }
}
getInfo(argv.city)
    .then(console.log)
    .catch(console.log)