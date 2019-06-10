const axios = require('axios')

const getLocationLatLnt = async(location) => {
    const encodedUri = encodeURI(location)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUri}`,
        headers: {
            "X-RapidAPI-Host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "X-RapidAPI-Key": "828dcf3ad3mshf807aff3dd3cf08p148427jsn50e58e9250ba"
        }
    })

    const response = await instance.get()
    if (response.data.Results.length === 0) {
        throw new Error(`No se encontraron datos para ${location}`)
    }
    const data = response.data.Results[0]
    const city = data.name
    const lat = data.lat
    const lnt = data.lon
    return {
        city,
        lat,
        lnt
    }

}

module.exports = {
    getLocationLatLnt
}