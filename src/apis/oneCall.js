import OpenWeatherMapAPI from "../libs/OpenWeatherMapAPI"

const MELBOURNE_GEO ={
    lat: -37.8142176,
    lon: 144.9631608,
}

const oneCall =() => OpenWeatherMapAPI
    .get("/onecall",{
        params:{
            lat: MELBOURNE_GEO.lat,
            lon: MELBOURNE_GEO.lon,
        }
    })
    .then((response)=> response.json())
      
export default oneCall;