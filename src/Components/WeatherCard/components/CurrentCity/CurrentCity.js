import Temperature from "../../../Temperature";
import Weather from "./components/Weather";
import Meta from "./components/Meta";
import Name from "../../../Name"
import BackgroundImage from "../../../BackgroundImage"
import bg from "./assets/bg-current-city.jpg"
import { useEffect, useState } from "react";
import oneCall from "../../../apis/oneCall"

const CurrentCity = () => {
    const [temperature,setTemperature] = useState();
    const [loading, setLoading] = useState(true);
    const [weather,setWeather] = useState();

    useEffect(()=>{
        oneCall()
        .then((data) =>{
            setTemperature(data.current.temp)
            setWeather(data.current.weather[0].main)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    return(<BackgroundImage image={bg}>
        <div className="flex justify-between py-16 px-24 gap-48 relative">
            <div>
                <Temperature className = "text-white text-7xl text-center min-w-[300px]"
                value={temperature}
                loading={loading}
                />
                <Weather 
                weather = {weather}
                loading = {loading}/>
                <Meta />
            </div>
            <Name> Melbourne </Name>
            <div className="h-[25px] bg-black/60 absolute bottom-0 inset-x-0"></div>
        </div>
    </BackgroundImage>
)
}

export default CurrentCity;