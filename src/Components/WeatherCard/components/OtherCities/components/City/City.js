import Name from "./components/Name";
import Temperature from "../../../../../Temperature";
import WeatherIcon from "../../../../../WeatherIcon";

const City =({
    name,
    temperature,
    weather,
    onClick,
}) => (
    <button className ="flex items-center text-left 
    border-b-[2px] border-transparent
    hover:border-b-black/5 " 
    onClick={onClick}>
        <Name>{name}</Name>
        <div className="w-[50px]">
        <Temperature className="text-xl" temperature={temperature}/>
        </div>
        <WeatherIcon code={weather.code} weather={weather.name} />
    </button>
)

export default City;