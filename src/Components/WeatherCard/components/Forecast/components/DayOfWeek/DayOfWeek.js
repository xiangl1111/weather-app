import WeatherIcon from "../../../../../WeatherIcon";
import Temperature from "../../../../../Temperature";

const DayOfWeek =({
    name,
    weather,
    temperature,
}) =>(
    <div className="text-center">
        <div>{name}</div>
        <div className="my-4">
        <WeatherIcon code={weather.code} name={weather.name}/>
        </div>
        <Temperature className="text-xl" temperature={temperature}/>
    </div>
)

export default DayOfWeek;