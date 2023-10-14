import BackgroundImage from './Components/BackgroundImage';
import WeatherCard from './Components/WeatherCard';
import bg from './assets/app-bg.webp'

const App = () => (
  <BackgroundImage image={bg}>
    <div className='h-screen flex justify-center items-center'>
      <WeatherCard />
    </div>
  </BackgroundImage>
)

export default App;
