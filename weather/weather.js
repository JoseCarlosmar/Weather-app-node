const axios = require('axios')

const getWeather = async(lat, lnt) => {
    const uri = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnt}&appid=77b3b5501c31bc7d2ab46b7a1bbf9278&units=metric`
    const weather = await axios.get(uri)
    return weather.data.main.temp
}

module.exports = {
    getWeather
}