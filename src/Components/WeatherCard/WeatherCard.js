import CurrentCity from './components/CurrentCity';
import Forecast from './components/Forecast';
import OtherCities from './components/OtherCities';

const CITIES = [
  {name:'Melbourne',lat: -37.8142176, lon: 144.9631608 },
  {name:'Sydney', lat: -33.8698439, lon: 151.2082848 },
  {name:'Brisbane',lat: -27.4689682, lon: 153.0234991},
  {name:'Adelaide',lat: -34.9281805, lon: 138.5999312 },
  {name:'Perth', lat: -31.9558964, lon: 115.8605301},
  {name:'Hobart', lat: -42.8825088, lon: 147.3281233 },
  {name: 'Darwin', lat: -12.46044, lon: 130.8410469 }
]
const WeatherCard = () => (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 overflow-hidden">
        <CurrentCity />
        <div className="flex gap-12 px-12 py-9 ">
          <OtherCities />
          <div className = "w-[4px] bg-black/10"></div>
          <div className ="flex-1">
            <Forecast />
          </div>
        </div>

    </div>
)
export default WeatherCard;