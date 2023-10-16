import SubSection from '../../../SubSection';
import DayOfWeek from './components/DayOfWeek';


const Forecast = ({
    forecast,
    loading,
}) =>(
        <SubSection title='Forecast'>
        {loading ? (
        <div>Loading</div>
        ): (
        <div className ="flex gap-4 justify-between">
        {forecast?.map(({ name, weather, temperature }) => (
           <DayOfWeek
           key={name}
           name={name}
           weather={weather}
           temperature={temperature} 
           />
        ))}
        </div>
        )}
    </SubSection>
    ) 

export default Forecast;