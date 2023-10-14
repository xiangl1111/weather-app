import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';

const WeatherCard = () => (
    <div>
        <CurrentCity />
        <OtherCities />
        <Forecast />
    </div>
)
export default WeatherCard;