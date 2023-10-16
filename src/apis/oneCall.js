import OpenWeatherMapAPI from "../libs/OpenWeatherMapAPI"

const MELBOURNE_GEO ={
    lat: -37.8142176,
    lon: 144.9631608,
}

const oneCall =({
    lat,
    lon,
}) => OpenWeatherMapAPI
    .get("/onecall",{
        params:{
            lat,
            lon,
        }
    })
    .then((response)=> response.data)
      
export default oneCall;