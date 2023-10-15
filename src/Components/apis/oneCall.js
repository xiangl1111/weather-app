const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const MELBOURNE_GEO ={
    lat: -37.8142176,
    lon: 144.9631608,
}

const UNITS = 'metric'

const APP_ID ='2466213f21b4b723d341e00a430a7673'

const oneCall =() => fetch(`${BASE_URL}/onecall?lat=${MELBOURNE_GEO.lat}&lon=${MELBOURNE_GEO.lon}&units=${UNITS}&appid=${APP_ID}`)
    .then((response)=> response.json())
        

export default oneCall;